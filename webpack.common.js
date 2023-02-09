const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/js/about.js',
    },
    output: {
        path: path.resolve(__dirname,"public"),
        clean: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            filename: 'index.html',
        }),
        new htmlWebpackPlugin({
            template: './src/html/about.html',
            chunks: ['about'],
            filename: 'html/about.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ["style-loader","css-loader","sass-loader"],
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']},
                },
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/,
                type: 'asset/resource',
                generator: {filename: 'images/[name][ext]'},
            },
            {
                test: /\.(mp4|webm|ogg)$/,
                type: 'asset/resource',
                generator: {filename: 'videos/[name][ext]'},
            },
            {
                test: /\.(pdf)$/,
                type: 'asset/resource',
                generator: {filename: 'pdf/[name][ext]'},
            },
        ],
    },

};
