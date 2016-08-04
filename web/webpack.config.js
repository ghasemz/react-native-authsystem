var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
var nodeModulesPath = path.join(__dirname, 'node_modules');

var nodeExternals = require('webpack-node-externals');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = [{
    entry: ['./src/client.jsx'],
    devtool: 'source-map',
    resolve: {
        alias: {
            modules: path.resolve(__dirname, 'src/modules')
        },
        extensions: ['', '.js', '.jsx', '.coffee'],
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]

    },
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: PROD ? 'bundle.min.js' : 'bundle.js',
        libraryTarget: "umd",
        publicPath: "/"
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['transform-object-rest-spread', 'transform-object-assign']
            }
        }, {
            test: /\.tsx?$/,
            loader: 'babel?cacheDirectory,plugins[]=' + require.resolve(path.join(nodeModulesPath, 'babel-plugin-transform-object-rest-spread')) +
            ',presets[]=' + require.resolve(path.join(nodeModulesPath, 'babel-preset-es2015-loose')) +
            '!ts-loader?configFileName=tsconfig.webpack.json',
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/
        }, {
            test: /\.jade$/,
            loader: 'jade'
        }, {
            test: /\.png$/,
            loader: "file-loader",
            query: {mimetype: "image/png"}
        }, {
            test: /\.jpg$/,
            loader: "file-loader",
            query: {mimetype: "image/jpeg"}
        }, {
            test: /\.gif$/,
            loader: "url-loader?prefix=img/&mimetype=image/gif"
        },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
                    'postcss',
                    'sass'
                ]
            }, {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports?jQuery=jquery'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new HtmlWebpackPlugin({
            template: './src/index.jade'
        }), new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ] : [
        new HtmlWebpackPlugin({
            template: './src/index.jade'
        }), new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]

}, {
    name: 'Server code is registered',
    entry: './src/api.jsx',
    devtool: 'source-map',
    externals: [nodeExternals()],
    output: {
        filename: './dist/server.js'
    },
    target: 'node',
    module: {
        loaders: [{
            test: /\.less$/,
            loader: "style!css!less",
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['transform-object-rest-spread', 'transform-object-assign']
            }
        }, {
            test: /\.coffee$/, loader: "coffee",
            exclude: /node_modules/
        }, {
            test: /\.(coffee\.md|litcoffee)$/, loader: "coffee?literate",
            exclude: /node_modules/
        }]
    }
}];

/*,plugins: [
 new webpack.optimize.UglifyJsPlugin({
 compress: { warnings: false }
 })
 ]*/