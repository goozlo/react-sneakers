const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const DotenvPlugin = require("dotenv-webpack")

module.exports = {
    context: path.join(__dirname, "src"),
    mode: "development",
    entry: [path.join(__dirname, "src", "index.tsx")],
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png)$/,
                use: "file-loader"
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new DotenvPlugin()
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.join(__dirname, "src/favicon.ico"),
        //             to: path.join(__dirname, "dist")
        //         }
        //     ]
        // })
    ]
}
