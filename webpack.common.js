const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"public"),
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({template: "./src/is.html"})
    ],
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/,
                type: 'asset/resource'
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['@babel/preset-env']}
                }
            }
        ]
    }

};
