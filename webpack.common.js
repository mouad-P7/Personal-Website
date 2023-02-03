const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/js/about.js',
    },
    output: {
        path: path.resolve(__dirname,"public"),
        assetModuleFilename: 'images/[name][ext]',
        clean: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            filename: 'index.html',
        }),
        new htmlWebpackPlugin({
            template: './src/pages/about.html',
            chunks: ['about'],
            filename: 'pages/about.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ["style-loader","css-loader","sass-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/,
                type: 'asset/resource',
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']},
                },
            },
        ],
    },

};
