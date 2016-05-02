/*
	Default template driver for JS/CC generated parsers running as
	browser-based JavaScript/ECMAScript applications.
	
	WARNING: 	This parser template will not run as console and has lesser
				features for debugging than the console derivates for the
				various JavaScript platforms.
	
	Features:
	- Parser trace messages
	- Integrated panic-mode error recovery
	
	Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
	
	This is in the public domain.
*/
/** @class The regex_parser class is an auto-generated parser class built from the grammar regex_parser.par.
	@property {Boolean} _dbg_withtrace If set to true, the parser will generate debug information into _dbg_string
	@property {String} _dbg_string The debug steps if the parse method was called with _dbg_withtrace set to true
	@constructor
*/
var regex_parser = function()
{
	this._dbg_withtrace = false;
	this._dbg_string = new String();
	
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

	var __regex_parse_result;


}
regex_parser.prototype.constructor = regex_parser;

/** @private */
regex_parser.prototype.dbg_print = function( text )
{
	this._dbg_string += text + "\n";
}

/** @private */
regex_parser.prototype.lex = function ( info )
{
	var state		= 0;
	var match		= -1;
	var match_pos	= 0;
	var start		= 0;
	var pos			= info.offset + 1;

	do
	{
		pos--;
		state = 0;
		match = -2;
		start = pos;

		if( info.src.length <= start )
			return 37;

		do
		{

switch( state )
{
	case 0:
		if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 35 ) || ( info.src.charCodeAt( pos ) >= 37 && info.src.charCodeAt( pos ) <= 39 ) || info.src.charCodeAt( pos ) == 45 || info.src.charCodeAt( pos ) == 47 || ( info.src.charCodeAt( pos ) >= 58 && info.src.charCodeAt( pos ) <= 62 ) || ( info.src.charCodeAt( pos ) >= 64 && info.src.charCodeAt( pos ) <= 90 ) || ( info.src.charCodeAt( pos ) >= 95 && info.src.charCodeAt( pos ) <= 122 ) || ( info.src.charCodeAt( pos ) >= 126 && info.src.charCodeAt( pos ) <= 254 ) ) state = 1;
		else if( info.src.charCodeAt( pos ) == 36 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 40 ) state = 3;
		else if( info.src.charCodeAt( pos ) == 41 ) state = 4;
		else if( info.src.charCodeAt( pos ) == 42 ) state = 5;
		else if( info.src.charCodeAt( pos ) == 43 ) state = 6;
		else if( info.src.charCodeAt( pos ) == 44 ) state = 7;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 8;
		else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
		else if( info.src.charCodeAt( pos ) == 63 ) state = 10;
		else if( info.src.charCodeAt( pos ) == 91 ) state = 11;
		else if( info.src.charCodeAt( pos ) == 93 ) state = 12;
		else if( info.src.charCodeAt( pos ) == 94 ) state = 13;
		else if( info.src.charCodeAt( pos ) == 123 ) state = 14;
		else if( info.src.charCodeAt( pos ) == 124 ) state = 15;
		else if( info.src.charCodeAt( pos ) == 125 ) state = 16;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 29;
		else state = -1;
		break;

	case 1:
		state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 2:
		state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 3:
		if( info.src.charCodeAt( pos ) == 63 ) state = 28;
		else state = -1;
		match = 11;
		match_pos = pos;
		break;

	case 4:
		state = -1;
		match = 12;
		match_pos = pos;
		break;

	case 5:
		state = -1;
		match = 2;
		match_pos = pos;
		break;

	case 6:
		state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 7:
		state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 8:
		state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 9:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
		else state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 10:
		state = -1;
		match = 6;
		match_pos = pos;
		break;

	case 11:
		state = -1;
		match = 13;
		match_pos = pos;
		break;

	case 12:
		state = -1;
		match = 14;
		match_pos = pos;
		break;

	case 13:
		state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 14:
		state = -1;
		match = 15;
		match_pos = pos;
		break;

	case 15:
		state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 16:
		state = -1;
		match = 16;
		match_pos = pos;
		break;

	case 17:
		state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 18:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 18;
		else state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 19:
		state = -1;
		match = 23;
		match_pos = pos;
		break;

	case 20:
		state = -1;
		match = 21;
		match_pos = pos;
		break;

	case 21:
		state = -1;
		match = 22;
		match_pos = pos;
		break;

	case 22:
		state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 23:
		state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 24:
		state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 25:
		state = -1;
		match = 19;
		match_pos = pos;
		break;

	case 26:
		state = -1;
		match = 8;
		match_pos = pos;
		break;

	case 27:
		state = -1;
		match = 20;
		match_pos = pos;
		break;

	case 28:
		if( info.src.charCodeAt( pos ) == 33 ) state = 22;
		else if( info.src.charCodeAt( pos ) == 58 ) state = 23;
		else if( info.src.charCodeAt( pos ) == 61 ) state = 24;
		else if( info.src.charCodeAt( pos ) == 60 ) state = 31;
		else state = -1;
		break;

	case 29:
		if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 47 ) || ( info.src.charCodeAt( pos ) >= 58 && info.src.charCodeAt( pos ) <= 65 ) || info.src.charCodeAt( pos ) == 67 || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 86 ) || ( info.src.charCodeAt( pos ) >= 88 && info.src.charCodeAt( pos ) <= 97 ) || info.src.charCodeAt( pos ) == 99 || info.src.charCodeAt( pos ) == 101 || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 121 && info.src.charCodeAt( pos ) <= 254 ) ) state = 17;
		else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 18;
		else if( info.src.charCodeAt( pos ) == 66 || info.src.charCodeAt( pos ) == 98 ) state = 19;
		else if( info.src.charCodeAt( pos ) == 68 || info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 87 || info.src.charCodeAt( pos ) == 100 || info.src.charCodeAt( pos ) == 115 || info.src.charCodeAt( pos ) == 119 ) state = 20;
		else if( info.src.charCodeAt( pos ) == 102 || info.src.charCodeAt( pos ) == 110 || info.src.charCodeAt( pos ) == 114 || info.src.charCodeAt( pos ) == 116 || info.src.charCodeAt( pos ) == 118 ) state = 21;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 30;
		else if( info.src.charCodeAt( pos ) == 120 ) state = 36;
		else state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 30:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 32;
		else state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 31:
		if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 61 ) || ( info.src.charCodeAt( pos ) >= 63 && info.src.charCodeAt( pos ) <= 254 ) ) state = 34;
		else state = -1;
		break;

	case 32:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 37;
		else state = -1;
		break;

	case 33:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 25;
		else state = -1;
		break;

	case 34:
		if( info.src.charCodeAt( pos ) == 62 ) state = 26;
		else state = -1;
		break;

	case 35:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 27;
		else state = -1;
		break;

	case 36:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 33;
		else state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 37:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 35;
		else state = -1;
		break;

}


			pos++;

		}
		while( state > -1 );

	}
	while( -1 > -1 && match == -1 );

	if( match > -1 )
	{
		info.att = info.src.substr( start, match_pos - start );
		info.offset = match_pos;
		
switch( match )
{
	case 1:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 2:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 3:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 4:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 5:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 6:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 7:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 8:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 9:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 10:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 11:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 12:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 13:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 14:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 15:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 16:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 17:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 18:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), function(input) { return "."; }); 
		}
		break;

	case 19:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterASCII_HEX_CODE); 
		}
		break;

	case 20:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterUNICODE_HEX_CODE); 
		}
		break;

	case 21:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterCHARACTER_CLASS); 
		}
		break;

	case 22:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterSPECIAL_CHAR); 
		}
		break;

	case 23:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterWORD_BOUNDARY_CHAR); 
		}
		break;

	case 24:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 25:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 26:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

	case 27:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
		}
		break;

}


	}
	else
	{
		info.att = new String();
		match = -1;
	}

	return match;
}

