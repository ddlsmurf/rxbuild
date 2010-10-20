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

/**	@fileOverview This file holds all terminal matchers in a parsed regular expression DOM
	@requires utils.js
	@requires regex_dom_node.js
*/


if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.Dom)
	/** @namespace The RXBuild.Dom namespace holds the classes that represent a parsed regular expression */
	 RXBuild.Dom = {};
/** @class The LiteralMatcher class matches the provided text literally
	@property {String} texttomatch The text to look for in the input stream
	@base RXBuild.Dom.Node
	@constructor
	@param {String} textToMatch The text to look for in the input stream
*/
RXBuild.Dom.LiteralMatcher = function (textToMatch)
{
	RXBuild.Dom.Node.call(this);
	this.texttomatch = textToMatch;	
};
RXBuild.Dom.LiteralMatcher.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.LiteralMatcher.prototype.constructor = RXBuild.Dom.LiteralMatcher;

/** Helper method allowing the DOM to transform itself by concatenating all consecutive literal matchers
	@private
	@return {RXBuild.Dom.Node} A reference to the node that should replace this instance
*/
RXBuild.Dom.LiteralMatcher.prototype.Flatten = function() {
	while (this.next && (this.next instanceof RXBuild.Dom.LiteralMatcher))
	{
		this.texttomatch += this.next.texttomatch;
		this.AddTokens(this.next.tokens);
		this.next = this.next.next;
	}
	return RXBuild.Dom.Node.prototype.Flatten.call(this);
};

/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.LiteralMatcher.prototype.GetDescription = function()
{
	return "[LitMatch '" + this.texttomatch + "']";
};

/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.LiteralMatcher.prototype.GetHtml = function() {
	return "Matches <code>" + this.texttomatch.escapeToBackslashes().escapeHTML() + "</code>";
};

/** @class The PositionalMatch class matches the specific positions (such as $, ^, \b and \B)
@property {String} posChar The character representing the position to match
@property {Boolean} multiline If set, the regexp was compiled in multiline
@base RXBuild.Dom.Node
@constructor
@param {String} positionalChar The character representing the position to match
@param {Boolean} multiline Whether the regexp was compiled in multiline
*/
RXBuild.Dom.PositionalMatch = function (positionalChar, multiline)
{
	RXBuild.Dom.Node.call(this);
	this.posChar = positionalChar;
	if (multiline) this.multiline = multiline;
};
RXBuild.Dom.PositionalMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.PositionalMatch.prototype.constructor = RXBuild.Dom.PositionalMatch;

/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.PositionalMatch.prototype.GetDescription = function() {
	return "[Positional " + this.posChar + "]";
};

/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.PositionalMatch.prototype.GetHtml = function() {
	if (this.posChar == "^")
		return "At the beginning of the string" + (this.multiline ? " (or line)" : "");
	if (this.posChar == "$")
		return "At the end of the string" + (this.multiline ? " (or line)" : "");
	if (this.posChar == "\\b")
		return "At a word boundary";
	if (this.posChar == "\\B")
		return "Not at a word boundary";
	RXBuild.Dom.Node.prototype.GetHtml.call(this);
};

