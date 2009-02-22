# This file is part of RXBuild.
# 
# RXBuild is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# RXBuild is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with RXBuild.  If not, see <http://www.gnu.org/licenses/>.

include Makefile.user

SRC_PATH = $(abspath ./src)
PLATFORM		=	rhino
RHINO			=	java org.mozilla.javascript.tools.shell.Main
DRIVER			=	web_obj
JSCC			=	$(JSCC_DIR)/jscc.js

SRC_PARSERS	=	$(SRC_PATH)/regex_parser.par
RES_PARSERS =	$(patsubst %.par,%.js,$(SRC_PARSERS))
SRC = \
	$(SRC_PATH)/utils.js \
	$(SRC_PATH)/regex_dom_node.js \
	$(SRC_PATH)/regex_dom.js \
	$(SRC_PATH)/regex_dom_terminals.js \
	$(SRC_PATH)/ui_delayedRefresh.js \
	$(SRC_PATH)/ui_dialog_extensions.js \
	$(SRC_PATH)/ui_status.js \
	$(SRC_PATH)/regex_controller.js \
	$(SRC_PATH)/regex_engine.js \
	$(SRC_PATH)/ui_regex_viewer.js \
	$(SRC_PATH)/ui_regex_editor.js \
	$(SRC_PATH)/ui_quick_reference_viewer.js \
	$(RES_PARSERS)

OUT =  compressed.js

%.js: %.par
	-@echo Building grammar $< into $@
	-@$(RHINO) $(JSCC) -o $@ -p $(notdir $(patsubst %.js,%,$@)) -t $(JSCC_DIR)/driver_$(DRIVER).js_ $<

$(OUT): $(SRC)
	-@echo Compressing JS to $@
	-(cat js-copyright-notice.js && cat $(SRC) | $(YUICOMPRESSOR) --type js) > $@

#Configure dependencies @ http://developer.yahoo.com/yui/articles/hosting/?animation&base&button&connection&container&containercore&dom&dragdrop&element&event&fonts&get&grids&layout&menu&reset&reset-fonts&reset-fonts-grids&resize&selector&stylesheet&tabview&treeview&utilities&yahoo&yahoo-dom-event&yuiloader&yuiloader-dom-event&MIN
external-yui:
	-@mkdir -p ./external/yui
	-@wget -O external/yui/yui.css "http://yui.yahooapis.com/combo?2.7.0/build/reset-fonts-grids/reset-fonts-grids.css&2.7.0/build/base/base-min.css&2.7.0/build/assets/skins/sam/skin.css"
	-@wget -O external/yui/yui.js "http://yui.yahooapis.com/combo?2.7.0/build/utilities/utilities.js&2.7.0/build/container/container-min.js&2.7.0/build/menu/menu-min.js&2.7.0/build/button/button-min.js&2.7.0/build/resize/resize-min.js&2.7.0/build/selector/selector-min.js&2.7.0/build/layout/layout-min.js&2.7.0/build/stylesheet/stylesheet-min.js&2.7.0/build/tabview/tabview-min.js&2.7.0/build/treeview/treeview-min.js"

externals: external-yui
	

min: $(OUT)
	-@echo "  Was:"
	-@wc -c $(SRC)
	-@echo "  Is now:"
	-@wc -c $(OUT)
	-@echo "  Geeky chest thumping complete."

jsdoc/index.html: $(SRC)
	-@mkdir jsdoc
	-@echo Building JSDoc
	-@java -jar $(JSDOCPATH)/jsrun.jar $(JSDOCPATH)/app/run.js -a -t=$(JSDOCPATH)/templates/jsdoc -d=$(SRC_PATH)/../jsdoc $(SRC_PATH)

clean:
	-rm $(OUT)
	-rm `find jsdoc/ -name \*.html`
	-rm $(RES_PARSERS)

doc: jsdoc/index.html

all: min doc
	
re:clean all