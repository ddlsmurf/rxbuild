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
			return 36;

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
		else if( info.src.charCodeAt( pos ) == 92 ) state = 28;
		else state = -1;
		break;

	case 1:
		state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 2:
		state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 3:
		if( info.src.charCodeAt( pos ) == 63 ) state = 27;
		else state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 4:
		state = -1;
		match = 11;
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
		match = 16;
		match_pos = pos;
		break;

	case 8:
		state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 9:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
		else state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 10:
		state = -1;
		match = 6;
		match_pos = pos;
		break;

	case 11:
		state = -1;
		match = 12;
		match_pos = pos;
		break;

	case 12:
		state = -1;
		match = 13;
		match_pos = pos;
		break;

	case 13:
		state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 14:
		state = -1;
		match = 14;
		match_pos = pos;
		break;

	case 15:
		state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 16:
		state = -1;
		match = 15;
		match_pos = pos;
		break;

	case 17:
		state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 18:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 18;
		else state = -1;
		match = 23;
		match_pos = pos;
		break;

	case 19:
		state = -1;
		match = 22;
		match_pos = pos;
		break;

	case 20:
		state = -1;
		match = 20;
		match_pos = pos;
		break;

	case 21:
		state = -1;
		match = 21;
		match_pos = pos;
		break;

	case 22:
		state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 23:
		state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 24:
		state = -1;
		match = 8;
		match_pos = pos;
		break;

	case 25:
		state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 26:
		state = -1;
		match = 19;
		match_pos = pos;
		break;

	case 27:
		if( info.src.charCodeAt( pos ) == 33 ) state = 22;
		else if( info.src.charCodeAt( pos ) == 58 ) state = 23;
		else if( info.src.charCodeAt( pos ) == 61 ) state = 24;
		else state = -1;
		break;

	case 28:
		if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 47 ) || ( info.src.charCodeAt( pos ) >= 58 && info.src.charCodeAt( pos ) <= 65 ) || info.src.charCodeAt( pos ) == 67 || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 86 ) || ( info.src.charCodeAt( pos ) >= 88 && info.src.charCodeAt( pos ) <= 97 ) || info.src.charCodeAt( pos ) == 99 || info.src.charCodeAt( pos ) == 101 || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 121 && info.src.charCodeAt( pos ) <= 254 ) ) state = 17;
		else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 18;
		else if( info.src.charCodeAt( pos ) == 66 || info.src.charCodeAt( pos ) == 98 ) state = 19;
		else if( info.src.charCodeAt( pos ) == 68 || info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 87 || info.src.charCodeAt( pos ) == 100 || info.src.charCodeAt( pos ) == 115 || info.src.charCodeAt( pos ) == 119 ) state = 20;
		else if( info.src.charCodeAt( pos ) == 102 || info.src.charCodeAt( pos ) == 110 || info.src.charCodeAt( pos ) == 114 || info.src.charCodeAt( pos ) == 116 || info.src.charCodeAt( pos ) == 118 ) state = 21;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 29;
		else if( info.src.charCodeAt( pos ) == 120 ) state = 33;
		else state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 29:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 30;
		else state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 30:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 34;
		else state = -1;
		break;

	case 31:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 25;
		else state = -1;
		break;

	case 32:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 26;
		else state = -1;
		break;

	case 33:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 31;
		else state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 34:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) ) state = 32;
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
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), function(input) { return "."; }); 
		}
		break;

	case 18:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterASCII_HEX_CODE); 
		}
		break;

	case 19:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterUNICODE_HEX_CODE); 
		}
		break;

	case 20:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterCHARACTER_CLASS); 
		}
		break;

	case 21:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterSPECIAL_CHAR); 
		}
		break;

	case 22:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length ), this.converterWORD_BOUNDARY_CHAR); 
		}
		break;

	case 23:
		{
		 info.att = new regex_parser.TokenInfo(info.att, ( info.offset - info.att.length )); 
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
	new Array( 28/* RegEx */, 1 ),
	new Array( 27/* Expression */, 3 ),
	new Array( 27/* Expression */, 1 ),
	new Array( 29/* Catenation */, 2 ),
	new Array( 29/* Catenation */, 1 ),
	new Array( 30/* Factor */, 3 ),
	new Array( 30/* Factor */, 3 ),
	new Array( 30/* Factor */, 3 ),
	new Array( 30/* Factor */, 5 ),
	new Array( 30/* Factor */, 6 ),
	new Array( 30/* Factor */, 7 ),
	new Array( 30/* Factor */, 2 ),
	new Array( 30/* Factor */, 2 ),
	new Array( 30/* Factor */, 2 ),
	new Array( 30/* Factor */, 4 ),
	new Array( 30/* Factor */, 5 ),
	new Array( 30/* Factor */, 6 ),
	new Array( 30/* Factor */, 1 ),
	new Array( 31/* Term */, 1 ),
	new Array( 31/* Term */, 1 ),
	new Array( 31/* Term */, 3 ),
	new Array( 31/* Term */, 3 ),
	new Array( 31/* Term */, 3 ),
	new Array( 31/* Term */, 3 ),
	new Array( 31/* Term */, 1 ),
	new Array( 34/* Positional */, 1 ),
	new Array( 34/* Positional */, 1 ),
	new Array( 34/* Positional */, 1 ),
	new Array( 33/* CharacterSet */, 3 ),
	new Array( 33/* CharacterSet */, 1 ),
	new Array( 33/* CharacterSet */, 1 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 2 ),
	new Array( 35/* CharClass */, 0 ),
	new Array( 32/* Character */, 1 ),
	new Array( 32/* Character */, 1 ),
	new Array( 32/* Character */, 1 ),
	new Array( 32/* Character */, 1 ),
	new Array( 32/* Character */, 1 ),
	new Array( 32/* Character */, 1 ),
	new Array( 32/* Character */, 1 )
);

