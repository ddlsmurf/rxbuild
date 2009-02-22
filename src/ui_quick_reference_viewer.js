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
/**	@fileOverview Holds the quick reference viewer code
	@requires utils.js
*/

if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.UI)
	/** @namespace The RXBuild.UI namespace is the root namespace for all things related to RXBuilds user interface */
	 RXBuild.UI = {};

(function() {

	var quickref_url = "./syntax_reference.xml";

/** 
	Creates a new instance of RXBuild.UI.QuickRefViewer
	@class The RXBuild.UI.QuickRefViewer displays a quick reference in a user-friendly format
	@property {HTMLElement} container The element that will hold the reference viewer
	@property {String} id The unique name of this viewer
	@constructor
	@param {HTMLElement} container The element that will hold the reference viewer
	@param {String} id The unique name of this viewer
*/
RXBuild.UI.QuickRefViewer = function (container, id, className) {
	this.container = container;
	this.id = id;
	this.div = document.createElement("DIV");
	this.div.className = ((typeof(className) == "string") ? className + " " : "") + " quickRefPanel";
	this.div.id = id;
	this.xml = null;
	container.appendChild(this.div);
	this.__load();
};
RXBuild.UI.QuickRefViewer.prototype.constructor = RXBuild.UI.QuickRefViewer;

/** Called with the new XML reference to display.
	@param {XMLDocument} xml The xml version of the quickreference to display to the user
*/
RXBuild.UI.QuickRefViewer.prototype.initXML = function(xml) {
	function buildCategoryTab(category) {
		var sName = category.getAttribute("name");
		var sHtmlResult = [];
		sHtmlResult.push("<table border=\"1\" cellPadding=\"2\" cellSpacing=\"0\">");
		sHtmlResult.push("<tr><th>Example</th><th>Description</th>");
		var oItems = category.getElementsByTagName("item");
		for (var i=0; i < oItems.length; i++) {
			sHtmlResult.push("<tr><td>");
			sHtmlResult.push(RXBuild.Utils.getXMLInnerText(oItems[i].getElementsByTagName("sample")));
			sHtmlResult.push("</td><td>");
			sHtmlResult.push(RXBuild.Utils.getXMLInnerText(oItems[i].getElementsByTagName("description")));
			sHtmlResult.push("</td></tr>");
		};
		sHtmlResult.push("</table>");
		return new YAHOO.widget.Tab({
			label: sName,
			content: sHtmlResult.join("")
		});
	}
	function buildDialectsTab(xml, id) {
		var oDialects = xml.getElementsByTagName("dialect");
		var sHtmlResult = [];
		for (var i=0; i < oDialects.length; i++) {
			if (i > 0) sHtmlResult.push("<hr />");
			var oLang = oDialects[i];
			sHtmlResult.push("<h2>");
			sHtmlResult.push(RXBuild.Utils.getXMLInnerText(oLang.getElementsByTagName("name")).trim());
			sHtmlResult.push("</h2>");
			var oDescription = oLang.getElementsByTagName("description");
			if (oDescription.length >= 1) {
				sHtmlResult.push("<h3>Description</h3>");
				sHtmlResult.push(RXBuild.Utils.getXMLInnerText(oDescription[0]).trim());
			}
			var oSource = oLang.getElementsByTagName("source");
			if (oSource.length >= 1) {
				sHtmlResult.push("<h3>Copyright notice</h3>");
				sHtmlResult.push(RXBuild.Utils.getXMLInnerText(oSource).trim());
			}
		};
		return new YAHOO.widget.Tab({
			id: id,
			label: "Dialects",
			content: sHtmlResult.join(""),
			active: true
		});
	}
	
	this.xml = xml;
	this.div.innerHTML = "";
	this.tabView = new YAHOO.widget.TabView({id: this.id + "_tabView"});
	
	var oCategories = xml.getElementsByTagName("category");
	for (var j=0; j < oCategories.length; j++) {
		this.tabView.addTab(buildCategoryTab(oCategories[j]));
	};
	
	this.tabView.addTab(buildDialectsTab(xml, this.id + "_dialects_index"));
	this.tabView.appendTo(this.div);
};

/** Attempts to load the XML content and initialise the control
	@private
*/
RXBuild.UI.QuickRefViewer.prototype.__load = function() {
	var oCallBack = {
		success: function(o) {
			this.initXML(o.responseXML);
		},  
		failure: function(o) {
			this.div.innerHTML = "Failed to retreive quick reference - " + o.statusText + "<br />";
			var oRetryLink = document.createElement("A");
			oRetryLink.href = "#";
			oRetryLink.innerHTML = "Retry";
			YAHOO.util.Event.addListener(oRetryLink, "click", RXBuild.Utils.createDelegate(this,
				RXBuild.UI.QuickRefViewer.prototype.__load));
			this.div.appendChild(oRetryLink);
		},  
		scope: this
	};
	this.div.innerHTML = "Loading ...";
	YAHOO.util.Connect.asyncRequest('GET', quickref_url, oCallBack, null);
};

})();