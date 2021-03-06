'use strict'

require('dotenv').config()
const production = process.env.NODE_ENV === 'production'

const { DefinePlugin, EnvironmentPlugin } = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let plugins = [
	new EnvironmentPlugin(['NODE_ENV']),
	new ExtractPlugin('bundle-[hash].css'),
	new HTMLPlugin({ template: `${__dirname}/src/index.html` }),
	new CopyWebpackPlugin([{ from: './assets', to: '../build/assets' }]),
	new DefinePlugin({
		__NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
		__DEBUG__: JSON.stringify(!production)
	})
]

if (production)
	plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()])

module.exports = {
	mode: process.env.NODE_ENV,
	plugins,
	entry: ['babel-polyfill', `${__dirname}/src/main.js`],
	devServer: {
		historyApiFallback: true
	},
	devtool: production ? undefined : 'cheap-module-eval-source-map',
	output: {
		path: `${__dirname}/build`,
		filename: 'bundle-[hash].js',
		publicPath: process.env.CDN_URL
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0', 'react']
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_module/,
				loader: ExtractPlugin.extract({
					use: [
						'css-loader',
						'resolve-url-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								includePaths: [`${__dirname}/src/style`]
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.icon.svg$/,
				exclude: /node_module/,
				loader: 'raw-loader'
			},
			{
				test: /\.(woff|woff2|ttf|eot).*/,
				exclude: /node_module/,
				exclude: /\.icon.svg/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'font/[name].[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
				exclude: /node_module/,
				exclude: /\.icon.svg$/,
				use: [
					{
						loader: `file-loader?name=../asset/[name].[ext]!extract-loader!html-loader`,
						options: {
							limit: 60000
						}
					}
				]
			},
			{
				test: /\.(mp3|aac|aiff|wav|flac|m4a|ogg)$/,
				exclude: /node_module/,
				exclude: /\.glyph.svg/,
				use: [
					{
						loader: 'file-loader',
						options: { name: 'audio/[name].[ext]' }
					}
				]
			}
		]
	}
}
