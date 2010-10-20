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

/**	@fileOverview Syntax diagram doodling classes
	@requires utils.js
*/
(function() {
  var dir = RXBuild.UI.Diagram.Direction;
  
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
  
  
  RXBuild.UI.SyntaxDiagram = {};

  var arrowSize = 7;
	var halfArrow = 3;
	var lineAngleRadius = 5;

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
	RXBuild.UI.SyntaxDiagram.Plotter = {
	  config: {
	    arrowSize: arrowSize,
	    halfArrow: halfArrow,
	    lineAngleRadius: lineAngleRadius
	  },
	  arrowCap: drawArrowCap,
	  runInPath: runInPath,
	  showPoint: function(context, point, color) {
  	  runInPath(context, color, function(ctx) {
    		ctx.moveTo(point.x - 3, point.y - 3);
    		ctx.lineTo(point.x + 3, point.y + 3);
    		ctx.moveTo(point.x - 3, point.y + 3);
    		ctx.lineTo(point.x + 3, point.y - 3);
  	  });
  	},
	  arrow: function(context, start, stop, color, withcap) {
  		var endDirection = 
  				 (start.y < stop.y ? dir.down :
  				 (start.x < stop.x ? dir.right :
  				 (start.x > stop.x ? dir.left :
  					dir.up))); // Yeah that's right, so dont try any fancy-schmancy angles, you'll be disappointed
  	  runInPath(context, color, function(ctx) {
    		ctx.moveTo(start.x, stop.y);
    		ctx.lineTo(stop.x, stop.y);
  	  });
  	  if (withcap || typeof withcap == "undefined")	drawArrowCap(context, stop, endDirection);
  	},
  	corneredLine: function(context, start, stop, startVertical, drawCap, color) {
  		var startDirection = startVertical ? (start.y < stop.y ? dir.down : dir.up) :
  							 (start.x < stop.x ? dir.right : dir.left);
  		var endDirection = (!startVertical) ? (start.y < stop.y ? dir.down : dir.up) :
  							 (start.x < stop.x ? dir.right : dir.left);
  	  runInPath(context, color, function(ctx) {
    		var firstCorner = {
    			x: startVertical ? start.x : stop.x + (startDirection == dir.left ? lineAngleRadius : -lineAngleRadius),
    			y: startVertical ? stop.y + (startDirection == dir.up ? lineAngleRadius : -lineAngleRadius) : start.y
    		};
    		var circleCenter = {
    			x: startVertical ? (start.x + (endDirection == dir.left ? -lineAngleRadius : lineAngleRadius)) : firstCorner.x,
    			y: startVertical ? firstCorner.y : (start.y + (endDirection == dir.up ? -lineAngleRadius : lineAngleRadius))
    		};
    		var startAngle = ([2, 3, 0, 1][endDirection]  * Math.PI) / 2.0;
    		var endAngle = (startDirection  * Math.PI) / 2.0;
    		var isAntiClockWise =
    			(startDirection == dir.up && endDirection == dir.left || startDirection == dir.down && endDirection == dir.right ||
    			 startDirection == dir.left && endDirection == dir.down || startDirection == dir.right && endDirection == dir.up);
    		ctx.moveTo(start.x, start.y);
    		ctx.lineTo(firstCorner.x, firstCorner.y);
    		ctx.arc(circleCenter.x, circleCenter.y, lineAngleRadius, startAngle, endAngle, isAntiClockWise);
    		ctx.lineTo(stop.x, stop.y);
  		});  
  		if (drawCap) drawArrowCap(context, stop, endDirection);
  	},
  	connect: function(render, a, b, alignLeft) {
  	  if (a.connectors) a = a.connectors[1];
  	  if (b.connectors) b = b.connectors[0];

  	  if (typeof a.length == "number") {
  	    for (var i = a.length - 1; i >= 0; i--)
  	      this.connect(render, a[i], b, alignLeft);
  	    return;
  	  }
  	  if (typeof b.length == "number") {
  	    for (var i = b.length - 1; i >= 0; i--)
  	      this.connect(render, a, b[i], alignLeft);
  	    return;
  	  }

  	  var dir = b.y - a.y;
  	  var color = null;

  	  if (dir == 0) render.plot.arrow(render.context, a, b, color, false);
  	  else {
  	    if (b.x < a.x) {
  	      var c = b;
  	      b = a;
  	      a = c;
  	    }
  	    var mid = { x: alignLeft ? a.x + lineAngleRadius : b.x - lineAngleRadius, y: a.y + (b.y - a.y) / 2};
  	    this.corneredLine(render.context, a, mid);
  	    this.corneredLine(render.context, mid, b, true);
  	  }
  	}
	};
  
  /** Creates a new instance of RXBuild.UI.Diagram.Box (which inherits RXBuild.UI.Diagram.Renderable)
    @class The RXBuild.UI.Diagram.Box draws the inner renderer with a box around it
    @p
    @base RXBuild.UI.Diagram.Renderable
    @constructor
    @param {} innerRenderable
  */
  RXBuild.UI.SyntaxDiagram.RuleBox = function (innerRenderable) {
    RXBuild.UI.Diagram.Box.call(this, innerRenderable);
  };
  RXBuild.UI.SyntaxDiagram.RuleBox.prototype = new RXBuild.UI.Diagram.Box;
  RXBuild.UI.SyntaxDiagram.RuleBox.prototype.constructor = RXBuild.UI.SyntaxDiagram.RuleBox;
  RXBuild.UI.SyntaxDiagram.RuleBox.prototype.measure = function(render) {
    this.padding = { x: 2 * render.plot.config.arrowSize, r: 3, h: 3 };
    return RXBuild.UI.Diagram.Box.prototype.measure.call(this, render);
	};
  RXBuild.UI.SyntaxDiagram.RuleBox.prototype.drawFrame = function (render, child, frame, overall) {
    var color = null;
    function frameRect(rect, clr) {
      render.plot.runInPath(render.context, clr, function(ctx) {
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
      });
    }
    frameRect(frame, color);
    //frameRect(child, "red");
    //frameRect(overall, "green");

    var middle = overall.y + overall.h / 2;
    this.connectors = [{x: overall.x, y: middle}, {x: overall.x + overall.w, y: middle}];
    render.plot.runInPath(render.context, color, function(ctx) {
  		ctx.moveTo(frame.x + frame.w, middle);
  		ctx.lineTo(overall.x + overall.w, middle);
  		ctx.moveTo(overall.x, middle);
  		ctx.lineTo(frame.x, middle);
	  }, this);
	  render.plot.arrowCap(render.context, {x: frame.x - render.plot.config.halfArrow, y: middle}, dir.right);
  };
	RXBuild.UI.SyntaxDiagram.Repeated = function (box, label, direction, leftToRight) {
    RXBuild.UI.Diagram.Renderable.call(this, box);
    this.debug = box;
    if (!box.measure) box = new RXBuild.UI.Diagram.DomRenderer(box);
    if (label && !label.measure) label = new RXBuild.UI.Diagram.DomRenderer(label);
    this.box = box;
    this.label = label;
    this.direction = direction;
    this.leftToRight = leftToRight;
  };
  RXBuild.UI.SyntaxDiagram.Repeated.prototype = new RXBuild.UI.Diagram.Renderable;
  RXBuild.UI.SyntaxDiagram.Repeated.prototype.constructor = RXBuild.UI.SyntaxDiagram.Repeated;
  RXBuild.UI.SyntaxDiagram.Repeated.prototype.measure = function(render) {
    var boxSize = this.boxSize = this.box.measure(render);
    var labelSize = this.labelSize = this.label ? this.label.measure(render) : {w: 0, h: 0};
	  var lineHeight = labelSize.h + 2 * render.plot.config.lineAngleRadius;
	  var labelWidth = this.label ? labelSize.w + render.plot.config.lineAngleRadius * 2 : 0;
	  this.baseOffset = this.direction == dir.up ? lineHeight / 2 : -lineHeight / 2;
	  this.baseOffset += this.box.baseOffset || 0;
		this.size = {
		  w: (labelWidth > boxSize.w ? labelWidth : boxSize.w) + render.plot.config.arrowSize * 2,
		  h: boxSize.h + lineHeight
		};
    return this.size;
	};
  RXBuild.UI.SyntaxDiagram.Repeated.prototype.remove = function() {
    this.box.remove();
    if (this.label) this.label.remove();
  };
	RXBuild.UI.SyntaxDiagram.Repeated.prototype.draw = function(render, ctx, x, y, size) {
	  var lineHeight = this.labelSize.h + 2 * render.plot.config.lineAngleRadius;
	  
    this.box.draw(render, ctx,
      x + (this.size.w - this.boxSize.w) / 2,
      y + (this.direction == dir.up ? lineHeight : 0), size);

    var line = lineHeight / 2 + (this.direction == dir.up ? 0 : this.boxSize.h);
    var center = { x: x + this.size.w / 2, y: y + this.size.h };
    var mid1 = { x: center.x + this.labelSize.w / 2, y: y + line};
    var mid2 = { x: center.x - this.labelSize.w / 2, y: y + line};
    
    var cx = this.connectors = [
      {x: x, y: this.box.connectors[0].y},
      {x: x + this.size.w, y: this.box.connectors[1].y}];
    
    render.plot.corneredLine(render.context, mid1, {x: cx[1].x - render.plot.config.arrowSize / 2, y: cx[1].y}, false, this.leftToRight);
    render.plot.corneredLine(render.context, mid2, {x: cx[0].x + render.plot.config.arrowSize / 2, y: cx[0].y}, false, !this.leftToRight);
    
    var color = null;
    render.plot.runInPath(ctx, color, function(ctx) {
  		ctx.moveTo(x, cx[0].y);
  		ctx.lineTo(this.box.connectors[0].x, cx[0].y);
  		ctx.moveTo(this.box.connectors[1].x, cx[1].y);
  		ctx.lineTo(cx[1].x, cx[1].y);
	  }, this);
    
    if (this.label) {
      this.label.draw(render, ctx,
        x + (this.size.w - this.labelSize.w) / 2,
        y + line - this.labelSize.h / 2, size);
    }
    //  console.dir({id: this.debug, pos: [x, y], size: [this.size.w, this.size.h]});
	};
	
  /** Creates a new instance of RXBuild.UI.Diagram.Sequence (which inherits RXBuild.UI.Diagram.Align)
    @class The RXBuild.UI.Diagram.Sequence displays a connected sequence of renderables
    @p
    @base RXBuild.UI.Diagram.Align
    @constructor
    @param {} children
  */
  RXBuild.UI.SyntaxDiagram.Sequence = function (children) {
    RXBuild.UI.Diagram.Align.call(this, children, false, 0);
    this.debug = "seq";
  };
  RXBuild.UI.SyntaxDiagram.Sequence.prototype = new RXBuild.UI.Diagram.Align;
  RXBuild.UI.SyntaxDiagram.Sequence.prototype.constructor = RXBuild.UI.SyntaxDiagram.Sequence;
	RXBuild.UI.SyntaxDiagram.Sequence.prototype.draw = function(render, ctx, x, y, size) {
	  RXBuild.UI.Diagram.Align.prototype.draw.call(this, render, ctx, x, y, size);
	  this.connectors = [this.children[0].connectors[0], this.children[this.children.length - 1].connectors[1]];
  };
  /** Creates a new instance of RXBuild.UI.Diagram.Alternates (which inherits RXBuild.UI.Diagram.Align)
    @class The RXBuild.UI.Diagram.Alternates displays a connected stack of renderables
    @p
    @base RXBuild.UI.Diagram.Align
    @constructor
    @param {} children
  */
  RXBuild.UI.SyntaxDiagram.Alternates = function (children) {
    RXBuild.UI.Diagram.Align.call(this, children, true, 3);
    this.debug = "alt";
  };
  RXBuild.UI.SyntaxDiagram.Alternates.prototype = new RXBuild.UI.Diagram.Align;
  RXBuild.UI.SyntaxDiagram.Alternates.prototype.constructor = RXBuild.UI.SyntaxDiagram.Alternates;
  RXBuild.UI.SyntaxDiagram.Alternates.prototype.measure = function(render) {
    this.size = RXBuild.UI.Diagram.Align.prototype.measure.call(this, render);
    this.size.w += 4 * render.plot.config.lineAngleRadius;
    return this.size;
	};
	RXBuild.UI.SyntaxDiagram.Alternates.prototype.draw = function(render, ctx, x, y, size) {
	  RXBuild.UI.Diagram.Align.prototype.draw.call(this, render, ctx, x, y, size);
	  var middle = y + this.size.h / 2;
	  this.connectors = [{x: x, y: middle}, {x: x + this.size.w, y: middle}];
	  for (var i=0; i < this.children.length; i++) {
	    var child = this.children[i];
	    render.plot.connect(render, this.connectors[0], child.connectors[0], true);
	    render.plot.connect(render, child.connectors[1], this.connectors[1], false);
	  }
  };
  RXBuild.UI.DiagramViewer = function (container, id) {
		RXBuild.Engine.ResultListener.call(this);
		this.container = document.createElement("DIV");
		this.container.className = "rxb-diagram";
		this.container.setAttribute("id", id);
		container.appendChild(this.container);
		this.errorcontainer = document.createElement("DIV");
		this.errorcontainer.setAttribute("id", id + "_errorContainer");
		container.appendChild(this.errorcontainer);
		this.canvas = new RXBuild.UI.Diagram("rxb-diagram-" + id, null, this.container);
		this.canvas.plot = RXBuild.UI.SyntaxDiagram.Plotter;
	};
	RXBuild.UI.DiagramViewer.prototype.constructor = RXBuild.UI.DiagramViewer;
	/** Updates the view to reflect the provided regular expression and input
		@param {RXBuild.RegExp} regex The new pattern
		@param {String} input The sample input text in which to run the matches
	*/
	RXBuild.UI.DiagramViewer.prototype.updateRegExp = function (regex, input) {
	  this.canvas.clear();
		var oCompiledRegExp;
		try {
			oCompiledRegExp = regex.compile();
			this.container.style.display = "";
			this.errorcontainer.style.display = "none";
			this.canvas.render(oCompiledRegExp.buildGrammarDiagram(this.container));
		} catch (e) {
			this.container.style.display = "none";
			this.errorcontainer.style.display = "";
			this.errorcontainer.innerHTML = e.toString().plainTextToHtml();
		}
	};
  
  
  
})();