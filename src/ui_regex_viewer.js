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
		Creates a new instance of RegexViewer
		@class The RegexViewer holds selectable, self-updating views of the regular expression
		@property {HTMLElement} container The DOM element that will be the happy new parent of this control
		@constructor
		@param {HTMLElement} container The DOM element that should be the new parent of the tester control.
		@param {String} id A unique name for this controls dom element
		@param {String} className Optional. A CSS class name to apply to the container DIV. 
	*/
	RXBuild.UI.RegexViewer = function (container, id, header, editor, viewers) {
		this.container = container;
		this.editor = editor;
		
		this.viewers = viewers;
		for (var i=0; i < this.viewers.length; i++) {
			var oCurView = this.viewers[i];
			oCurView[1] = new oCurView[1](this.container, this.id + "_" + oCurView[2]);
		}
		
		var oAcceptableViewersMenu = [];
		for (var i=0; i < this.viewers.length; i++) {
			oAcceptableViewersMenu.push({text: this.viewers[i][0], value: i});
		}
		 
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
    }
		if (this.activeViewer && this.activeViewer.hide) this.activeViewer.hide();
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