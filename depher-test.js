
const assert = require( "assert" );
const depher = require( "./depher.js" );

assert.equal( depher( [ 1, 2, 3 ], NUMBER, false ), 1, "should be equal" );

assert.equal( depher( [ 1, 2, 3 ], STRING, null, "hello" ), "hello", "should be equal" );

assert.deepEqual( depher( [ [ 1, 2, 3 ] ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be equal" );

assert.deepEqual( depher( [ "hello" ], Array, "", 123, "yeah", [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be equal" );

( function test( ){
	assert.deepEqual( depher( arguments, OBJECT, { } ), { } );
} )( 1, 2, 3, 4 );

( function test( ){
	assert.deepEqual( depher( arguments, OBJECT, { } ), { "hello": "world" } );
} )( 1, 2, 3, 4, { "hello": "world" } );

console.log( "ok" );
