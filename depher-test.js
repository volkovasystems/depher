
const assert = require( "assert" );
const depher = require( "./depher.js" );

assert.equal( depher( [ 1, 2, 3 ], NUMBER, false ), 1, "should be equal to 1" );

assert.equal( depher( [ "", "hello", "world", "1" ], NUMBER, 123 ), 123, "should be equal to 123" );

assert.equal( depher( [ 1, 2, 3 ], STRING, null, "hello" ), "hello", "should be equal to 'hello'" );

assert.deepEqual( depher( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ),
	[ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

assert.deepEqual( depher( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ),
	[ 1, 2, 3 ], "should be equal to [ 1, 2, 3 ]" );

( function test( ){
	assert.deepEqual( depher( arguments, OBJECT, { } ), { }, "should be equal to empty object" );
} )( 1, 2, 3, 4 );

( function test( ){
	assert.deepEqual( depher( arguments, OBJECT, { } ), { "hello": "world" }, "should be equal to { 'hello': 'world' }" );
} )( 1, 2, 3, 4, { "hello": "world" } );

console.log( "ok" );
