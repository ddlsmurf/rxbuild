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

/**	@fileOverview Holds the status display control
	@requires utils.js
*/

if (!UI)
	var UI = { };

(function() {
	/** 
		Creates a new instance of UI.Status
		@class The UI.Status controls an always-on-top div that shows a tasks status
		@constructor
		@param {String} divName The name of the div to use in the end
	*/
	UI.Status = function (divName) {
		this.div = document.createElement("DIV");
		this.div.setAttribute("class", "");
		this.div.setAttribute("id", divName);
		this.div.setAttribute("style", "position: absolute; top: 0px; z-index: 5; padding: 5px; margin: 5px; right: 30px; " +
			"border: 1px solid white;");
		this.div.style.display = "none";
		this.div.style.backgroundColor = "#ffddaa";
		YAHOO.util.Dom.setStyle(this.div, 'opacity', '0');
		this.div.innerHTML = "Fo' shizzle";
		document.body.appendChild(this.div);
		this._oAutoHide = new UI.DelayedRefresh(5000);
		this._isVisible = false;
	}
	UI.Status.prototype.constructor = UI.Status;
	/** Displays the status in the top right
		@param {String} text The text to display in the body
		@param {String} color An (optional) color to use as the new background color (in format #fffff)
		@param {Number} autohideTimeout The number of milliseconds after which to hide the status object
	*/
	UI.Status.prototype.show = function(text, color, autohideTimeout) {
		this.div.innerHTML = text;
		this._oAutoHide.setPendingEvent(null);
		if (!this._isVisible || color) {
			this._isVisible = true;
			this.div.style.display = "";
			var oAnim = { opacity: {to: 1}};
			if (color)
			  oAnim.backgroundColor= {to: color};
			oAnim = new YAHOO.util.ColorAnim(this.div, oAnim, 1, YAHOO.util.Easing.easeOut);
			oAnim.animate();
		}
		if (typeof(autohideTimeout) != "undefined")
			this._oAutoHide.setPendingEvent(createDelegate(this, function() { this.hide(); }), autohideTimeout);
	};
	/** Hides this status from view
	*/
	UI.Status.prototype.hide = function() {
		this._oAutoHide.setPendingEvent(null);
		try {
			this._isVisible = false;
			var oAnim = new YAHOO.util.Anim(this.div, {
				opacity: {to: 0}
			}, 1, YAHOO.util.Easing.easeOut);
			oAnim.onComplete.subscribe(createDelegate(this, function() {this.div.style.display = "none";})); 
			oAnim.animate();		
		} catch (e) {
			this.div.style.display = "none";
		}
	};


})();