/** Parses the provided string and returns the number of errors
	@param {String} src The input string to parse
	@param {Array} err_off An instance of array that will receive the individual error offsets
	@param {Array} err_la An instance of array that will receive the individual error 
	@param {function} alert_func Called with debug information as a first parameter. Set to false to inhibit display. Defaults to alert.
	@return {Number} The number of errors that occured while parsing
*/
regex_parser.prototype.parse = function ( src, err_off, err_la, alert_func )
{
	var		sstack			= new Array();
	var		vstack			= new Array();
	var 	err_cnt			= 0;
	var		act;
	var		go;
	var		la;
	var		rval;
	var 	parseinfo		= new Function( "", "var offset; var src; var att;" );
	var		info			= new parseinfo();

	this._dbg_string = new String();

/* Pop-Table */
var pop_tab = new Array(
	new Array( 0/* RegEx' */, 1 ),
	new Array( 29/* RegEx */, 1 ),
	new Array( 28/* Expression */, 3 ),
	new Array( 28/* Expression */, 1 ),
	new Array( 30/* Catenation */, 2 ),
	new Array( 30/* Catenation */, 1 ),
	new Array( 31/* Factor */, 3 ),
	new Array( 31/* Factor */, 3 ),
	new Array( 31/* Factor */, 3 ),
	new Array( 31/* Factor */, 5 ),
	new Array( 31/* Factor */, 6 ),
	new Array( 31/* Factor */, 7 ),
	new Array( 31/* Factor */, 2 ),
	new Array( 31/* Factor */, 2 ),
	new Array( 31/* Factor */, 2 ),
	new Array( 31/* Factor */, 4 ),
	new Array( 31/* Factor */, 5 ),
	new Array( 31/* Factor */, 6 ),
	new Array( 31/* Factor */, 1 ),
	new Array( 32/* Term */, 1 ),
	new Array( 32/* Term */, 1 ),
	new Array( 32/* Term */, 3 ),
	new Array( 32/* Term */, 3 ),
	new Array( 32/* Term */, 3 ),
	new Array( 32/* Term */, 3 ),
	new Array( 32/* Term */, 3 ),
	new Array( 32/* Term */, 1 ),
	new Array( 35/* Positional */, 1 ),
	new Array( 35/* Positional */, 1 ),
	new Array( 35/* Positional */, 1 ),
	new Array( 34/* CharacterSet */, 3 ),
	new Array( 34/* CharacterSet */, 1 ),
	new Array( 34/* CharacterSet */, 1 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 2 ),
	new Array( 36/* CharClass */, 0 ),
	new Array( 33/* Character */, 1 ),
	new Array( 33/* Character */, 1 ),
	new Array( 33/* Character */, 1 ),
	new Array( 33/* Character */, 1 ),
	new Array( 33/* Character */, 1 ),
	new Array( 33/* Character */, 1 ),
	new Array( 33/* Character */, 1 )
);

/* Action-Table */
var act_tab = new Array(
	/* State 0 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 1 */ new Array( 37/* "$" */,0 ),
	/* State 2 */ new Array( 1/* "|" */,27 , 37/* "$" */,-1 ),
	/* State 3 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 , 37/* "$" */,-3 , 1/* "|" */,-3 , 12/* ")" */,-3 ),
	/* State 4 */ new Array( 37/* "$" */,-5 , 1/* "|" */,-5 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-5 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-5 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-5 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-5 , 11/* "(" */,-5 , 19/* "ASCII_HEX_CODE" */,-5 , 20/* "UNICODE_HEX_CODE" */,-5 , 22/* "SPECIAL_CHAR" */,-5 , 25/* "ESCAPED_CHAR" */,-5 , 24/* "ESCAPED_NUM" */,-5 , 26/* "INT" */,-5 , 27/* "ANY" */,-5 , 13/* "[" */,-5 , 18/* "ANY_CHAR" */,-5 , 21/* "CHARACTER_CLASS" */,-5 , 4/* "$" */,-5 , 5/* "^" */,-5 , 23/* "WORD_BOUNDARY_CHAR" */,-5 , 12/* ")" */,-5 ),
	/* State 5 */ new Array( 15/* "{" */,29 , 6/* "?" */,30 , 3/* "+" */,31 , 2/* "*" */,32 , 37/* "$" */,-18 , 1/* "|" */,-18 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-18 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-18 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-18 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-18 , 11/* "(" */,-18 , 19/* "ASCII_HEX_CODE" */,-18 , 20/* "UNICODE_HEX_CODE" */,-18 , 22/* "SPECIAL_CHAR" */,-18 , 25/* "ESCAPED_CHAR" */,-18 , 24/* "ESCAPED_NUM" */,-18 , 26/* "INT" */,-18 , 27/* "ANY" */,-18 , 13/* "[" */,-18 , 18/* "ANY_CHAR" */,-18 , 21/* "CHARACTER_CLASS" */,-18 , 4/* "$" */,-18 , 5/* "^" */,-18 , 23/* "WORD_BOUNDARY_CHAR" */,-18 , 12/* ")" */,-18 ),
	/* State 6 */ new Array( 2/* "*" */,-19 , 3/* "+" */,-19 , 6/* "?" */,-19 , 15/* "{" */,-19 , 37/* "$" */,-19 , 1/* "|" */,-19 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-19 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-19 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-19 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-19 , 11/* "(" */,-19 , 19/* "ASCII_HEX_CODE" */,-19 , 20/* "UNICODE_HEX_CODE" */,-19 , 22/* "SPECIAL_CHAR" */,-19 , 25/* "ESCAPED_CHAR" */,-19 , 24/* "ESCAPED_NUM" */,-19 , 26/* "INT" */,-19 , 27/* "ANY" */,-19 , 13/* "[" */,-19 , 18/* "ANY_CHAR" */,-19 , 21/* "CHARACTER_CLASS" */,-19 , 4/* "$" */,-19 , 5/* "^" */,-19 , 23/* "WORD_BOUNDARY_CHAR" */,-19 , 12/* ")" */,-19 ),
	/* State 7 */ new Array( 2/* "*" */,-20 , 3/* "+" */,-20 , 6/* "?" */,-20 , 15/* "{" */,-20 , 37/* "$" */,-20 , 1/* "|" */,-20 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-20 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-20 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-20 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-20 , 11/* "(" */,-20 , 19/* "ASCII_HEX_CODE" */,-20 , 20/* "UNICODE_HEX_CODE" */,-20 , 22/* "SPECIAL_CHAR" */,-20 , 25/* "ESCAPED_CHAR" */,-20 , 24/* "ESCAPED_NUM" */,-20 , 26/* "INT" */,-20 , 27/* "ANY" */,-20 , 13/* "[" */,-20 , 18/* "ANY_CHAR" */,-20 , 21/* "CHARACTER_CLASS" */,-20 , 4/* "$" */,-20 , 5/* "^" */,-20 , 23/* "WORD_BOUNDARY_CHAR" */,-20 , 12/* ")" */,-20 ),
	/* State 8 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 9 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 10 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 11 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 12 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 13 */ new Array( 2/* "*" */,-26 , 3/* "+" */,-26 , 6/* "?" */,-26 , 15/* "{" */,-26 , 37/* "$" */,-26 , 1/* "|" */,-26 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-26 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-26 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-26 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-26 , 11/* "(" */,-26 , 19/* "ASCII_HEX_CODE" */,-26 , 20/* "UNICODE_HEX_CODE" */,-26 , 22/* "SPECIAL_CHAR" */,-26 , 25/* "ESCAPED_CHAR" */,-26 , 24/* "ESCAPED_NUM" */,-26 , 26/* "INT" */,-26 , 27/* "ANY" */,-26 , 13/* "[" */,-26 , 18/* "ANY_CHAR" */,-26 , 21/* "CHARACTER_CLASS" */,-26 , 4/* "$" */,-26 , 5/* "^" */,-26 , 23/* "WORD_BOUNDARY_CHAR" */,-26 , 12/* ")" */,-26 ),
	/* State 14 */ new Array( 2/* "*" */,-53 , 3/* "+" */,-53 , 6/* "?" */,-53 , 15/* "{" */,-53 , 37/* "$" */,-53 , 1/* "|" */,-53 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-53 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-53 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-53 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-53 , 11/* "(" */,-53 , 19/* "ASCII_HEX_CODE" */,-53 , 20/* "UNICODE_HEX_CODE" */,-53 , 22/* "SPECIAL_CHAR" */,-53 , 25/* "ESCAPED_CHAR" */,-53 , 24/* "ESCAPED_NUM" */,-53 , 26/* "INT" */,-53 , 27/* "ANY" */,-53 , 13/* "[" */,-53 , 18/* "ANY_CHAR" */,-53 , 21/* "CHARACTER_CLASS" */,-53 , 4/* "$" */,-53 , 5/* "^" */,-53 , 23/* "WORD_BOUNDARY_CHAR" */,-53 , 12/* ")" */,-53 , 14/* "]" */,-53 , 16/* "}" */,-53 , 17/* "," */,-53 ),
	/* State 15 */ new Array( 2/* "*" */,-54 , 3/* "+" */,-54 , 6/* "?" */,-54 , 15/* "{" */,-54 , 37/* "$" */,-54 , 1/* "|" */,-54 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-54 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-54 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-54 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-54 , 11/* "(" */,-54 , 19/* "ASCII_HEX_CODE" */,-54 , 20/* "UNICODE_HEX_CODE" */,-54 , 22/* "SPECIAL_CHAR" */,-54 , 25/* "ESCAPED_CHAR" */,-54 , 24/* "ESCAPED_NUM" */,-54 , 26/* "INT" */,-54 , 27/* "ANY" */,-54 , 13/* "[" */,-54 , 18/* "ANY_CHAR" */,-54 , 21/* "CHARACTER_CLASS" */,-54 , 4/* "$" */,-54 , 5/* "^" */,-54 , 23/* "WORD_BOUNDARY_CHAR" */,-54 , 12/* ")" */,-54 , 14/* "]" */,-54 , 16/* "}" */,-54 , 17/* "," */,-54 ),
	/* State 16 */ new Array( 2/* "*" */,-55 , 3/* "+" */,-55 , 6/* "?" */,-55 , 15/* "{" */,-55 , 37/* "$" */,-55 , 1/* "|" */,-55 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-55 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-55 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-55 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-55 , 11/* "(" */,-55 , 19/* "ASCII_HEX_CODE" */,-55 , 20/* "UNICODE_HEX_CODE" */,-55 , 22/* "SPECIAL_CHAR" */,-55 , 25/* "ESCAPED_CHAR" */,-55 , 24/* "ESCAPED_NUM" */,-55 , 26/* "INT" */,-55 , 27/* "ANY" */,-55 , 13/* "[" */,-55 , 18/* "ANY_CHAR" */,-55 , 21/* "CHARACTER_CLASS" */,-55 , 4/* "$" */,-55 , 5/* "^" */,-55 , 23/* "WORD_BOUNDARY_CHAR" */,-55 , 12/* ")" */,-55 , 14/* "]" */,-55 , 16/* "}" */,-55 , 17/* "," */,-55 ),
	/* State 17 */ new Array( 2/* "*" */,-56 , 3/* "+" */,-56 , 6/* "?" */,-56 , 15/* "{" */,-56 , 37/* "$" */,-56 , 1/* "|" */,-56 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-56 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-56 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-56 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-56 , 11/* "(" */,-56 , 19/* "ASCII_HEX_CODE" */,-56 , 20/* "UNICODE_HEX_CODE" */,-56 , 22/* "SPECIAL_CHAR" */,-56 , 25/* "ESCAPED_CHAR" */,-56 , 24/* "ESCAPED_NUM" */,-56 , 26/* "INT" */,-56 , 27/* "ANY" */,-56 , 13/* "[" */,-56 , 18/* "ANY_CHAR" */,-56 , 21/* "CHARACTER_CLASS" */,-56 , 4/* "$" */,-56 , 5/* "^" */,-56 , 23/* "WORD_BOUNDARY_CHAR" */,-56 , 12/* ")" */,-56 , 14/* "]" */,-56 , 16/* "}" */,-56 , 17/* "," */,-56 ),
	/* State 18 */ new Array( 2/* "*" */,-57 , 3/* "+" */,-57 , 6/* "?" */,-57 , 15/* "{" */,-57 , 37/* "$" */,-57 , 1/* "|" */,-57 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-57 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-57 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-57 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-57 , 11/* "(" */,-57 , 19/* "ASCII_HEX_CODE" */,-57 , 20/* "UNICODE_HEX_CODE" */,-57 , 22/* "SPECIAL_CHAR" */,-57 , 25/* "ESCAPED_CHAR" */,-57 , 24/* "ESCAPED_NUM" */,-57 , 26/* "INT" */,-57 , 27/* "ANY" */,-57 , 13/* "[" */,-57 , 18/* "ANY_CHAR" */,-57 , 21/* "CHARACTER_CLASS" */,-57 , 4/* "$" */,-57 , 5/* "^" */,-57 , 23/* "WORD_BOUNDARY_CHAR" */,-57 , 12/* ")" */,-57 , 14/* "]" */,-57 , 16/* "}" */,-57 , 17/* "," */,-57 ),
	/* State 19 */ new Array( 2/* "*" */,-58 , 3/* "+" */,-58 , 6/* "?" */,-58 , 15/* "{" */,-58 , 37/* "$" */,-58 , 1/* "|" */,-58 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-58 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-58 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-58 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-58 , 11/* "(" */,-58 , 19/* "ASCII_HEX_CODE" */,-58 , 20/* "UNICODE_HEX_CODE" */,-58 , 22/* "SPECIAL_CHAR" */,-58 , 25/* "ESCAPED_CHAR" */,-58 , 24/* "ESCAPED_NUM" */,-58 , 26/* "INT" */,-58 , 27/* "ANY" */,-58 , 13/* "[" */,-58 , 18/* "ANY_CHAR" */,-58 , 21/* "CHARACTER_CLASS" */,-58 , 4/* "$" */,-58 , 5/* "^" */,-58 , 23/* "WORD_BOUNDARY_CHAR" */,-58 , 12/* ")" */,-58 , 14/* "]" */,-58 , 16/* "}" */,-58 , 17/* "," */,-58 ),
	/* State 20 */ new Array( 2/* "*" */,-59 , 3/* "+" */,-59 , 6/* "?" */,-59 , 15/* "{" */,-59 , 37/* "$" */,-59 , 1/* "|" */,-59 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-59 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-59 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-59 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-59 , 11/* "(" */,-59 , 19/* "ASCII_HEX_CODE" */,-59 , 20/* "UNICODE_HEX_CODE" */,-59 , 22/* "SPECIAL_CHAR" */,-59 , 25/* "ESCAPED_CHAR" */,-59 , 24/* "ESCAPED_NUM" */,-59 , 26/* "INT" */,-59 , 27/* "ANY" */,-59 , 13/* "[" */,-59 , 18/* "ANY_CHAR" */,-59 , 21/* "CHARACTER_CLASS" */,-59 , 4/* "$" */,-59 , 5/* "^" */,-59 , 23/* "WORD_BOUNDARY_CHAR" */,-59 , 12/* ")" */,-59 , 14/* "]" */,-59 , 16/* "}" */,-59 , 17/* "," */,-59 ),
	/* State 21 */ new Array( 14/* "]" */,-52 , 19/* "ASCII_HEX_CODE" */,-52 , 20/* "UNICODE_HEX_CODE" */,-52 , 22/* "SPECIAL_CHAR" */,-52 , 25/* "ESCAPED_CHAR" */,-52 , 24/* "ESCAPED_NUM" */,-52 , 26/* "INT" */,-52 , 27/* "ANY" */,-52 , 21/* "CHARACTER_CLASS" */,-52 , 18/* "ANY_CHAR" */,-52 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-52 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-52 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-52 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-52 , 1/* "|" */,-52 , 2/* "*" */,-52 , 3/* "+" */,-52 , 4/* "$" */,-52 , 5/* "^" */,-52 , 6/* "?" */,-52 , 15/* "{" */,-52 , 16/* "}" */,-52 , 17/* "," */,-52 , 11/* "(" */,-52 , 12/* ")" */,-52 , 23/* "WORD_BOUNDARY_CHAR" */,-52 ),
	/* State 22 */ new Array( 2/* "*" */,-31 , 3/* "+" */,-31 , 6/* "?" */,-31 , 15/* "{" */,-31 , 37/* "$" */,-31 , 1/* "|" */,-31 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-31 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-31 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-31 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-31 , 11/* "(" */,-31 , 19/* "ASCII_HEX_CODE" */,-31 , 20/* "UNICODE_HEX_CODE" */,-31 , 22/* "SPECIAL_CHAR" */,-31 , 25/* "ESCAPED_CHAR" */,-31 , 24/* "ESCAPED_NUM" */,-31 , 26/* "INT" */,-31 , 27/* "ANY" */,-31 , 13/* "[" */,-31 , 18/* "ANY_CHAR" */,-31 , 21/* "CHARACTER_CLASS" */,-31 , 4/* "$" */,-31 , 5/* "^" */,-31 , 23/* "WORD_BOUNDARY_CHAR" */,-31 , 12/* ")" */,-31 ),
	/* State 23 */ new Array( 2/* "*" */,-32 , 3/* "+" */,-32 , 6/* "?" */,-32 , 15/* "{" */,-32 , 37/* "$" */,-32 , 1/* "|" */,-32 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-32 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-32 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-32 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-32 , 11/* "(" */,-32 , 19/* "ASCII_HEX_CODE" */,-32 , 20/* "UNICODE_HEX_CODE" */,-32 , 22/* "SPECIAL_CHAR" */,-32 , 25/* "ESCAPED_CHAR" */,-32 , 24/* "ESCAPED_NUM" */,-32 , 26/* "INT" */,-32 , 27/* "ANY" */,-32 , 13/* "[" */,-32 , 18/* "ANY_CHAR" */,-32 , 21/* "CHARACTER_CLASS" */,-32 , 4/* "$" */,-32 , 5/* "^" */,-32 , 23/* "WORD_BOUNDARY_CHAR" */,-32 , 12/* ")" */,-32 ),
	/* State 24 */ new Array( 2/* "*" */,-27 , 3/* "+" */,-27 , 6/* "?" */,-27 , 15/* "{" */,-27 , 37/* "$" */,-27 , 1/* "|" */,-27 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-27 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-27 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-27 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-27 , 11/* "(" */,-27 , 19/* "ASCII_HEX_CODE" */,-27 , 20/* "UNICODE_HEX_CODE" */,-27 , 22/* "SPECIAL_CHAR" */,-27 , 25/* "ESCAPED_CHAR" */,-27 , 24/* "ESCAPED_NUM" */,-27 , 26/* "INT" */,-27 , 27/* "ANY" */,-27 , 13/* "[" */,-27 , 18/* "ANY_CHAR" */,-27 , 21/* "CHARACTER_CLASS" */,-27 , 4/* "$" */,-27 , 5/* "^" */,-27 , 23/* "WORD_BOUNDARY_CHAR" */,-27 , 12/* ")" */,-27 ),
	/* State 25 */ new Array( 2/* "*" */,-28 , 3/* "+" */,-28 , 6/* "?" */,-28 , 15/* "{" */,-28 , 37/* "$" */,-28 , 1/* "|" */,-28 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-28 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-28 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-28 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-28 , 11/* "(" */,-28 , 19/* "ASCII_HEX_CODE" */,-28 , 20/* "UNICODE_HEX_CODE" */,-28 , 22/* "SPECIAL_CHAR" */,-28 , 25/* "ESCAPED_CHAR" */,-28 , 24/* "ESCAPED_NUM" */,-28 , 26/* "INT" */,-28 , 27/* "ANY" */,-28 , 13/* "[" */,-28 , 18/* "ANY_CHAR" */,-28 , 21/* "CHARACTER_CLASS" */,-28 , 4/* "$" */,-28 , 5/* "^" */,-28 , 23/* "WORD_BOUNDARY_CHAR" */,-28 , 12/* ")" */,-28 ),
	/* State 26 */ new Array( 2/* "*" */,-29 , 3/* "+" */,-29 , 6/* "?" */,-29 , 15/* "{" */,-29 , 37/* "$" */,-29 , 1/* "|" */,-29 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-29 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-29 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-29 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-29 , 11/* "(" */,-29 , 19/* "ASCII_HEX_CODE" */,-29 , 20/* "UNICODE_HEX_CODE" */,-29 , 22/* "SPECIAL_CHAR" */,-29 , 25/* "ESCAPED_CHAR" */,-29 , 24/* "ESCAPED_NUM" */,-29 , 26/* "INT" */,-29 , 27/* "ANY" */,-29 , 13/* "[" */,-29 , 18/* "ANY_CHAR" */,-29 , 21/* "CHARACTER_CLASS" */,-29 , 4/* "$" */,-29 , 5/* "^" */,-29 , 23/* "WORD_BOUNDARY_CHAR" */,-29 , 12/* ")" */,-29 ),
	/* State 27 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 ),
	/* State 28 */ new Array( 37/* "$" */,-4 , 1/* "|" */,-4 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-4 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-4 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-4 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-4 , 11/* "(" */,-4 , 19/* "ASCII_HEX_CODE" */,-4 , 20/* "UNICODE_HEX_CODE" */,-4 , 22/* "SPECIAL_CHAR" */,-4 , 25/* "ESCAPED_CHAR" */,-4 , 24/* "ESCAPED_NUM" */,-4 , 26/* "INT" */,-4 , 27/* "ANY" */,-4 , 13/* "[" */,-4 , 18/* "ANY_CHAR" */,-4 , 21/* "CHARACTER_CLASS" */,-4 , 4/* "$" */,-4 , 5/* "^" */,-4 , 23/* "WORD_BOUNDARY_CHAR" */,-4 , 12/* ")" */,-4 ),
	/* State 29 */ new Array( 26/* "INT" */,40 ),
	/* State 30 */ new Array( 6/* "?" */,41 , 37/* "$" */,-14 , 1/* "|" */,-14 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-14 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-14 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-14 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-14 , 11/* "(" */,-14 , 19/* "ASCII_HEX_CODE" */,-14 , 20/* "UNICODE_HEX_CODE" */,-14 , 22/* "SPECIAL_CHAR" */,-14 , 25/* "ESCAPED_CHAR" */,-14 , 24/* "ESCAPED_NUM" */,-14 , 26/* "INT" */,-14 , 27/* "ANY" */,-14 , 13/* "[" */,-14 , 18/* "ANY_CHAR" */,-14 , 21/* "CHARACTER_CLASS" */,-14 , 4/* "$" */,-14 , 5/* "^" */,-14 , 23/* "WORD_BOUNDARY_CHAR" */,-14 , 12/* ")" */,-14 ),
	/* State 31 */ new Array( 6/* "?" */,42 , 37/* "$" */,-13 , 1/* "|" */,-13 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-13 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-13 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-13 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-13 , 11/* "(" */,-13 , 19/* "ASCII_HEX_CODE" */,-13 , 20/* "UNICODE_HEX_CODE" */,-13 , 22/* "SPECIAL_CHAR" */,-13 , 25/* "ESCAPED_CHAR" */,-13 , 24/* "ESCAPED_NUM" */,-13 , 26/* "INT" */,-13 , 27/* "ANY" */,-13 , 13/* "[" */,-13 , 18/* "ANY_CHAR" */,-13 , 21/* "CHARACTER_CLASS" */,-13 , 4/* "$" */,-13 , 5/* "^" */,-13 , 23/* "WORD_BOUNDARY_CHAR" */,-13 , 12/* ")" */,-13 ),
	/* State 32 */ new Array( 6/* "?" */,43 , 37/* "$" */,-12 , 1/* "|" */,-12 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-12 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-12 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-12 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-12 , 11/* "(" */,-12 , 19/* "ASCII_HEX_CODE" */,-12 , 20/* "UNICODE_HEX_CODE" */,-12 , 22/* "SPECIAL_CHAR" */,-12 , 25/* "ESCAPED_CHAR" */,-12 , 24/* "ESCAPED_NUM" */,-12 , 26/* "INT" */,-12 , 27/* "ANY" */,-12 , 13/* "[" */,-12 , 18/* "ANY_CHAR" */,-12 , 21/* "CHARACTER_CLASS" */,-12 , 4/* "$" */,-12 , 5/* "^" */,-12 , 23/* "WORD_BOUNDARY_CHAR" */,-12 , 12/* ")" */,-12 ),
	/* State 33 */ new Array( 1/* "|" */,27 , 12/* ")" */,44 ),
	/* State 34 */ new Array( 1/* "|" */,27 , 12/* ")" */,45 ),
	/* State 35 */ new Array( 1/* "|" */,27 , 12/* ")" */,46 ),
	/* State 36 */ new Array( 1/* "|" */,27 , 12/* ")" */,47 ),
	/* State 37 */ new Array( 1/* "|" */,27 , 12/* ")" */,48 ),
	/* State 38 */ new Array( 23/* "WORD_BOUNDARY_CHAR" */,49 , 12/* ")" */,50 , 11/* "(" */,51 , 17/* "," */,52 , 16/* "}" */,53 , 15/* "{" */,54 , 6/* "?" */,55 , 5/* "^" */,56 , 4/* "$" */,57 , 3/* "+" */,58 , 2/* "*" */,59 , 1/* "|" */,60 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,61 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,62 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,63 , 7/* "NON_CAPTURING_OPEN_GROUP" */,64 , 18/* "ANY_CHAR" */,65 , 21/* "CHARACTER_CLASS" */,66 , 14/* "]" */,68 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 ),
	/* State 39 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,11 , 11/* "(" */,12 , 19/* "ASCII_HEX_CODE" */,14 , 20/* "UNICODE_HEX_CODE" */,15 , 22/* "SPECIAL_CHAR" */,16 , 25/* "ESCAPED_CHAR" */,17 , 24/* "ESCAPED_NUM" */,18 , 26/* "INT" */,19 , 27/* "ANY" */,20 , 13/* "[" */,21 , 18/* "ANY_CHAR" */,22 , 21/* "CHARACTER_CLASS" */,23 , 4/* "$" */,24 , 5/* "^" */,25 , 23/* "WORD_BOUNDARY_CHAR" */,26 , 37/* "$" */,-2 , 1/* "|" */,-2 , 12/* ")" */,-2 ),
	/* State 40 */ new Array( 17/* "," */,69 , 16/* "}" */,70 ),
	/* State 41 */ new Array( 37/* "$" */,-8 , 1/* "|" */,-8 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-8 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-8 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-8 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-8 , 11/* "(" */,-8 , 19/* "ASCII_HEX_CODE" */,-8 , 20/* "UNICODE_HEX_CODE" */,-8 , 22/* "SPECIAL_CHAR" */,-8 , 25/* "ESCAPED_CHAR" */,-8 , 24/* "ESCAPED_NUM" */,-8 , 26/* "INT" */,-8 , 27/* "ANY" */,-8 , 13/* "[" */,-8 , 18/* "ANY_CHAR" */,-8 , 21/* "CHARACTER_CLASS" */,-8 , 4/* "$" */,-8 , 5/* "^" */,-8 , 23/* "WORD_BOUNDARY_CHAR" */,-8 , 12/* ")" */,-8 ),
	/* State 42 */ new Array( 37/* "$" */,-7 , 1/* "|" */,-7 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-7 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-7 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-7 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-7 , 11/* "(" */,-7 , 19/* "ASCII_HEX_CODE" */,-7 , 20/* "UNICODE_HEX_CODE" */,-7 , 22/* "SPECIAL_CHAR" */,-7 , 25/* "ESCAPED_CHAR" */,-7 , 24/* "ESCAPED_NUM" */,-7 , 26/* "INT" */,-7 , 27/* "ANY" */,-7 , 13/* "[" */,-7 , 18/* "ANY_CHAR" */,-7 , 21/* "CHARACTER_CLASS" */,-7 , 4/* "$" */,-7 , 5/* "^" */,-7 , 23/* "WORD_BOUNDARY_CHAR" */,-7 , 12/* ")" */,-7 ),
	/* State 43 */ new Array( 37/* "$" */,-6 , 1/* "|" */,-6 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-6 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-6 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-6 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-6 , 11/* "(" */,-6 , 19/* "ASCII_HEX_CODE" */,-6 , 20/* "UNICODE_HEX_CODE" */,-6 , 22/* "SPECIAL_CHAR" */,-6 , 25/* "ESCAPED_CHAR" */,-6 , 24/* "ESCAPED_NUM" */,-6 , 26/* "INT" */,-6 , 27/* "ANY" */,-6 , 13/* "[" */,-6 , 18/* "ANY_CHAR" */,-6 , 21/* "CHARACTER_CLASS" */,-6 , 4/* "$" */,-6 , 5/* "^" */,-6 , 23/* "WORD_BOUNDARY_CHAR" */,-6 , 12/* ")" */,-6 ),
	/* State 44 */ new Array( 2/* "*" */,-21 , 3/* "+" */,-21 , 6/* "?" */,-21 , 15/* "{" */,-21 , 37/* "$" */,-21 , 1/* "|" */,-21 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-21 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-21 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-21 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-21 , 11/* "(" */,-21 , 19/* "ASCII_HEX_CODE" */,-21 , 20/* "UNICODE_HEX_CODE" */,-21 , 22/* "SPECIAL_CHAR" */,-21 , 25/* "ESCAPED_CHAR" */,-21 , 24/* "ESCAPED_NUM" */,-21 , 26/* "INT" */,-21 , 27/* "ANY" */,-21 , 13/* "[" */,-21 , 18/* "ANY_CHAR" */,-21 , 21/* "CHARACTER_CLASS" */,-21 , 4/* "$" */,-21 , 5/* "^" */,-21 , 23/* "WORD_BOUNDARY_CHAR" */,-21 , 12/* ")" */,-21 ),
	/* State 45 */ new Array( 2/* "*" */,-22 , 3/* "+" */,-22 , 6/* "?" */,-22 , 15/* "{" */,-22 , 37/* "$" */,-22 , 1/* "|" */,-22 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-22 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-22 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-22 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-22 , 11/* "(" */,-22 , 19/* "ASCII_HEX_CODE" */,-22 , 20/* "UNICODE_HEX_CODE" */,-22 , 22/* "SPECIAL_CHAR" */,-22 , 25/* "ESCAPED_CHAR" */,-22 , 24/* "ESCAPED_NUM" */,-22 , 26/* "INT" */,-22 , 27/* "ANY" */,-22 , 13/* "[" */,-22 , 18/* "ANY_CHAR" */,-22 , 21/* "CHARACTER_CLASS" */,-22 , 4/* "$" */,-22 , 5/* "^" */,-22 , 23/* "WORD_BOUNDARY_CHAR" */,-22 , 12/* ")" */,-22 ),
	/* State 46 */ new Array( 2/* "*" */,-23 , 3/* "+" */,-23 , 6/* "?" */,-23 , 15/* "{" */,-23 , 37/* "$" */,-23 , 1/* "|" */,-23 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-23 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-23 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-23 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-23 , 11/* "(" */,-23 , 19/* "ASCII_HEX_CODE" */,-23 , 20/* "UNICODE_HEX_CODE" */,-23 , 22/* "SPECIAL_CHAR" */,-23 , 25/* "ESCAPED_CHAR" */,-23 , 24/* "ESCAPED_NUM" */,-23 , 26/* "INT" */,-23 , 27/* "ANY" */,-23 , 13/* "[" */,-23 , 18/* "ANY_CHAR" */,-23 , 21/* "CHARACTER_CLASS" */,-23 , 4/* "$" */,-23 , 5/* "^" */,-23 , 23/* "WORD_BOUNDARY_CHAR" */,-23 , 12/* ")" */,-23 ),
	/* State 47 */ new Array( 2/* "*" */,-24 , 3/* "+" */,-24 , 6/* "?" */,-24 , 15/* "{" */,-24 , 37/* "$" */,-24 , 1/* "|" */,-24 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-24 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-24 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-24 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-24 , 11/* "(" */,-24 , 19/* "ASCII_HEX_CODE" */,-24 , 20/* "UNICODE_HEX_CODE" */,-24 , 22/* "SPECIAL_CHAR" */,-24 , 25/* "ESCAPED_CHAR" */,-24 , 24/* "ESCAPED_NUM" */,-24 , 26/* "INT" */,-24 , 27/* "ANY" */,-24 , 13/* "[" */,-24 , 18/* "ANY_CHAR" */,-24 , 21/* "CHARACTER_CLASS" */,-24 , 4/* "$" */,-24 , 5/* "^" */,-24 , 23/* "WORD_BOUNDARY_CHAR" */,-24 , 12/* ")" */,-24 ),
	/* State 48 */ new Array( 2/* "*" */,-25 , 3/* "+" */,-25 , 6/* "?" */,-25 , 15/* "{" */,-25 , 37/* "$" */,-25 , 1/* "|" */,-25 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-25 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-25 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-25 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-25 , 11/* "(" */,-25 , 19/* "ASCII_HEX_CODE" */,-25 , 20/* "UNICODE_HEX_CODE" */,-25 , 22/* "SPECIAL_CHAR" */,-25 , 25/* "ESCAPED_CHAR" */,-25 , 24/* "ESCAPED_NUM" */,-25 , 26/* "INT" */,-25 , 27/* "ANY" */,-25 , 13/* "[" */,-25 , 18/* "ANY_CHAR" */,-25 , 21/* "CHARACTER_CLASS" */,-25 , 4/* "$" */,-25 , 5/* "^" */,-25 , 23/* "WORD_BOUNDARY_CHAR" */,-25 , 12/* ")" */,-25 ),
	/* State 49 */ new Array( 14/* "]" */,-51 , 19/* "ASCII_HEX_CODE" */,-51 , 20/* "UNICODE_HEX_CODE" */,-51 , 22/* "SPECIAL_CHAR" */,-51 , 25/* "ESCAPED_CHAR" */,-51 , 24/* "ESCAPED_NUM" */,-51 , 26/* "INT" */,-51 , 27/* "ANY" */,-51 , 21/* "CHARACTER_CLASS" */,-51 , 18/* "ANY_CHAR" */,-51 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-51 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-51 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-51 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-51 , 1/* "|" */,-51 , 2/* "*" */,-51 , 3/* "+" */,-51 , 4/* "$" */,-51 , 5/* "^" */,-51 , 6/* "?" */,-51 , 15/* "{" */,-51 , 16/* "}" */,-51 , 17/* "," */,-51 , 11/* "(" */,-51 , 12/* ")" */,-51 , 23/* "WORD_BOUNDARY_CHAR" */,-51 ),
	/* State 50 */ new Array( 14/* "]" */,-50 , 19/* "ASCII_HEX_CODE" */,-50 , 20/* "UNICODE_HEX_CODE" */,-50 , 22/* "SPECIAL_CHAR" */,-50 , 25/* "ESCAPED_CHAR" */,-50 , 24/* "ESCAPED_NUM" */,-50 , 26/* "INT" */,-50 , 27/* "ANY" */,-50 , 21/* "CHARACTER_CLASS" */,-50 , 18/* "ANY_CHAR" */,-50 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-50 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-50 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-50 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-50 , 1/* "|" */,-50 , 2/* "*" */,-50 , 3/* "+" */,-50 , 4/* "$" */,-50 , 5/* "^" */,-50 , 6/* "?" */,-50 , 15/* "{" */,-50 , 16/* "}" */,-50 , 17/* "," */,-50 , 11/* "(" */,-50 , 12/* ")" */,-50 , 23/* "WORD_BOUNDARY_CHAR" */,-50 ),
	/* State 51 */ new Array( 14/* "]" */,-49 , 19/* "ASCII_HEX_CODE" */,-49 , 20/* "UNICODE_HEX_CODE" */,-49 , 22/* "SPECIAL_CHAR" */,-49 , 25/* "ESCAPED_CHAR" */,-49 , 24/* "ESCAPED_NUM" */,-49 , 26/* "INT" */,-49 , 27/* "ANY" */,-49 , 21/* "CHARACTER_CLASS" */,-49 , 18/* "ANY_CHAR" */,-49 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-49 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-49 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-49 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-49 , 1/* "|" */,-49 , 2/* "*" */,-49 , 3/* "+" */,-49 , 4/* "$" */,-49 , 5/* "^" */,-49 , 6/* "?" */,-49 , 15/* "{" */,-49 , 16/* "}" */,-49 , 17/* "," */,-49 , 11/* "(" */,-49 , 12/* ")" */,-49 , 23/* "WORD_BOUNDARY_CHAR" */,-49 ),
	/* State 52 */ new Array( 14/* "]" */,-48 , 19/* "ASCII_HEX_CODE" */,-48 , 20/* "UNICODE_HEX_CODE" */,-48 , 22/* "SPECIAL_CHAR" */,-48 , 25/* "ESCAPED_CHAR" */,-48 , 24/* "ESCAPED_NUM" */,-48 , 26/* "INT" */,-48 , 27/* "ANY" */,-48 , 21/* "CHARACTER_CLASS" */,-48 , 18/* "ANY_CHAR" */,-48 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-48 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-48 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-48 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-48 , 1/* "|" */,-48 , 2/* "*" */,-48 , 3/* "+" */,-48 , 4/* "$" */,-48 , 5/* "^" */,-48 , 6/* "?" */,-48 , 15/* "{" */,-48 , 16/* "}" */,-48 , 17/* "," */,-48 , 11/* "(" */,-48 , 12/* ")" */,-48 , 23/* "WORD_BOUNDARY_CHAR" */,-48 ),
	/* State 53 */ new Array( 14/* "]" */,-47 , 19/* "ASCII_HEX_CODE" */,-47 , 20/* "UNICODE_HEX_CODE" */,-47 , 22/* "SPECIAL_CHAR" */,-47 , 25/* "ESCAPED_CHAR" */,-47 , 24/* "ESCAPED_NUM" */,-47 , 26/* "INT" */,-47 , 27/* "ANY" */,-47 , 21/* "CHARACTER_CLASS" */,-47 , 18/* "ANY_CHAR" */,-47 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-47 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-47 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-47 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-47 , 1/* "|" */,-47 , 2/* "*" */,-47 , 3/* "+" */,-47 , 4/* "$" */,-47 , 5/* "^" */,-47 , 6/* "?" */,-47 , 15/* "{" */,-47 , 16/* "}" */,-47 , 17/* "," */,-47 , 11/* "(" */,-47 , 12/* ")" */,-47 , 23/* "WORD_BOUNDARY_CHAR" */,-47 ),
	/* State 54 */ new Array( 14/* "]" */,-46 , 19/* "ASCII_HEX_CODE" */,-46 , 20/* "UNICODE_HEX_CODE" */,-46 , 22/* "SPECIAL_CHAR" */,-46 , 25/* "ESCAPED_CHAR" */,-46 , 24/* "ESCAPED_NUM" */,-46 , 26/* "INT" */,-46 , 27/* "ANY" */,-46 , 21/* "CHARACTER_CLASS" */,-46 , 18/* "ANY_CHAR" */,-46 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-46 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-46 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-46 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-46 , 1/* "|" */,-46 , 2/* "*" */,-46 , 3/* "+" */,-46 , 4/* "$" */,-46 , 5/* "^" */,-46 , 6/* "?" */,-46 , 15/* "{" */,-46 , 16/* "}" */,-46 , 17/* "," */,-46 , 11/* "(" */,-46 , 12/* ")" */,-46 , 23/* "WORD_BOUNDARY_CHAR" */,-46 ),
	/* State 55 */ new Array( 14/* "]" */,-45 , 19/* "ASCII_HEX_CODE" */,-45 , 20/* "UNICODE_HEX_CODE" */,-45 , 22/* "SPECIAL_CHAR" */,-45 , 25/* "ESCAPED_CHAR" */,-45 , 24/* "ESCAPED_NUM" */,-45 , 26/* "INT" */,-45 , 27/* "ANY" */,-45 , 21/* "CHARACTER_CLASS" */,-45 , 18/* "ANY_CHAR" */,-45 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-45 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-45 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-45 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-45 , 1/* "|" */,-45 , 2/* "*" */,-45 , 3/* "+" */,-45 , 4/* "$" */,-45 , 5/* "^" */,-45 , 6/* "?" */,-45 , 15/* "{" */,-45 , 16/* "}" */,-45 , 17/* "," */,-45 , 11/* "(" */,-45 , 12/* ")" */,-45 , 23/* "WORD_BOUNDARY_CHAR" */,-45 ),
	/* State 56 */ new Array( 14/* "]" */,-44 , 19/* "ASCII_HEX_CODE" */,-44 , 20/* "UNICODE_HEX_CODE" */,-44 , 22/* "SPECIAL_CHAR" */,-44 , 25/* "ESCAPED_CHAR" */,-44 , 24/* "ESCAPED_NUM" */,-44 , 26/* "INT" */,-44 , 27/* "ANY" */,-44 , 21/* "CHARACTER_CLASS" */,-44 , 18/* "ANY_CHAR" */,-44 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-44 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-44 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-44 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-44 , 1/* "|" */,-44 , 2/* "*" */,-44 , 3/* "+" */,-44 , 4/* "$" */,-44 , 5/* "^" */,-44 , 6/* "?" */,-44 , 15/* "{" */,-44 , 16/* "}" */,-44 , 17/* "," */,-44 , 11/* "(" */,-44 , 12/* ")" */,-44 , 23/* "WORD_BOUNDARY_CHAR" */,-44 ),
	/* State 57 */ new Array( 14/* "]" */,-43 , 19/* "ASCII_HEX_CODE" */,-43 , 20/* "UNICODE_HEX_CODE" */,-43 , 22/* "SPECIAL_CHAR" */,-43 , 25/* "ESCAPED_CHAR" */,-43 , 24/* "ESCAPED_NUM" */,-43 , 26/* "INT" */,-43 , 27/* "ANY" */,-43 , 21/* "CHARACTER_CLASS" */,-43 , 18/* "ANY_CHAR" */,-43 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-43 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-43 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-43 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-43 , 1/* "|" */,-43 , 2/* "*" */,-43 , 3/* "+" */,-43 , 4/* "$" */,-43 , 5/* "^" */,-43 , 6/* "?" */,-43 , 15/* "{" */,-43 , 16/* "}" */,-43 , 17/* "," */,-43 , 11/* "(" */,-43 , 12/* ")" */,-43 , 23/* "WORD_BOUNDARY_CHAR" */,-43 ),
	/* State 58 */ new Array( 14/* "]" */,-42 , 19/* "ASCII_HEX_CODE" */,-42 , 20/* "UNICODE_HEX_CODE" */,-42 , 22/* "SPECIAL_CHAR" */,-42 , 25/* "ESCAPED_CHAR" */,-42 , 24/* "ESCAPED_NUM" */,-42 , 26/* "INT" */,-42 , 27/* "ANY" */,-42 , 21/* "CHARACTER_CLASS" */,-42 , 18/* "ANY_CHAR" */,-42 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-42 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-42 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-42 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-42 , 1/* "|" */,-42 , 2/* "*" */,-42 , 3/* "+" */,-42 , 4/* "$" */,-42 , 5/* "^" */,-42 , 6/* "?" */,-42 , 15/* "{" */,-42 , 16/* "}" */,-42 , 17/* "," */,-42 , 11/* "(" */,-42 , 12/* ")" */,-42 , 23/* "WORD_BOUNDARY_CHAR" */,-42 ),
	/* State 59 */ new Array( 14/* "]" */,-41 , 19/* "ASCII_HEX_CODE" */,-41 , 20/* "UNICODE_HEX_CODE" */,-41 , 22/* "SPECIAL_CHAR" */,-41 , 25/* "ESCAPED_CHAR" */,-41 , 24/* "ESCAPED_NUM" */,-41 , 26/* "INT" */,-41 , 27/* "ANY" */,-41 , 21/* "CHARACTER_CLASS" */,-41 , 18/* "ANY_CHAR" */,-41 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-41 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-41 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-41 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-41 , 1/* "|" */,-41 , 2/* "*" */,-41 , 3/* "+" */,-41 , 4/* "$" */,-41 , 5/* "^" */,-41 , 6/* "?" */,-41 , 15/* "{" */,-41 , 16/* "}" */,-41 , 17/* "," */,-41 , 11/* "(" */,-41 , 12/* ")" */,-41 , 23/* "WORD_BOUNDARY_CHAR" */,-41 ),
	/* State 60 */ new Array( 14/* "]" */,-40 , 19/* "ASCII_HEX_CODE" */,-40 , 20/* "UNICODE_HEX_CODE" */,-40 , 22/* "SPECIAL_CHAR" */,-40 , 25/* "ESCAPED_CHAR" */,-40 , 24/* "ESCAPED_NUM" */,-40 , 26/* "INT" */,-40 , 27/* "ANY" */,-40 , 21/* "CHARACTER_CLASS" */,-40 , 18/* "ANY_CHAR" */,-40 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-40 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-40 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-40 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-40 , 1/* "|" */,-40 , 2/* "*" */,-40 , 3/* "+" */,-40 , 4/* "$" */,-40 , 5/* "^" */,-40 , 6/* "?" */,-40 , 15/* "{" */,-40 , 16/* "}" */,-40 , 17/* "," */,-40 , 11/* "(" */,-40 , 12/* ")" */,-40 , 23/* "WORD_BOUNDARY_CHAR" */,-40 ),
	/* State 61 */ new Array( 14/* "]" */,-39 , 19/* "ASCII_HEX_CODE" */,-39 , 20/* "UNICODE_HEX_CODE" */,-39 , 22/* "SPECIAL_CHAR" */,-39 , 25/* "ESCAPED_CHAR" */,-39 , 24/* "ESCAPED_NUM" */,-39 , 26/* "INT" */,-39 , 27/* "ANY" */,-39 , 21/* "CHARACTER_CLASS" */,-39 , 18/* "ANY_CHAR" */,-39 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-39 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-39 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-39 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-39 , 1/* "|" */,-39 , 2/* "*" */,-39 , 3/* "+" */,-39 , 4/* "$" */,-39 , 5/* "^" */,-39 , 6/* "?" */,-39 , 15/* "{" */,-39 , 16/* "}" */,-39 , 17/* "," */,-39 , 11/* "(" */,-39 , 12/* ")" */,-39 , 23/* "WORD_BOUNDARY_CHAR" */,-39 ),
	/* State 62 */ new Array( 14/* "]" */,-38 , 19/* "ASCII_HEX_CODE" */,-38 , 20/* "UNICODE_HEX_CODE" */,-38 , 22/* "SPECIAL_CHAR" */,-38 , 25/* "ESCAPED_CHAR" */,-38 , 24/* "ESCAPED_NUM" */,-38 , 26/* "INT" */,-38 , 27/* "ANY" */,-38 , 21/* "CHARACTER_CLASS" */,-38 , 18/* "ANY_CHAR" */,-38 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-38 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-38 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-38 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-38 , 1/* "|" */,-38 , 2/* "*" */,-38 , 3/* "+" */,-38 , 4/* "$" */,-38 , 5/* "^" */,-38 , 6/* "?" */,-38 , 15/* "{" */,-38 , 16/* "}" */,-38 , 17/* "," */,-38 , 11/* "(" */,-38 , 12/* ")" */,-38 , 23/* "WORD_BOUNDARY_CHAR" */,-38 ),
	/* State 63 */ new Array( 14/* "]" */,-37 , 19/* "ASCII_HEX_CODE" */,-37 , 20/* "UNICODE_HEX_CODE" */,-37 , 22/* "SPECIAL_CHAR" */,-37 , 25/* "ESCAPED_CHAR" */,-37 , 24/* "ESCAPED_NUM" */,-37 , 26/* "INT" */,-37 , 27/* "ANY" */,-37 , 21/* "CHARACTER_CLASS" */,-37 , 18/* "ANY_CHAR" */,-37 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-37 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-37 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-37 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-37 , 1/* "|" */,-37 , 2/* "*" */,-37 , 3/* "+" */,-37 , 4/* "$" */,-37 , 5/* "^" */,-37 , 6/* "?" */,-37 , 15/* "{" */,-37 , 16/* "}" */,-37 , 17/* "," */,-37 , 11/* "(" */,-37 , 12/* ")" */,-37 , 23/* "WORD_BOUNDARY_CHAR" */,-37 ),
	/* State 64 */ new Array( 14/* "]" */,-36 , 19/* "ASCII_HEX_CODE" */,-36 , 20/* "UNICODE_HEX_CODE" */,-36 , 22/* "SPECIAL_CHAR" */,-36 , 25/* "ESCAPED_CHAR" */,-36 , 24/* "ESCAPED_NUM" */,-36 , 26/* "INT" */,-36 , 27/* "ANY" */,-36 , 21/* "CHARACTER_CLASS" */,-36 , 18/* "ANY_CHAR" */,-36 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-36 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-36 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-36 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-36 , 1/* "|" */,-36 , 2/* "*" */,-36 , 3/* "+" */,-36 , 4/* "$" */,-36 , 5/* "^" */,-36 , 6/* "?" */,-36 , 15/* "{" */,-36 , 16/* "}" */,-36 , 17/* "," */,-36 , 11/* "(" */,-36 , 12/* ")" */,-36 , 23/* "WORD_BOUNDARY_CHAR" */,-36 ),
	/* State 65 */ new Array( 14/* "]" */,-35 , 19/* "ASCII_HEX_CODE" */,-35 , 20/* "UNICODE_HEX_CODE" */,-35 , 22/* "SPECIAL_CHAR" */,-35 , 25/* "ESCAPED_CHAR" */,-35 , 24/* "ESCAPED_NUM" */,-35 , 26/* "INT" */,-35 , 27/* "ANY" */,-35 , 21/* "CHARACTER_CLASS" */,-35 , 18/* "ANY_CHAR" */,-35 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-35 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-35 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-35 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-35 , 1/* "|" */,-35 , 2/* "*" */,-35 , 3/* "+" */,-35 , 4/* "$" */,-35 , 5/* "^" */,-35 , 6/* "?" */,-35 , 15/* "{" */,-35 , 16/* "}" */,-35 , 17/* "," */,-35 , 11/* "(" */,-35 , 12/* ")" */,-35 , 23/* "WORD_BOUNDARY_CHAR" */,-35 ),
	/* State 66 */ new Array( 14/* "]" */,-34 , 19/* "ASCII_HEX_CODE" */,-34 , 20/* "UNICODE_HEX_CODE" */,-34 , 22/* "SPECIAL_CHAR" */,-34 , 25/* "ESCAPED_CHAR" */,-34 , 24/* "ESCAPED_NUM" */,-34 , 26/* "INT" */,-34 , 27/* "ANY" */,-34 , 21/* "CHARACTER_CLASS" */,-34 , 18/* "ANY_CHAR" */,-34 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-34 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-34 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-34 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-34 , 1/* "|" */,-34 , 2/* "*" */,-34 , 3/* "+" */,-34 , 4/* "$" */,-34 , 5/* "^" */,-34 , 6/* "?" */,-34 , 15/* "{" */,-34 , 16/* "}" */,-34 , 17/* "," */,-34 , 11/* "(" */,-34 , 12/* ")" */,-34 , 23/* "WORD_BOUNDARY_CHAR" */,-34 ),
	/* State 67 */ new Array( 14/* "]" */,-33 , 19/* "ASCII_HEX_CODE" */,-33 , 20/* "UNICODE_HEX_CODE" */,-33 , 22/* "SPECIAL_CHAR" */,-33 , 25/* "ESCAPED_CHAR" */,-33 , 24/* "ESCAPED_NUM" */,-33 , 26/* "INT" */,-33 , 27/* "ANY" */,-33 , 21/* "CHARACTER_CLASS" */,-33 , 18/* "ANY_CHAR" */,-33 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-33 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-33 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-33 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-33 , 1/* "|" */,-33 , 2/* "*" */,-33 , 3/* "+" */,-33 , 4/* "$" */,-33 , 5/* "^" */,-33 , 6/* "?" */,-33 , 15/* "{" */,-33 , 16/* "}" */,-33 , 17/* "," */,-33 , 11/* "(" */,-33 , 12/* ")" */,-33 , 23/* "WORD_BOUNDARY_CHAR" */,-33 ),
	/* State 68 */ new Array( 2/* "*" */,-30 , 3/* "+" */,-30 , 6/* "?" */,-30 , 15/* "{" */,-30 , 37/* "$" */,-30 , 1/* "|" */,-30 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-30 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-30 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-30 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-30 , 11/* "(" */,-30 , 19/* "ASCII_HEX_CODE" */,-30 , 20/* "UNICODE_HEX_CODE" */,-30 , 22/* "SPECIAL_CHAR" */,-30 , 25/* "ESCAPED_CHAR" */,-30 , 24/* "ESCAPED_NUM" */,-30 , 26/* "INT" */,-30 , 27/* "ANY" */,-30 , 13/* "[" */,-30 , 18/* "ANY_CHAR" */,-30 , 21/* "CHARACTER_CLASS" */,-30 , 4/* "$" */,-30 , 5/* "^" */,-30 , 23/* "WORD_BOUNDARY_CHAR" */,-30 , 12/* ")" */,-30 ),
	/* State 69 */ new Array( 16/* "}" */,71 , 26/* "INT" */,72 ),
	/* State 70 */ new Array( 6/* "?" */,73 , 37/* "$" */,-15 , 1/* "|" */,-15 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-15 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-15 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-15 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-15 , 11/* "(" */,-15 , 19/* "ASCII_HEX_CODE" */,-15 , 20/* "UNICODE_HEX_CODE" */,-15 , 22/* "SPECIAL_CHAR" */,-15 , 25/* "ESCAPED_CHAR" */,-15 , 24/* "ESCAPED_NUM" */,-15 , 26/* "INT" */,-15 , 27/* "ANY" */,-15 , 13/* "[" */,-15 , 18/* "ANY_CHAR" */,-15 , 21/* "CHARACTER_CLASS" */,-15 , 4/* "$" */,-15 , 5/* "^" */,-15 , 23/* "WORD_BOUNDARY_CHAR" */,-15 , 12/* ")" */,-15 ),
	/* State 71 */ new Array( 6/* "?" */,74 , 37/* "$" */,-16 , 1/* "|" */,-16 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-16 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-16 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-16 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-16 , 11/* "(" */,-16 , 19/* "ASCII_HEX_CODE" */,-16 , 20/* "UNICODE_HEX_CODE" */,-16 , 22/* "SPECIAL_CHAR" */,-16 , 25/* "ESCAPED_CHAR" */,-16 , 24/* "ESCAPED_NUM" */,-16 , 26/* "INT" */,-16 , 27/* "ANY" */,-16 , 13/* "[" */,-16 , 18/* "ANY_CHAR" */,-16 , 21/* "CHARACTER_CLASS" */,-16 , 4/* "$" */,-16 , 5/* "^" */,-16 , 23/* "WORD_BOUNDARY_CHAR" */,-16 , 12/* ")" */,-16 ),
	/* State 72 */ new Array( 16/* "}" */,75 ),
	/* State 73 */ new Array( 37/* "$" */,-9 , 1/* "|" */,-9 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-9 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-9 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-9 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-9 , 11/* "(" */,-9 , 19/* "ASCII_HEX_CODE" */,-9 , 20/* "UNICODE_HEX_CODE" */,-9 , 22/* "SPECIAL_CHAR" */,-9 , 25/* "ESCAPED_CHAR" */,-9 , 24/* "ESCAPED_NUM" */,-9 , 26/* "INT" */,-9 , 27/* "ANY" */,-9 , 13/* "[" */,-9 , 18/* "ANY_CHAR" */,-9 , 21/* "CHARACTER_CLASS" */,-9 , 4/* "$" */,-9 , 5/* "^" */,-9 , 23/* "WORD_BOUNDARY_CHAR" */,-9 , 12/* ")" */,-9 ),
	/* State 74 */ new Array( 37/* "$" */,-10 , 1/* "|" */,-10 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-10 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-10 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-10 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-10 , 11/* "(" */,-10 , 19/* "ASCII_HEX_CODE" */,-10 , 20/* "UNICODE_HEX_CODE" */,-10 , 22/* "SPECIAL_CHAR" */,-10 , 25/* "ESCAPED_CHAR" */,-10 , 24/* "ESCAPED_NUM" */,-10 , 26/* "INT" */,-10 , 27/* "ANY" */,-10 , 13/* "[" */,-10 , 18/* "ANY_CHAR" */,-10 , 21/* "CHARACTER_CLASS" */,-10 , 4/* "$" */,-10 , 5/* "^" */,-10 , 23/* "WORD_BOUNDARY_CHAR" */,-10 , 12/* ")" */,-10 ),
	/* State 75 */ new Array( 6/* "?" */,76 , 37/* "$" */,-17 , 1/* "|" */,-17 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-17 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-17 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-17 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-17 , 11/* "(" */,-17 , 19/* "ASCII_HEX_CODE" */,-17 , 20/* "UNICODE_HEX_CODE" */,-17 , 22/* "SPECIAL_CHAR" */,-17 , 25/* "ESCAPED_CHAR" */,-17 , 24/* "ESCAPED_NUM" */,-17 , 26/* "INT" */,-17 , 27/* "ANY" */,-17 , 13/* "[" */,-17 , 18/* "ANY_CHAR" */,-17 , 21/* "CHARACTER_CLASS" */,-17 , 4/* "$" */,-17 , 5/* "^" */,-17 , 23/* "WORD_BOUNDARY_CHAR" */,-17 , 12/* ")" */,-17 ),
	/* State 76 */ new Array( 37/* "$" */,-11 , 1/* "|" */,-11 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-11 , 8/* "NAMED_CAPTURING_OPEN_GROUP" */,-11 , 9/* "POS_LOOKAHEAD_OPEN_GROUP" */,-11 , 10/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-11 , 11/* "(" */,-11 , 19/* "ASCII_HEX_CODE" */,-11 , 20/* "UNICODE_HEX_CODE" */,-11 , 22/* "SPECIAL_CHAR" */,-11 , 25/* "ESCAPED_CHAR" */,-11 , 24/* "ESCAPED_NUM" */,-11 , 26/* "INT" */,-11 , 27/* "ANY" */,-11 , 13/* "[" */,-11 , 18/* "ANY_CHAR" */,-11 , 21/* "CHARACTER_CLASS" */,-11 , 4/* "$" */,-11 , 5/* "^" */,-11 , 23/* "WORD_BOUNDARY_CHAR" */,-11 , 12/* ")" */,-11 )
);

