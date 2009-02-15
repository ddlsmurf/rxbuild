/* (c) Copyright 2009 Eric Doughty-Papassideris. All Rights Reserved.

	This file is part of RXBuild.

    RXBuild is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    RXBuild is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with RXBuild.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
** This code supports the JS/CC grammar (jscc_regex.par) for regexps to build a DOM
** whose classes are defined here. They are all overloads of the root Node class,
** this file also includes some simple extensions the JavaScript standard string object.
*/

if (!RX) var RX = {};
if (!RX.Utils) RX.Utils = {};
RX.Utils.buildRegexpFromTokens = function (tokens, noncapturing) {
	var root = [];
	function addNode(parent, str) { //Very dumb implementation of a suffix tree (but its home made =)
		for (var i = 0; i < parent.length; i++) {
			var iCommon = str.findCommonPrefix(parent[i].s);
			if (iCommon == str.length) {
				// Found my terminal node
				parent[i].terminal = true;
				return ;
			} else if (iCommon > 0) {
				if (iCommon == parent[i].s.length) {
					// Found a node I should be under
					if (!parent[i].children)
						parent[i].children = [];
					addNode(parent[i].children, str.substr(iCommon));
					return;
				} else {
					// Found a node I must split and get under
					var sCommonPart = str.substr(0, iCommon);
					var oNodeToSplit = parent[i];
					var oNewChildFromPrevious = {
						s: oNodeToSplit.s.substr(iCommon)
						};
					if (oNodeToSplit.terminal) oNewChildFromPrevious.terminal = true;
					if (oNodeToSplit.children) oNewChildFromPrevious.children = oNodeToSplit.children;
					var sSuffix = str.substr(iCommon);
					var oNewChild = {
						s: sCommonPart,
						children: [oNewChildFromPrevious]
						};
					parent[i] = oNewChild;
					if (sSuffix.length == 0)
						oNewChild.terminal = true;
					else
						addNode(oNewChild.children, sSuffix)
					return;
				}
			}
		}
		// Couldnt find a place for myself, so made myself cosy
		parent.push({s: str, terminal: true});
	}
	function buildRegExp(parent, res, noncapturing) {
		for (var i=0; i < parent.length; i++) {
			if (i > 0) res.push("|");
			if (parent[i].children) {
				res.push(parent[i].s.escapeRegexp());
				res.push(noncapturing ? "(?:" : "(");
				buildRegExp(parent[i].children, res, noncapturing);
				res.push(")");
			} else {
				if (!parent[i].terminal) alert("Node is not terminal and has no children: '" + parent[i].s + "'");
				res.push(parent[i].s.escapeRegexp());
			}
			if (parent[i].children && parent[i].terminal) {
				res.push("?");
			}
		};
		
	}
	tokens = tokens.sort();
	for (var i = tokens.length - 1; i >= 0; i--){
		if (tokens[i].trim() == "")
			tokens.pop();
		else
			tokens[i] = tokens[i].trim();
	};
	for (var j=0; j < tokens.length; j++)
		addNode(root, tokens[j]);
	var oRes = [];
	buildRegExp(root, oRes, noncapturing);
	return oRes.join("");
}

RepeatedMatch.prototype = new Node;
RepeatedMatch.prototype.constructor = RepeatedMatch;
function RepeatedMatch(subMatch, numMin, numMax, greedy)
{
	Node.call(this);
	this.minMatches = numMin;
	this.maxMatches = numMax;
	this.subMatch = subMatch;
	this.isGreedy = greedy;
}
RepeatedMatch.prototype.GetDescription = function() {
	return "[Repeat " + this.subMatch.GetChainDescription() + " between " + this.minMatches + " and " + this.maxMatches + (this.isGreedy ? " greedily": "") + "]";
};
RepeatedMatch.prototype.GetHtml = function() {
	var sSubMatches = (this.isGreedy ? ": (greedy)" : ": (non greedy)") + "<br>" + this.subMatch.GetChainHtml();
	if (this.minMatches == 0 && this.maxMatches == 1)
		return "At most once" + sSubMatches;
	if (this.minMatches == 1 && this.maxMatches == -1)
		return "At least once" + sSubMatches;
	if (this.minMatches == 0 && this.maxMatches == -1)
		return "Any number of times" + sSubMatches;
	if (this.minMatches == this.maxMatches)
		return "Exactly " + this.minMatches + " times" + sSubMatches;
	if (this.maxMatches == -1)
		return "At least " + this.minMatches + " times" + sSubMatches;
	if (this.maxMatches == this.minMatches + 1)
		return "" + this.minMatches + " or " + this.maxMatches + " times" + sSubMatches;
	return "Between " + this.minMatches + " and " + this.maxMatches + " times" + sSubMatches;
};
RepeatedMatch.prototype.RunOnMe = function(func,param) {
	var oResult = Node.prototype.RunOnMe.call(this,func,param);
	if (this.subMatch)
		this.subMatch = this.subMatch.RunForAll(func,param);
	return oResult;
}
RepeatedMatch.prototype.Flatten = function() {
	Node.prototype.Flatten.call(this);
	this.subMatch = this.subMatch.Flatten();
	return this;
}

