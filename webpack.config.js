const path = require('path');

module.exports = {
    entry: [path.resolve(__dirname, 'djrhr/frontend/src/index.js')],
    // entry: {main: '/home/toruitas/Documents/GitHub/LollipopAI/django_backend/lollipopAI/frontend/src/index.js'},
    output: {
        // where compiled files go
        path: path.resolve(__dirname, "djrhr/frontend/static/frontend/public/"),

        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: "/static/frontend/public/",
        filename: 'main.js',  // the same one we import in index.html
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx|mjs)?$/,
                // don't look in any node_modules/ or bower_components/ folders
                exclude:  /(node_modules|bower_components)/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
            },
        ],
    },
    devServer: {
        writeToDisk: true,
    }
};

