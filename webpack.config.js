const webpack = require( "webpack" );

module.exports = {
	"entry": "./depher.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"module": {
		"preLoaders": [
			{
				"test": /\.support\.js$/,
				"loader": "source-map-loader"
			}
		]
	},
	"output": {
		"library": "depher",
		"libraryTarget": "umd",
		"filename": "depher.deploy.js"
	},
	"plugins": [
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new webpack.optimize.UglifyJsPlugin( { "compress": { "warnings": false }, "comments": false, "sourceMap": true } )
	],
	"devtool": "#inline-source-map"
};
