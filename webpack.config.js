/*eslint-env node */
'use strict';
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './public/_js/application.js'],
    output: {
        path: __dirname,
        filename: './public/build/application.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude:/node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0']
                }
            }
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
