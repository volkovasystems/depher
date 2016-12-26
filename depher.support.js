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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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
			"dephall": "dephall",
			"doubt": "doubt",
			"falze": "falze",
			"falzy": "falzy",
			"harden": "harden",
			"zelf": "zelf"
		}
	@end-include
*/

var dephall = require("dephall");
var doubt = require("doubt");
var falze = require("falze");
var falzy = require("falzy");
var harden = require("harden");
var zelf = require("zelf");

harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("NUMBER", "number");
harden("OBJECT", "object");
harden("STRING", "string");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var depher = function depher(list, condition, defer) {
	/*;
 	@meta-configuration:
 		{
 			"list:required": [
 				"Arguments",
 				"[*]"
 			],
 			"condition:required": [
 				"string",
 				"function",
 				BOOLEAN,
 				FUNCTION,
 				NUMBER,
 				OBJECT,
 				STRING,
 				UNDEFINED,
 				SYMBOL,
 				"[string, function]"
 			],
 			"defer:required": "*"
 		}
 	@end-meta-configuration
 */

	if (!doubt(list, AS_ARRAY)) {
		throw new Error("invalid list");
	}

	if (falze(condition)) {
		throw new Error("invalid condition");
	}

	if (falzy(defer)) {
		throw new Error("defer value not given");
	}

	var self = zelf(this);

	var result = dephall.bind(self)(list, condition, defer);

	if (doubt(result, ARRAY)) {
		return result[0];
	} else {
		return result;
	}
};

module.exports = depher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGhlci5qcyJdLCJuYW1lcyI6WyJkZXBoYWxsIiwicmVxdWlyZSIsImRvdWJ0IiwiZmFsemUiLCJmYWx6eSIsImhhcmRlbiIsInplbGYiLCJkZXBoZXIiLCJsaXN0IiwiY29uZGl0aW9uIiwiZGVmZXIiLCJBU19BUlJBWSIsIkVycm9yIiwic2VsZiIsInJlc3VsdCIsImJpbmQiLCJBUlJBWSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiOztBQUVBSSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsV0FBUixFQUFxQixXQUFyQjtBQUNBQSxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7O0FBRUEsSUFBTUUsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxJQUFqQixFQUF1QkMsU0FBdkIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsS0FBSSxDQUFDUixNQUFPTSxJQUFQLEVBQWFHLFFBQWIsQ0FBTCxFQUE4QjtBQUM3QixRQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJVCxNQUFPTSxTQUFQLENBQUosRUFBd0I7QUFDdkIsUUFBTSxJQUFJRyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlSLE1BQU9NLEtBQVAsQ0FBSixFQUFvQjtBQUNuQixRQUFNLElBQUlFLEtBQUosQ0FBVyx1QkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsT0FBT1AsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSVEsU0FBU2QsUUFBUWUsSUFBUixDQUFjRixJQUFkLEVBQXNCTCxJQUF0QixFQUE0QkMsU0FBNUIsRUFBdUNDLEtBQXZDLENBQWI7O0FBRUEsS0FBSVIsTUFBT1ksTUFBUCxFQUFlRSxLQUFmLENBQUosRUFBNEI7QUFDM0IsU0FBT0YsT0FBUSxDQUFSLENBQVA7QUFFQSxFQUhELE1BR0s7QUFDSixTQUFPQSxNQUFQO0FBQ0E7QUFDRCxDQS9DRDs7QUFpREFHLE9BQU9DLE9BQVAsR0FBaUJYLE1BQWpCIiwiZmlsZSI6ImRlcGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE2IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkZXBoZXJcIixcblx0XHRcdFwicGF0aFwiOiBcImRlcGhlci9kZXBoZXIuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRlcGhlci5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZXBoZXIuZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV4dHJhY3QgZGVzaWduYXRlZCBwYXJhbWV0ZXIgYW5kIGRlZmF1bHQgdG8gYSBnaXZlbiB2YWx1ZSBpZiB1bmRlZmluZWQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRlcGhhbGxcIjogXCJkZXBoYWxsXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRlcGhhbGwgPSByZXF1aXJlKCBcImRlcGhhbGxcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmhhcmRlbiggXCJCT09MRUFOXCIsIFwiYm9vbGVhblwiICk7XG5oYXJkZW4oIFwiRlVOQ1RJT05cIiwgXCJmdW5jdGlvblwiICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIFwibnVtYmVyXCIgKTtcbmhhcmRlbiggXCJPQkpFQ1RcIiwgXCJvYmplY3RcIiApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBcInN0cmluZ1wiICk7XG5oYXJkZW4oIFwiVU5ERUZJTkVEXCIsIFwidW5kZWZpbmVkXCIgKTtcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xuXG5jb25zdCBkZXBoZXIgPSBmdW5jdGlvbiBkZXBoZXIoIGxpc3QsIGNvbmRpdGlvbiwgZGVmZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJsaXN0OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIkFyZ3VtZW50c1wiLFxuXHRcdFx0XHRcdFwiWypdXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJjb25kaXRpb246cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdEJPT0xFQU4sXG5cdFx0XHRcdFx0RlVOQ1RJT04sXG5cdFx0XHRcdFx0TlVNQkVSLFxuXHRcdFx0XHRcdE9CSkVDVCxcblx0XHRcdFx0XHRTVFJJTkcsXG5cdFx0XHRcdFx0VU5ERUZJTkVELFxuXHRcdFx0XHRcdFNZTUJPTCxcblx0XHRcdFx0XHRcIltzdHJpbmcsIGZ1bmN0aW9uXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZGVmZXI6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGxpc3QsIEFTX0FSUkFZICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaXN0XCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6ZSggY29uZGl0aW9uICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHR9XG5cblx0aWYoIGZhbHp5KCBkZWZlciApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImRlZmVyIHZhbHVlIG5vdCBnaXZlblwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgcmVzdWx0ID0gZGVwaGFsbC5iaW5kKCBzZWxmICkoIGxpc3QsIGNvbmRpdGlvbiwgZGVmZXIgKTtcblxuXHRpZiggZG91YnQoIHJlc3VsdCwgQVJSQVkgKSApe1xuXHRcdHJldHVybiByZXN1bHRbIDAgXTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGhlcjtcbiJdfQ==
