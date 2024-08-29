/*
- setting: "sourceMap": true
- package.json, inside 'scripts', under "test": add "build": "webpack". under 'build', add 'start':'webpack serve'
- run npm start instead of npm run dev
- webpack needs file inside public folder. modify the webpack config
- in development mode, file is generated inside memory
- for production mode, create a new config file. name can be anything 
- package.json : inside 'scripts', expand "build" with --config webpack.config.prod.js 
- content (dev):
    const path = require('path')
    module.exports = {
        mode: 'development'
        entry:'./array.js',
        output:{
            filename: 'bundle.js',
            path: path.require(__dirname, 'dist'),
            publicPath: '/dist/'
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {test: /\.ts$/, use: 'ts-loader', excludes: /node_modules/}
            ]
        },
        devServer:{
            static:{
               directory: path.resolve(__dirname, './')
            }
        },
        resolve: {extensions:['.ts', '.js']}
    }
- content (prod):
    const path = require('path')
    const CleanPlugin = require('clean-webpack-plugin')
    module.exports = {
        mode: 'production'
        entry:'./array.js',
        output:{
            filename: 'bundle.js',
            path: path.require(__dirname, 'dist'),
        },
        module: {
            rules: [
                {test: /\.ts$/, use: 'ts-loader', excludes: /node_modules/}
            ]
        },
        devServer:{
            static:{
               directory: path.resolve(__dirname, './')
            }
        },
        resolve: {extensions:['.ts', '.js']},
        plugins: [
            new CleanPlugin.CleanWebpackPlugin()
        ]
    }
*/
