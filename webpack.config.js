var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');


module.exports = {
    resolve: {
        root: [
            '/usr/lib/node_modules',
        ]
    },
    context: path.join(__dirname, 'frontend'),
    entry: {
        'main': './js/main.bundle.js'
    },
    resolveLoader: {
        root: '/usr/lib/node_modules'
    },
    output: {
        path: './static',
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.(eot|woff|woff2|ttf|otf)$/,
                loader: 'file?name=static/fonts/[name].[ext]'
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'file?name=static/assets/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style', 'css!stylus?paths[]=frontend&include css&resolve url'),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
};
