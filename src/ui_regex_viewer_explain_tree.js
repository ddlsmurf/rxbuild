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

/**	@fileOverview Contains the component that displays an tree view of the regexps DOM
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
})();