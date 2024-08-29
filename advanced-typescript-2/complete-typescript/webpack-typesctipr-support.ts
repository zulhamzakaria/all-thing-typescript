/*
- setting: "sourceMap": true
- package.json, inside 'scripts', under "test": add "build": "webpack"
- content:
    const path = require('path')
    module.exports = {
        entry:'./array.js',
        output:{
            filename: 'bundle.js'
            path: path.require(__dirname, 'dist')
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {test: /\.ts$/, use: 'ts-loader', excludes: /node_modules/}
            ]
        },
        resolve: {extensions:['.ts', '.js']}
    }

*/
