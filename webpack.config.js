var webpack = require("webpack");

module.exports = {
	entry: {
		app: "./public/app/App.js"
	},
	output: {
		filename:"public/build/bundle.js"
	},
	plugins: [
    	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	],	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
}