/* Action-Table */
var act_tab = new Array(
	/* State 0 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 ),
	/* State 1 */ new Array( 36/* "$" */,0 ),
	/* State 2 */ new Array( 1/* "|" */,26 , 36/* "$" */,-1 ),
	/* State 3 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 , 36/* "$" */,-3 , 1/* "|" */,-3 , 11/* ")" */,-3 ),
	/* State 4 */ new Array( 36/* "$" */,-5 , 1/* "|" */,-5 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-5 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-5 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-5 , 10/* "(" */,-5 , 18/* "ASCII_HEX_CODE" */,-5 , 19/* "UNICODE_HEX_CODE" */,-5 , 21/* "SPECIAL_CHAR" */,-5 , 24/* "ESCAPED_CHAR" */,-5 , 23/* "ESCAPED_NUM" */,-5 , 25/* "INT" */,-5 , 26/* "ANY" */,-5 , 12/* "[" */,-5 , 17/* "ANY_CHAR" */,-5 , 20/* "CHARACTER_CLASS" */,-5 , 4/* "$" */,-5 , 5/* "^" */,-5 , 22/* "WORD_BOUNDARY_CHAR" */,-5 , 11/* ")" */,-5 ),
	/* State 5 */ new Array( 14/* "{" */,28 , 6/* "?" */,29 , 3/* "+" */,30 , 2/* "*" */,31 , 36/* "$" */,-18 , 1/* "|" */,-18 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-18 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-18 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-18 , 10/* "(" */,-18 , 18/* "ASCII_HEX_CODE" */,-18 , 19/* "UNICODE_HEX_CODE" */,-18 , 21/* "SPECIAL_CHAR" */,-18 , 24/* "ESCAPED_CHAR" */,-18 , 23/* "ESCAPED_NUM" */,-18 , 25/* "INT" */,-18 , 26/* "ANY" */,-18 , 12/* "[" */,-18 , 17/* "ANY_CHAR" */,-18 , 20/* "CHARACTER_CLASS" */,-18 , 4/* "$" */,-18 , 5/* "^" */,-18 , 22/* "WORD_BOUNDARY_CHAR" */,-18 , 11/* ")" */,-18 ),
	/* State 6 */ new Array( 2/* "*" */,-19 , 3/* "+" */,-19 , 6/* "?" */,-19 , 14/* "{" */,-19 , 36/* "$" */,-19 , 1/* "|" */,-19 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-19 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-19 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-19 , 10/* "(" */,-19 , 18/* "ASCII_HEX_CODE" */,-19 , 19/* "UNICODE_HEX_CODE" */,-19 , 21/* "SPECIAL_CHAR" */,-19 , 24/* "ESCAPED_CHAR" */,-19 , 23/* "ESCAPED_NUM" */,-19 , 25/* "INT" */,-19 , 26/* "ANY" */,-19 , 12/* "[" */,-19 , 17/* "ANY_CHAR" */,-19 , 20/* "CHARACTER_CLASS" */,-19 , 4/* "$" */,-19 , 5/* "^" */,-19 , 22/* "WORD_BOUNDARY_CHAR" */,-19 , 11/* ")" */,-19 ),
	/* State 7 */ new Array( 2/* "*" */,-20 , 3/* "+" */,-20 , 6/* "?" */,-20 , 14/* "{" */,-20 , 36/* "$" */,-20 , 1/* "|" */,-20 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-20 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-20 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-20 , 10/* "(" */,-20 , 18/* "ASCII_HEX_CODE" */,-20 , 19/* "UNICODE_HEX_CODE" */,-20 , 21/* "SPECIAL_CHAR" */,-20 , 24/* "ESCAPED_CHAR" */,-20 , 23/* "ESCAPED_NUM" */,-20 , 25/* "INT" */,-20 , 26/* "ANY" */,-20 , 12/* "[" */,-20 , 17/* "ANY_CHAR" */,-20 , 20/* "CHARACTER_CLASS" */,-20 , 4/* "$" */,-20 , 5/* "^" */,-20 , 22/* "WORD_BOUNDARY_CHAR" */,-20 , 11/* ")" */,-20 ),
	/* State 8 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 ),
	/* State 9 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 ),
	/* State 10 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 ),
	/* State 11 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 ),
	/* State 12 */ new Array( 2/* "*" */,-25 , 3/* "+" */,-25 , 6/* "?" */,-25 , 14/* "{" */,-25 , 36/* "$" */,-25 , 1/* "|" */,-25 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-25 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-25 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-25 , 10/* "(" */,-25 , 18/* "ASCII_HEX_CODE" */,-25 , 19/* "UNICODE_HEX_CODE" */,-25 , 21/* "SPECIAL_CHAR" */,-25 , 24/* "ESCAPED_CHAR" */,-25 , 23/* "ESCAPED_NUM" */,-25 , 25/* "INT" */,-25 , 26/* "ANY" */,-25 , 12/* "[" */,-25 , 17/* "ANY_CHAR" */,-25 , 20/* "CHARACTER_CLASS" */,-25 , 4/* "$" */,-25 , 5/* "^" */,-25 , 22/* "WORD_BOUNDARY_CHAR" */,-25 , 11/* ")" */,-25 ),
	/* State 13 */ new Array( 2/* "*" */,-51 , 3/* "+" */,-51 , 6/* "?" */,-51 , 14/* "{" */,-51 , 36/* "$" */,-51 , 1/* "|" */,-51 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-51 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-51 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-51 , 10/* "(" */,-51 , 18/* "ASCII_HEX_CODE" */,-51 , 19/* "UNICODE_HEX_CODE" */,-51 , 21/* "SPECIAL_CHAR" */,-51 , 24/* "ESCAPED_CHAR" */,-51 , 23/* "ESCAPED_NUM" */,-51 , 25/* "INT" */,-51 , 26/* "ANY" */,-51 , 12/* "[" */,-51 , 17/* "ANY_CHAR" */,-51 , 20/* "CHARACTER_CLASS" */,-51 , 4/* "$" */,-51 , 5/* "^" */,-51 , 22/* "WORD_BOUNDARY_CHAR" */,-51 , 11/* ")" */,-51 , 13/* "]" */,-51 , 15/* "}" */,-51 , 16/* "," */,-51 ),
	/* State 14 */ new Array( 2/* "*" */,-52 , 3/* "+" */,-52 , 6/* "?" */,-52 , 14/* "{" */,-52 , 36/* "$" */,-52 , 1/* "|" */,-52 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-52 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-52 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-52 , 10/* "(" */,-52 , 18/* "ASCII_HEX_CODE" */,-52 , 19/* "UNICODE_HEX_CODE" */,-52 , 21/* "SPECIAL_CHAR" */,-52 , 24/* "ESCAPED_CHAR" */,-52 , 23/* "ESCAPED_NUM" */,-52 , 25/* "INT" */,-52 , 26/* "ANY" */,-52 , 12/* "[" */,-52 , 17/* "ANY_CHAR" */,-52 , 20/* "CHARACTER_CLASS" */,-52 , 4/* "$" */,-52 , 5/* "^" */,-52 , 22/* "WORD_BOUNDARY_CHAR" */,-52 , 11/* ")" */,-52 , 13/* "]" */,-52 , 15/* "}" */,-52 , 16/* "," */,-52 ),
	/* State 15 */ new Array( 2/* "*" */,-53 , 3/* "+" */,-53 , 6/* "?" */,-53 , 14/* "{" */,-53 , 36/* "$" */,-53 , 1/* "|" */,-53 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-53 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-53 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-53 , 10/* "(" */,-53 , 18/* "ASCII_HEX_CODE" */,-53 , 19/* "UNICODE_HEX_CODE" */,-53 , 21/* "SPECIAL_CHAR" */,-53 , 24/* "ESCAPED_CHAR" */,-53 , 23/* "ESCAPED_NUM" */,-53 , 25/* "INT" */,-53 , 26/* "ANY" */,-53 , 12/* "[" */,-53 , 17/* "ANY_CHAR" */,-53 , 20/* "CHARACTER_CLASS" */,-53 , 4/* "$" */,-53 , 5/* "^" */,-53 , 22/* "WORD_BOUNDARY_CHAR" */,-53 , 11/* ")" */,-53 , 13/* "]" */,-53 , 15/* "}" */,-53 , 16/* "," */,-53 ),
	/* State 16 */ new Array( 2/* "*" */,-54 , 3/* "+" */,-54 , 6/* "?" */,-54 , 14/* "{" */,-54 , 36/* "$" */,-54 , 1/* "|" */,-54 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-54 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-54 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-54 , 10/* "(" */,-54 , 18/* "ASCII_HEX_CODE" */,-54 , 19/* "UNICODE_HEX_CODE" */,-54 , 21/* "SPECIAL_CHAR" */,-54 , 24/* "ESCAPED_CHAR" */,-54 , 23/* "ESCAPED_NUM" */,-54 , 25/* "INT" */,-54 , 26/* "ANY" */,-54 , 12/* "[" */,-54 , 17/* "ANY_CHAR" */,-54 , 20/* "CHARACTER_CLASS" */,-54 , 4/* "$" */,-54 , 5/* "^" */,-54 , 22/* "WORD_BOUNDARY_CHAR" */,-54 , 11/* ")" */,-54 , 13/* "]" */,-54 , 15/* "}" */,-54 , 16/* "," */,-54 ),
	/* State 17 */ new Array( 2/* "*" */,-55 , 3/* "+" */,-55 , 6/* "?" */,-55 , 14/* "{" */,-55 , 36/* "$" */,-55 , 1/* "|" */,-55 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-55 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-55 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-55 , 10/* "(" */,-55 , 18/* "ASCII_HEX_CODE" */,-55 , 19/* "UNICODE_HEX_CODE" */,-55 , 21/* "SPECIAL_CHAR" */,-55 , 24/* "ESCAPED_CHAR" */,-55 , 23/* "ESCAPED_NUM" */,-55 , 25/* "INT" */,-55 , 26/* "ANY" */,-55 , 12/* "[" */,-55 , 17/* "ANY_CHAR" */,-55 , 20/* "CHARACTER_CLASS" */,-55 , 4/* "$" */,-55 , 5/* "^" */,-55 , 22/* "WORD_BOUNDARY_CHAR" */,-55 , 11/* ")" */,-55 , 13/* "]" */,-55 , 15/* "}" */,-55 , 16/* "," */,-55 ),
	/* State 18 */ new Array( 2/* "*" */,-56 , 3/* "+" */,-56 , 6/* "?" */,-56 , 14/* "{" */,-56 , 36/* "$" */,-56 , 1/* "|" */,-56 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-56 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-56 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-56 , 10/* "(" */,-56 , 18/* "ASCII_HEX_CODE" */,-56 , 19/* "UNICODE_HEX_CODE" */,-56 , 21/* "SPECIAL_CHAR" */,-56 , 24/* "ESCAPED_CHAR" */,-56 , 23/* "ESCAPED_NUM" */,-56 , 25/* "INT" */,-56 , 26/* "ANY" */,-56 , 12/* "[" */,-56 , 17/* "ANY_CHAR" */,-56 , 20/* "CHARACTER_CLASS" */,-56 , 4/* "$" */,-56 , 5/* "^" */,-56 , 22/* "WORD_BOUNDARY_CHAR" */,-56 , 11/* ")" */,-56 , 13/* "]" */,-56 , 15/* "}" */,-56 , 16/* "," */,-56 ),
	/* State 19 */ new Array( 2/* "*" */,-57 , 3/* "+" */,-57 , 6/* "?" */,-57 , 14/* "{" */,-57 , 36/* "$" */,-57 , 1/* "|" */,-57 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-57 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-57 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-57 , 10/* "(" */,-57 , 18/* "ASCII_HEX_CODE" */,-57 , 19/* "UNICODE_HEX_CODE" */,-57 , 21/* "SPECIAL_CHAR" */,-57 , 24/* "ESCAPED_CHAR" */,-57 , 23/* "ESCAPED_NUM" */,-57 , 25/* "INT" */,-57 , 26/* "ANY" */,-57 , 12/* "[" */,-57 , 17/* "ANY_CHAR" */,-57 , 20/* "CHARACTER_CLASS" */,-57 , 4/* "$" */,-57 , 5/* "^" */,-57 , 22/* "WORD_BOUNDARY_CHAR" */,-57 , 11/* ")" */,-57 , 13/* "]" */,-57 , 15/* "}" */,-57 , 16/* "," */,-57 ),
	/* State 20 */ new Array( 13/* "]" */,-50 , 18/* "ASCII_HEX_CODE" */,-50 , 19/* "UNICODE_HEX_CODE" */,-50 , 21/* "SPECIAL_CHAR" */,-50 , 24/* "ESCAPED_CHAR" */,-50 , 23/* "ESCAPED_NUM" */,-50 , 25/* "INT" */,-50 , 26/* "ANY" */,-50 , 20/* "CHARACTER_CLASS" */,-50 , 17/* "ANY_CHAR" */,-50 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-50 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-50 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-50 , 1/* "|" */,-50 , 2/* "*" */,-50 , 3/* "+" */,-50 , 4/* "$" */,-50 , 5/* "^" */,-50 , 6/* "?" */,-50 , 14/* "{" */,-50 , 15/* "}" */,-50 , 16/* "," */,-50 , 10/* "(" */,-50 , 11/* ")" */,-50 , 22/* "WORD_BOUNDARY_CHAR" */,-50 ),
	/* State 21 */ new Array( 2/* "*" */,-30 , 3/* "+" */,-30 , 6/* "?" */,-30 , 14/* "{" */,-30 , 36/* "$" */,-30 , 1/* "|" */,-30 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-30 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-30 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-30 , 10/* "(" */,-30 , 18/* "ASCII_HEX_CODE" */,-30 , 19/* "UNICODE_HEX_CODE" */,-30 , 21/* "SPECIAL_CHAR" */,-30 , 24/* "ESCAPED_CHAR" */,-30 , 23/* "ESCAPED_NUM" */,-30 , 25/* "INT" */,-30 , 26/* "ANY" */,-30 , 12/* "[" */,-30 , 17/* "ANY_CHAR" */,-30 , 20/* "CHARACTER_CLASS" */,-30 , 4/* "$" */,-30 , 5/* "^" */,-30 , 22/* "WORD_BOUNDARY_CHAR" */,-30 , 11/* ")" */,-30 ),
	/* State 22 */ new Array( 2/* "*" */,-31 , 3/* "+" */,-31 , 6/* "?" */,-31 , 14/* "{" */,-31 , 36/* "$" */,-31 , 1/* "|" */,-31 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-31 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-31 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-31 , 10/* "(" */,-31 , 18/* "ASCII_HEX_CODE" */,-31 , 19/* "UNICODE_HEX_CODE" */,-31 , 21/* "SPECIAL_CHAR" */,-31 , 24/* "ESCAPED_CHAR" */,-31 , 23/* "ESCAPED_NUM" */,-31 , 25/* "INT" */,-31 , 26/* "ANY" */,-31 , 12/* "[" */,-31 , 17/* "ANY_CHAR" */,-31 , 20/* "CHARACTER_CLASS" */,-31 , 4/* "$" */,-31 , 5/* "^" */,-31 , 22/* "WORD_BOUNDARY_CHAR" */,-31 , 11/* ")" */,-31 ),
	/* State 23 */ new Array( 2/* "*" */,-26 , 3/* "+" */,-26 , 6/* "?" */,-26 , 14/* "{" */,-26 , 36/* "$" */,-26 , 1/* "|" */,-26 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-26 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-26 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-26 , 10/* "(" */,-26 , 18/* "ASCII_HEX_CODE" */,-26 , 19/* "UNICODE_HEX_CODE" */,-26 , 21/* "SPECIAL_CHAR" */,-26 , 24/* "ESCAPED_CHAR" */,-26 , 23/* "ESCAPED_NUM" */,-26 , 25/* "INT" */,-26 , 26/* "ANY" */,-26 , 12/* "[" */,-26 , 17/* "ANY_CHAR" */,-26 , 20/* "CHARACTER_CLASS" */,-26 , 4/* "$" */,-26 , 5/* "^" */,-26 , 22/* "WORD_BOUNDARY_CHAR" */,-26 , 11/* ")" */,-26 ),
	/* State 24 */ new Array( 2/* "*" */,-27 , 3/* "+" */,-27 , 6/* "?" */,-27 , 14/* "{" */,-27 , 36/* "$" */,-27 , 1/* "|" */,-27 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-27 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-27 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-27 , 10/* "(" */,-27 , 18/* "ASCII_HEX_CODE" */,-27 , 19/* "UNICODE_HEX_CODE" */,-27 , 21/* "SPECIAL_CHAR" */,-27 , 24/* "ESCAPED_CHAR" */,-27 , 23/* "ESCAPED_NUM" */,-27 , 25/* "INT" */,-27 , 26/* "ANY" */,-27 , 12/* "[" */,-27 , 17/* "ANY_CHAR" */,-27 , 20/* "CHARACTER_CLASS" */,-27 , 4/* "$" */,-27 , 5/* "^" */,-27 , 22/* "WORD_BOUNDARY_CHAR" */,-27 , 11/* ")" */,-27 ),
	/* State 25 */ new Array( 2/* "*" */,-28 , 3/* "+" */,-28 , 6/* "?" */,-28 , 14/* "{" */,-28 , 36/* "$" */,-28 , 1/* "|" */,-28 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-28 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-28 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-28 , 10/* "(" */,-28 , 18/* "ASCII_HEX_CODE" */,-28 , 19/* "UNICODE_HEX_CODE" */,-28 , 21/* "SPECIAL_CHAR" */,-28 , 24/* "ESCAPED_CHAR" */,-28 , 23/* "ESCAPED_NUM" */,-28 , 25/* "INT" */,-28 , 26/* "ANY" */,-28 , 12/* "[" */,-28 , 17/* "ANY_CHAR" */,-28 , 20/* "CHARACTER_CLASS" */,-28 , 4/* "$" */,-28 , 5/* "^" */,-28 , 22/* "WORD_BOUNDARY_CHAR" */,-28 , 11/* ")" */,-28 ),
	/* State 26 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 ),
	/* State 27 */ new Array( 36/* "$" */,-4 , 1/* "|" */,-4 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-4 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-4 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-4 , 10/* "(" */,-4 , 18/* "ASCII_HEX_CODE" */,-4 , 19/* "UNICODE_HEX_CODE" */,-4 , 21/* "SPECIAL_CHAR" */,-4 , 24/* "ESCAPED_CHAR" */,-4 , 23/* "ESCAPED_NUM" */,-4 , 25/* "INT" */,-4 , 26/* "ANY" */,-4 , 12/* "[" */,-4 , 17/* "ANY_CHAR" */,-4 , 20/* "CHARACTER_CLASS" */,-4 , 4/* "$" */,-4 , 5/* "^" */,-4 , 22/* "WORD_BOUNDARY_CHAR" */,-4 , 11/* ")" */,-4 ),
	/* State 28 */ new Array( 25/* "INT" */,38 ),
	/* State 29 */ new Array( 6/* "?" */,39 , 36/* "$" */,-14 , 1/* "|" */,-14 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-14 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-14 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-14 , 10/* "(" */,-14 , 18/* "ASCII_HEX_CODE" */,-14 , 19/* "UNICODE_HEX_CODE" */,-14 , 21/* "SPECIAL_CHAR" */,-14 , 24/* "ESCAPED_CHAR" */,-14 , 23/* "ESCAPED_NUM" */,-14 , 25/* "INT" */,-14 , 26/* "ANY" */,-14 , 12/* "[" */,-14 , 17/* "ANY_CHAR" */,-14 , 20/* "CHARACTER_CLASS" */,-14 , 4/* "$" */,-14 , 5/* "^" */,-14 , 22/* "WORD_BOUNDARY_CHAR" */,-14 , 11/* ")" */,-14 ),
	/* State 30 */ new Array( 6/* "?" */,40 , 36/* "$" */,-13 , 1/* "|" */,-13 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-13 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-13 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-13 , 10/* "(" */,-13 , 18/* "ASCII_HEX_CODE" */,-13 , 19/* "UNICODE_HEX_CODE" */,-13 , 21/* "SPECIAL_CHAR" */,-13 , 24/* "ESCAPED_CHAR" */,-13 , 23/* "ESCAPED_NUM" */,-13 , 25/* "INT" */,-13 , 26/* "ANY" */,-13 , 12/* "[" */,-13 , 17/* "ANY_CHAR" */,-13 , 20/* "CHARACTER_CLASS" */,-13 , 4/* "$" */,-13 , 5/* "^" */,-13 , 22/* "WORD_BOUNDARY_CHAR" */,-13 , 11/* ")" */,-13 ),
	/* State 31 */ new Array( 6/* "?" */,41 , 36/* "$" */,-12 , 1/* "|" */,-12 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-12 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-12 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-12 , 10/* "(" */,-12 , 18/* "ASCII_HEX_CODE" */,-12 , 19/* "UNICODE_HEX_CODE" */,-12 , 21/* "SPECIAL_CHAR" */,-12 , 24/* "ESCAPED_CHAR" */,-12 , 23/* "ESCAPED_NUM" */,-12 , 25/* "INT" */,-12 , 26/* "ANY" */,-12 , 12/* "[" */,-12 , 17/* "ANY_CHAR" */,-12 , 20/* "CHARACTER_CLASS" */,-12 , 4/* "$" */,-12 , 5/* "^" */,-12 , 22/* "WORD_BOUNDARY_CHAR" */,-12 , 11/* ")" */,-12 ),
	/* State 32 */ new Array( 1/* "|" */,26 , 11/* ")" */,42 ),
	/* State 33 */ new Array( 1/* "|" */,26 , 11/* ")" */,43 ),
	/* State 34 */ new Array( 1/* "|" */,26 , 11/* ")" */,44 ),
	/* State 35 */ new Array( 1/* "|" */,26 , 11/* ")" */,45 ),
	/* State 36 */ new Array( 22/* "WORD_BOUNDARY_CHAR" */,46 , 11/* ")" */,47 , 10/* "(" */,48 , 16/* "," */,49 , 15/* "}" */,50 , 14/* "{" */,51 , 6/* "?" */,52 , 5/* "^" */,53 , 4/* "$" */,54 , 3/* "+" */,55 , 2/* "*" */,56 , 1/* "|" */,57 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,58 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,59 , 7/* "NON_CAPTURING_OPEN_GROUP" */,60 , 17/* "ANY_CHAR" */,61 , 20/* "CHARACTER_CLASS" */,62 , 13/* "]" */,64 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 ),
	/* State 37 */ new Array( 7/* "NON_CAPTURING_OPEN_GROUP" */,8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,10 , 10/* "(" */,11 , 18/* "ASCII_HEX_CODE" */,13 , 19/* "UNICODE_HEX_CODE" */,14 , 21/* "SPECIAL_CHAR" */,15 , 24/* "ESCAPED_CHAR" */,16 , 23/* "ESCAPED_NUM" */,17 , 25/* "INT" */,18 , 26/* "ANY" */,19 , 12/* "[" */,20 , 17/* "ANY_CHAR" */,21 , 20/* "CHARACTER_CLASS" */,22 , 4/* "$" */,23 , 5/* "^" */,24 , 22/* "WORD_BOUNDARY_CHAR" */,25 , 36/* "$" */,-2 , 1/* "|" */,-2 , 11/* ")" */,-2 ),
	/* State 38 */ new Array( 16/* "," */,65 , 15/* "}" */,66 ),
	/* State 39 */ new Array( 36/* "$" */,-8 , 1/* "|" */,-8 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-8 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-8 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-8 , 10/* "(" */,-8 , 18/* "ASCII_HEX_CODE" */,-8 , 19/* "UNICODE_HEX_CODE" */,-8 , 21/* "SPECIAL_CHAR" */,-8 , 24/* "ESCAPED_CHAR" */,-8 , 23/* "ESCAPED_NUM" */,-8 , 25/* "INT" */,-8 , 26/* "ANY" */,-8 , 12/* "[" */,-8 , 17/* "ANY_CHAR" */,-8 , 20/* "CHARACTER_CLASS" */,-8 , 4/* "$" */,-8 , 5/* "^" */,-8 , 22/* "WORD_BOUNDARY_CHAR" */,-8 , 11/* ")" */,-8 ),
	/* State 40 */ new Array( 36/* "$" */,-7 , 1/* "|" */,-7 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-7 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-7 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-7 , 10/* "(" */,-7 , 18/* "ASCII_HEX_CODE" */,-7 , 19/* "UNICODE_HEX_CODE" */,-7 , 21/* "SPECIAL_CHAR" */,-7 , 24/* "ESCAPED_CHAR" */,-7 , 23/* "ESCAPED_NUM" */,-7 , 25/* "INT" */,-7 , 26/* "ANY" */,-7 , 12/* "[" */,-7 , 17/* "ANY_CHAR" */,-7 , 20/* "CHARACTER_CLASS" */,-7 , 4/* "$" */,-7 , 5/* "^" */,-7 , 22/* "WORD_BOUNDARY_CHAR" */,-7 , 11/* ")" */,-7 ),
	/* State 41 */ new Array( 36/* "$" */,-6 , 1/* "|" */,-6 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-6 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-6 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-6 , 10/* "(" */,-6 , 18/* "ASCII_HEX_CODE" */,-6 , 19/* "UNICODE_HEX_CODE" */,-6 , 21/* "SPECIAL_CHAR" */,-6 , 24/* "ESCAPED_CHAR" */,-6 , 23/* "ESCAPED_NUM" */,-6 , 25/* "INT" */,-6 , 26/* "ANY" */,-6 , 12/* "[" */,-6 , 17/* "ANY_CHAR" */,-6 , 20/* "CHARACTER_CLASS" */,-6 , 4/* "$" */,-6 , 5/* "^" */,-6 , 22/* "WORD_BOUNDARY_CHAR" */,-6 , 11/* ")" */,-6 ),
	/* State 42 */ new Array( 2/* "*" */,-21 , 3/* "+" */,-21 , 6/* "?" */,-21 , 14/* "{" */,-21 , 36/* "$" */,-21 , 1/* "|" */,-21 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-21 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-21 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-21 , 10/* "(" */,-21 , 18/* "ASCII_HEX_CODE" */,-21 , 19/* "UNICODE_HEX_CODE" */,-21 , 21/* "SPECIAL_CHAR" */,-21 , 24/* "ESCAPED_CHAR" */,-21 , 23/* "ESCAPED_NUM" */,-21 , 25/* "INT" */,-21 , 26/* "ANY" */,-21 , 12/* "[" */,-21 , 17/* "ANY_CHAR" */,-21 , 20/* "CHARACTER_CLASS" */,-21 , 4/* "$" */,-21 , 5/* "^" */,-21 , 22/* "WORD_BOUNDARY_CHAR" */,-21 , 11/* ")" */,-21 ),
	/* State 43 */ new Array( 2/* "*" */,-22 , 3/* "+" */,-22 , 6/* "?" */,-22 , 14/* "{" */,-22 , 36/* "$" */,-22 , 1/* "|" */,-22 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-22 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-22 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-22 , 10/* "(" */,-22 , 18/* "ASCII_HEX_CODE" */,-22 , 19/* "UNICODE_HEX_CODE" */,-22 , 21/* "SPECIAL_CHAR" */,-22 , 24/* "ESCAPED_CHAR" */,-22 , 23/* "ESCAPED_NUM" */,-22 , 25/* "INT" */,-22 , 26/* "ANY" */,-22 , 12/* "[" */,-22 , 17/* "ANY_CHAR" */,-22 , 20/* "CHARACTER_CLASS" */,-22 , 4/* "$" */,-22 , 5/* "^" */,-22 , 22/* "WORD_BOUNDARY_CHAR" */,-22 , 11/* ")" */,-22 ),
	/* State 44 */ new Array( 2/* "*" */,-23 , 3/* "+" */,-23 , 6/* "?" */,-23 , 14/* "{" */,-23 , 36/* "$" */,-23 , 1/* "|" */,-23 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-23 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-23 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-23 , 10/* "(" */,-23 , 18/* "ASCII_HEX_CODE" */,-23 , 19/* "UNICODE_HEX_CODE" */,-23 , 21/* "SPECIAL_CHAR" */,-23 , 24/* "ESCAPED_CHAR" */,-23 , 23/* "ESCAPED_NUM" */,-23 , 25/* "INT" */,-23 , 26/* "ANY" */,-23 , 12/* "[" */,-23 , 17/* "ANY_CHAR" */,-23 , 20/* "CHARACTER_CLASS" */,-23 , 4/* "$" */,-23 , 5/* "^" */,-23 , 22/* "WORD_BOUNDARY_CHAR" */,-23 , 11/* ")" */,-23 ),
	/* State 45 */ new Array( 2/* "*" */,-24 , 3/* "+" */,-24 , 6/* "?" */,-24 , 14/* "{" */,-24 , 36/* "$" */,-24 , 1/* "|" */,-24 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-24 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-24 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-24 , 10/* "(" */,-24 , 18/* "ASCII_HEX_CODE" */,-24 , 19/* "UNICODE_HEX_CODE" */,-24 , 21/* "SPECIAL_CHAR" */,-24 , 24/* "ESCAPED_CHAR" */,-24 , 23/* "ESCAPED_NUM" */,-24 , 25/* "INT" */,-24 , 26/* "ANY" */,-24 , 12/* "[" */,-24 , 17/* "ANY_CHAR" */,-24 , 20/* "CHARACTER_CLASS" */,-24 , 4/* "$" */,-24 , 5/* "^" */,-24 , 22/* "WORD_BOUNDARY_CHAR" */,-24 , 11/* ")" */,-24 ),
	/* State 46 */ new Array( 13/* "]" */,-49 , 18/* "ASCII_HEX_CODE" */,-49 , 19/* "UNICODE_HEX_CODE" */,-49 , 21/* "SPECIAL_CHAR" */,-49 , 24/* "ESCAPED_CHAR" */,-49 , 23/* "ESCAPED_NUM" */,-49 , 25/* "INT" */,-49 , 26/* "ANY" */,-49 , 20/* "CHARACTER_CLASS" */,-49 , 17/* "ANY_CHAR" */,-49 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-49 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-49 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-49 , 1/* "|" */,-49 , 2/* "*" */,-49 , 3/* "+" */,-49 , 4/* "$" */,-49 , 5/* "^" */,-49 , 6/* "?" */,-49 , 14/* "{" */,-49 , 15/* "}" */,-49 , 16/* "," */,-49 , 10/* "(" */,-49 , 11/* ")" */,-49 , 22/* "WORD_BOUNDARY_CHAR" */,-49 ),
	/* State 47 */ new Array( 13/* "]" */,-48 , 18/* "ASCII_HEX_CODE" */,-48 , 19/* "UNICODE_HEX_CODE" */,-48 , 21/* "SPECIAL_CHAR" */,-48 , 24/* "ESCAPED_CHAR" */,-48 , 23/* "ESCAPED_NUM" */,-48 , 25/* "INT" */,-48 , 26/* "ANY" */,-48 , 20/* "CHARACTER_CLASS" */,-48 , 17/* "ANY_CHAR" */,-48 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-48 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-48 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-48 , 1/* "|" */,-48 , 2/* "*" */,-48 , 3/* "+" */,-48 , 4/* "$" */,-48 , 5/* "^" */,-48 , 6/* "?" */,-48 , 14/* "{" */,-48 , 15/* "}" */,-48 , 16/* "," */,-48 , 10/* "(" */,-48 , 11/* ")" */,-48 , 22/* "WORD_BOUNDARY_CHAR" */,-48 ),
	/* State 48 */ new Array( 13/* "]" */,-47 , 18/* "ASCII_HEX_CODE" */,-47 , 19/* "UNICODE_HEX_CODE" */,-47 , 21/* "SPECIAL_CHAR" */,-47 , 24/* "ESCAPED_CHAR" */,-47 , 23/* "ESCAPED_NUM" */,-47 , 25/* "INT" */,-47 , 26/* "ANY" */,-47 , 20/* "CHARACTER_CLASS" */,-47 , 17/* "ANY_CHAR" */,-47 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-47 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-47 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-47 , 1/* "|" */,-47 , 2/* "*" */,-47 , 3/* "+" */,-47 , 4/* "$" */,-47 , 5/* "^" */,-47 , 6/* "?" */,-47 , 14/* "{" */,-47 , 15/* "}" */,-47 , 16/* "," */,-47 , 10/* "(" */,-47 , 11/* ")" */,-47 , 22/* "WORD_BOUNDARY_CHAR" */,-47 ),
	/* State 49 */ new Array( 13/* "]" */,-46 , 18/* "ASCII_HEX_CODE" */,-46 , 19/* "UNICODE_HEX_CODE" */,-46 , 21/* "SPECIAL_CHAR" */,-46 , 24/* "ESCAPED_CHAR" */,-46 , 23/* "ESCAPED_NUM" */,-46 , 25/* "INT" */,-46 , 26/* "ANY" */,-46 , 20/* "CHARACTER_CLASS" */,-46 , 17/* "ANY_CHAR" */,-46 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-46 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-46 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-46 , 1/* "|" */,-46 , 2/* "*" */,-46 , 3/* "+" */,-46 , 4/* "$" */,-46 , 5/* "^" */,-46 , 6/* "?" */,-46 , 14/* "{" */,-46 , 15/* "}" */,-46 , 16/* "," */,-46 , 10/* "(" */,-46 , 11/* ")" */,-46 , 22/* "WORD_BOUNDARY_CHAR" */,-46 ),
	/* State 50 */ new Array( 13/* "]" */,-45 , 18/* "ASCII_HEX_CODE" */,-45 , 19/* "UNICODE_HEX_CODE" */,-45 , 21/* "SPECIAL_CHAR" */,-45 , 24/* "ESCAPED_CHAR" */,-45 , 23/* "ESCAPED_NUM" */,-45 , 25/* "INT" */,-45 , 26/* "ANY" */,-45 , 20/* "CHARACTER_CLASS" */,-45 , 17/* "ANY_CHAR" */,-45 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-45 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-45 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-45 , 1/* "|" */,-45 , 2/* "*" */,-45 , 3/* "+" */,-45 , 4/* "$" */,-45 , 5/* "^" */,-45 , 6/* "?" */,-45 , 14/* "{" */,-45 , 15/* "}" */,-45 , 16/* "," */,-45 , 10/* "(" */,-45 , 11/* ")" */,-45 , 22/* "WORD_BOUNDARY_CHAR" */,-45 ),
	/* State 51 */ new Array( 13/* "]" */,-44 , 18/* "ASCII_HEX_CODE" */,-44 , 19/* "UNICODE_HEX_CODE" */,-44 , 21/* "SPECIAL_CHAR" */,-44 , 24/* "ESCAPED_CHAR" */,-44 , 23/* "ESCAPED_NUM" */,-44 , 25/* "INT" */,-44 , 26/* "ANY" */,-44 , 20/* "CHARACTER_CLASS" */,-44 , 17/* "ANY_CHAR" */,-44 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-44 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-44 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-44 , 1/* "|" */,-44 , 2/* "*" */,-44 , 3/* "+" */,-44 , 4/* "$" */,-44 , 5/* "^" */,-44 , 6/* "?" */,-44 , 14/* "{" */,-44 , 15/* "}" */,-44 , 16/* "," */,-44 , 10/* "(" */,-44 , 11/* ")" */,-44 , 22/* "WORD_BOUNDARY_CHAR" */,-44 ),
	/* State 52 */ new Array( 13/* "]" */,-43 , 18/* "ASCII_HEX_CODE" */,-43 , 19/* "UNICODE_HEX_CODE" */,-43 , 21/* "SPECIAL_CHAR" */,-43 , 24/* "ESCAPED_CHAR" */,-43 , 23/* "ESCAPED_NUM" */,-43 , 25/* "INT" */,-43 , 26/* "ANY" */,-43 , 20/* "CHARACTER_CLASS" */,-43 , 17/* "ANY_CHAR" */,-43 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-43 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-43 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-43 , 1/* "|" */,-43 , 2/* "*" */,-43 , 3/* "+" */,-43 , 4/* "$" */,-43 , 5/* "^" */,-43 , 6/* "?" */,-43 , 14/* "{" */,-43 , 15/* "}" */,-43 , 16/* "," */,-43 , 10/* "(" */,-43 , 11/* ")" */,-43 , 22/* "WORD_BOUNDARY_CHAR" */,-43 ),
	/* State 53 */ new Array( 13/* "]" */,-42 , 18/* "ASCII_HEX_CODE" */,-42 , 19/* "UNICODE_HEX_CODE" */,-42 , 21/* "SPECIAL_CHAR" */,-42 , 24/* "ESCAPED_CHAR" */,-42 , 23/* "ESCAPED_NUM" */,-42 , 25/* "INT" */,-42 , 26/* "ANY" */,-42 , 20/* "CHARACTER_CLASS" */,-42 , 17/* "ANY_CHAR" */,-42 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-42 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-42 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-42 , 1/* "|" */,-42 , 2/* "*" */,-42 , 3/* "+" */,-42 , 4/* "$" */,-42 , 5/* "^" */,-42 , 6/* "?" */,-42 , 14/* "{" */,-42 , 15/* "}" */,-42 , 16/* "," */,-42 , 10/* "(" */,-42 , 11/* ")" */,-42 , 22/* "WORD_BOUNDARY_CHAR" */,-42 ),
	/* State 54 */ new Array( 13/* "]" */,-41 , 18/* "ASCII_HEX_CODE" */,-41 , 19/* "UNICODE_HEX_CODE" */,-41 , 21/* "SPECIAL_CHAR" */,-41 , 24/* "ESCAPED_CHAR" */,-41 , 23/* "ESCAPED_NUM" */,-41 , 25/* "INT" */,-41 , 26/* "ANY" */,-41 , 20/* "CHARACTER_CLASS" */,-41 , 17/* "ANY_CHAR" */,-41 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-41 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-41 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-41 , 1/* "|" */,-41 , 2/* "*" */,-41 , 3/* "+" */,-41 , 4/* "$" */,-41 , 5/* "^" */,-41 , 6/* "?" */,-41 , 14/* "{" */,-41 , 15/* "}" */,-41 , 16/* "," */,-41 , 10/* "(" */,-41 , 11/* ")" */,-41 , 22/* "WORD_BOUNDARY_CHAR" */,-41 ),
	/* State 55 */ new Array( 13/* "]" */,-40 , 18/* "ASCII_HEX_CODE" */,-40 , 19/* "UNICODE_HEX_CODE" */,-40 , 21/* "SPECIAL_CHAR" */,-40 , 24/* "ESCAPED_CHAR" */,-40 , 23/* "ESCAPED_NUM" */,-40 , 25/* "INT" */,-40 , 26/* "ANY" */,-40 , 20/* "CHARACTER_CLASS" */,-40 , 17/* "ANY_CHAR" */,-40 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-40 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-40 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-40 , 1/* "|" */,-40 , 2/* "*" */,-40 , 3/* "+" */,-40 , 4/* "$" */,-40 , 5/* "^" */,-40 , 6/* "?" */,-40 , 14/* "{" */,-40 , 15/* "}" */,-40 , 16/* "," */,-40 , 10/* "(" */,-40 , 11/* ")" */,-40 , 22/* "WORD_BOUNDARY_CHAR" */,-40 ),
	/* State 56 */ new Array( 13/* "]" */,-39 , 18/* "ASCII_HEX_CODE" */,-39 , 19/* "UNICODE_HEX_CODE" */,-39 , 21/* "SPECIAL_CHAR" */,-39 , 24/* "ESCAPED_CHAR" */,-39 , 23/* "ESCAPED_NUM" */,-39 , 25/* "INT" */,-39 , 26/* "ANY" */,-39 , 20/* "CHARACTER_CLASS" */,-39 , 17/* "ANY_CHAR" */,-39 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-39 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-39 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-39 , 1/* "|" */,-39 , 2/* "*" */,-39 , 3/* "+" */,-39 , 4/* "$" */,-39 , 5/* "^" */,-39 , 6/* "?" */,-39 , 14/* "{" */,-39 , 15/* "}" */,-39 , 16/* "," */,-39 , 10/* "(" */,-39 , 11/* ")" */,-39 , 22/* "WORD_BOUNDARY_CHAR" */,-39 ),
	/* State 57 */ new Array( 13/* "]" */,-38 , 18/* "ASCII_HEX_CODE" */,-38 , 19/* "UNICODE_HEX_CODE" */,-38 , 21/* "SPECIAL_CHAR" */,-38 , 24/* "ESCAPED_CHAR" */,-38 , 23/* "ESCAPED_NUM" */,-38 , 25/* "INT" */,-38 , 26/* "ANY" */,-38 , 20/* "CHARACTER_CLASS" */,-38 , 17/* "ANY_CHAR" */,-38 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-38 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-38 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-38 , 1/* "|" */,-38 , 2/* "*" */,-38 , 3/* "+" */,-38 , 4/* "$" */,-38 , 5/* "^" */,-38 , 6/* "?" */,-38 , 14/* "{" */,-38 , 15/* "}" */,-38 , 16/* "," */,-38 , 10/* "(" */,-38 , 11/* ")" */,-38 , 22/* "WORD_BOUNDARY_CHAR" */,-38 ),
	/* State 58 */ new Array( 13/* "]" */,-37 , 18/* "ASCII_HEX_CODE" */,-37 , 19/* "UNICODE_HEX_CODE" */,-37 , 21/* "SPECIAL_CHAR" */,-37 , 24/* "ESCAPED_CHAR" */,-37 , 23/* "ESCAPED_NUM" */,-37 , 25/* "INT" */,-37 , 26/* "ANY" */,-37 , 20/* "CHARACTER_CLASS" */,-37 , 17/* "ANY_CHAR" */,-37 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-37 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-37 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-37 , 1/* "|" */,-37 , 2/* "*" */,-37 , 3/* "+" */,-37 , 4/* "$" */,-37 , 5/* "^" */,-37 , 6/* "?" */,-37 , 14/* "{" */,-37 , 15/* "}" */,-37 , 16/* "," */,-37 , 10/* "(" */,-37 , 11/* ")" */,-37 , 22/* "WORD_BOUNDARY_CHAR" */,-37 ),
	/* State 59 */ new Array( 13/* "]" */,-36 , 18/* "ASCII_HEX_CODE" */,-36 , 19/* "UNICODE_HEX_CODE" */,-36 , 21/* "SPECIAL_CHAR" */,-36 , 24/* "ESCAPED_CHAR" */,-36 , 23/* "ESCAPED_NUM" */,-36 , 25/* "INT" */,-36 , 26/* "ANY" */,-36 , 20/* "CHARACTER_CLASS" */,-36 , 17/* "ANY_CHAR" */,-36 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-36 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-36 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-36 , 1/* "|" */,-36 , 2/* "*" */,-36 , 3/* "+" */,-36 , 4/* "$" */,-36 , 5/* "^" */,-36 , 6/* "?" */,-36 , 14/* "{" */,-36 , 15/* "}" */,-36 , 16/* "," */,-36 , 10/* "(" */,-36 , 11/* ")" */,-36 , 22/* "WORD_BOUNDARY_CHAR" */,-36 ),
	/* State 60 */ new Array( 13/* "]" */,-35 , 18/* "ASCII_HEX_CODE" */,-35 , 19/* "UNICODE_HEX_CODE" */,-35 , 21/* "SPECIAL_CHAR" */,-35 , 24/* "ESCAPED_CHAR" */,-35 , 23/* "ESCAPED_NUM" */,-35 , 25/* "INT" */,-35 , 26/* "ANY" */,-35 , 20/* "CHARACTER_CLASS" */,-35 , 17/* "ANY_CHAR" */,-35 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-35 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-35 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-35 , 1/* "|" */,-35 , 2/* "*" */,-35 , 3/* "+" */,-35 , 4/* "$" */,-35 , 5/* "^" */,-35 , 6/* "?" */,-35 , 14/* "{" */,-35 , 15/* "}" */,-35 , 16/* "," */,-35 , 10/* "(" */,-35 , 11/* ")" */,-35 , 22/* "WORD_BOUNDARY_CHAR" */,-35 ),
	/* State 61 */ new Array( 13/* "]" */,-34 , 18/* "ASCII_HEX_CODE" */,-34 , 19/* "UNICODE_HEX_CODE" */,-34 , 21/* "SPECIAL_CHAR" */,-34 , 24/* "ESCAPED_CHAR" */,-34 , 23/* "ESCAPED_NUM" */,-34 , 25/* "INT" */,-34 , 26/* "ANY" */,-34 , 20/* "CHARACTER_CLASS" */,-34 , 17/* "ANY_CHAR" */,-34 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-34 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-34 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-34 , 1/* "|" */,-34 , 2/* "*" */,-34 , 3/* "+" */,-34 , 4/* "$" */,-34 , 5/* "^" */,-34 , 6/* "?" */,-34 , 14/* "{" */,-34 , 15/* "}" */,-34 , 16/* "," */,-34 , 10/* "(" */,-34 , 11/* ")" */,-34 , 22/* "WORD_BOUNDARY_CHAR" */,-34 ),
	/* State 62 */ new Array( 13/* "]" */,-33 , 18/* "ASCII_HEX_CODE" */,-33 , 19/* "UNICODE_HEX_CODE" */,-33 , 21/* "SPECIAL_CHAR" */,-33 , 24/* "ESCAPED_CHAR" */,-33 , 23/* "ESCAPED_NUM" */,-33 , 25/* "INT" */,-33 , 26/* "ANY" */,-33 , 20/* "CHARACTER_CLASS" */,-33 , 17/* "ANY_CHAR" */,-33 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-33 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-33 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-33 , 1/* "|" */,-33 , 2/* "*" */,-33 , 3/* "+" */,-33 , 4/* "$" */,-33 , 5/* "^" */,-33 , 6/* "?" */,-33 , 14/* "{" */,-33 , 15/* "}" */,-33 , 16/* "," */,-33 , 10/* "(" */,-33 , 11/* ")" */,-33 , 22/* "WORD_BOUNDARY_CHAR" */,-33 ),
	/* State 63 */ new Array( 13/* "]" */,-32 , 18/* "ASCII_HEX_CODE" */,-32 , 19/* "UNICODE_HEX_CODE" */,-32 , 21/* "SPECIAL_CHAR" */,-32 , 24/* "ESCAPED_CHAR" */,-32 , 23/* "ESCAPED_NUM" */,-32 , 25/* "INT" */,-32 , 26/* "ANY" */,-32 , 20/* "CHARACTER_CLASS" */,-32 , 17/* "ANY_CHAR" */,-32 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-32 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-32 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-32 , 1/* "|" */,-32 , 2/* "*" */,-32 , 3/* "+" */,-32 , 4/* "$" */,-32 , 5/* "^" */,-32 , 6/* "?" */,-32 , 14/* "{" */,-32 , 15/* "}" */,-32 , 16/* "," */,-32 , 10/* "(" */,-32 , 11/* ")" */,-32 , 22/* "WORD_BOUNDARY_CHAR" */,-32 ),
	/* State 64 */ new Array( 2/* "*" */,-29 , 3/* "+" */,-29 , 6/* "?" */,-29 , 14/* "{" */,-29 , 36/* "$" */,-29 , 1/* "|" */,-29 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-29 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-29 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-29 , 10/* "(" */,-29 , 18/* "ASCII_HEX_CODE" */,-29 , 19/* "UNICODE_HEX_CODE" */,-29 , 21/* "SPECIAL_CHAR" */,-29 , 24/* "ESCAPED_CHAR" */,-29 , 23/* "ESCAPED_NUM" */,-29 , 25/* "INT" */,-29 , 26/* "ANY" */,-29 , 12/* "[" */,-29 , 17/* "ANY_CHAR" */,-29 , 20/* "CHARACTER_CLASS" */,-29 , 4/* "$" */,-29 , 5/* "^" */,-29 , 22/* "WORD_BOUNDARY_CHAR" */,-29 , 11/* ")" */,-29 ),
	/* State 65 */ new Array( 15/* "}" */,67 , 25/* "INT" */,68 ),
	/* State 66 */ new Array( 6/* "?" */,69 , 36/* "$" */,-15 , 1/* "|" */,-15 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-15 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-15 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-15 , 10/* "(" */,-15 , 18/* "ASCII_HEX_CODE" */,-15 , 19/* "UNICODE_HEX_CODE" */,-15 , 21/* "SPECIAL_CHAR" */,-15 , 24/* "ESCAPED_CHAR" */,-15 , 23/* "ESCAPED_NUM" */,-15 , 25/* "INT" */,-15 , 26/* "ANY" */,-15 , 12/* "[" */,-15 , 17/* "ANY_CHAR" */,-15 , 20/* "CHARACTER_CLASS" */,-15 , 4/* "$" */,-15 , 5/* "^" */,-15 , 22/* "WORD_BOUNDARY_CHAR" */,-15 , 11/* ")" */,-15 ),
	/* State 67 */ new Array( 6/* "?" */,70 , 36/* "$" */,-16 , 1/* "|" */,-16 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-16 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-16 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-16 , 10/* "(" */,-16 , 18/* "ASCII_HEX_CODE" */,-16 , 19/* "UNICODE_HEX_CODE" */,-16 , 21/* "SPECIAL_CHAR" */,-16 , 24/* "ESCAPED_CHAR" */,-16 , 23/* "ESCAPED_NUM" */,-16 , 25/* "INT" */,-16 , 26/* "ANY" */,-16 , 12/* "[" */,-16 , 17/* "ANY_CHAR" */,-16 , 20/* "CHARACTER_CLASS" */,-16 , 4/* "$" */,-16 , 5/* "^" */,-16 , 22/* "WORD_BOUNDARY_CHAR" */,-16 , 11/* ")" */,-16 ),
	/* State 68 */ new Array( 15/* "}" */,71 ),
	/* State 69 */ new Array( 36/* "$" */,-9 , 1/* "|" */,-9 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-9 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-9 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-9 , 10/* "(" */,-9 , 18/* "ASCII_HEX_CODE" */,-9 , 19/* "UNICODE_HEX_CODE" */,-9 , 21/* "SPECIAL_CHAR" */,-9 , 24/* "ESCAPED_CHAR" */,-9 , 23/* "ESCAPED_NUM" */,-9 , 25/* "INT" */,-9 , 26/* "ANY" */,-9 , 12/* "[" */,-9 , 17/* "ANY_CHAR" */,-9 , 20/* "CHARACTER_CLASS" */,-9 , 4/* "$" */,-9 , 5/* "^" */,-9 , 22/* "WORD_BOUNDARY_CHAR" */,-9 , 11/* ")" */,-9 ),
	/* State 70 */ new Array( 36/* "$" */,-10 , 1/* "|" */,-10 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-10 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-10 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-10 , 10/* "(" */,-10 , 18/* "ASCII_HEX_CODE" */,-10 , 19/* "UNICODE_HEX_CODE" */,-10 , 21/* "SPECIAL_CHAR" */,-10 , 24/* "ESCAPED_CHAR" */,-10 , 23/* "ESCAPED_NUM" */,-10 , 25/* "INT" */,-10 , 26/* "ANY" */,-10 , 12/* "[" */,-10 , 17/* "ANY_CHAR" */,-10 , 20/* "CHARACTER_CLASS" */,-10 , 4/* "$" */,-10 , 5/* "^" */,-10 , 22/* "WORD_BOUNDARY_CHAR" */,-10 , 11/* ")" */,-10 ),
	/* State 71 */ new Array( 6/* "?" */,72 , 36/* "$" */,-17 , 1/* "|" */,-17 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-17 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-17 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-17 , 10/* "(" */,-17 , 18/* "ASCII_HEX_CODE" */,-17 , 19/* "UNICODE_HEX_CODE" */,-17 , 21/* "SPECIAL_CHAR" */,-17 , 24/* "ESCAPED_CHAR" */,-17 , 23/* "ESCAPED_NUM" */,-17 , 25/* "INT" */,-17 , 26/* "ANY" */,-17 , 12/* "[" */,-17 , 17/* "ANY_CHAR" */,-17 , 20/* "CHARACTER_CLASS" */,-17 , 4/* "$" */,-17 , 5/* "^" */,-17 , 22/* "WORD_BOUNDARY_CHAR" */,-17 , 11/* ")" */,-17 ),
	/* State 72 */ new Array( 36/* "$" */,-11 , 1/* "|" */,-11 , 7/* "NON_CAPTURING_OPEN_GROUP" */,-11 , 8/* "POS_LOOKAHEAD_OPEN_GROUP" */,-11 , 9/* "NEG_LOOKAHEAD_OPEN_GROUP" */,-11 , 10/* "(" */,-11 , 18/* "ASCII_HEX_CODE" */,-11 , 19/* "UNICODE_HEX_CODE" */,-11 , 21/* "SPECIAL_CHAR" */,-11 , 24/* "ESCAPED_CHAR" */,-11 , 23/* "ESCAPED_NUM" */,-11 , 25/* "INT" */,-11 , 26/* "ANY" */,-11 , 12/* "[" */,-11 , 17/* "ANY_CHAR" */,-11 , 20/* "CHARACTER_CLASS" */,-11 , 4/* "$" */,-11 , 5/* "^" */,-11 , 22/* "WORD_BOUNDARY_CHAR" */,-11 , 11/* ")" */,-11 )
);

