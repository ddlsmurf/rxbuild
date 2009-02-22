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

/**	@fileOverview This file defines the base class used when parsing the regexp into a tree
	@requires utils.js
*/


if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.Dom)
	/** @namespace The RXBuild.Dom namespace holds the classes that represent a parsed regular expression */
	 RXBuild.Dom = {};

/** @class Abstract base class for all matching nodes in the regexps DOM tree
	@property {RXBuild.Dom.Node} next The node to match following the current instance
	@property {Number} id A unique (in the regexp) numeric ID for this item
	@property {regex_parser.TokenInfo[]} tokens An array of tokens from the input stream that created this instance
*/
RXBuild.Dom.Node = function ()
{
	this.next = null;
	this.src = null;
	this.id = null;
	this.tokens = new Array();
};

/** @private
Executes this match	
*/
RXBuild.Dom.Node.prototype.Match = function() {return false;};

/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.Node.prototype.GetDescription = function() {return "-RXBuild.Dom.Node-";};
/** Adds all tokens passed in all arguments to the tokens property of this instance
	@param {regex_parser.TokenInfo} ... Tokens to include in this instance
*/
RXBuild.Dom.Node.prototype.AddTokens = function() {
	for (var i = 0; i < arguments.length; i++)
		{
			var obj = arguments[i];
			if (obj instanceof Array)
				for (var j=0; j < obj.length; j++)
					this.AddTokens(obj[j]);
			else
				this.tokens.push(obj);
		}
};

/** Returns a human readable description of this match and its following matches
	@return {String} The description of this node and the following in human readable format.
*/
RXBuild.Dom.Node.prototype.GetChainDescription = function() {
	var sResult = "";
	var oItem = this;
	while (oItem != null)
	{
		if (sResult != "") sResult += ", ";
		sResult += oItem.GetDescription();
		oItem = oItem.next;
	}
	return sResult;
};
/** Finds and returns the last item in the chain starting from the current instance
	@return {RXBuild.Dom.Node} The last node in this nodes siblings
*/
RXBuild.Dom.Node.prototype.GetLast = function() {
	var oItem = this;
	while (oItem.next != null)
		oItem = oItem.next;
	return oItem;
};
/** Helper method allowing the DOM to transform itself
	@private
	@return {RXBuild.Dom.Node} A reference to the node that should replace this instance
*/
RXBuild.Dom.Node.prototype.Flatten = function() {
	if (this.next) this.next = this.next.Flatten();
	return this;
};
/** Adds the provided RXBuild.Dom.Node to the end of this items sibling chain
	@param {RXBuild.Dom.Node} newLast The node to append.
*/
RXBuild.Dom.Node.prototype.AppendAtEnd = function(newLast) {
	var oItem = this.GetLast();
	oItem.next = newLast;
};
/** Copies base information from the provided node into the current instance
	@private
*/
RXBuild.Dom.Node.prototype.CopyFrom = function(prevNode) {
	this.next = prevNode.next; 
	this.id = prevNode.id;
	this.tokens = prevNode.tokens;
};

/** Returns an HTML description of this match (Must be overriden - this returns a fat error)
	@return {String} An HTML description of this match
*/
RXBuild.Dom.Node.prototype.GetHtml = function() {
	return "<h1>Error - RXBuild.Dom.Node.GetHtml sifted through on " + RXBuild.Utils.getObjectDesc(this) + "</h1>";
};

