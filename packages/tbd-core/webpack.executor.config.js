const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
    target: 'node',
    entry: {
        main: './src/executor/main.ts'
    },
    module: {
        rules: [
            { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        [
                            '@babel/preset-env',
                            { targets: 'maintained node versions' }
                        ],
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        ['@babel/plugin-proposal-class-properties', { loose: true }]
                    ]
                }
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            reportFiles: ['src/main/**/*']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
});
