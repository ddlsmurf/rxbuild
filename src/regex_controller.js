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

/**	@fileOverview This file holds a class that encapsulates a regular expression in kinda universal format
	@requires utils.js
	@requires regex_parser.js
*/

if (!UI)
	/**
		@namespace UI
	*/
	var UI = { };

(function() {

	/** 
		Creates a new instance of UI.RX
		@class The UI.RX class holds a regular expression as input by the user, and connects with the various operations
		@property {String} pattern Gets the regular expression as input by the user
		@property {Options} options Gets the options selected by the user. This object has the properties <strong>g</strong>, <strong>m</strong> and
		 							<strong>i</strong> set to true if the corresponding option is active. There is also a <strong>str</strong> property
									with the options as a string (eg.: &quot;gi&quot;).
		@constructor
		@param {String} pattern The regular expression as set by the user
		@param {Boolean} g True if the pattern is global
		@param {Boolean} i True if the pattern is case insensitive
		@param {Boolean} m True if the pattern is in multiline mode
	*/
	UI.RX = function (pattern, g, i, m) {
		this.pattern = pattern;
		this.options = {};
		if (g) this.options.g = true;
		if (m) this.options.m = true;
		if (i) this.options.i = true;
		this.options.str = (i ? "i" : "") + (g ? "g" : "") + (m ? "m" : "");
	};
	UI.RX.prototype.constructor = UI.RX;
	UI.RX.prototype.CodeBuilders = [];

	/** Compiles the regexp using the custom parser, and returns the expressions DOM, or throws a string with errors encountered during parse
		@return {Matcher} The root compiled matcher if the pattern was valid
	*/
	UI.RX.prototype.compile = function()
	{
		var oParser = new regex_parser();
		var oResult = oParser.compile(this.pattern, this.options.i, this.options.m, this.options.g);
		if (typeof(oResult) != "string")
			return oResult;
		else
			throw oResult;
	};
	
	UI.RX.prototype.getJSCode = function()
	{
		var sResult = "var oRegExp = new RegExp(" + this.pattern.escapeJS() + ", \"" + this.options.str + "\");\n";
		sResult += "var oMatches;\n";
		sResult += "while ((oMatches = oRegExp.exec(sSourceText_REPLACE_ME)) != null) {\n";
		sResult += "    // Match in oMatches[0], Groups start at 1\n";
		sResult += "}\n";
		return sResult;
	};
	UI.RX.prototype.CodeBuilders.push(["JavaScript", UI.RX.prototype.getJSCode]);

	UI.RX.prototype.getCSCode = function()
	{
		var sResult = "System.Text.RegularExpressions.Regex oRegExp = new System.Text.RegularExpressions.Regex(" + this.pattern.escapeCS() + ", ";
		sResult += "   RegexOptions.Compiled.RegexOptions.Compiled|RegexOptions.Compiled.RegexOptions.ECMAScript";
		if (this.options.i) sResult += "|RegexOptions.Compiled.RegexOptions.IgnoreCase";
		if (this.options.m) sResult += "|RegexOptions.Compiled.RegexOptions.Multiline";
		sResult += ");\n";
		sResult +=
	    "foreach (Match oMatch in oRegExp.Matches(input))\n" +
	    "{\n" +
	    "    //Match in oMatch\n" +
		"	 //Captures in oMatch.Groups[1+]\n" +
	    "}\n";
		return sResult;
	};
	UI.RX.prototype.CodeBuilders.push(["C#", UI.RX.prototype.getCSCode]);

	UI.RX.prototype.getPerlCode = function() {
		var sRegExStart = "";
		var sRegex = this.pattern.normaliseNewLines();
		if (sRegex.indexOf("$") > -1) {
			var sHereDoc = "REGEX";
			var iOffset = 1;
			while (sRegex.indexOf("\n" + sHereDoc + "\n") > -1)
				sHereDoc = sHereDoc + "_" + (iOffset++);
			sRegExStart = "my $regex = <<'" + sHereDoc + "';\n" +
						  sRegex + "\n" +
						  sHereDoc + "\n" + 
						  "chop $regex;\n";
			sRegex = "$regex";
		}
		else
			sRegex = sRegex.replace(/\\/g,'\\\\').replace(/\//g,'\\/');
		return sRegExStart + "while ($ReplaceMeWithTheInputText =~ m/" + sRegex + "/" + this.options.str +") {\n" +
			"# matches are in $1, $2... position in pos $ReplaceMeWithTheInputText\n# but please! Consider learning a real language\n}"; 
	};
	UI.RX.prototype.CodeBuilders.push(["Perl", UI.RX.prototype.getPerlCode]);
	
	UI.RX.prototype.getBashGrepCode = function () {
		var sRes = "grep -E -o ";
		var sOptions = "";
		if (this.options.i) sOptions += "-i ";
		if (!(this.options.g)) sOptions += "-m 1 ";
		if (!(this.options.m)) sRes = "# Warning - the multiline option is deactivated but not supported by grep (grep is line based).\n#It has been ignored. \n\n" + sRes;
		var sEscapedRegExp = this.pattern.replace(/\\/g,'\\\\').
               replace(/\$/g,'\\\'').
               replace(/"/g,'\\\"').
               replace(/`/g,'\\`').
               replace(/(\r(\n?))|\n/g,'\\\n');
		sEscapedRegExp = "-e \"" + sEscapedRegExp + "\"";
		sRes += sOptions + sEscapedRegExp;
		return sRes;
	};
	UI.RX.prototype.CodeBuilders.push(["Bash and grep", UI.RX.prototype.getBashGrepCode]);
})();