/* Goto-Table */
var goto_tab = new Array(
	/* State 0 */ new Array( 28/* RegEx */,1 , 27/* Expression */,2 , 29/* Catenation */,3 , 30/* Factor */,4 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 1 */ new Array(  ),
	/* State 2 */ new Array(  ),
	/* State 3 */ new Array( 30/* Factor */,27 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 4 */ new Array(  ),
	/* State 5 */ new Array(  ),
	/* State 6 */ new Array(  ),
	/* State 7 */ new Array(  ),
	/* State 8 */ new Array( 27/* Expression */,32 , 29/* Catenation */,3 , 30/* Factor */,4 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 9 */ new Array( 27/* Expression */,33 , 29/* Catenation */,3 , 30/* Factor */,4 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 10 */ new Array( 27/* Expression */,34 , 29/* Catenation */,3 , 30/* Factor */,4 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 11 */ new Array( 27/* Expression */,35 , 29/* Catenation */,3 , 30/* Factor */,4 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 12 */ new Array(  ),
	/* State 13 */ new Array(  ),
	/* State 14 */ new Array(  ),
	/* State 15 */ new Array(  ),
	/* State 16 */ new Array(  ),
	/* State 17 */ new Array(  ),
	/* State 18 */ new Array(  ),
	/* State 19 */ new Array(  ),
	/* State 20 */ new Array( 35/* CharClass */,36 ),
	/* State 21 */ new Array(  ),
	/* State 22 */ new Array(  ),
	/* State 23 */ new Array(  ),
	/* State 24 */ new Array(  ),
	/* State 25 */ new Array(  ),
	/* State 26 */ new Array( 29/* Catenation */,37 , 30/* Factor */,4 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 27 */ new Array(  ),
	/* State 28 */ new Array(  ),
	/* State 29 */ new Array(  ),
	/* State 30 */ new Array(  ),
	/* State 31 */ new Array(  ),
	/* State 32 */ new Array(  ),
	/* State 33 */ new Array(  ),
	/* State 34 */ new Array(  ),
	/* State 35 */ new Array(  ),
	/* State 36 */ new Array( 32/* Character */,63 ),
	/* State 37 */ new Array( 30/* Factor */,27 , 31/* Term */,5 , 32/* Character */,6 , 33/* CharacterSet */,7 , 34/* Positional */,12 ),
	/* State 38 */ new Array(  ),
	/* State 39 */ new Array(  ),
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
	/* State 72 */ new Array(  )
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
		act = 74;
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
		if( act == 74 )
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
			
			while( act == 74 && la != 36 )
			{
				if( this._dbg_withtrace )
					this.dbg_print( "\tError recovery\n" +
									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
									"Action: " + act + "\n\n" );
				if( la == -1 )
					info.offset++;
					
				while( act == 74 && sstack.length > 0 )
				{
					sstack.pop();
					vstack.pop();
					
					if( sstack.length == 0 )
						break;
						
					act = 74;
					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
					{
						if( act_tab[sstack[sstack.length-1]][i] == la )
						{
							act = act_tab[sstack[sstack.length-1]][i+1];
							break;
						}
					}
				}
				
				if( act != 74 )
					break;
				
				for( var i = 0; i < rsstack.length; i++ )
				{
					sstack.push( rsstack[i] );
					vstack.push( rvstack[i] );
				}
				
				la = this.lex( info );
			}
			
			if( act == 74 )
			{
				if( this._dbg_withtrace )
					this.dbg_print( "\tError recovery failed, terminating parse process..." );
				break;
			}


			if( this._dbg_withtrace )
				this.dbg_print( "\tError recovery succeeded, continuing" );
		}
		
		/*
		if( act == 74 )
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
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "pos_la"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 23:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "neg_la"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 24:
	{
			rval = new RXBuild.Dom.GroupMatch(vstack[ vstack.length - 2 ], "capture"); rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 25:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 26:
	{
		  rval = new RXBuild.Dom.PositionalMatch(vstack[ vstack.length - 1 ].value, this.options.m); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 27:
	{
		  rval = new RXBuild.Dom.PositionalMatch(vstack[ vstack.length - 1 ].value, this.options.m); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 28:
	{
		  rval = new RXBuild.Dom.PositionalMatch(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 29:
	{
			rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]); 
	}
	break;
	case 30:
	{
			rval = new RXBuild.Dom.CharacterRangeMatch(true); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 31:
	{
		  rval = new RXBuild.Dom.CharacterRangeMatch(false); rval.AddClass(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 32:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ]); rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 33:
	{
			vstack[ vstack.length - 2 ].AddClass(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 34:
	{
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
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
			vstack[ vstack.length - 2 ].AddChars(vstack[ vstack.length - 1 ].value == "\\b" ? "\b" : vstack[ vstack.length - 1 ].value); rval = vstack[ vstack.length - 2 ]; rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 50:
	{
			rval = new RXBuild.Dom.CharacterRangeMatch(false); 
	}
	break;
	case 51:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 52:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 53:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 54:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value.substr(1, 1)); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 55:
	{
			rval = new RXBuild.Dom.BackTrackOrEscapeTempMatch(vstack[ vstack.length - 1 ].value.substr(1)); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 56:
	{
			rval = new RXBuild.Dom.LiteralMatcher(vstack[ vstack.length - 1 ].value); rval.AddTokens(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 57:
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


