var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		function1: './functions/function1/index.js',
		function2: './functions/function2/index.js'
	},
	target:'node',
	//  plugin: [
	//   new webpack.DefinePlugin({
	//     '__DEV__': true
	//   }),
	//   new webpack.HotModuleReplacementPlugin(),
	// ]
	// we use webpack-node-externals to excludes all node deps.
	// You can manually set the externals too.
	externals: [nodeExternals(), 'aws-sdk'],
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			include: __dirname,
			exclude: /node_modules/,
		},
		{
			enforce:'pre',
			test: /\.js$/,
			loader: 'eslint-loader',
			include: __dirname,
			exclude: /node_modules/,
			options:{
				fix:true
			}
		}
		]
	}
};
