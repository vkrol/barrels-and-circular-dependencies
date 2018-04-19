const path = require('path');

module.exports = {
    entry: {
        classes: './classes/some-barrel/index.js',
        functions: './functions/some-barrel/index.js',
    },
    mode: 'development',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};