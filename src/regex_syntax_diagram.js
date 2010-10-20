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

/**	@fileOverview Extensions to RXBuild.Dom classes that build the syntax diagram
*/

(function() {
  RXBuild.Dom.RepeatedMatch.prototype.buildGrammarDiagramBox = function(container) {
    var child = this.subMatch.buildGrammarDiagram(container);
    
    var label = null;
    if (this.maxMatches == -1) {
      if (this.minMatches > 1) {
        label = "min: " + (this.minMatches - 1);
      }
    } else {
      if (this.maxMatches - this.minMatches > 0) {
        if (this.minMatches > 1)
          label = (this.minMatches - 1) + ".." + (this.maxMatches - 1);
        else
          label = "max: " + (this.maxMatches - 1);
      } else {
        label = (this.minMatches != this.maxMatches ? "max: " : "") + (this.maxMatches - 1);
      }
    }
    
    if (this.maxMatches != 1) {
      child = new RXBuild.UI.SyntaxDiagram.Repeated(child, label ? RXBuild.UI.Diagram.DomRenderer.makeDiv(label, container) : null, RXBuild.UI.Diagram.Direction.up, false);
    }
    if (this.minMatches == 0)
      child = new RXBuild.UI.SyntaxDiagram.Repeated(child, null, RXBuild.UI.Diagram.Direction.down, true);
    return child;
  };
  RXBuild.Dom.GroupMatch.prototype.buildGrammarDiagramBox = function(container) {
      return new RXBuild.UI.SyntaxDiagram.RuleBox(this.subMatch.buildGrammarDiagram(container));
  };
  RXBuild.Dom.AlternativeMatch.prototype.buildGrammarDiagram = function(container) {
    var items = new Array(this.alternatives.length);
      for (var i=0; i < this.alternatives.length; i++) {
        items[i] = this.alternatives[i].buildGrammarDiagram(container);
      }
      return new RXBuild.UI.SyntaxDiagram.Alternates(items);
  };
  RXBuild.Dom.Node.prototype.buildGrammarDiagram = function(container) {
    var me = this.buildGrammarDiagramBox(container);
    if (this.next) {
      var current = this;
      var items = [me];
      while (current.next) {
        current = current.next;
        items.push(current.buildGrammarDiagramBox(container));
      }
      return new RXBuild.UI.SyntaxDiagram.Sequence(items);
    }
    return me;
  };
  RXBuild.Dom.LiteralMatcher.prototype.buildGrammarDiagramBox = function(container) {
    return new RXBuild.UI.SyntaxDiagram.RuleBox(RXBuild.UI.Diagram.DomRenderer.makeDiv("<code>" + this.texttomatch.escapeToBackslashes().escapeHTML() + "</code>", container));
  };
  RXBuild.Dom.PositionalMatch.prototype.buildGrammarDiagramBox = function(container) {
    return new RXBuild.UI.SyntaxDiagram.RuleBox(RXBuild.UI.Diagram.DomRenderer.makeDiv(this.GetHtml(), container));
  };
  RXBuild.Dom.CharacterRangeMatch.prototype.buildGrammarDiagramBox = RXBuild.Dom.PositionalMatch.prototype.buildGrammarDiagramBox;
  RXBuild.Dom.BackTrackOrEscapeTempMatch.prototype.buildGrammarDiagramBox = RXBuild.Dom.PositionalMatch.prototype.buildGrammarDiagramBox;
})();