/** @class The CharacterRangeMatch class matches a range of characters (eg: [a-z])
@property {Boolean} reversed If set, the range match is negated
@property {Array} ranges An array of objects representing acceptable ranges
@base RXBuild.Dom.Node
@constructor
@param {Boolean} reversed If set, the range is negated
*/
RXBuild.Dom.CharacterRangeMatch = function (reversed)
{
	RXBuild.Dom.Node.call(this);
	this.ranges = new Array();
	this.pending = new Array();
	this.reversed = reversed;
	this.include = "";
	this.exclude = "";
	this.asString = "";
};
RXBuild.Dom.CharacterRangeMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.CharacterRangeMatch.prototype.constructor = RXBuild.Dom.CharacterRangeMatch;
RXBuild.Dom.CharacterRangeMatch.prototype.AddChar = function(text) {
	if (this.reversed)
		this.exclude += text;
	else
		this.include += text;
	this.asString +=
	(this.reversed ? 
		(this.asString != "" ? ", (but not " : "Anything (except ") : 
		(this.asString != "" ? ", or " : "")) +
	"<code>" + text.escapeHTML().escapeToBackslashes() + "</code>" + 
	(this.reversed ? ")" : "");
};
RXBuild.Dom.CharacterRangeMatch.prototype.AddChars = function(chars) {
	if (chars != null && chars instanceof RXBuild.Dom.LiteralMatcher)
	{
		this.AddTokens(chars.tokens);
		chars = chars.texttomatch;
	}
  if (this.pending.length == 0 && chars == "^" && (this.tokens == null || this.tokens.length == 0)) {
    this.reversed = true;
    return;
  }
	if (this.pending.length == 0 && chars == "-")
	{
		this.AddChar(chars);
		return;
	}
	if (this.pending.length == 1 && chars != "-")
			this.AddChar(this.pending.pop());
	if (this.pending.length == 2 && chars != null)
	{
		this.AddRange(this.pending[0], chars, false);
		this.pending = new Array();
		chars = null;
	}	
	while (this.pending.length > 0 && chars == null)
		this.AddChar(this.pending.pop());
	if (chars != null)
		this.pending.push(chars);
};
RXBuild.Dom.CharacterRangeMatch.prototype.AddClass = function(chars) {
	if (!chars || chars.length == 0) throw "Invalid char class \'" + chars + "\'";
	var bReversed = chars.charAt(0) == "^";
	if (bReversed) chars = chars.substr(1);
	var oPending = this.pending;
	this.pending = [];
	if (bReversed) this.reversed = !this.reversed;

	for (var i=0; i < chars.length; i++) {
		this.AddChars(chars.charAt(i));
	};
	this.AddChars(null);
	
	if (bReversed) this.reversed = !this.reversed;
	this.pending = oPending;
};
RXBuild.Dom.CharacterRangeMatch.prototype.AddRange = function(start_range, stop_range, reverseRange) {
	if (start_range instanceof RXBuild.Dom.LiteralMatcher)
		start_range = start_range.texttomatch;
	if (stop_range instanceof RXBuild.Dom.LiteralMatcher)
		stop_range = stop_range.texttomatch;
	if (this.reversed) reverseRange = !reverseRange;
	this.ranges.push({
		exclude: reverseRange,
		from: start_range,
		to: stop_range
	});
	this.asString += 
		 (reverseRange ?
			(this.asString != "" ? ", (but not " : "Anything (except from ") :
			(this.asString != "" ? ", or from " : "Anything from ")) + 
		"<code>" + start_range.escapeHTML().escapeToBackslashes() + "</code>" +
		" to " +
		"<code>" + stop_range.escapeHTML().escapeToBackslashes() + "</code>" + (reverseRange ? ")" : "");
};

/** Helper method allowing the DOM to transform itself. Used to flush pending characters.
	@private
	@return {RXBuild.Dom.Node} A reference to the node that should replace this instance
*/
RXBuild.Dom.CharacterRangeMatch.prototype.Flatten = function() {
	if (this.pending != null)
	{
		this.AddChars(null);
		this.pending = null;
	}
	return RXBuild.Dom.Node.prototype.Flatten.call(this);
};

/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.CharacterRangeMatch.prototype.GetDescription = function() {
	if (this.asString == "")
		if (this.reversed)
			return "[Match any single character]";
		else
			return "[Never match anything]";
	return "[RXBuild.Dom.CharacterRangeMatch " + this.asString + (this.reversed ? "(reversed)" : "") + "]";
};

/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.CharacterRangeMatch.prototype.GetHtml = function() {
	if (this.asString == "")
		if (this.reversed)
			return "Match any single character";
		else
			return "Never match anything (empty character range)";
	return this.asString;
};

/** @class The BackTrackOrEscapeTempMatch class matches previously referenced group
@property {Number} number The index of the group to match
@base RXBuild.Dom.Node
@constructor
@param {Number} number The index of the group to match
*/
RXBuild.Dom.BackTrackOrEscapeTempMatch = function (number)
{
	RXBuild.Dom.Node.call(this);
	this.number = number;
};
RXBuild.Dom.BackTrackOrEscapeTempMatch.prototype = new RXBuild.Dom.Node;
RXBuild.Dom.BackTrackOrEscapeTempMatch.prototype.constructor = RXBuild.Dom.BackTrackOrEscapeTempMatch;

/** Returns a human readable description of this match
	@return {String} The description of this node in human readable format.
*/
RXBuild.Dom.BackTrackOrEscapeTempMatch.prototype.GetDescription = function() {
	return "[RXBuild.Dom.BackTrackOrEscapeTempMatch " + this.number + "]";
};

/** Returns an HTML description of this match
	@return {String} An HTML description of this match
*/
RXBuild.Dom.BackTrackOrEscapeTempMatch.prototype.GetHtml = function() {
		return "Matches group " + this.number;
};