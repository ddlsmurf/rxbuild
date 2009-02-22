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

/**	@fileOverview Contains the component that matches the regexp agains sample input and displays a tree view of the matches
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
		Creates a new instance of RXBuild.UI.HtmlResultTreeViewer (which inherits RXBuild.Engine.ResultListener)
		@class The RXBuild.UI.HtmlResultTreeViewer displays the results of matching a regular expression inline with the text
		@property {HTMLElement} container The DOM element that holds the results for display		
		@base RXBuild.Engine.ResultListener
		@constructor
		@param {} container
	*/
	RXBuild.UI.HtmlResultTreeViewer = function (container, id) {
		RXBuild.Engine.ResultListener.call(this);
		this.container = document.createElement("DIV");
		this.container.setAttribute("id", id);
		container.appendChild(this.container);
		this.tree = new YAHOO.widget.TreeView(this.container);
		this.tree.subscribe("labelClick", RXBuild.UI.HtmlResultTreeViewer.prototype.clickedOnNode);
	};
	RXBuild.UI.HtmlResultTreeViewer.prototype = new RXBuild.Engine.ResultListener;
	RXBuild.UI.HtmlResultTreeViewer.prototype.constructor = RXBuild.UI.HtmlResultTreeViewer;
	/** Updates the view to reflect the provided regular expression and input
		@param {RXBuild.RegExp} regex The new pattern
		@param {String} input The sample input text in which to run the matches
	*/
	RXBuild.UI.HtmlResultTreeViewer.prototype.updateRegExp = function (regex, input) {
		var oEngine = new RXBuild.Engine.BrowserEngine();
		oEngine.runMatch(regex, input, this);
	};
	/** Event handler for the yahoo tree labelClick event */
	RXBuild.UI.HtmlResultTreeViewer.prototype.clickedOnNode = function (node) {
		function showNodeDetails(node) {
			if ((typeof node.data) == "string")
			{
				RXBuild.UI.dlg.show("Match details", node.data);
				return;
			}
			RXBuild.UI.dlg.show("Match details", node.data[2]);
		}
		if ((typeof node.data) == "object")
		{
			if (!node.hasChildren(false))
				showNodeDetails(node);
			else
				node.toggle();
		}
		else
			showNodeDetails(node);
		return false;
	};
	/** Called when a new match session has started
		@param {RXBuild.RegExp} regexp The pattern that will be ran
		@param {String} inputText The input text against which to match
	*/
	RXBuild.UI.HtmlResultTreeViewer.prototype.startMatch = function(regexp, inputText) {
		this.tree.removeChildren(this.tree.getRoot());
		this._iLastIndex = 0;
	};
	/** Called once for each match.
		@param {RXBuild.RegExp} regexp The pattern that is running
		@param {String} inputText The input text against which to match
		@param {Number} matchIndex The 0-based index of this match
		@param {object} matchItem A single match description
		@return {Boolean} True to continue matching, false to abort.
	*/
	RXBuild.UI.HtmlResultTreeViewer.prototype.foundMatch = function(regexp, inputText, matchIndex, matchItem) {
		function getAbbridged(s) {
			if (s == null)
				return "<null>";
			if (s.length <= 123)
				return s;
			return s.substr(0, 120) + "...";
		}
		
  		var sAbb = getAbbridged(matchItem[0]).escapeHTML();
		var tmpNode = new YAHOO.widget.TextNode("Match  #" + (matchIndex + 1) + " @" + matchItem.index + " \"" + sAbb + "\"", this.tree.getRoot(), matchItem.length > 1);
		tmpNode.data = new Array(matchItem.index, matchItem[0].length, matchItem[0]);
		if (sAbb != matchItem[0] && matchItem.length != 1)
				(new YAHOO.widget.TextNode("<em>View full match</em>", tmpNode, false)).data = tmpNode.data;
		for (var iSubMatch = 1; iSubMatch < matchItem.length; iSubMatch++)
			(new YAHOO.widget.TextNode("#" + iSubMatch + ": \'" + getAbbridged(matchItem[iSubMatch]).escapeHTML() + "\'", tmpNode, false)).data = matchItem[iSubMatch];

		return matchIndex < 99;
	};
	/** Called when matching is over.
		@param {RXBuild.RegExp} regexp The pattern that was run
		@param {String} inputText The input text against which to match
		@param {Integer} matchCount The number of matches (until aborting), or -1 if an error occured.
		@param {String} error If an error occured, the error object, otherwise, null
	*/
	RXBuild.UI.HtmlResultTreeViewer.prototype.finished = function(regexp, inputText, matchCount, error) {
		if (matchCount != -1) {
		  	if (matchCount == 0)
			  	new YAHOO.widget.HTMLNode("<strong>&lt;No Matches&gt;</strong>", this.tree.getRoot(), true, true);
		  	else if (matchCount == 99)
			  	new YAHOO.widget.HTMLNode("<strong>Stopped matching at 100 !!<strong/>", this.tree.getRoot(), true, true);
		} else {
			new YAHOO.widget.TextNode("Error in regexp pattern. " + error.message, this.tree.getRoot(), true);
		}
		this.tree.draw();
	};
})();