/* Goto-Table */
var goto_tab = new Array(
	/* State 0 */ new Array( 29/* RegEx */,1 , 28/* Expression */,2 , 30/* Catenation */,3 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 1 */ new Array(  ),
	/* State 2 */ new Array(  ),
	/* State 3 */ new Array( 31/* Factor */,28 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 4 */ new Array(  ),
	/* State 5 */ new Array(  ),
	/* State 6 */ new Array(  ),
	/* State 7 */ new Array(  ),
	/* State 8 */ new Array( 28/* Expression */,33 , 30/* Catenation */,3 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 9 */ new Array( 28/* Expression */,34 , 30/* Catenation */,3 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 10 */ new Array( 28/* Expression */,35 , 30/* Catenation */,3 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 11 */ new Array( 28/* Expression */,36 , 30/* Catenation */,3 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 12 */ new Array( 28/* Expression */,37 , 30/* Catenation */,3 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 13 */ new Array(  ),
	/* State 14 */ new Array(  ),
	/* State 15 */ new Array(  ),
	/* State 16 */ new Array(  ),
	/* State 17 */ new Array(  ),
	/* State 18 */ new Array(  ),
	/* State 19 */ new Array(  ),
	/* State 20 */ new Array(  ),
	/* State 21 */ new Array( 36/* CharClass */,38 ),
	/* State 22 */ new Array(  ),
	/* State 23 */ new Array(  ),
	/* State 24 */ new Array(  ),
	/* State 25 */ new Array(  ),
	/* State 26 */ new Array(  ),
	/* State 27 */ new Array( 30/* Catenation */,39 , 31/* Factor */,4 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 28 */ new Array(  ),
	/* State 29 */ new Array(  ),
	/* State 30 */ new Array(  ),
	/* State 31 */ new Array(  ),
	/* State 32 */ new Array(  ),
	/* State 33 */ new Array(  ),
	/* State 34 */ new Array(  ),
	/* State 35 */ new Array(  ),
	/* State 36 */ new Array(  ),
	/* State 37 */ new Array(  ),
	/* State 38 */ new Array( 33/* Character */,67 ),
	/* State 39 */ new Array( 31/* Factor */,28 , 32/* Term */,5 , 33/* Character */,6 , 34/* CharacterSet */,7 , 35/* Positional */,13 ),
	/* State 40 */ new Array(  ),
	/* State 41 */ new Array(  ),
	/* State 42 */ new Array(  ),
	/* State 43 */ new Array(  ),
	/* State 44 */ new Array(  ),
	/* State 45 */ new Array(  ),
	/* State 46 */ new Array(  ),
	/* State 47 */ new Array(  ),
	/* State 48 */ new Array(  ),
	/* State 49 */ new Array(  ),
	/* State 50 */ new Array(  ),
	/* State 51 */ new Array(  ),
	/* State 52 */ new Array(  ),
	/* State 53 */ new Array(  ),
	/* State 54 */ new Array(  ),
	/* State 55 */ new Array(  ),
	/* State 56 */ new Array(  ),
	/* State 57 */ new Array(  ),
	/* State 58 */ new Array(  ),
	/* State 59 */ new Array(  ),
	/* State 60 */ new Array(  ),
	/* State 61 */ new Array(  ),
	/* State 62 */ new Array(  ),
	/* State 63 */ new Array(  ),
	/* State 64 */ new Array(  ),
	/* State 65 */ new Array(  ),
	/* State 66 */ new Array(  ),
	/* State 67 */ new Array(  ),
	/* State 68 */ new Array(  ),
	/* State 69 */ new Array(  ),
	/* State 70 */ new Array(  ),
	/* State 71 */ new Array(  ),
	/* State 72 */ new Array(  ),
	/* State 73 */ new Array(  ),
	/* State 74 */ new Array(  ),
	/* State 75 */ new Array(  ),
	/* State 76 */ new Array(  )
);



/* Symbol labels */
var labels = new Array(
	"RegEx'" /* Non-terminal symbol */,
	"|" /* Terminal symbol */,
	"*" /* Terminal symbol */,
	"+" /* Terminal symbol */,
	"$" /* Terminal symbol */,
	"^" /* Terminal symbol */,
	"?" /* Terminal symbol */,
	"NON_CAPTURING_OPEN_GROUP" /* Terminal symbol */,
	"NAMED_CAPTURING_OPEN_GROUP" /* Terminal symbol */,
	"POS_LOOKAHEAD_OPEN_GROUP" /* Terminal symbol */,
	"NEG_LOOKAHEAD_OPEN_GROUP" /* Terminal symbol */,
	"(" /* Terminal symbol */,
	")" /* Terminal symbol */,
	"[" /* Terminal symbol */,
	"]" /* Terminal symbol */,
	"{" /* Terminal symbol */,
	"}" /* Terminal symbol */,
	"," /* Terminal symbol */,
	"ANY_CHAR" /* Terminal symbol */,
	"ASCII_HEX_CODE" /* Terminal symbol */,
	"UNICODE_HEX_CODE" /* Terminal symbol */,
	"CHARACTER_CLASS" /* Terminal symbol */,
	"SPECIAL_CHAR" /* Terminal symbol */,
	"WORD_BOUNDARY_CHAR" /* Terminal symbol */,
	"ESCAPED_NUM" /* Terminal symbol */,
	"ESCAPED_CHAR" /* Terminal symbol */,
	"INT" /* Terminal symbol */,
	"ANY" /* Terminal symbol */,
	"Expression" /* Non-terminal symbol */,
	"RegEx" /* Non-terminal symbol */,
	"Catenation" /* Non-terminal symbol */,
	"Factor" /* Non-terminal symbol */,
	"Term" /* Non-terminal symbol */,
	"Character" /* Non-terminal symbol */,
	"CharacterSet" /* Non-terminal symbol */,
	"Positional" /* Non-terminal symbol */,
	"CharClass" /* Non-terminal symbol */,
	"$" /* Terminal symbol */
);


	if (typeof alert_func == 'undefined')
		alert_func = alert;
	info.offset = 0;
	info.src = src;
	info.att = new String();
	
	if( !err_off )
		err_off	= new Array();
	if( !err_la )
	err_la = new Array();
	
	sstack.push( 0 );
	vstack.push( 0 );
	
	la = this.lex( info );

	while( true )
	{
		act = 78;
		for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
		{
			if( act_tab[sstack[sstack.length-1]][i] == la )
			{
				act = act_tab[sstack[sstack.length-1]][i+1];
				break;
			}
		}

		if( this._dbg_withtrace && sstack.length > 0 )
		{
			this.dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
							"\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
							"\tAction: " + act + "\n" + 
							"\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
									"..." : "" ) + "\"\n" +
							"\tStack: " + sstack.join() + "\n" +
							"\tValue stack: " + vstack.join() + "\n" );
		}
		
			
		//Panic-mode: Try recovery when parse-error occurs!
		if( act == 78 )
		{
			if( this._dbg_withtrace )
				this.dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
			
			err_cnt++;
			err_off.push( info.offset - info.att.length );			
			err_la.push( new Array() );
			for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
				err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
			
			//Remember the original stack!
			var rsstack = new Array();
			var rvstack = new Array();
			for( var i = 0; i < sstack.length; i++ )
			{
				rsstack[i] = sstack[i];
				rvstack[i] = vstack[i];
			}
			
			while( act == 78 && la != 37 )
			{
				if( this._dbg_withtrace )
					this.dbg_print( "\tError recovery\n" +
									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
									"Action: " + act + "\n\n" );
				if( la == -1 )
					info.offset++;
					
				while( act == 78 && sstack.length > 0 )
				{
					sstack.pop();
					vstack.pop();
					
					if( sstack.length == 0 )
						break;
						
					act = 78;
					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
					{
						if( act_tab[sstack[sstack.length-1]][i] == la )
						{
							act = act_tab[sstack[sstack.length-1]][i+1];
							break;
						}
					}
				}
				
				if( act != 78 )
					break;
				
				for( var i = 0; i < rsstack.length; i++ )
				{
					sstack.push( rsstack[i] );
					vstack.push( rvstack[i] );
				}
				
				la = this.lex( info );
			}
			
			if( act == 78 )
			{
				if( this._dbg_withtrace )
					this.dbg_print( "\tError recovery failed, terminating parse process..." );
				break;
			}


			if( this._dbg_withtrace )
				this.dbg_print( "\tError recovery succeeded, continuing" );
		}
		
		/*
		if( act == 78 )
			break;
		*/
		
		
		//Shift
		if( act > 0 )
		{			
			if( this._dbg_withtrace )
				this.dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
		
			sstack.push( act );
			vstack.push( info.att );
			
			la = this.lex( info );
			
			if( this._dbg_withtrace )
				this.dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
		}
		//Reduce
		else
		{		
			act *= -1;
			
			if( this._dbg_withtrace )
				this.dbg_print( "Reducing by producution: " + act );
			
			rval = void(0);
			
			if( this._dbg_withtrace )
				this.dbg_print( "\tPerforming semantic action..." );
			
switch( act )
{
	case 0:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 1:
	{
			rval = __regex_parse_result = vstack[ vstack.length - 1 ]; 
	}
	break;
	case 2:
	{
			if (vstack[ vstack.length - 3 ] instanceof RXBuild.Dom.AlternativeMatch)
													{
														rval = vstack[ vstack.length - 3 ];
														vstack[ vstack.length - 3 ].AddAlternative(vstack[ vstack.length - 1 ]);
													}
													else
														rval = new RXBuild.Dom.AlternativeMatch(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]);
													rval.AddTokens(vstack[ vstack.length - 2 ]);  
	}
	break;
	case 3:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 4:
	{
			vstack[ vstack.length - 2 ].AppendAtEnd(vstack[ vstack.length - 1 ]); rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 5:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 6:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 3 ], 0, -1, false); rval.AddTokens(vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 7:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 3 ], 1, -1, false); rval.AddTokens(vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 8:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 3 ], 0, 1, false); rval.AddTokens(vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 9:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 5 ], parseInt(vstack[ vstack.length - 3 ].value), parseInt(vstack[ vstack.length - 3 ].value), false); rval.AddTokens(vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 10:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 6 ], parseInt(vstack[ vstack.length - 4 ].value), -1, false); rval.AddTokens(vstack[ vstack.length - 5 ], vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 11:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 7 ], parseInt(vstack[ vstack.length - 5 ].value), parseInt(vstack[ vstack.length - 3 ].value), false); rval.AddTokens(vstack[ vstack.length - 6 ], vstack[ vstack.length - 5 ], vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 12:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 2 ], 0, -1, true); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 13:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 2 ], 1, -1, true); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 14:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 2 ], 0, 1, true); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 15:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 4 ], parseInt(vstack[ vstack.length - 2 ].value), parseInt(vstack[ vstack.length - 2 ].value), true);  rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 16:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 5 ], parseInt(vstack[ vstack.length - 3 ].value), -1, true); rval.AddTokens(vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 17:
	{
		 	rval = new RXBuild.Dom.RepeatedMatch(vstack[ vstack.length - 6 ], parseInt(vstack[ vstack.length - 4 ].value), parseInt(vstack[ vstack.length - 2 ].value), true); rval.AddTokens(vstack[ vstack.length - 5 ], vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 18:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 19:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 20:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 21:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "no_capture"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 22:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "named", vstack[ vstack.length - 3 ].value.replace(/(^\(\?<)|(>$)/g, '')); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 23:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "pos_la"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 24:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "neg_la"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 25:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "capture"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 26:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 27:
	{
		  rval = new RXBuild.Dom.PositionalMatch(vstack[ vstack.length - 1 ].value, this.options.m); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 28:
	{
		  rval = new RXBuild.Dom.PositionalMatch(vstack[ vstack.length - 1 ].value, this.options.m); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 29:
	{
		  rval = new RXBuild.Dom.PositionalMatch(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 30:
	{
			rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 31:
	{
			rval = new RXBuild.Dom.CharacterRangeMatch(true); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 32:
	{
		  rval = new RXBuild.Dom.CharacterRangeMatch(false); rval.AddClass(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 33:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ]); rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 34:
	{
			vstack[ vstack.length - 2 ].AddClass(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 35:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 36:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 37:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 38:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 39:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 40:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 41:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 42:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 43:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 44:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 45:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 46:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 47:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 48:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 49:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 50:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 51:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value == "\\b" ? "\b" : vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 52:
	{
			rval = new RXBuild.Dom.CharacterRangeMatch(false); 
	}
	break;
	case 53:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 54:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 55:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 56:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value.substr(1, 1)); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 57:
	{
			rval = new RXBuild.Dom.BackTrackOrEscapeTempMatch(vstack[ vstack.length - 1 ].value.substr(1)); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 58:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 59:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
}



			if( this._dbg_withtrace )
				this.dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
				
			for( var i = 0; i < pop_tab[act][1]; i++ )
			{
				sstack.pop();
				vstack.pop();
			}
									
			go = -1;
			for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
			{
				if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
				{
					go = goto_tab[sstack[sstack.length-1]][i+1];
					break;
				}
			}
			
			if( act == 0 )
				break;
				
			if( this._dbg_withtrace )
				this.dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
				
			sstack.push( go );
			vstack.push( rval );			
		}
		
		if( this._dbg_withtrace )
		{
			if (alert_func)
				alert_func( this._dbg_string );
			this._dbg_string = new String();
		}
	}

	if( this._dbg_withtrace )
	{
		this.dbg_print( "\nParse complete." );
		if (alert_func)
			alert_func( this._dbg_string );
	}
	
	return err_cnt;
}



	/** 
		Creates a new instance of TokenInfo
		@class The TokenInfo class holds information about a token from the input stream
		@property {Number} offset The index of this token in the input stream
		@property {Number} length The length of this token as it appeared originally in the input stream
		@property {String} value The actual value (possibly converted) of the part matched by this token
		@constructor
		@param {String} value The value from the input stream
		@param {Number} offset The first index of this token in the input string
		@param {function} converter If defined, this function is called with the value as parameter, and its return value is used as the new value.
	*/
	regex_parser.TokenInfo = function (value, offset, converter) {
		this.length = value.length;
		this.value = converter ? converter(value) : value;
		this.offset = offset;
		if (value == null)
		  throw ("new TokenInfo - Error, null value");
	};
	regex_parser.TokenInfo.prototype.constructor = regex_parser.TokenInfo;

	/** @private */
	regex_parser.prototype.converterASCII_HEX_CODE = function(input) {
		return String.fromCharCode(parseInt("0x" + input.substr(2)));
	};
	/** @private */
	regex_parser.prototype.converterUNICODE_HEX_CODE = function(input) {
		return String.fromCharCode(parseInt("0x" + input.substr(2)));
	};
	/** @private */
	regex_parser.prototype.converterSPECIAL_CHAR = function(input) {
		input = input.substr(1);
		if (input == "f")
			return String.fromCharCode(12);
		if (input == "n")
			return String.fromCharCode(10);
		if (input == "r")
			return String.fromCharCode(13);
		if (input == "t")
			return String.fromCharCode(9);
		if (input == "v")
			return String.fromCharCode(11);		
		throw "Unknown special character: \\" + input;
	};
	/** @private */
	regex_parser.prototype.converterWORD_BOUNDARY_CHAR = function(input) {
		if (input == "\\b")
			return "\\b";
		return input;
	};
	/** @private */
	regex_parser.prototype.converterCHARACTER_CLASS = function(input) {
		var sClass = input.substr(1);
		if (sClass == "d") {
			return "0-9";
		} else if (sClass == "D") {
			return "^0-9";
		} else if (sClass == "s") {
			return "\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
		} else if (sClass == "S") {
			return "^\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
		} else if (sClass == "w") {
			return "A-Za-z0-9_";
		} else if (sClass == "W") {
			return "^A-Za-z0-9_";
		}
		throw "Unknown character class: \\" + input.substr(1);
	};
	/** Compiles the provided regexp, and returns the resulting tree, if succesfull, or an error string.
		@param {String} str The regexp string to parse
		@return {String|Matcher} The error string if any error occured while parsing, or the resulting root matcher
	*/
	regex_parser.prototype.compile = function (str, caseInsensitive, multiline, global) 
	{ 
	    var i, j; 
	    var error_offsets = new Array(); 
	    var error_expects = new Array(); 
	    var error_count = 0; 

		this.options = {};
		if (caseInsensitive) this.options.i = true;
		if (multiline) this.options.m = true;
		if (global) this.options.g = true;
	    if( str == "" ) 
	        return; 
	    if( ( error_count = this.parse( str, error_offsets, error_expects, false ) ) == 0 ) 
	    { 
	    	var idArray = [1, 1];
			__regex_parse_result = __regex_parse_result.Flatten();
	        __regex_parse_result = __regex_parse_result.RunForAll(function(current_ids) {
				this.id = current_ids[0]++;
				if (this instanceof RXBuild.Dom.GroupMatch && this.captured)
					this.groupIndex = current_ids[1]++;
				return this;
				}, idArray);
	        __regex_parse_result = __regex_parse_result.RunForAll(function(max_group_id) { 
	            if (this instanceof RXBuild.Dom.BackTrackOrEscapeTempMatch) 
	                if (this.number >= max_group_id) 
	                { 
	                    var oEscapeMatcher = new RXBuild.Dom.LiteralMatcher(String.fromCharCode( this.number )); 
	                    oEscapeMatcher.next = this.next; 
	                    oEscapeMatcher.id = this.id; 
	                    return oEscapeMatcher; 
	                } 
	            return this; 
	        }, idArray[1]);
	        return __regex_parse_result; 
	    } 
	    else 
	    {
			var sResult = error_count + " errors encountered:\n"
	        for( i = 0; i < error_count; i++ ) 
	        {
				if (i > 0)
					sResult += "\n\n";
				sResult += "Error #" + (i + 1) + ":\n";
	            var spaces = new String(); 
	            for( j = 0; j < error_offsets[i]; j++ ) 
	                spaces += " "; 
             
	            sResult += "\"" + str + "\"\n" + 
	             " " + spaces + "^\n" + 
	             " expecting \"" + error_expects[i].join() + "\""; 
	        } 
			return sResult;
	    } 
	};


