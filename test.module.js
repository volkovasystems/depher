"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
	@end-test-license

	@test-configuration:
		{
			"package": "depher",
			"path": "depher/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/depher.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"depher": "depher"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const depher = require( "./depher.js" );
//: @end-server

//: @client:
const depher = require( "./depher.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "depher", ( ) => {

	describe( "`depher( [ 1, 2, 3 ], NUMBER, false )`", ( ) => {
		it( "should be equal to 1", ( ) => {
			assert.equal( depher( [ 1, 2, 3 ], NUMBER, false ), 1 );
		} );
	} );

	describe( "`depher( [ '', 'hello', 'world', '1' ], NUMBER, 123 )`", ( ) => {
		it( "should be equal to 123", ( ) => {
			assert.equal( depher( [ "", "hello", "world", "1" ], NUMBER, 123 ), 123 );
		} );
	} );

	describe( "`depher( [ 1, 2, 3 ], STRING, null, 'hello' )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( depher( [ 1, 2, 3 ], STRING, null, "hello" ), "hello" );
		} );
	} );

	describe( "`depher( [ [ 1, 2, 3 ] ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {
			assert.deepEqual( depher( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ 1, 2, 3 ] );
		} );
	} );

	describe( "`depher( [ 'hello' ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {
			assert.deepEqual( depher( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ 1, 2, 3 ] );
		} );
	} );

	describe( "`depher( arguments, OBJECT, { } )`", ( ) => {
		it( "should be equal to { 'hello': 'world' }", ( ) => {
			( function test( ){
				assert.deepEqual( depher( arguments, OBJECT, { } ), { "hello": "world" } );
			} )( 1, 2, 3, 4, { "hello": "world" } );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "depher", ( ) => {

	describe( "`depher( [ 1, 2, 3 ], NUMBER, false )`", ( ) => {
		it( "should be equal to 1", ( ) => {
			assert.equal( depher( [ 1, 2, 3 ], NUMBER, false ), 1 );
		} );
	} );

	describe( "`depher( [ '', 'hello', 'world', '1' ], NUMBER, 123 )`", ( ) => {
		it( "should be equal to 123", ( ) => {
			assert.equal( depher( [ "", "hello", "world", "1" ], NUMBER, 123 ), 123 );
		} );
	} );

	describe( "`depher( [ 1, 2, 3 ], STRING, null, 'hello' )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( depher( [ 1, 2, 3 ], STRING, null, "hello" ), "hello" );
		} );
	} );

	describe( "`depher( [ [ 1, 2, 3 ] ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {
			assert.deepEqual( depher( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ 1, 2, 3 ] );
		} );
	} );

	describe( "`depher( [ 'hello' ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {
			assert.deepEqual( depher( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ 1, 2, 3 ] );
		} );
	} );

	describe( "`depher( arguments, OBJECT, { } )`", ( ) => {
		it( "should be equal to { 'hello': 'world' }", ( ) => {
			( function test( ){
				assert.deepEqual( depher( arguments, OBJECT, { } ), { "hello": "world" } );
			} )( 1, 2, 3, 4, { "hello": "world" } );
		} );
	} );

} );
//: @end-client


//: @bridge:

//: @end-bridge
