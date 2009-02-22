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

/**	@fileOverview Contains the component that matches the regexp agains sample input and displays an inline result view of the matches
	@requires utils.js
	@requires regex_controller.js
	@requires regex_engine.js
*/

if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.UI)
	/** @namespace The RXBuild.UI namespace is the root namespace for all things related to RXBuilds user interface */
	 RXBuild.UI = {};

(function() {
	/** 
		Creates a new instance of RXBuild.UI.HtmlResultViewer (which inherits RXBuild.Engine.ResultListener)
		@class The RXBuild.UI.HtmlResultViewer displays the results of matching a regular expression inline with the text
		@property {HTMLElement} container The DOM element that holds the results for display		
		@base RXBuild.Engine.ResultListener
		@constructor
		@param {} container
	*/
	RXBuild.UI.HtmlResultViewer = function (container, id) {
		RXBuild.Engine.ResultListener.call(this);
		this.container = document.createElement("DIV");
		this.container.setAttribute("class", "rxbuild_regextester");
		this.container.setAttribute("id", id);
		container.appendChild(this.container);
	};
	RXBuild.UI.HtmlResultViewer.prototype = new RXBuild.Engine.ResultListener;
	RXBuild.UI.HtmlResultViewer.prototype.constructor = RXBuild.UI.HtmlResultViewer;
	/** Updates the view to reflect the provided regular expression and input
		@param {RXBuild.RegExp} regex The new pattern
		@param {String} input The sample input text in which to run the matches
	*/
	RXBuild.UI.HtmlResultViewer.prototype.updateRegExp = function (regex, input) {
		var oEngine = new RXBuild.Engine.BrowserEngine();
		oEngine.runMatch(regex, input, this);
	};
	
	/** Called when a new match session has started
		@param {RXBuild.RegExp} regexp The pattern that will be ran
		@param {String} inputText The input text against which to match
	*/
	RXBuild.UI.HtmlResultViewer.prototype.startMatch = function(regexp, inputText) {
		this.container.innerHTML = "";
		this._iLastIndex = 0;
	};
	/** Called once for each match.
		@param {RXBuild.RegExp} regexp The pattern that is running
		@param {String} inputText The input text against which to match
		@param {Number} matchIndex The 0-based index of this match
		@param {object} matchItem A single match description
		@return {Boolean} True to continue matching, false to abort.
	*/
	RXBuild.UI.HtmlResultViewer.prototype.foundMatch = function(regexp, inputText, matchIndex, matchItem) {
		if (this._iLastIndex < matchItem.index)
			this.container.appendChild(document.createTextNode(inputText.substr(this._iLastIndex, matchItem.index - this._iLastIndex)));
		var oChild = document.createElement('SPAN');
		oChild.className = "rxbuild_regexmatch";
		oChild.innerHTML = matchItem[0].escapeHTML();
		this.container.appendChild(oChild);
		this._iLastIndex = matchItem.index + matchItem[0].length;
		return true;
	};
	/** Called when matching is over.
		@param {RXBuild.RegExp} regexp The pattern that was run
		@param {String} inputText The input text against which to match
		@param {Integer} matchCount The number of matches (until aborting), or -1 if an error occured.
		@param {String} error If an error occured, the error object, otherwise, null
	*/
	RXBuild.UI.HtmlResultViewer.prototype.finished = function(regexp, inputText, matchCount, error) {
		if (matchCount != -1) {
		if (this._iLastIndex < inputText.length)
			this.container.appendChild(document.createTextNode(inputText.substr(this._iLastIndex)));
		} else {
			var oChild = document.createElement('PRE');
			oChild.className = "rxbuild_regexerror";
			oChild.innerHTML = String(error.message).escapeHTML();
			this.container.appendChild(oChild);
		}
	};
})();