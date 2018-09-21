const webpack = require('webpack');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
module.exports = {
    entry: './core/index.js',
    output: {
        path: __dirname + '/dist',
        filename: "event.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        port: 3000,
        inline: true,
        hot: true,
    },
    plugins: [
        new OpenBrowserWebpackPlugin({ // 打开浏览器
            url: 'http://localhost:8080'
        })
    ]
}