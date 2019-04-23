"use strict";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const config = require("./config");
const _ = require("./utils");

module.exports = {
    entry: {
        client: "./client/index.js"
    },
    output: {
        path: _.outputPath,
        filename: "[name].js",
        publicPath: config.publicPath,
        // Point sourcemap entries to original disk location
        //
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath)
        // Add /* filename */ comments to generated require()s in the output.
        // sourceMapFilename: "bundle.js.map",
        // pathinfo: true
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false
    },
    resolve: {
        extensions: [".js", ".vue", ".css", ".json"],
        alias: {
            "@": path.join(__dirname, "../client")
        },
        modules: [
            _.cwd("node_modules"),
            // this meanse you can get rid of dot hell
            // for example import 'components/Foo' instead of import '../../components/Foo'
            _.cwd("client")
        ]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loaders: ["vue-loader"]
            },
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: function(modulePath) {
                    return /node_modules/.test(modulePath) &&
                        !/node_modules\/vue-particles/.test(modulePath);
                }
            },
            {
                test: /\.es6$/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                loader: "file-loader",
                query: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            },
            {
                test: /\.svg$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            CanvasJS: "CanvasJS",
            Popper: ["popper.js", "default"]
        }),
        new HtmlWebpackPlugin({
            title: config.title,
            meta: {
                viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                "theme-color": "#4285f4"
                // Will generate: <meta name="theme-color" content="#4285f4">
            },
            template: path.resolve(__dirname, "index.html"),
            filename: _.outputIndexPath,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new webpack.LoaderOptionsPlugin(_.loadersOptions()),
        new CopyWebpackPlugin([
            {
                from: _.cwd("./static"),
                // to the root of dist path
                to: "./"
            }
        ])
    ],
    target: _.target
};
