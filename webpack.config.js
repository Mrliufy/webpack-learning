const path = require('path');


module.exports = {
    entry:{
        path: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
}