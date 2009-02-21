/* (c) Copyright 2009 Eric Doughty-Papassideris. All Rights Reserved.
*/

/**	@fileOverview Holds facades for running regular expressions
	@requires utils.js
*/
if (!RXBuild) var RXBuild = {};

if (!RXBuild.Engine)
	/**
		@namespace RXBuild.Engine
		Holds a facade for running regular expressions.
	*/
	RXBuild.Engine = { };

(function() {


	/** 
		Creates a new instance of RXBuild.Engine.ResultListener
		@class The RXBuild.Engine.ResultListener is an abstract interface that receives the result of a regular expression matcher.
		@constructor
	*/
	RXBuild.Engine.ResultListener = function () {
	};
	RXBuild.Engine.ResultListener.prototype.constructor = RXBuild.Engine.ResultListener;
	/** Called when a new match session has started
		@param {RXBuild.RegExp} regexp The pattern that will be ran
		@param {String} inputText The input text against which to match
	*/
	RXBuild.Engine.ResultListener.prototype.startMatch = function(regexp, inputText) {};
	/** Called once for each match.
		@param {RXBuild.RegExp} regexp The pattern that is running
		@param {String} inputText The input text against which to match
		@param {Number} matchIndex The 0-based index of this match
		@param {object} matchItem A single match description
		@return {Boolean} True to continue matching, false to abort.
	*/
	RXBuild.Engine.ResultListener.prototype.foundMatch = function(regexp, inputText, matchIndex, matchItem) {
		return true;
	};
	/** Called when matching is over.
		@param {RXBuild.RegExp} regexp The pattern that was run
		@param {String} inputText The input text against which to match
		@param {Integer} matchCount The number of matches (until aborting), or -1 if an error occured.
		@param {String} error If an error occured, the error object, otherwise, null
	*/
	RXBuild.Engine.ResultListener.prototype.finished = function(regexp, inputText, matchCount, error) {};


	/** 
		Creates a new instance of RXBuild.Engine.BrowserEngine
		@class The RXBuild.Engine.BrowserEngine A facade for using the current default (browser)
		implementation of the regular expression
		@property {String} name The name of this engine.
		@constructor
	*/
	RXBuild.Engine.BrowserEngine = function () {
	};
	RXBuild.Engine.BrowserEngine.prototype.constructor = RXBuild.Engine.BrowserEngine;
	RXBuild.Engine.BrowserEngine.prototype.name = "Safe - Default (browser's) implementation";
	/** Runs the provided regular expression against the input text notifying listener of any matches
		@param {RXBuild.RegExp} regexp The regular expression with the pattern to match
		@param {String} input The input text being searched
		@param {RXBuild.Engine.ResultListener} listener The object that will reveive the results of the matching
	*/
	RXBuild.Engine.BrowserEngine.prototype.runMatch = function(regexp, input, listener) {
		listener.startMatch(regexp, input);
		try
		{
			var oRegExp = new RegExp(regexp.pattern, regexp.options.str);
		}
		catch(err)
		{
			oRegExp = null;
			listener.finished(regexp, input, -1, err);
			return;
		}
		
	  	var oMatches;
	  	var i = 0;
	  	while ((oMatches = oRegExp.exec(input)) != null)
	  	{
			if (!listener.foundMatch(regexp, input, i, oMatches))
				break;
			i++;
			if (!regexp.options.g) break;
	  	}
		listener.finished(regexp, input, i, null);
	};

})();