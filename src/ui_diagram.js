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
/*jsl:define YAHOO
*/
if (!RXBuild)
	/** @namespace The RXBuild namespace is the root namespace for all things RXBuild */
	var RXBuild = { };
if (!RXBuild.UI)
	/** @namespace The RXBuild.UI namespace is the root namespace for all things related to RXBuilds user interface */
	 RXBuild.UI = {};

(function() {
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
	RXBuild.UI.Diagram.prototype.render = function (renderable) {
	  this.renderable = renderable;
	  var size = renderable.measure();
	  this.updateSize(size);
	  this.offset = getPageTopLeft(this.canvas);
		renderable.draw(this, this.context, 0, 0, size);
	};
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
	var runInPath = function(ctx, stroke, fun, funContext) {
	  ctx.beginPath();
    var strokeBackup = ctx.strokeStyle;
    if (stroke)
      ctx.strokeStyle = stroke;
    var res = fun.call(funContext || this, ctx);
    ctx.stroke();
    ctx.closePath();
    if (stroke)
  		ctx.strokeStyle = strokeBackup;
  	return res;
	};
	
  var dir = RXBuild.UI.Diagram.Direction = {
    right: 0, down: 1, left: 2, up: 3
  };
  
	  var arrowSize = 7;
		var halfArrow = 3;
	var drawArrowCap = function(ctx, pos, dir) {
	  runInPath(ctx, null, function(ctx) {
  		var pPoint1 = {
  			x: pos.x + [-arrowSize, halfArrow, arrowSize, -halfArrow][dir],
  			y: pos.y + [-halfArrow, -arrowSize, halfArrow, arrowSize][dir]
  		};
  		var pPoint2 = {
  			x: pos.x + [-arrowSize, -halfArrow, arrowSize, halfArrow][dir],
  			y: pos.y + [halfArrow, -arrowSize, -halfArrow, arrowSize][dir]
  		};
  		ctx.moveTo(pPoint1.x, pPoint1.y);
  		ctx.lineTo(pos.x, pos.y);
  		ctx.lineTo(pPoint2.x, pPoint2.y);
  	});
	};
	RXBuild.UI.Diagram.prototype.showPoint = function(point, color) {
	  runInPath(this.context, color, function(ctx) {
  		ctx.moveTo(point.x - 3, point.y - 3);
  		ctx.lineTo(point.x + 3, point.y + 3);
  		ctx.moveTo(point.x - 3, point.y + 3);
  		ctx.lineTo(point.x + 3, point.y - 3);
	  });
	};
	RXBuild.UI.Diagram.prototype.drawArrow = function(start, stop, color) {
		var endDirection = 
				 (start.y < stop.y ? dir.down :
				 (start.x < stop.x ? dir.right :
				 (start.x > stop.x ? dir.left :
					dir.up))); // Yeah that's right, so dont try any fancy-schmancy angles, you'll be disappointed
	  runInPath(this.context, color, function(ctx) {
  		ctx.moveTo(start.x, stop.y);
  		ctx.lineTo(stop.x, stop.y);
	  });
		drawArrowCap(this.context, stop, endDirection);
	};
	RXBuild.UI.Diagram.prototype.drawCorneredLine = function(start, stop, startVertical, drawCap, color) {
		var startDirection = startVertical ? (start.y < stop.y ? dir.down : dir.up) :
							 (start.x < stop.x ? dir.right : dir.left);
		var endDirection = (!startVertical) ? (start.y < stop.y ? dir.down : dir.up) :
							 (start.x < stop.x ? dir.right : dir.left);
	  runInPath(this.context, color, function(ctx) {
  		var radius = 5;
  		var firstCorner = {
  			x: startVertical ? start.x : stop.x + (startDirection == dir.left ? radius : -radius),
  			y: startVertical ? stop.y + (startDirection == dir.up ? radius : -radius) : start.y
  		};
  		var circleCenter = {
  			x: startVertical ? (start.x + (endDirection == dir.left ? -radius : radius)) : firstCorner.x,
  			y: startVertical ? firstCorner.y : (start.y + (endDirection == dir.up ? -radius : radius))
  		};
  		var startAngle = ([2, 3, 0, 1][endDirection]  * Math.PI) / 2.0;
  		var endAngle = (startDirection  * Math.PI) / 2.0;
  		var isAntiClockWise =
  			(startDirection == dir.up && endDirection == dir.left || startDirection == dir.down && endDirection == dir.right ||
  			 startDirection == dir.left && endDirection == dir.down || startDirection == dir.right && endDirection == dir.up);
  		ctx.moveTo(start.x, start.y);
  		ctx.lineTo(firstCorner.x, firstCorner.y);
  		ctx.arc(circleCenter.x, circleCenter.y, radius, startAngle, endAngle, isAntiClockWise);
  		ctx.lineTo(stop.x, stop.y);
		});  
		if (drawCap) drawArrowCap(this.context, stop, endDirection);
	};
	RXBuild.UI.Diagram.Renderable = function() {};
	RXBuild.UI.Diagram.Renderable.prototype.constructor = RXBuild.UI.Diagram.Renderable;
	RXBuild.UI.Diagram.Renderable.prototype.measure = function() {
		return {w: 0, h: 0};
	};
	RXBuild.UI.Diagram.Renderable.prototype.draw = function(render, ctx, x, y, size) { /* virtual */ };

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
      var dom = document.createElement("DIV");
  		dom.setAttribute("style", "position: absolute; top: 0px; left: 0px;");
      dom.innerHTML = element;
  		document.body.appendChild(dom);
  		element = dom;
    }
    this.element = element;
  };
  RXBuild.UI.Diagram.DomRenderer.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.Diagram.DomRenderer.prototype.constructor = RXBuild.UI.Diagram.DomRenderer;
	RXBuild.UI.Diagram.DomRenderer.prototype.measure = function() {
		return this.size = {w: this.element.offsetWidth, h: this.element.offsetHeight};
	};
	RXBuild.UI.Diagram.DomRenderer.prototype.draw = function(render, ctx, x, y, size) {
	  this.element.style.left = (render.offset.x + x) + "px";
	  this.element.style.top = (render.offset.y + y) + "px";
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
    if (typeof innerRenderable == "string") innerRenderable = new RXBuild.UI.Diagram.DomRenderer(innerRenderable);
    this.innerRenderable = innerRenderable;
    this.padding = padding || {w: 3, h: 3};
    this.spacing = spacing || {w: 3, h: 3};
  };
  RXBuild.UI.Diagram.Box.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.Diagram.Box.prototype.constructor = RXBuild.UI.Diagram.Box;
  RXBuild.UI.Diagram.Box.prototype.measure = function() {
    var child = this.innerRenderableSize = this.innerRenderable.measure();
		this.size = {w: child.w + this.padding.w * 2 + this.spacing.w * 2, h: child.h + this.padding.h * 2 + this.spacing.h * 2};
    return this.size;
	};
	RXBuild.UI.Diagram.Box.prototype.draw = function(render, ctx, x, y, size) {
	  render.context.strokeRect(x + this.padding.w, y + this.padding.h, this.innerRenderableSize.w + this.spacing.w * 2, this.innerRenderableSize.h + this.spacing.w * 2);
    this.innerRenderable.draw(render, ctx, x + this.padding.w + this.spacing.w, y + this.padding.h + this.spacing.h, size);
    var middle = y + this.size.h / 2;
    this.connectors = [{x: x + this.padding.w, y: middle}, {x: x + this.size.w - this.padding.w, y: middle}];
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
    this.spacing = spacing || 3;
  };
  RXBuild.UI.Diagram.Align.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.Diagram.Align.prototype.constructor = RXBuild.UI.Diagram.Boxer;
  RXBuild.UI.Diagram.Align.prototype.measure = function() {
    var childSizes = this.childSizes = new Array(this.children.count);
    var max = 0;
    var running = 0;
    for (var i = this.children.length - 1; i >= 0; i--){
      var size = this.children[i].measure();
      childSizes[i] = size;
      if (this.vertical) {
        if (size.w > max) max = size.w;
        running += size.h;
      } else {
        if (size.h > max) max = size.h;
        running += size.w;
      }
    }
    running += (this.children.length - 1) * this.spacing;
    this.size = this.vertical ? {w: max, h: running} : {w: running, h:max};
		return this.size;
	};
	RXBuild.UI.Diagram.Align.prototype.draw = function(render, ctx, x, y, size) {
	  var v = this.vertical;
	  var running = v ? y : x;
	  var max = v ? this.size.w : this.size.h;
	  for (var i=0, iNumberOfChildren = this.children.length; i < iNumberOfChildren; i++) {
	    var child = this.children[i];
	    var childsize = this.childSizes[i];
	    var pos = { x: x, y: y };
	    if (v) {
	      pos.x += (max - childsize.w) / 2;
	      pos.y += running;
	    } else {
	      pos.x += running;
	      pos.y += (max - childsize.h) / 2;
	    }
      running += (v ? childsize.h : childsize.w) + this.spacing;
	    child.draw(render, ctx, pos.x, pos.y, size);
	  }
	};
	RXBuild.UI.Diagram.Box.connect = function(render, a, b, dontdrawarrow) {
	  if (a.connectors) a = a.connectors[1];
	  if (b.connectors) b = b.connectors[0];

	  if (typeof a.length == "number") {
	    for (var i = a.length - 1; i >= 0; i--)
	      RXBuild.UI.Diagram.Box.connect(render, a[i], b, i > 0);
	    return;
	  }
	  if (typeof b.length == "number") {
	    for (var i = b.length - 1; i >= 0; i--)
	      RXBuild.UI.Diagram.Box.connect(render, a, b[i]);
	    return;
	  }

	  var dir = b.y - a.y;
	  var color = null;
	  if (dir == 0) render.drawArrow(a, b, color);
	  else {
	    var mid = { x: a.x + (b.x - a.x) / 2, y: a.y + (b.y - a.y) / 2};
	    render.drawCorneredLine(a, mid);
	    render.drawCorneredLine(mid, b, true, !dontdrawarrow);
	  }
	};
  /** Creates a new instance of RXBuild.UI.Diagram.Sequence (which inherits RXBuild.UI.Diagram.Align)
    @class The RXBuild.UI.Diagram.Sequence displays a connected sequence of renderables
    @p
    @base RXBuild.UI.Diagram.Align
    @constructor
    @param {} children
  */
  RXBuild.UI.Diagram.Sequence = function (children) {
    RXBuild.UI.Diagram.Align.call(this, children, false, arrowSize * 5);
  };
  RXBuild.UI.Diagram.Sequence.prototype = new RXBuild.UI.Diagram.Align;
  RXBuild.UI.Diagram.Sequence.prototype.constructor = RXBuild.UI.Diagram.Sequence;
	RXBuild.UI.Diagram.Sequence.prototype.draw = function(render, ctx, x, y, size) {
	  RXBuild.UI.Diagram.Align.prototype.draw.call(this, render, ctx, x, y, size);
	  var previousChild = null;
	  for (var i=0; i < this.children.length; i++) {
	    var child = this.children[i];
	    if (previousChild == null)
	      this.connectors = [child.connectors[0], null];
	    else
	      RXBuild.UI.Diagram.Box.connect(render, previousChild, child);
	    previousChild = child;
	  }
	  this.connectors[1] = previousChild.connectors[1];
  };
  /** Creates a new instance of RXBuild.UI.Diagram.Alternates (which inherits RXBuild.UI.Diagram.Align)
    @class The RXBuild.UI.Diagram.Alternates displays a connected stack of renderables
    @p
    @base RXBuild.UI.Diagram.Align
    @constructor
    @param {} children
  */
  RXBuild.UI.Diagram.Alternates = function (children) {
    RXBuild.UI.Diagram.Align.call(this, children, true, arrowSize);
  };
  RXBuild.UI.Diagram.Alternates.prototype = new RXBuild.UI.Diagram.Align;
  RXBuild.UI.Diagram.Alternates.prototype.constructor = RXBuild.UI.Diagram.Sequence;
	RXBuild.UI.Diagram.Alternates.prototype.draw = function(render, ctx, x, y, size) {
	  RXBuild.UI.Diagram.Align.prototype.draw.call(this, render, ctx, x, y, size);
	  this.connectors = [new Array(this.children.length), new Array(this.children.length)];
	  for (var i=0; i < this.children.length; i++) {
	    var child = this.children[i];
	    this.connectors[0][i] = child.connectors[0];
	    this.connectors[1][i] = child.connectors[1];
	  }
  };
})();