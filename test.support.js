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

var assert = require("should/as-function");



//: @client:
var depher = require("./depher.support.js");
//: @end-client







//: @client:
describe("depher", function () {

	describe("`depher( [ 1, 2, 3 ], NUMBER, false )`", function () {
		it("should be equal to 1", function () {
			assert.equal(depher([1, 2, 3], NUMBER, false), 1);
		});
	});

	describe("`depher( [ '', 'hello', 'world', '1' ], NUMBER, 123 )`", function () {
		it("should be equal to 123", function () {
			assert.equal(depher(["", "hello", "world", "1"], NUMBER, 123), 123);
		});
	});

	describe("`depher( [ 1, 2, 3 ], STRING, null, 'hello' )`", function () {
		it("should be equal to 'hello'", function () {
			assert.equal(depher([1, 2, 3], STRING, null, "hello"), "hello");
		});
	});

	describe("`depher( [ [ 1, 2, 3 ] ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {
			assert.deepEqual(depher([[1, 2, 3]], Array, "", 123, "yeah", [1, 2, 3]), [1, 2, 3]);
		});
	});

	describe("`depher( [ 'hello' ], Array, '', 123, 'yeah', [ 1, 2, 3 ] )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {
			assert.deepEqual(depher(["hello"], Array, "", 123, "yeah", [1, 2, 3]), [1, 2, 3]);
		});
	});

	describe("`depher( arguments, OBJECT, { } )`", function () {
		it("should be equal to { 'hello': 'world' }", function () {
			(function test() {
				assert.deepEqual(depher(arguments, OBJECT, {}), { "hello": "world" });
			})(1, 2, 3, 4, { "hello": "world" });

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVwaGVyIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiTlVNQkVSIiwiU1RSSU5HIiwiZGVlcEVxdWFsIiwiQXJyYXkiLCJ0ZXN0IiwiYXJndW1lbnRzIiwiT0JKRUNUIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLHdDQUFWLEVBQW9ELFlBQU87QUFDMURDLEtBQUksc0JBQUosRUFBNEIsWUFBTztBQUNsQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVIsRUFBcUJJLE1BQXJCLEVBQTZCLEtBQTdCLENBQWQsRUFBb0QsQ0FBcEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUgsVUFBVSx3REFBVixFQUFvRSxZQUFPO0FBQzFFQyxLQUFJLHdCQUFKLEVBQThCLFlBQU87QUFDcENKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLEVBQUYsRUFBTSxPQUFOLEVBQWUsT0FBZixFQUF3QixHQUF4QixDQUFSLEVBQXVDSSxNQUF2QyxFQUErQyxHQUEvQyxDQUFkLEVBQW9FLEdBQXBFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsZ0RBQVYsRUFBNEQsWUFBTztBQUNsRUMsS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBUixFQUFxQkssTUFBckIsRUFBNkIsSUFBN0IsRUFBbUMsT0FBbkMsQ0FBZCxFQUE0RCxPQUE1RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSixVQUFVLGtFQUFWLEVBQThFLFlBQU87QUFDcEZDLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1Q0osVUFBT1EsU0FBUCxDQUFrQk4sT0FBUSxDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQUYsQ0FBUixFQUF5Qk8sS0FBekIsRUFBZ0MsRUFBaEMsRUFBb0MsR0FBcEMsRUFBeUMsTUFBekMsRUFBaUQsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBakQsQ0FBbEIsRUFBa0YsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBbEY7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQU4sVUFBVSw4REFBVixFQUEwRSxZQUFPO0FBQ2hGQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87QUFDNUNKLFVBQU9RLFNBQVAsQ0FBa0JOLE9BQVEsQ0FBRSxPQUFGLENBQVIsRUFBcUJPLEtBQXJCLEVBQTRCLEVBQTVCLEVBQWdDLEdBQWhDLEVBQXFDLE1BQXJDLEVBQTZDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTdDLENBQWxCLEVBQThFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTlFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFOLFVBQVUsb0NBQVYsRUFBZ0QsWUFBTztBQUN0REMsS0FBSSx5Q0FBSixFQUErQyxZQUFPO0FBQ3JELElBQUUsU0FBU00sSUFBVCxHQUFnQjtBQUNqQlYsV0FBT1EsU0FBUCxDQUFrQk4sT0FBUVMsU0FBUixFQUFtQkMsTUFBbkIsRUFBMkIsRUFBM0IsQ0FBbEIsRUFBb0QsRUFBRSxTQUFTLE9BQVgsRUFBcEQ7QUFDQSxJQUZELEVBRUssQ0FGTCxFQUVRLENBRlIsRUFFVyxDQUZYLEVBRWMsQ0FGZCxFQUVpQixFQUFFLFNBQVMsT0FBWCxFQUZqQjs7QUFJQSxHQUxEO0FBTUEsRUFQRDs7QUFTQSxDQXpDRDtBQTBDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZGVwaGVyL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZXBoZXIuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCIuL2RlcGhlci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImRlcGhlclwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoZXIoIFsgMSwgMiwgMyBdLCBOVU1CRVIsIGZhbHNlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDFcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZGVwaGVyKCBbIDEsIDIsIDMgXSwgTlVNQkVSLCBmYWxzZSApLCAxICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlcGhlciggWyAnJywgJ2hlbGxvJywgJ3dvcmxkJywgJzEnIF0sIE5VTUJFUiwgMTIzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDEyM1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXBoZXIoIFsgXCJcIiwgXCJoZWxsb1wiLCBcIndvcmxkXCIsIFwiMVwiIF0sIE5VTUJFUiwgMTIzICksIDEyMyApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoZXIoIFsgMSwgMiwgMyBdLCBTVFJJTkcsIG51bGwsICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvJ1wiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkZXBoZXIoIFsgMSwgMiwgMyBdLCBTVFJJTkcsIG51bGwsIFwiaGVsbG9cIiApLCBcImhlbGxvXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZGVwaGVyKCBbIFsgMSwgMiwgMyBdIF0sIEFycmF5LCAnJywgMTIzLCAneWVhaCcsIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXBoZXIoIFsgWyAxLCAyLCAzIF0gXSwgQXJyYXksIFwiXCIsIDEyMywgXCJ5ZWFoXCIsIFsgMSwgMiwgMyBdICksIFsgMSwgMiwgMyBdICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRlcGhlciggWyAnaGVsbG8nIF0sIEFycmF5LCAnJywgMTIzLCAneWVhaCcsIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBkZXBoZXIoIFsgXCJoZWxsb1wiIF0sIEFycmF5LCBcIlwiLCAxMjMsIFwieWVhaFwiLCBbIDEsIDIsIDMgXSApLCBbIDEsIDIsIDMgXSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkZXBoZXIoIGFyZ3VtZW50cywgT0JKRUNULCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8geyAnaGVsbG8nOiAnd29ybGQnIH1cIiwgKCApID0+IHtcblx0XHRcdCggZnVuY3Rpb24gdGVzdCggKXtcblx0XHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggZGVwaGVyKCBhcmd1bWVudHMsIE9CSkVDVCwgeyB9ICksIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXHRcdFx0fSApKCAxLCAyLCAzLCA0LCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
