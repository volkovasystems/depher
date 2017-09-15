"use strict"; /*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "depher",
              			"path": "depher/depher.js",
              			"file": "depher.js",
              			"module": "depher",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/depher.git",
              			"global": true,
              			"class": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract designated parameter and default to a given value if undefined.
              
              		This will return a single element.
              	@end-module-documentation
              
              	@include:
              		{
              			"dephall": "dephall",
              			"raze": "raze",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var dephall = require("dephall");
var raze = require("raze");
var zelf = require("zelf");

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
                                                      			"defer:required": [
                                                      				"*",
                                                      				"..."
                                                      			]
                                                      		}
                                                      	@end-meta-configuration
                                                      */

	if (arguments.length < 3) {
		throw new Error("invalid parameter");
	}

	return dephall.apply(zelf(this), raze(arguments))[0];
};

module.exports = depher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGhlci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRlcGhhbGwiLCJyZXF1aXJlIiwicmF6ZSIsInplbGYiLCJkZXBoZXIiLCJsaXN0IiwiY29uZGl0aW9uIiwiZGVmZXIiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJFcnJvciIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsSUFBakIsRUFBdUJDLFNBQXZCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUN2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLEtBQUlDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsUUFBTSxJQUFJQyxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELFFBQU9WLFFBQVFXLEtBQVIsQ0FBZVIsS0FBTSxJQUFOLENBQWYsRUFBNkJELEtBQU1NLFNBQU4sQ0FBN0IsRUFBa0QsQ0FBbEQsQ0FBUDtBQUNBLENBakNEOztBQW1DQUksT0FBT0MsT0FBUCxHQUFpQlQsTUFBakIiLCJmaWxlIjoiZGVwaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImRlcGhlclwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJkZXBoZXIvZGVwaGVyLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImRlcGhlci5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRlcGhlclwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kZXBoZXIuZ2l0XCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXHJcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RXh0cmFjdCBkZXNpZ25hdGVkIHBhcmFtZXRlciBhbmQgZGVmYXVsdCB0byBhIGdpdmVuIHZhbHVlIGlmIHVuZGVmaW5lZC5cclxuXHJcblx0XHRUaGlzIHdpbGwgcmV0dXJuIGEgc2luZ2xlIGVsZW1lbnQuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkZXBoYWxsXCI6IFwiZGVwaGFsbFwiLFxyXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXHJcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZGVwaGFsbCA9IHJlcXVpcmUoIFwiZGVwaGFsbFwiICk7XHJcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xyXG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcclxuXHJcbmNvbnN0IGRlcGhlciA9IGZ1bmN0aW9uIGRlcGhlciggbGlzdCwgY29uZGl0aW9uLCBkZWZlciApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIkFyZ3VtZW50c1wiLFxyXG5cdFx0XHRcdFx0XCJbKl1cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJjb25kaXRpb246cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdEJPT0xFQU4sXHJcblx0XHRcdFx0XHRGVU5DVElPTixcclxuXHRcdFx0XHRcdE5VTUJFUixcclxuXHRcdFx0XHRcdE9CSkVDVCxcclxuXHRcdFx0XHRcdFNUUklORyxcclxuXHRcdFx0XHRcdFVOREVGSU5FRCxcclxuXHRcdFx0XHRcdFNZTUJPTCxcclxuXHRcdFx0XHRcdFwiW3N0cmluZywgZnVuY3Rpb25dXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiZGVmZXI6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCIqXCIsXHJcblx0XHRcdFx0XHRcIi4uLlwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoIDwgMyApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcGFyYW1ldGVyXCIgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBkZXBoYWxsLmFwcGx5KCB6ZWxmKCB0aGlzICksIHJhemUoIGFyZ3VtZW50cyApIClbIDAgXTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVwaGVyO1xyXG4iXX0=
//# sourceMappingURL=depher.support.js.map