/** Used to display this nodes HTML in an interactive way to the user - to be rewritten */
RXBuild.Dom.Node.prototype.GetTokenHighlightJS = function() {
	var sResult = "";
	for (var i = 0; i < this.tokens.length; i++)
		sResult += (i>0 ? ",[" : "[") + this.tokens[i].offset + "," + this.tokens[i].value.length + "]";
	return sResult;
};
/** Used to display this nodes HTML in an interactive way to the user - to be rewritten */
RXBuild.Dom.Node.NodeRegExTokenHighlight = function(tokenlist) {
	function IsCharInTokenList(c, tokenlist) {
		if (tokenlist == null) return true;
		for (var i=0; i < tokenlist.length; i++) {
			if (c >= tokenlist[i][0] && c < (tokenlist[i][0] + tokenlist[i][1]))
				return true;
		}
		return false;
	}
	var i = 0;
	var oObj;
	while ((oObj = document.getElementById("rxchr_" + i++)) != null) {
		oObj.style.color = IsCharInTokenList(i - 1, tokenlist) ? "black" : "grey";
	}
	window.event.stopPropagation();
};
/** Used to display this nodes HTML in an interactive way to the user - to be rewritten */
RXBuild.Dom.Node.prototype.GetHtmlOpenTag = function() {
	return "<li onmouseover=\"RXBuild.Dom.Node.NodeRegExTokenHighlight([" + this.GetTokenHighlightJS() + "]);\" onmouseout=\"RXBuild.Dom.Node.NodeRegExTokenHighlight(null);\">" + (this.id != null ? "<span class=\"rx_id\">" + this.id + ")</span> " : "");
};
/** Used to display this nodes HTML in an interactive way to the user - to be rewritten */
RXBuild.Dom.Node.prototype.GetChainHtml = function() {
	var sResult = "<ul>";
	var oItem = this;
	while (oItem != null)
	{
		sResult += oItem.GetHtmlOpenTag() + oItem.GetHtml() + "</li>";
		oItem = oItem.next;
	}
	return sResult + "</ul>";
};
/** Visits this node with the provided visitor
	@param {Function} func The function to call with each node as first parameter
	@param {object} param The second parameter to func
	@return {object} Whatever func last returned
*/
RXBuild.Dom.Node.prototype.RunOnMe = function(func,param) {
	return func.call(this,param);
};
/** Calls RunOnMe on each node in this instances chain
@param {Function} func The function to call with each node as first parameter
@param {object} param The second parameter to func
@return {object} Whatever func returned for this instance
*/
RXBuild.Dom.Node.prototype.RunForAll = function(func,param) {
	var oResult = this.RunOnMe(func,param);
	if (this.next != null)
		this.next = this.next.RunForAll(func,param);
	return oResult;
};

/** Makes the visitor explore the current instance and all followers
	@param {RXBuild.DOM.NodeVisitor} visitor The visitor object
	@return {Boolean} False, if the visit was cancelled by the visitor
*/
RXBuild.Dom.Node.prototype.StartVisit = function(visitor) {
	var oCurrentNode = this;
	while (oCurrentNode) {
		if (!oCurrentNode.Accept(visitor))
			return false;
		oCurrentNode = oCurrentNode.next;
	}
	return true;
};
/** Makes the visitor explore the current instance
	@param {RXBuild.DOM.NodeVisitor} visitor The visitor object
	@return {Boolean} The return value of the visitor
*/
RXBuild.Dom.Node.prototype.Accept = function(visitor) {
	return visitor.visit(this);
};

/** 
	Creates a new instance of RXBuild.Dom.NodeVisitor
	@class The RXBuild.Dom.NodeVisitor is an abstrcact class that implements the hierarchical visitor pattern in a way suitable for building trees
	@constructor
*/
RXBuild.Dom.NodeVisitor = function (params) {
};
RXBuild.Dom.NodeVisitor.prototype.constructor = RXBuild.Dom.NodeVisitor;
/** Called when visiting a leaf node
	@param {RXBuild.Dom.Node} leafNode The node being visited
	@return {Boolean} Return true to continue visit
*/
RXBuild.Dom.NodeVisitor.prototype.visit = function(leafNode) { return true; };
/** Called when visiting a parent node
	@param {RXBuild.Dom.Node} compositeNode The node being visited
	@return {Boolean} Return true to visit children on this node
*/
RXBuild.Dom.NodeVisitor.prototype.visitEnter = function(compositeNode) { return true; };
/** Called when finished visiting a parent node
	@param {RXBuild.Dom.Node} compositeNode The node that completed visit
	@return {Boolean} Return true to continue the visit after the compositeNode
*/
RXBuild.Dom.NodeVisitor.prototype.visitLeave = function(compositeNode) { return true; };
