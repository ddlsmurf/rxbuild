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

/**	@fileOverview Contains the main editor controller
	@requires utils.js
	@requires regex_dom.js
	@requires regex_parser.js
	@requires ui_dialog_extensions.js
*/
if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.UI)
	/** @namespace The RXBuild.UI namespace is the root namespace for all things related to RXBuilds user interface */
	 RXBuild.UI = {};

(function() {

/** 
	Creates a new instance of RXBuild.UI.RXEditor
	@class The RXBuild.UI.RXEditor Is the main controller class for things related to editing a regular expression
	@property {HTMLElement} container The html dom element that will parent the main pane of the editor
	@property {HTMLElement} header The html dom element that will parent toolbar items of the editor
	@property {HTMLElement} textBox The html dom element that is the actual pattern text editor
	@property {HTMLElement} sampleInputTextBox The html dom element that lets the user edit the pattern input text
	@property {YAHOO.util.CustomEvent} onRegExpChanged An event that is fired immediately when the user changes the regexp
	@property {YAHOO.util.CustomEvent} onRegExpInvalidated An event that is fired immediately when the regexp is no longer valid
	@property {YAHOO.util.CustomEvent} onRegExpApplyChanges An event that is fired when it is appropriate for an auto-refresh
	@constructor
	@param {String|HTMLElement} containerDiv The id or dom element that will parent the main pane of the editor
	@param {String|HTMLElement} headerDiv The id or dom element that will parent toolbar items of the editor
	@param {String|HTMLElement} textBox The id or html dom element that is the actual pattern text editor
	@param {String|HTMLElement} sampleInputTextBox The id or html dom element that lets the user edit the pattern input text
*/
RXBuild.UI.RXEditor = function(containerDiv, headerDiv, patternTextBox, inputTextBox) {
	this.container = typeof(containerDiv) == "string" ? document.getElementById(containerDiv) : containerDiv;
	this.header = typeof(headerDiv) == "string" ? document.getElementById(headerDiv) : headerDiv;
	this.textBox = typeof(patternTextBox) == "string" ? document.getElementById(patternTextBox) : patternTextBox;
	this.sampleInputTextBox = typeof(inputTextBox) == "string" ? document.getElementById(inputTextBox) : inputTextBox;
	this.onRegExpChanged = new YAHOO.util.CustomEvent("onRegExpChanged");
	this.onRegExpInvalidated = new YAHOO.util.CustomEvent("onRegExpInvalidated");
	this.onRegExpApplyChanges = new YAHOO.util.CustomEvent("onRegExpUpdate");
	this.changedEventTime = new RXBuild.UI.DelayedRefresh(300,
		RXBuild.Utils.createDelegate(this, function() { this.onRegExpApplyChanges.fire(this.getRX()); }),
		RXBuild.Utils.createDelegate(this, function() { this.onRegExpInvalidated.fire(this); }),
		0.1);
	YAHOO.util.Event.addListener(this.sampleInputTextBox, "keyup", RXBuild.Utils.createDelegate(this, function() {
		this.__raiseRegExpChanged();
	}));
	
};
RXBuild.UI.RXEditor.prototype.constructor = RXBuild.UI.RXEditor;
/** @private */
RXBuild.UI.RXEditor.prototype.__raiseRegExpChanged = function() {
	if (this.__previousRegexp) {
		var oRX = this.getRX();
		oRX.sampleInput = this.getInput();
		if (this.__previousRegexp.options.str == oRX.options.str &&
			this.__previousRegexp.pattern == oRX.pattern &&
			this.__previousRegexp.sampleInput == oRX.sampleInput)
			return; // Abort refresh.
		this.__previousRegexp = oRX;
	} else {
		this.__previousRegexp = this.getRX();
		this.__previousRegexp.sampleInput = this.getInput();
	}
	this.onRegExpChanged.fire(this);
	this.changedEventTime.reset();
};
/** Reads the UI and returns an equivalent {@link RXBuild.RegExp} instance
	@return {RXBuild.RegExp} A object describing the expression being edited
*/
RXBuild.UI.RXEditor.prototype.getRX = function() {
	return new RXBuild.RegExp(this.textBox.value, this.chkGlobal.checked, this.chkCaseInsensitive.checked, this.chkMultiline.checked);
};
/** Reads the UI and returns the current sample input text
	@return {String} The current sample input text
*/
RXBuild.UI.RXEditor.prototype.getInput = function() {
	return this.sampleInputTextBox.value;
};
/** Updates the label on the options display drop down button to reflected the active options
	@private
*/
RXBuild.UI.RXEditor.prototype.__updateOptionsButtonLabel = function() {
	this.btnDisplayOptions.set("label", "Options (" + this.getRX().options.str + ")");
	this.__raiseRegExpChanged();
};
/** Inserts the provided string into the regular expression at the current cursor position, overwriting the selection if any,
	and selecting the insertion (in some browsers apparently)
	@param {String} str The text to insert as-is into the regular expression
*/
RXBuild.UI.RXEditor.prototype.insertIntoRegexp = function(str) {
	if (this.textBox == null) return;
	var iPos = this.__getCaretPosition();
	var sValueBefore = this.textBox.value.substr(0, iPos[0]);
	var sValueAfter = this.textBox.value.substr(iPos[1]);
	this.textBox.value = sValueBefore + str + sValueAfter;
	if (typeof(this.textBox.selectionStart) != "undefined") {
		this.textBox.selectionStart = sValueBefore.length;
		this.textBox.selectionEnd = sValueBefore.length + str.length;
	}
};
/** Returns the current selection in the pattern editor
	@private
	@return {Array} An array containing the cursors position followed by the index of the end of the selection.
*/
RXBuild.UI.RXEditor.prototype.__getCaretPosition = function() {
	// thanks to http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
	var iCaretPos = 0;
	var iEnd = 0;
	if (document.selection) { // IE & Opera Support
		this.textBox.focus();
		var Sel = document.selection.createRange();
		var iLen = Sel.text.length;
		Sel.moveStart('character', -this.textBox.value.length);
		iCaretPos = Sel.text.length;
		iEnd = iCaretPos;
		iCaretPos = iCaretPos - iLen;
	}
	else if (this.textBox.selectionStart || this.textBox.selectionStart == '0') {// Firefox support
		iCaretPos = this.textBox.selectionStart;
		iEnd = this.textBox.selectionEnd;
	}
	return [iCaretPos, iEnd];
};
/** Updates the caret position display div (positioning and content)
*/
RXBuild.UI.RXEditor.prototype.updateCaretPositionDisplay = function () {
	var iPos = this.__getCaretPosition();
	this.divCaretPosition.setBody("c:" + iPos[0] + (iPos[1] != iPos[0] ? "-" + iPos[1] : ""));
	this.divCaretPosition.__ds_align();
	this.divCaretPosition.height = this.header.offsetHeight + "px";
};
RXBuild.UI.RXEditor.prototype.explainRegexp = function () {
	function makeHtmlCharsOfString(str) {
		var sResult = "";
		for (var i=0; i < str.length; i++) {
			sResult += "<span id=\"rxchr_" + i + "\">" + str.substr(i,1).escapeHTML() + "</span>";
		}
		return "<span class=\"input button\">" + sResult + "</span>";
	}
	var oRegExp = this.getRX();
	var oCompiledRegExp;
	try {
		oCompiledRegExp = oRegExp.compile();
		var sHTML = oCompiledRegExp.GetChainHtml();
		var oContainer = document.createElement("DIV");
		oContainer.className = "screenWide lightBox htmlDialog";
		oContainer.innerHTML = sHTML;
		oCompiledRegExp = oContainer;
	} catch (e) {
		oCompiledRegExp = e.plainTextToHtml();
	}
	var sRegexBlock = makeHtmlCharsOfString(oRegExp.pattern);
	RXBuild.UI.dlg.show("Explanation of " + sRegexBlock, oCompiledRegExp);
};
/** Initialises the whole user interface
*/
RXBuild.UI.RXEditor.prototype.initUI = function() {
		function buildRegexpOptionsOverlay(prefix) {
			var oRes = new YAHOO.widget.Overlay(prefix + "divChkContainer", { visible: false });
			oRes.setBody(
				"<div class=\"\" style=\"background: lightblue; border: 1px solid black; text-align:left; color: black;\">" +
					"<h2>Compilation Options</h2>" +
					"<ul id=\"ulList1\"><li>" +
						"<input type=\"checkbox\" id=\"" + prefix + "chkCaseInsensitive\" value=\"checked\" checked><label for=\"" + prefix + "chkCaseInsensitive\"> <strong>/i</strong> (case insensitive)</label>" +
					"</li><li>" +
						"<input type=\"checkbox\" id=\"" + prefix + "chkMultiline\" value=\"checked\"><label for=\"" + prefix + "chkMultiline\"> <strong>/m</strong> (<strong>^</strong>/<strong>&amp;</strong> on lines too)</label>" +
					"</li><li>" +
						"<input type=\"checkbox\" id=\"" + prefix + "chkGlobal\" value=\"checked\" checked><label for=\"" + prefix + "chkGlobal\"> <strong>/g</strong> (all matches)</label>" +
					"</li></ul>" +
				"</div>");	
			oRes.render(document.body);
			return oRes;
		}
		function buildCaretPositionOverlay(prefix, context) {
			var oRes = new YAHOO.widget.Overlay(prefix + "divCaretPosOverlay", { 
				context: context
				});
			oRes.setBody("");
			oRes.render(document.body);
			oRes.__ds_align = function() { this.align(context[1], context[2]); };
			return oRes;
		}
		function buildSimpleInserterMenuItem(scope, title, value) {
			var oSetter = RXBuild.Utils.createDelegate(scope,
				function(s, f) {
					if (typeof(s) == "string")
						this.insertIntoRegexp(s);
					else
						s(this, f);
				});
			return {text: title,
				onclick: {
					fn: function(e, ev, s) { oSetter(s, oSetter); },
					obj: value
				}};
		}
		function buildInserterMenu(scope, prefix) {
			function insertEscapedRegExp(s, f) {
				RXBuild.UI.dlg.show("Enter text to escape and insert in the pattern:", "", "Insert",
					function(text) { f(text.escapeRegexp()); });
			}
			function insertTokenList(s, f, c) {
					RXBuild.UI.dlg.show("Enter each token on its own line:", "abstract\nevent\nnew\nstruct\nas\nexplicit\nnull\nswitch\nbase\nextern\nobject\n" +
																	 "this\nbool\nfalse\noperator\nthrow\nbreak\nfinally\nout\ntrue\nbyte\nfixed\n" +
																	 "override\ntry\ncase\nfloat\nparams\ntypeof\ncatch\nfor\nprivate\nuint\nchar\n" + 
																	 "foreach\nprotected\nulong\nchecked\ngoto\npublic\nunchecked\nclass\nif\nreadonly\n" +
																	 "unsafe\nconst\nimplicit\nref\nushort\ncontinue\nin\nreturn\nusing\ndecimal\nint\n" +
																	 "sbyte\nvirtual\ndefault\ninterface\nsealed\nvolatile\ndelegate\ninternal\nshort\n" +
																	 "void\ndo\nis\nsizeof\nwhile\ndouble\nlock\nstackalloc\nelse\nlong\nstatic\nenum\n" +
																	 "namespace\nstring", "Insert",
						function(text) {
							text = text.normaliseNewLines();
							text = RXBuild.Utils.buildRegexpFromTokens(text.split("\n"), c);
							f(text);
						});
			}
			return [
					{
						text: "Generate...",
						submenu: {id: prefix + 'menuGroupInput', itemdata: [
							buildSimpleInserterMenuItem(scope, "Escape text for litteral matching...", insertEscapedRegExp),
							buildSimpleInserterMenuItem(scope, "Token list", function(s, f) { insertTokenList(s, f, true); }),
							buildSimpleInserterMenuItem(scope, "Token list (capturing groups)", function(s, f) { insertTokenList(s, f, false); })
							]}
					},
					{
						text: "Common",
						submenu: {id: prefix + 'menuGroupCommon', itemdata: [
							buildSimpleInserterMenuItem(scope, "Alpha-numeric bloc", "[a-zA-Z0-9]+"),
							buildSimpleInserterMenuItem(scope, "Alphabetic bloc", "[a-zA-Z]+"),
							buildSimpleInserterMenuItem(scope, "Numeric bloc", "[0-9]+"),
							buildSimpleInserterMenuItem(scope, "Whitespace", "[ \\t\\r\\n]")
							]}
					},
					{
						text: "Internet",
						submenu: {id: prefix + 'menuGroupInternet', itemdata: [
							buildSimpleInserterMenuItem(scope, "E-Mail", "\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b"),
							buildSimpleInserterMenuItem(scope, "HTML Tag", "<([A-Z][A-Z0-9]*)\\b[^>]*>(.*?)</\\1>"),
							buildSimpleInserterMenuItem(scope, "IP (exact)", "\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b"),
							buildSimpleInserterMenuItem(scope, "IP (good enough)", "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b")
							]}
					},
					{
						text: "Code",
						submenu: {id: prefix + 'menuGroupCode', itemdata: [
							buildSimpleInserterMenuItem(scope, "Hex number (0xBeef)", "\\b0[xX][0-9a-fA-F]+\\b"),
							buildSimpleInserterMenuItem(scope, "Floating point", "[-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?"),
							buildSimpleInserterMenuItem(scope, "Comment (// to eol)", "//.*$"), 
							buildSimpleInserterMenuItem(scope, "Comment /* */", "/\\*.*?\\*/"),
							buildSimpleInserterMenuItem(scope, "String", "\"[^\"\\r\\n\\\\]*(?:\\\\.[^\"\\r\\n\\\\]*)*\""),
							buildSimpleInserterMenuItem(scope, "Identifier bloc", "[a-zA-Z_][a-zA-Z0-9_]*")
							]}
					}
					];
		}
		function buildGeneratorMenu(scope, prefix) {
			function buildSimpleGeneratorMenuItem(scope, text, fn) {
				var oDelegate = RXBuild.Utils.createDelegate(scope, function(f) {
						RXBuild.UI.dlg.show(text, f.call(this.getRX()));
					});
				return {text: text,
					onclick: {
						fn: function(e, ev, f) { oDelegate(f); },
						obj: fn
					}};
			}
			var oRes = [];
			for (var i=0; i < RXBuild.RegExp.prototype.CodeBuilders.length; i++) {
				var oGenerator = RXBuild.RegExp.prototype.CodeBuilders[i];
				oRes.push(buildSimpleGeneratorMenuItem(scope, oGenerator[0], oGenerator[1]));
			};
			return oRes;
		}
		function buildQuickReferenceButton(prefix) {
			this.quickRef = new RXBuild.UI.QuickRefViewer(document.body, prefix + "_quickRef");
			var oRes = new YAHOO.widget.Overlay(prefix + "divQuickRef", { visible: false });
			oRes.setBody(this.quickRef.div);	
			oRes.render(document.body);
			return oRes;
		}
		var sPrefix = "rx_";
		var oCheckBoxContainer = buildRegexpOptionsOverlay(sPrefix);
		this.btnExplain = new YAHOO.widget.Button({ type: "button", label: "Explain", container:this.header,
			onclick: {
				fn: function() { this.explainRegexp(); },
				scope: this
			}});
		this.btnDisplayOptions = new YAHOO.widget.Button({ type: "menu", label: "Options", menu: oCheckBoxContainer, container:this.header});
		this.btnDisplayQuickRef = new YAHOO.widget.Button({ type: "menu", label: "Quick Reference", menu: buildQuickReferenceButton(sPrefix), container:this.header});
		this.chkCaseInsensitive = document.getElementById(sPrefix + "chkCaseInsensitive");
		this.chkMultiline = document.getElementById(sPrefix + "chkMultiline");
		this.chkGlobal = document.getElementById(sPrefix + "chkGlobal");

		var oUpdateButton = RXBuild.Utils.createDelegate(this, this.__updateOptionsButtonLabel);
		YAHOO.util.Event.addListener(this.chkCaseInsensitive, "change", oUpdateButton);
		YAHOO.util.Event.addListener(this.chkMultiline, "change", oUpdateButton);
		YAHOO.util.Event.addListener(this.chkGlobal, "change", oUpdateButton);

		var oPosChanged = RXBuild.Utils.createDelegate(this, function() {this.updateCaretPositionDisplay(); this.__raiseRegExpChanged();});
		YAHOO.util.Event.addListener(this.textBox, "change", oPosChanged);
		YAHOO.util.Event.addListener(this.textBox, "click", oPosChanged);
		YAHOO.util.Event.addListener(this.textBox, "keyup", oPosChanged);

		this.btnInsertItems = new YAHOO.widget.Button({
			type: "menu",
			label: "Insert...",
			id: sPrefix + "btnInsertMenu",
			container:this.header,
			onclick: {
				fn: function() {
					this.insertMenu.show();
					},
				scope: this
			}});
		this.insertMenu = new YAHOO.widget.Menu(sPrefix + "mnuInserter", {maxheight: "600px", position: "dynamic", context:[sPrefix + "btnInsertMenu", "tl", "bl"]});
		this.insertMenu.addItems(buildInserterMenu(this, sPrefix + "mnuInserter_"), 0);
		this.insertMenu.render(document.body);
		
		this.btnGenerateCodeItems = new YAHOO.widget.Button({
			type: "menu",
			label: "Generate ...",
			id: sPrefix + "btnGenerateMenu",
			container:this.header,
			onclick: {
				fn: function() {
					this.genCodeMenu.show();
					},
				scope: this
			}});
		this.genCodeMenu = new YAHOO.widget.Menu(sPrefix + "mnuGenerator", {maxheight: "600px", position: "dynamic", context:[sPrefix + "btnGenerateMenu", "tl", "bl"]});
		this.genCodeMenu.addItems(buildGeneratorMenu(this, sPrefix + "mnuGenerator_"), 0);
		this.genCodeMenu.render(document.body);
		
		this.divCaretPosition = buildCaretPositionOverlay(sPrefix, [this.header, "tr", "tr"]);
		this.textBox.focus();
		
		this.__updateOptionsButtonLabel();
};

})();