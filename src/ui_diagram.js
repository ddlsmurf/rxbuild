/* (c) Copyright 2010 Eric Doughty-Papassideris. All Rights Reserved.

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

/**	@fileOverview Diagram classes, which is a Canvas backed drawing and Dom placing system
	@requires utils.js
*/
if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.UI)
	/** @namespace The RXBuild.UI namespace is the root namespace for all things related to RXBuilds user interface */
	 RXBuild.UI = {};

(function() {
  
  var getPageTopLeft = function(el) {
	  var res = {x: 0, y: 0};
	  while (el) {
	    res.x += el.offsetLeft;
	    res.y += el.offsetTop;
	    var parent = el.offsetParent;
	    el = (el != parent) ? parent : null;
	  }
	  return res;
	};
  
	/** 
		Creates a new instance of RXBuild.UI.Status
		@class The RXBuild.UI.Status controls an always-on-top div that shows a tasks status
		@constructor
		@param {String} [canvasName] The name of the canvas to build
		@param {String} [className] A CSS class name to apply to the canvas.
		@param {HTMLElement} [parent=document.body] The container for the canvas
	*/
	RXBuild.UI.Diagram = function (canvasName, className, parent) {
		this.canvas = document.createElement("CANVAS");
		if (className) this.canvas.setAttribute("class", className);
		if (canvasName)	this.canvas.setAttribute("id", canvasName);
		this.canvas.setAttribute("style", "top: 0px; left: 0px; padding: 0; margin: 0; border: 0;");
		(parent ? parent : document.body).appendChild(this.canvas);
		if (window.G_vmlCanvasManager) {
			window.G_vmlCanvasManager.initElement(this.canvas);
		}
		this.context = this.canvas.getContext("2d");
	};
	RXBuild.UI.Diagram.prototype.constructor = RXBuild.UI.Diagram;
	RXBuild.UI.Diagram.prototype.updateSize = function (size) {
		if (size.w != this.canvas.width || size.h != this.canvas.height) {
			this.canvas.style.width = size.w + "px";
			this.canvas.style.height = size.h + "px";
			this.canvas.width = size.w;
			this.canvas.height = size.h;
		} else
  		this.canvas.width = this.canvas.width;
	};
	RXBuild.UI.Diagram.prototype.clear = function () {
	  if (this.renderable) this.renderable.remove();
	  this.renderable = null;
	  this.canvas.width = this.canvas.width;
	};
	RXBuild.UI.Diagram.prototype.render = function (renderable) {
	  if (this.renderable) this.renderable.remove();
	  this.renderable = renderable;
	  var size = renderable.measure(this);
	  this.updateSize(size);
	  this.offset = getPageTopLeft(this.canvas);
		renderable.draw(this, this.context, 0, 0, size);
	};

	RXBuild.UI.Diagram.Renderable = function() {};
	RXBuild.UI.Diagram.Renderable.prototype.constructor = RXBuild.UI.Diagram.Renderable;
	RXBuild.UI.Diagram.Renderable.prototype.measure = function(render) {
		return {w: 0, h: 0};
	};
	RXBuild.UI.Diagram.Renderable.prototype.draw = function(render, ctx, x, y, size) { /* virtual */ };
	RXBuild.UI.Diagram.Renderable.prototype.remove = function() { /* virtual */ };

  /** Creates a new instance of RXBuild.UI.Diagram.DomRenderer (which inherits RXBuild.UI.Diagram.Renderable)
    @class The RXBuild.UI.Diagram.DomRenderer renders a DOM element (by positioning it)
    @p
    @base RXBuild.UI.Diagram.Renderable
    @constructor
    @param {} element
  */
  RXBuild.UI.Diagram.DomRenderer = function (element) {
    RXBuild.UI.Diagram.Renderable.call(this);
    if (typeof element == "string") {
      throw {message: ("Creating a dom from string")};
    }
    this.element = element;
  };
  
  RXBuild.UI.Diagram.DomRenderer.makeDiv = function(html, parent) {
    var dom = document.createElement("DIV");
		dom.setAttribute("style", "position: absolute; top: 0px; left: 0px; overflow: visible; white-space:nowrap;");
    dom.innerHTML = html;
		(parent || document.body).appendChild(dom);
		return dom;
  };
  RXBuild.UI.Diagram.DomRenderer.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.Diagram.DomRenderer.prototype.constructor = RXBuild.UI.Diagram.DomRenderer;
	RXBuild.UI.Diagram.DomRenderer.prototype.measure = function(render) {
		return this.size = {w: this.element.offsetWidth, h: this.element.offsetHeight};
	};
	RXBuild.UI.Diagram.DomRenderer.prototype.draw = function(render, ctx, x, y, size) {
	  this.element.style.left = (x) + "px";
	  this.element.style.top = (y) + "px";
	};
  RXBuild.UI.Diagram.DomRenderer.prototype.remove = function() {
    this.element.parentNode.removeChild(this.element);
    this.element = null;
  };
  /** Creates a new instance of RXBuild.UI.Diagram.Box (which inherits RXBuild.UI.Diagram.Renderable)
    @class The RXBuild.UI.Diagram.Box draws the inner renderer with a box around it
    @p
    @base RXBuild.UI.Diagram.Renderable
    @constructor
    @param {} innerRenderable
  */
  RXBuild.UI.Diagram.Box = function (innerRenderable, padding, spacing) {
    RXBuild.UI.Diagram.Renderable.call(this, innerRenderable);
    this.debug = innerRenderable;
    if (innerRenderable && !innerRenderable.measure) innerRenderable = new RXBuild.UI.Diagram.DomRenderer(innerRenderable);
    this.innerRenderable = innerRenderable;
    this.padding = padding || {w: 3, h: 3};
    this.spacing = spacing || {w: 3, h: 3};
  };
  RXBuild.UI.Diagram.Box.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.Diagram.Box.prototype.constructor = RXBuild.UI.Diagram.Box;
  var normalisePadding = function(padding) {
    return {
      x: (typeof padding.x == "undefined") ? padding.w : padding.x,
      r: (typeof padding.r == "undefined") ? padding.w : padding.r,
      y: (typeof padding.y == "undefined") ? padding.h : padding.y,
      b: (typeof padding.b == "undefined") ? padding.h : padding.b
    };
  };
  var inflateRect = function(orig, pad) {
    var result = {
      w: orig.w + pad.x + pad.r,
      h: orig.h + pad.y + pad.b
    };
    if (typeof orig.x == "number") {
      result.x = orig.x - pad.x;
    }
    if (typeof orig.y == "number") {
      result.y = orig.y - pad.y;
    }
    return result;
  };
  var offsetRect = function(rect, pad) {
    rect.x += pad.x;
    rect.y += pad.y;
  };
  RXBuild.UI.Diagram.Box.prototype.measure = function(render) {
    var child = this.innerRenderableSize = this.innerRenderable.measure(render);
    this.size = inflateRect(inflateRect({w: child.w, h: child.h}, normalisePadding(this.padding)), normalisePadding(this.spacing));
		if (this.innerRenderable.baseOffset) this.baseOffset = this.innerRenderable.baseOffset;
    return this.size;
	};
  RXBuild.UI.Diagram.Box.prototype.remove = function() {
    this.innerRenderable.remove();
  };
  RXBuild.UI.Diagram.Box.prototype.drawFrame = function (render, child, frame, overall) {
    render.context.strokeRect(frame.x, frame.y, frame.w, frame.h);
  };
	RXBuild.UI.Diagram.Box.prototype.draw = function(render, ctx, x, y, size) {
	  var childRect = {
	    x: x, y: y,
	    w: this.innerRenderableSize.w, h: this.innerRenderableSize.h
	  };
	  var spacing = normalisePadding(this.spacing);
	  var padding = normalisePadding(this.padding);
	  offsetRect(childRect, spacing);
	  offsetRect(childRect, padding);
	  var frameRect = inflateRect(childRect, spacing);
	  var totalRect = inflateRect(frameRect, padding);
	  this.drawFrame(render, childRect, frameRect, totalRect);
    this.innerRenderable.draw(render, ctx, childRect.x, childRect.y, childRect);
	};

	/** Creates a new instance of RXBuild.UI.Diagram.Boxer (which inherits RXBuild.UI.Diagram.Renderable)
    @class The RXBuild.UI.Diagram.Boxer draws the inner renderer with a box around it
    @p
    @base RXBuild.UI.Diagram.Renderable
    @constructor
    @param {} innerRenderable
  */
  RXBuild.UI.Diagram.Align = function (children, vertical, spacing) {
    this.children = children;
    this.vertical = vertical;
    this.spacing = typeof spacing == "undefined" ? 3 : spacing;
  };
  RXBuild.UI.Diagram.Align.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.Diagram.Align.prototype.constructor = RXBuild.UI.Diagram.Boxer;
  RXBuild.UI.Diagram.Align.prototype.measure = function(render) {
    var childSizes = this.childSizes = new Array(this.children.count);
    var max = 0;
    var running = 0;
    for (var i = this.children.length - 1; i >= 0; i--){
      var child = this.children[i];
      var size = child.measure(render);
      childSizes[i] = size;
      if (this.vertical) {
        if (size.w > max) max = size.w;
        running += size.h;
      } else {
        var height = child.baseOffset || 0;
        height = size.h + (height < 0 ? - height : height);
        if (height > max) max = height;
        running += size.w;
      }
    }
    running += (this.children.length - 1) * this.spacing;
    this.size = this.vertical ? {w: max, h: running} : {w: running, h:max};
		return this.size;
	};
  RXBuild.UI.Diagram.Align.prototype.remove = function() {
    for (var i = this.children.length - 1; i >= 0; i--){
      this.children[i].remove();
    }
  };
	RXBuild.UI.Diagram.Align.prototype.draw = function(render, ctx, x, y, size) {
	  var v = this.vertical;
	  var running = 0;
	  var max = v ? this.size.w : this.size.h;
    //console.dir({pos: [x, y], size: [this.size.w, this.size.h]});
    //console.group(this.debug || (this.vertical ? "vertical" : "horizontal") + " align");
	  for (var i=0, iNumberOfChildren = this.children.length; i < iNumberOfChildren; i++) {
	    var child = this.children[i];
	    var childsize = this.childSizes[i];
	    var pos = { x: x, y: y };
	    if (v) {
	      pos.x += (max - childsize.w) / 2;
	      pos.y += running;
	    } else {
	      pos.x += running;
	      pos.y += (max - childsize.h) / 2 - (child.baseOffset || 0);
	    }
      running += (v ? childsize.h : childsize.w) + this.spacing;
	    child.draw(render, ctx, pos.x, pos.y, size);
	  }  
	  //console.groupEnd();
	};
})();