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

/**	@fileOverview This file holds all non-terminal matchers in a parsed regular expression DOM
	@requires utils.js
	@requires regex_dom_node.js
*/

if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.Dom)
	/** @namespace The RXBuild.Dom namespace holds the classes that represent a parsed regular expression */
	 RXBuild.Dom = {};

/** @class Represents a repeated match in a regular expression, such as with the operators *, ?, + and {}
	@base RXBuild.Dom.Node
	@property {RXBuild.Dom.Node} subMatch The inner match to repeat
	@property {Number} minMatches The minimum number of times the match should run
	@property {Number} maxMatches The maximum number of acceptable matches (or -1 for no upper limit)
	@property {Boolean} isGreedy Whether the match is greedy
	@constructor
	@param {RXBuild.Dom.Node} subMatch The inner match to repeat
	@param {Number} numMin The minimum number of times the match should run
	@param {Number} numMax The maximum number of acceptable matches (or -1 for no upper limit)
	@param {Boolean} greedy Whether the match is greedy
*/
RXBuild.Dom.RepeatedMatch = function (subMatch, numMin, numMax, greedy)
{
	RXBuild.Dom.Node.call(this);
	this.minMatches = numMin;
	this.maxMatches = numMax;
	this.subMatch = subMatch;
	this.isGreedy = greedy;
};
RXBuild.Dom.RepeatedMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.RepeatedMatch.prototype.constructor = RXBuild.Dom.RepeatedMatch;
/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.RepeatedMatch.prototype.GetDescription = function() {
	return "[Repeat " + this.subMatch.GetChainDescription() + " between " + this.minMatches + " and " + this.maxMatches + (this.isGreedy ? " greedily": "") + "]";
};
/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.RepeatedMatch.prototype.GetHtml = function(excludeChildren) {
	var sSubMatches = (this.isGreedy ? ": (greedy)" : ": (non greedy)") + (!excludeChildren ? "<br>" + this.subMatch.GetChainHtml() : "");
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

/** Visits this node and its subMatch with the provided visitor
	@param {Function} func The function to call with each node as first parameter
	@param {object} param The second parameter to func
	@return {object} Whatever func when called on the current instance
*/
RXBuild.Dom.RepeatedMatch.prototype.RunOnMe = function(func,param) {
	var oResult = RXBuild.Dom.Node.prototype.RunOnMe.call(this,func,param);
	if (this.subMatch)
		this.subMatch = this.subMatch.RunForAll(func,param);
	return oResult;
};

/** Helper method allowing the DOM to transform itself
	@private
	@return {RXBuild.Dom.Node} A reference to the node that should replace this instance
*/
RXBuild.Dom.RepeatedMatch.prototype.Flatten = function() {
	RXBuild.Dom.Node.prototype.Flatten.call(this);
	this.subMatch = this.subMatch.Flatten();
	return this;
};
/** Recursively visits this node
	@param {RXBuild.Dom.NodeVisitor} visitor The visitor currently exploring the DOM
	@return {Boolean} The last result of the visitors calls.
*/
RXBuild.Dom.RepeatedMatch.prototype.Accept = function(visitor) {
	if (visitor.visitEnter(this)) {
		this.subMatch.StartVisit(visitor);
	}
	return visitor.visitLeave(this);
};

/** @class The AlternativeMatch class matches exactly one of its children
@property {RXBuild.Dom.Node[]} alternatives The list of acceptable matches
@base RXBuild.Dom.Node
@constructor
*/
RXBuild.Dom.AlternativeMatch = function ()
{
	RXBuild.Dom.Node.call(this);
	this.alternatives = new Array();
	for (var i=0; i < arguments.length; i++) {
		this.alternatives.push(arguments[i]);
	};
};
RXBuild.Dom.AlternativeMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.AlternativeMatch.prototype.constructor = RXBuild.Dom.AlternativeMatch;
/** Adds an alternative match to the collection of acceptable matches
	@param {RXBuild.Dom.Node} alt The acceptable match to add
*/
RXBuild.Dom.AlternativeMatch.prototype.AddAlternative = function(alt) {
	this.alternatives.push(alt);
};

/** Helper method allowing the DOM to transform itself. If this contains only a single alternative it is replaced by that.
	@private
	@return {RXBuild.Dom.Node} A reference to the node that should replace this instance
*/
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
};
/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.AlternativeMatch.prototype.GetDescription = function() {
	if (this.alternatives.length == 1)
		return this.alternatives[0].GetDescription();
	var sResult = "[Either ";
	for (var i=0; i < this.alternatives.length; i++) {
		if (i == 0) sResult += " or ";
		sResult += this.alternatives[i].GetChainDescription();
	};
	return sResult + "]";
};

