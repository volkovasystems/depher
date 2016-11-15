"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "depher",
			"path": "depher/depher.js",
			"file": "depher.js",
			"module": "depher",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/depher.git",
			"global": true,
			"class": true
		}
	@end-module-configuration

	@module-documentation:
		Extract designated parameter and default to a given value if undefined.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"falzy": "falzy",
			"harden": "harden",
			"protype": "protype",
			"pyck": "pyck",
			"zelf": "zelf"
		}
	@end-include
*/

const arid = require( "arid" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const protype = require( "protype" );
const pyck = require( "pyck" );
const zelf = require( "zelf" );

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

const depher = function depher( list, condition, defer ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"Arguments",
					"[*]"
				],
				"condition:required": [
					"string",
					"function"
				],
				"defer": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( defer ) ){
		throw new Error( "defer value not give" );
	}

	let conditionType = protype( condition );
	if( ( !conditionType.STRING &&
			!conditionType.FUNCTION ) ||

		( conditionType.STRING &&
			condition != BOOLEAN &&
			condition != FUNCTION &&
			condition != NUMBER &&
			condition != OBJECT &&
			condition != STRING &&
			condition != UNDEFINED &&
			condition != SYMBOL ) )
	{
		throw new Error( "invalid condition" );
	}

	let self = zelf( this );

	let result = pyck.bind( self )( list, condition );

	if( arid( result ) ){
		return defer;

	}else{
		return result[ 0 ];
	}
};

module.exports = depher;
