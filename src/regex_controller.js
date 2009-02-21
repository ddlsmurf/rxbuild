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

if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };

(function() {

	/** 
		Creates a new instance of RXBuild.RegExp
		@class The RXBuild.RegExp class holds a regular expression as input by the user, and connects with the various operations
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
	RXBuild.RegExp = function (pattern, g, i, m) {
		this.pattern = pattern;
		this.options = {};
		if (g) this.options.g = true;
		if (m) this.options.m = true;
		if (i) this.options.i = true;
		this.options.str = (i ? "i" : "") + (g ? "g" : "") + (m ? "m" : "");
	};
	RXBuild.RegExp.prototype.constructor = RXBuild.RegExp;
	
	/** @field {Array} Index of builder functions. It is an array of builder, each being an array of 2 items, the english name, and the function.
	*/
	RXBuild.RegExp.prototype.CodeBuilders = [];

	/** Compiles the regexp using the custom parser, and returns the expressions DOM, or throws a string with errors encountered during parse
		@return {Matcher} The root compiled matcher if the pattern was valid
	*/
	RXBuild.RegExp.prototype.compile = function()
	{
		var oParser = new regex_parser();
		var oResult = oParser.compile(this.pattern, this.options.i, this.options.m, this.options.g);
		if (typeof(oResult) != "string")
			return oResult;
		else
			throw oResult;
	};
	/** Generates and returns an equivalent JavaScript code
		@return {String} A snippet of JavaScript code that would run this regular expression.
	*/
	RXBuild.RegExp.prototype.getJSCode = function()
	{
		var sResult = "var oRegExp = new RegExp(" + this.pattern.escapeJS() + ", \"" + this.options.str + "\");\n";
		sResult += "var oMatches;\n";
		sResult += "while ((oMatches = oRegExp.exec(sSourceText_REPLACE_ME)) != null) {\n";
		sResult += "    // Match in oMatches[0], Groups start at 1\n";
		sResult += "}\n";
		return sResult;
	};
	RXBuild.RegExp.prototype.CodeBuilders.push(["JavaScript", RXBuild.RegExp.prototype.getJSCode]);
	
	/** Generates and returns an equivalent C# code
		@return {String} A snippet of C# code that would run this regular expression.
	*/
	RXBuild.RegExp.prototype.getCSCode = function()
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
	RXBuild.RegExp.prototype.CodeBuilders.push(["C#", RXBuild.RegExp.prototype.getCSCode]);
	
	/** Generates and returns an equivalent Perl code
		@return {String} A snippet of Perl code that would run this regular expression.
	*/
	RXBuild.RegExp.prototype.getPerlCode = function() {
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
			"# matches are in $1, $2... position in pos $ReplaceMeWithTheInputText\n}"; 
	};
	RXBuild.RegExp.prototype.CodeBuilders.push(["Perl", RXBuild.RegExp.prototype.getPerlCode]);
	
	/** Generates and returns an equivalent Bash/Grep code
		@return {String} A snippet of Bash/Grep code that would run this regular expression.
	*/
	RXBuild.RegExp.prototype.getBashGrepCode = function () {
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
	RXBuild.RegExp.prototype.CodeBuilders.push(["Bash and grep", RXBuild.RegExp.prototype.getBashGrepCode]);

	/** Generates and return an equivalent Ruby code
	 *  @return {String} A snippet of ruby code that would run this regular expression.
	 */
	RXBuild.RegExp.prototype.getRubyCode = function () {
		var sRes = "";
		var sOptions = this.options.str.replace('g', '');
		var sRe = "/" + this.pattern.replace(/\\/g,'\\\\').replace(/\//g, '\\/') + '/' + sOptions;
		if (this.options.g) {
			sRes += 'while match_group = replace_me_with_the_input_text.match(' + sRe + ")\n";
			sRes += "  # Your matches are in match_group[n]\n";
			sRes += "end\n";
		} else {
			sRes += 'match_group = replace_me_with_the_input_text.match(' + sRe + ")\n";
			sRes += "# Your match are in match_group[n]\n";
		}
		return sRes;
	};
	RXBuild.RegExp.prototype.CodeBuilders.push(["Ruby", RXBuild.RegExp.prototype.getRubyCode]);
})();
