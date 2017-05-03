"use strict";

const assert = require( "assert" );
const depher = require( "./depher.js" );

assert.equal( depher( [ 1, 2, 3 ], NUMBER, false ), 1 );
assert.equal( depher( [ 1, 2, 3 ], STRING, null, "hello" ), "hello" );
assert.deepEqual( depher( [ 1,2,3 ], Array, "", 123, "yeah", [1,2,3] ), [ 1, 2, 3 ] );

console.log( "ok" );
