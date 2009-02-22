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

/**	@fileOverview Contains the component that create and update views of regexp (the regexp test matcher is one such view)
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
		Creates a new instance of RXBuild.UI.HtmlExplanationTreeBuilder (which inherits RXBuild.Dom.NodeVisitor)
		@class The RXBuild.UI.HtmlExplanationTreeBuilder visits the DOM of the parsed regexp to build a corresponding YUI tree
		@p
		@base RXBuild.Dom.NodeVisitor
		@constructor
	*/
	RXBuild.UI.HtmlExplanationTreeBuilder = function (parentNode) {
		RXBuild.Dom.NodeVisitor.call(this);
		this.parentStack = [];
		this.currentParent = parentNode;
	};
	RXBuild.UI.HtmlExplanationTreeBuilder.prototype = new RXBuild.Dom.NodeVisitor;
	RXBuild.UI.HtmlExplanationTreeBuilder.prototype.constructor = RXBuild.UI.HtmlExplanationTreeBuilder;
	/** Called when visiting a leaf node
		@param {RXBuild.Dom.Node} leafNode The node being visited
		@return {Boolean} Return true to continue visit
	*/
	RXBuild.UI.HtmlExplanationTreeBuilder.prototype.visit = function(leafNode) {
		(new YAHOO.widget.TextNode(leafNode.GetHtml(true), this.currentParent, false)).data = leafNode;
		return true;
	};
	/** Called when visiting a parent node
		@param {RXBuild.Dom.Node} compositeNode The node being visited
		@return {Boolean} Return true to visit children on this node
	*/
	RXBuild.UI.HtmlExplanationTreeBuilder.prototype.visitEnter = function(compositeNode) {
		var oNewParent = (new YAHOO.widget.TextNode(compositeNode.GetHtml(true), this.currentParent, true));
		oNewParent.data = compositeNode;
		this.parentStack.push(this.currentParent);
		this.currentParent = oNewParent;
		return true;
	};
	/** Called when finished visiting a parent node
		@param {RXBuild.Dom.Node} compositeNode The node that completed visit
		@return {Boolean} Return true to continue the visit after the compositeNode
	*/
	RXBuild.UI.HtmlExplanationTreeBuilder.prototype.visitLeave = function(compositeNode) {
		this.currentParent = this.parentStack.pop();
		return true;
	};
	
	/** 
		Creates a new instance of RXBuild.UI.HtmlResultTreeViewer (which inherits RXBuild.Engine.ResultListener)
		@class The RXBuild.UI.HtmlResultTreeViewer displays the results of matching a regular expression inline with the text
		@property {HTMLElement} container The DOM element that holds the results for display		
		@base RXBuild.Engine.ResultListener
		@constructor
		@param {} container
	*/
	RXBuild.UI.HtmlExplanationTreeViewer = function (container, id) {
		RXBuild.Engine.ResultListener.call(this);
		this.container = document.createElement("DIV");
		this.container.className = "rxb-domtree";
		this.container.setAttribute("id", id);
		container.appendChild(this.container);
		this.errorcontainer = document.createElement("DIV");
		this.errorcontainer.setAttribute("id", id + "_errorContainer");
		container.appendChild(this.errorcontainer);
		this.tree = new YAHOO.widget.TreeView(this.container);
	};
	RXBuild.UI.HtmlExplanationTreeViewer.prototype.constructor = RXBuild.UI.HtmlExplanationTreeViewer;
	/** Updates the view to reflect the provided regular expression and input
		@param {RXBuild.RegExp} regex The new pattern
		@param {String} input The sample input text in which to run the matches
	*/
	RXBuild.UI.HtmlExplanationTreeViewer.prototype.updateRegExp = function (regex, input) {
		this.tree.removeChildren(this.tree.getRoot());
		var oCompiledRegExp;
		try {
			oCompiledRegExp = regex.compile();
			this.container.style.display = "";
			this.errorcontainer.style.display = "none";
			var oVisitor = new RXBuild.UI.HtmlExplanationTreeBuilder(this.tree.getRoot());
			oCompiledRegExp.StartVisit(oVisitor);
			this.tree.draw();
		} catch (e) {
			this.container.style.display = "none";
			this.errorcontainer.style.display = "";
			this.errorcontainer.innerHTML = e.plainTextToHtml();
		}
	};
	
	
	
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

	/** 
		Creates a new instance of RegexTester
		@class The RegexTester runs a regex match against sample input and displays the results to the user
		@property {HTMLElement} container The DOM element that will be the happy new parent of this control
		@constructor
		@param {HTMLElement} container The DOM element that should be the new parent of the tester control.
		@param {String} id A unique name for this controls dom element
		@param {String} className Optional. A CSS class name to apply to the container DIV. 
	*/
	RXBuild.UI.RegexViewer = function (container, id, header, editor, viewers) {
		this.container = container;
		this.editor = editor;
		
		if (viewers)
			this.viewers = viewers;
		else
			this.viewers = [
				["Matches - tree", new RXBuild.UI.HtmlResultTreeViewer(this.container, id + "_tree")],
				["Matches - inline", new RXBuild.UI.HtmlResultViewer(this.container, id + "_flat")],
				["DOM tree", new RXBuild.UI.HtmlExplanationTreeViewer(this.container, id + "_domTree")]
			];
		
		var oAcceptableViewersMenu = [];
		for (var i=0; i < this.viewers.length; i++) {
			oAcceptableViewersMenu.push({text: this.viewers[i][0], value: i});
		};
		 
		this.btnChangeView = new YAHOO.widget.Button({   
		                        id: id + "_btnSelectView",   
		                        label: "<em class=\"yui-button-label\">Results - tree</em>",
		                        type: "menu",    
		                        menu: oAcceptableViewersMenu,
								menualignment: ["tl", "tl"],
		                        container: header});
		this.btnChangeView.on("selectedMenuItemChange", RXBuild.Utils.createDelegate(this, function (event) {  
		    var oMenuItem = event.newValue;
			this.setCurrentView(oMenuItem.value);
		}));
		this.btnAutoRefresh = new YAHOO.widget.Button({ type: "checkbox", label: "Auto-refresh", container:header, checked: true,
			onclick: {
				fn: function() { this.autoRefresh(); this.btnRefresh.set("disabled", this.btnAutoRefresh.get("checked")); },
				scope: this
			}});
		this.btnRefresh = new YAHOO.widget.Button({ type: "push", label: "Refresh", container:header, disabled: true,
			onclick: {
				fn: function() { this.update(); },
				scope: this
			}});
		
		this.editor.onRegExpInvalidated.subscribe(RXBuild.Utils.createDelegate(this, function() { this.invalidate(); }));
		this.editor.onRegExpApplyChanges.subscribe(RXBuild.Utils.createDelegate(this, function() { this.autoRefresh(); }));
		
		this.setCurrentView(0);
	};
	RXBuild.UI.RegexViewer.prototype.constructor = RXBuild.UI.RegexViewer;
	
	/** Refreshes the view only if auto-refresh is active
	*/
	RXBuild.UI.RegexViewer.prototype.autoRefresh = function() {
		if (this.btnAutoRefresh.get("checked"))
			this.update();
	};
	
	/** Sets the currently active viewer to the one with the specified index
		@param {Number} viewIndex The index in this instances viewers property of the view to display
	*/
	RXBuild.UI.RegexViewer.prototype.setCurrentView = function(viewIndex) {
		var oView = this.viewers[viewIndex];
		this.btnChangeView.set("label", ("<em class=\"yui-button-label\">" + oView[0] + "</em>"));
	    for (var i=0; i < this.viewers.length; i++) {
	    	this.viewers[i][1].container.style.display = i == viewIndex ? "" : "none";
	    };
		this.activeViewer = oView[1];
		this.invalidate();
		this.autoRefresh();
	};

	/** Runs the provided regular expression and updates the results view accordingly
	*/
	RXBuild.UI.RegexViewer.prototype.update = function() {
		this.activeViewer.updateRegExp(this.editor.getRX(), this.editor.getInput());
		YAHOO.util.Dom.setStyle(this.container, "opacity", "1.0");
	};
	/** Notifies the user that the display is no longer uptodate with the regular expression
	*/
	RXBuild.UI.RegexViewer.prototype.invalidate = function(regexp, inputText) {
		YAHOO.util.Dom.setStyle(this.container, "opacity", "0.3");
	};
})();