const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './src/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        extends: path.join(__dirname, '.babelrc')
                    }
                }
            },
            {
                test: /\.sass$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                }))
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        port: 5000,
        proxy: {
          "/api": {
                target: "http://localhost:3000",
                changeOrigin: true
              }
        }
    },
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin({filename: 'style.css', allChunks: true})
    ]
};