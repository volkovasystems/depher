"use strict";

const depher = require( "./depher.js" );

console.log( depher( [ 1, 2, 3 ], NUMBER, false ) );
console.log( depher( [ 1, 2, 3 ], STRING, null, "hello" ) );
