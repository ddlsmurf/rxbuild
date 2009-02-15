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

LiteralMatcher.prototype = new Node;
LiteralMatcher.prototype.constructor = LiteralMatcher;
function LiteralMatcher(textToMatch)
{
	Node.call(this);
	this.texttomatch = textToMatch;	
}
LiteralMatcher.prototype.Flatten = function() {
	while (this.next && (this.next instanceof LiteralMatcher))
	{
		this.texttomatch += this.next.texttomatch;
		this.AddTokens(this.next.tokens);
		this.next = this.next.next;
	}
	return Node.prototype.Flatten.call(this);
}
LiteralMatcher.prototype.GetDescription = function()
{
	return "[LitMatch '" + this.texttomatch + "']";
}
LiteralMatcher.prototype.GetHtml = function() {
	return "Matches <code>" + this.texttomatch.escapeToBackslashes().escapeHTML() + "</code>";
};

PositionalMatch.prototype = new Node;
PositionalMatch.prototype.constructor = PositionalMatch;
function PositionalMatch(positionalChar, multiline)
{
	Node.call(this);
	this.posChar = positionalChar;
	if (multiline) this.multiline = multiline;
}
PositionalMatch.prototype.GetDescription = function() {
	return "[Positional " + this.posChar + "]";
};
PositionalMatch.prototype.GetHtml = function() {
	if (this.posChar == "^")
		return "At the beginning of the string" + (this.multiline ? " (or line)" : "");
	if (this.posChar == "$")
		return "At the end of the string" + (this.multiline ? " (or line)" : "");
	if (this.posChar == "\b")
		return "At a word boundary";
	if (this.posChar == "\\B")
		return "Not at a word boundary";
	Node.prototype.GetHtml.call(this);
};

CharacterRangeMatch.prototype = new Node;
CharacterRangeMatch.prototype.constructor = CharacterRangeMatch;
function CharacterRangeMatch(reversed)
{
	Node.call(this);
	this.ranges = new Array();
	this.pending = new Array();
	this.reversed = reversed;
	this.include = "";
	this.exclude = "";
	this.asString = "";
}
CharacterRangeMatch.prototype.AddChar = function(text) {
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
}
CharacterRangeMatch.prototype.AddChars = function(chars) {
	if (chars != null && chars instanceof LiteralMatcher)
	{
		this.AddTokens(chars.tokens);
		chars = chars.texttomatch;
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
}
CharacterRangeMatch.prototype.AddClass = function(chars) {
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
}
CharacterRangeMatch.prototype.AddRange = function(start_range, stop_range, reverseRange) {
	if (start_range instanceof LiteralMatcher)
		start_range = start_range.texttomatch;
	if (stop_range instanceof LiteralMatcher)
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
}
CharacterRangeMatch.prototype.Flatten = function() {
	if (this.pending != null)
	{
		this.AddChars(null);
		this.pending = null;
	}
	return Node.prototype.Flatten.call(this);
}

CharacterRangeMatch.prototype.GetDescription = function() {
	if (this.asString == "")
		if (this.reversed)
			return "[Match any single character]";
		else
			return "[Never match anything]";
	return "[CharacterRangeMatch " + this.asString + (this.reversed ? "(reversed)" : "") + "]";
};
CharacterRangeMatch.prototype.GetHtml = function() {
	if (this.asString == "")
		if (this.reversed)
			return "Match any single character";
		else
			return "Never match anything (empty character range)";
	return this.asString;
};

BackTrackOrEscapeTempMatch.prototype = new Node;
BackTrackOrEscapeTempMatch.prototype.constructor = BackTrackOrEscapeTempMatch;
function BackTrackOrEscapeTempMatch(number)
{
	Node.call(this);
	this.number = number;
}
BackTrackOrEscapeTempMatch.prototype.GetDescription = function() {
	return "[BackTrackOrEscapeTempMatch " + this.number + "]";
};
BackTrackOrEscapeTempMatch.prototype.GetHtml = function() {
		return "Matches group " + this.number;
};