/** Visits this node and its alternatives with the provided visitor
	@param {Function} func The function to call with each node as first parameter
	@param {object} param The second parameter to func
	@return {object} Whatever func when called on the current instance
*/
RXBuild.Dom.AlternativeMatch.prototype.RunOnMe = function(func,param) {
	var oResult = RXBuild.Dom.Node.prototype.RunOnMe.call(this,func,param);
	for (var i=0; i < this.alternatives.length; i++)
		this.alternatives[i] = this.alternatives[i].RunForAll(func,param);
	return oResult;
};

/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.AlternativeMatch.prototype.GetHtml = function(excludeChildren) {
	if (excludeChildren) return "One of these";
	var sResult = "";
	for (var i=0; i < this.alternatives.length; i++) {
		sResult += "" + (i==0?"Either":"</li>" + this.GetHtmlOpenTag() + "or") + this.alternatives[i].GetChainHtml();
	};
	return sResult;
};

/** Recursively visits this node
	@param {RXBuild.Dom.NodeVisitor} visitor The visitor currently exploring the DOM
	@return {Boolean} The last result of the visitors calls.
*/
RXBuild.Dom.AlternativeMatch.prototype.Accept = function(visitor) {
	if (visitor.visitEnter(this)) {
		for (var i=0; i < this.alternatives.length; i++) {
			this.alternatives[i].StartVisit(visitor);
		}
	}
	return visitor.visitLeave(this);
};

/** @class The GroupMatch class matches a child match and stores the match
@property {RXBuild.Dom.Node} subMatch The actual match required by this group
@property {String} groupType The type of group this represents. Possible values are:<br />
	&quot;capture&quot; - Normal captured group<br />
	&quot;named&quot; - Named captured group<br />
	&quot;no_capture&quot; - Non captured group<br />
	&quot;pos_la&quot; - Positive lookahead group<br />
	&quot;neg_la&quot; - Negative lookahead group<br />
@property {Number} groupIndex The index of the group in the regular expression
@property {String} groupName The name of the group if it is a named capture
@base RXBuild.Dom.Node
@constructor
@param {RXBuild.Dom.Node} childMatch The actual match required by this group
@param {String} groupType The type of group this represents.
*/
RXBuild.Dom.GroupMatch = function (childMatch, groupType, name)
{
	RXBuild.Dom.Node.call(this);
	this.subMatch = childMatch;
	this.groupIndex = 0;
	this.groupName = name || "";
	this.captured = groupType == "capture" || groupType == "named";
	this.groupType = groupType;
};
RXBuild.Dom.GroupMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.GroupMatch.prototype.constructor = RXBuild.Dom.GroupMatch;

/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.GroupMatch.prototype.GetDescription = function() {
	return "[RXBuild.Dom.GroupMatch]";
};

/** Visits this node and its children with the provided visitor
	@param {Function} func The function to call with each node as first parameter
	@param {object} param The second parameter to func
	@return {object} Whatever func when called on the current instance
*/
RXBuild.Dom.GroupMatch.prototype.RunOnMe = function(func,param) {
	var oResult = RXBuild.Dom.Node.prototype.RunOnMe.call(this,func,param);
	if (this.subMatch)
		this.subMatch = this.subMatch.RunForAll(func,param);
	return oResult;
};

/** Helper method allowing the DOM to transform itself
	@private
	@return {RXBuild.Dom.Node} A reference to the node that should replace this instance
*/
RXBuild.Dom.GroupMatch.prototype.Flatten = function() {
	if (this.subMatch)
		this.subMatch = this.subMatch.Flatten();
	return RXBuild.Dom.Node.prototype.Flatten.call(this);
};

/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.GroupMatch.prototype.GetHtml = function(excludeChildren) {
	var sSubMatches = excludeChildren ? "" : (":<br>" + this.subMatch.GetChainHtml());
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

/** Recursively visits this node
	@param {RXBuild.Dom.NodeVisitor} visitor The visitor currently exploring the DOM
	@return {Boolean} The last result of the visitors calls.
*/
RXBuild.Dom.GroupMatch.prototype.Accept = function(visitor) {
	if (visitor.visitEnter(this)) {
		this.subMatch.StartVisit(visitor);
	}
	return visitor.visitLeave(this);
};