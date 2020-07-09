const webpack = require( 'webpack' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

const TerserPlugin = require( 'terser-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' ) ;

const packageJson = require( './package.json' );
const DIST_FOLDER_PATH = 'dist/js';
const path = require( 'path' );

const plugins = [ 
	new BundleAnalyzerPlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),
	// creates a css file per js file which contains css
	new MiniCssExtractPlugin({
		filename: "../css/[name].bundle.css",
		chunkFilename: "../css/[name].bundle.css"
	}),
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
	}),
	new HtmlWebpackPlugin()
];

const modules = {
	rules : [
	// import css files in js files
	{
		test: /\.css$/,
		exclude : /(node_modules|bower_components)/,
		use: [
			MiniCssExtractPlugin.loader,
			"css-loader"
		]
	},
	// import image files in js files
	{
		test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
		use: {
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: ( url, resourcePath, context ) => 
				{
					let outputFolder = "";
					( url.indexOf( 'fontawesome' ) > -1 ) ? outputFolder = '../css/fonts/' : outputFolder = '../imgs/';
					return outputFolder + url;
				}
			}
		}
	}]
};

let config = {
	entry : {
		main : './src/main/webapp/static/js/main.js',
		login : './src/main/webapp/static/js/login.js',
		register: './src/main/webapp/static/js/register.js',
		document: './src/main/webapp/static/js/document.js'
	},
	output: {
		filename : '[name].bundle.js',
		path : path.resolve(__dirname, DIST_FOLDER_PATH)
	},
	devtool: 'inline-source-map',
	module : modules,
	plugins : plugins,
	watch: true,
	optimization: {
		// minimize = false in development mode
		//minimize: true,
		// for minimizing js files
		minimizer: [ 
			/*new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				sourceMap: true,
				parallel: true,
				extractComments: false,
				terserOptions: {
					mangle: true,
					toplevel: true,
					output: {
						comments: false,
					},
				}
			}),*/
			new OptimizeCSSAssetsPlugin({
			})
		],
		// spliting common chunks
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				utilities: {
					test: /[\\/]src[\\/]utilities[\\/]/,
					minSize: 0
				},
				vendor: {
					name: 'vendor',
					chunks: 'all',
					test: /node_modules/,
					priority: 20
				}
			},
			automaticNameDelimiter: '-'
		},
		runtimeChunk: {
			name: 'manifest'
		}
	},
}

module.exports = ( env, argv ) => {
/*	externals: {
		jquery: 'jQuery'
	}*/
	
	if ( argv.mode === 'production' )
	{
		config.devtool = 'source-map';
		config.watch = false;
		config.output.filename = '[name].bundle.js';
	}
	
	console.log( "Webpack Mode: " + argv.mode );
	return config;
};



/*
top: text, bottom: background
1. multiply( darken color -> generate new color ) -> blend if 
	-> reveal underneath layer( Iuillmance => specific value -> highlight ) 
2. copy layer -> screen -> blend if 
	-> reveal underneath layer ( Iuillmance <= specific value -> shadow, texture? )

-> save image as psd file -> desaturaed -> blur -> open image to be blended -> filter -> displacement map -> chosoe desaturaed image

3. blending mode -> multiply -> overlay -> linear burn -> pick a color -> check pillow embss -> displacement map -> choose psd file

*/