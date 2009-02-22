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

/** @fileOverview This file defines YUI dialog extensions
	@requires utils.js
*/
if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.UI)
	/** @namespace The RXBuild.UI namespace is the root namespace for all things related to RXBuilds user interface */
	 RXBuild.UI = {};

(function() {

	/** 
		Creates a new instance of TextAreaDialog
		@class The RXBuild.UI.Dialog displays a YUI dialog with a text area or provided HTMLElement as main content, and configurable verbs
		@property {String} divName The name of the div element that this item provided to YUI
		@property {YAHOO.widget.Dialog} dialog The YUI dialog - used internally.
		@property {YAHOO.widget.Button} _btnOk The YUI ok button - used internally.
		@property {YAHOO.widget.Button} _btnCancel The YUI close/cancel button - used internally.
		@property {HTMLTextArea} textBox The dynamically create text area - used internally.
		@constructor
		@param {String} divName The name of the div element that this item will provide to YUI
	*/
	RXBuild.UI.Dialog = function (divName) {
		this.divName = divName;
		this.dialog = new YAHOO.widget.Dialog(divName, 
			{
				width:"640px",
				visible:false,
				constraintoviewport:true,
				effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},
				fixedcenter: true,
				hideaftersubmit: true, 
				postmethod: "manual",
				modal: true,
				close: false,
				buttons:  [
					{
						text:"Ok",
						handler:
							{
								fn: function(e, btnId) { this._buttonPressed(btnId); },
								obj: "ok",
								scope: this
							},
						isDefault:true
					},
					{
						text:"Close",
						handler:
							{
								fn: function(e, btnId) { this._buttonPressed(btnId); },
								obj: "close",
								scope: this
							}
					} ]
			});
		this.textBox = document.createElement("TEXTAREA");
		this.textBox.setAttribute("rows", "20");
		this.textBox.setAttribute("cols", "80");
		this.textBox.setAttribute("wrap", "off");
		this.textBox.setAttribute("id", divName + "__BodyTextArea");
		this.textBox.setAttribute("name", divName + "__BodyTextArea");
		this.textBox.setAttribute("class", "screenWide lightBox");
		this.dialog.setBody(this.textBox);
		this.dialog.render(document.body);
		var oButtons = this.dialog.getButtons();
		this._btnOk = oButtons[0];
		this._btnCancel = oButtons[1];
		this._oPendingCallback = null;
	};
	RXBuild.UI.Dialog.prototype.constructor = RXBuild.UI.Dialog;
	/** Performs the appropriate action when a button is pressed
		@private
	*/
	RXBuild.UI.Dialog.prototype._buttonPressed = function(buttonId) {
		var oTemp = this._oPendingCallback;
		this._oPendingCallback = null;
		this.dialog.hide();
		var oContent = this._oContentChild;
		if (this._oContentChild) {
			this._oContentChild = null;
			this.dialog.setBody(this.textBox);
		}
		if (!oContent) oContent = this.textBox.value;
		if (buttonId == "ok" && oTemp) {
			oTemp(oContent);
		}
	};
	/** Displays modally the dialog box with the provided header, text and buttons.
		@param {String} headerHTML HTML content to display in the header of the dialog
		@param {String|HTMLElement} defaultText The main content to display in the dialogs body initially
		@param {String[]|String} verbs Optional. An array of labels to put on the OK and Cancel buttons (respectively)
		@param {Function} callback Optional. The method to call when the user validates the dialog.
		@param {object} callbackContext Optional. The object to scope before calling callback
	*/
	RXBuild.UI.Dialog.prototype.show = function(headerHTML, defaultText, verbs, callback, callbackContext) {
		if (this._oPendingCallback != null) throw "There is already a dialog expecting a response being shown.";
		this.dialog.header.innerHTML = headerHTML;
		if (typeof(defaultText) == "string") {
			this.dialog.setBody(this.textBox);
			this.textBox.value = defaultText;
		} else {
			this._oContentChild = defaultText;
			this.dialog.setBody(this._oContentChild);
		}
		if (callback && callbackContext)
			callback = RXBuild.Utils.createDelegate(callbackContext, callback);
		this._oPendingCallback = callback;
		if (typeof(defaultText) == "string") {
			if (callback) {
				this.textBox.removeAttribute("readonly");
				YAHOO.util.Event.removeListener(this.textBox, "click");
			} else {
				this.textBox.setAttribute("readonly", "true");
				YAHOO.util.Event.addListener(this.textBox, "click", RXBuild.Utils.createDelegate(this, function() {
					if (this.textBox.select) this.textBox.select();
				}));
			}
		}
		var sV1 = "Ok";
		var sV2 = callback ? "Cancel" : "Close";
		if (verbs && verbs.length == 0)
			verbs = null;
		if (verbs) {
			if (typeof(verbs) == "object" && verbs.length == 1)
				verbs = verbs[0];
			if (typeof(verbs) == "string")
				if (callback)
					sV1 = verbs;
				else
					sV2 = verbs;
			else {
				sV1 = verbs[0];
				sV2 = verbs[1];
			}
		}
		this._btnOk.set("label", sV1);
		this._btnCancel.set("label", sV2);
		this._btnOk.setStyle("display", callback ? "" : "none");
		this.dialog.show();
		this.textBox.focus();
		if (!callback)
			this.textBox.focus();
	};

})();

