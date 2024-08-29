/*
- comment rootDir setting. webpack will handle that
- create webpack.config.js
- content:
    const path = require('path')
    module.exports = {
        entry:'./array.js'
        output:{
            filename: 'bundle.js'
            path: path.require(__dirname, 'dist')
        }
    }
- remove all .js from the imports so that webpack looks for .ts file
*/
