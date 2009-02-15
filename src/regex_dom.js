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
** whose classes are defined here. They are all overloads of the root RXBuild.Dom.Node class,
** this file also includes some simple extensions the JavaScript standard string object.
*/

if (!RXBuild) var RXBuild = {};

if (!RXBuild.Dom) RXBuild.Dom = {};

RXBuild.Dom.RepeatedMatch = function (subMatch, numMin, numMax, greedy)
{
	RXBuild.Dom.Node.call(this);
	this.minMatches = numMin;
	this.maxMatches = numMax;
	this.subMatch = subMatch;
	this.isGreedy = greedy;
}
RXBuild.Dom.RepeatedMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.RepeatedMatch.prototype.constructor = RXBuild.Dom.RepeatedMatch;
RXBuild.Dom.RepeatedMatch.prototype.GetDescription = function() {
	return "[Repeat " + this.subMatch.GetChainDescription() + " between " + this.minMatches + " and " + this.maxMatches + (this.isGreedy ? " greedily": "") + "]";
};
RXBuild.Dom.RepeatedMatch.prototype.GetHtml = function() {
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
RXBuild.Dom.RepeatedMatch.prototype.RunOnMe = function(func,param) {
	var oResult = RXBuild.Dom.Node.prototype.RunOnMe.call(this,func,param);
	if (this.subMatch)
		this.subMatch = this.subMatch.RunForAll(func,param);
	return oResult;
}
RXBuild.Dom.RepeatedMatch.prototype.Flatten = function() {
	RXBuild.Dom.Node.prototype.Flatten.call(this);
	this.subMatch = this.subMatch.Flatten();
	return this;
}

RXBuild.Dom.AlternativeMatch = function ()
{
	RXBuild.Dom.Node.call(this);
	this.alternatives = new Array();
	for (var i=0; i < arguments.length; i++) {
		this.alternatives.push(arguments[i]);
	};
}
RXBuild.Dom.AlternativeMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.AlternativeMatch.prototype.constructor = RXBuild.Dom.AlternativeMatch;

RXBuild.Dom.AlternativeMatch.prototype.AddAlternative = function(alt) {
	this.alternatives.push(alt);
}
RXBuild.Dom.AlternativeMatch.prototype.Flatten = function() {
	RXBuild.Dom.Node.prototype.Flatten.call(this);
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
RXBuild.Dom.AlternativeMatch.prototype.GetDescription = function() {
	if (this.alternatives.length == 1)
		return this.alternatives[0].GetDescription();
	var sResult = "[Either ";
	for (var i=0; i < this.alternatives.length; i++) {
		if (i == 0) sResult += " or "
		sResult += this.alternatives[i].GetChainDescription();
	};
	return sResult + "]";
};
RXBuild.Dom.AlternativeMatch.prototype.RunOnMe = function(func,param) {
	var oResult = RXBuild.Dom.Node.prototype.RunOnMe.call(this,func,param);
	for (var i=0; i < this.alternatives.length; i++)
		this.alternatives[i] = this.alternatives[i].RunForAll(func,param);
	return oResult;
}
RXBuild.Dom.AlternativeMatch.prototype.GetHtml = function() {
	var sResult = "";
	for (var i=0; i < this.alternatives.length; i++) {
		sResult += "" + (i==0?"Either":"</li>" + this.GetHtmlOpenTag() + "or") + this.alternatives[i].GetChainHtml();
	};
	return sResult;
};

RXBuild.Dom.GroupMatch = function (childMatch, groupType)
{
	RXBuild.Dom.Node.call(this);
	this.subMatch = childMatch;
	this.groupIndex = 0;
	this.groupName = "";
	this.captured = groupType == "capture";
	this.groupType = groupType;
}
RXBuild.Dom.GroupMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.GroupMatch.prototype.constructor = RXBuild.Dom.GroupMatch;

RXBuild.Dom.GroupMatch.prototype.GetDescription = function() {
	return "[RXBuild.Dom.GroupMatch]";
};
RXBuild.Dom.GroupMatch.prototype.RunOnMe = function(func,param) {
	var oResult = RXBuild.Dom.Node.prototype.RunOnMe.call(this,func,param);
	if (this.subMatch)
		this.subMatch = this.subMatch.RunForAll(func,param);
	return oResult;
}

RXBuild.Dom.GroupMatch.prototype.Flatten = function() {
	if (this.subMatch)
		this.subMatch = this.subMatch.Flatten();
	return RXBuild.Dom.Node.prototype.Flatten.call(this);
}
RXBuild.Dom.GroupMatch.prototype.GetHtml = function() {
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