AlternativeMatch.prototype = new Node;
AlternativeMatch.prototype.constructor = AlternativeMatch;
function AlternativeMatch()
{
	Node.call(this);
	this.alternatives = new Array();
	for (var i=0; i < arguments.length; i++) {
		this.alternatives.push(arguments[i]);
	};
}
AlternativeMatch.prototype.AddAlternative = function(alt) {
	this.alternatives.push(alt);
}
AlternativeMatch.prototype.Flatten = function() {
	Node.prototype.Flatten.call(this);
	for (var i=0; i < this.alternatives.length; i++) {
		this.alternatives[i] = this.alternatives[i].Flatten();
	};
	if (this.alternatives.length == 1)
	{
		var oChild = this.alternatives[0];
		var oLastChild = oChild.GetLast();
		oLastChild.next = this.next;
		return oChild;
	}
	return this;
}
AlternativeMatch.prototype.GetDescription = function() {
	if (this.alternatives.length == 1)
		return this.alternatives[0].GetDescription();
	var sResult = "[Either ";
	for (var i=0; i < this.alternatives.length; i++) {
		if (i == 0) sResult += " or "
		sResult += this.alternatives[i].GetChainDescription();
	};
	return sResult + "]";
};
AlternativeMatch.prototype.RunOnMe = function(func,param) {
	var oResult = Node.prototype.RunOnMe.call(this,func,param);
	for (var i=0; i < this.alternatives.length; i++)
		this.alternatives[i] = this.alternatives[i].RunForAll(func,param);
	return oResult;
}
AlternativeMatch.prototype.GetHtml = function() {
	var sResult = "";
	for (var i=0; i < this.alternatives.length; i++) {
		sResult += "" + (i==0?"Either":"</li>" + this.GetHtmlOpenTag() + "or") + this.alternatives[i].GetChainHtml();
	};
	return sResult;
};

GroupMatch.prototype = new Node;
GroupMatch.prototype.constructor = GroupMatch;
function GroupMatch(childMatch, groupType)
{
	Node.call(this);
	this.subMatch = childMatch;
	this.groupIndex = 0;
	this.groupName = "";
	this.captured = groupType == "capture";
	this.groupType = groupType;
}
GroupMatch.prototype.GetDescription = function() {
	return "[GroupMatch]";
};
GroupMatch.prototype.RunOnMe = function(func,param) {
	var oResult = Node.prototype.RunOnMe.call(this,func,param);
	if (this.subMatch)
		this.subMatch = this.subMatch.RunForAll(func,param);
	return oResult;
}

GroupMatch.prototype.Flatten = function() {
	if (this.subMatch)
		this.subMatch = this.subMatch.Flatten();
	return Node.prototype.Flatten.call(this);
}
GroupMatch.prototype.GetHtml = function() {
	var sSubMatches = ":<br>" + this.subMatch.GetChainHtml();
	if (!this.captured) {
		if (this.groupType == "no_capture")
			return "Non captured group" + sSubMatches;
		else if (this.groupType == "pos_la")
			return "Positive lookahead" + sSubMatches;
		else if (this.groupType == "neg_la")
			return "Negative lookahead" + sSubMatches;
	}
	if (this.groupName != "")
		return "Capture group named \'<span class=\"code\">" + this.groupName.escapeHTML() + "</span>\' (number " + this.groupIndex + ")" + sSubMatches;
	return "Capture group number " + this.groupIndex + sSubMatches;
};
