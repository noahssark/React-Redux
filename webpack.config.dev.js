const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "cheap-module-source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                development: process.env.BABEL_ENV === "development",
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
     path: __dirname + "/public",
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 8080,
    devMiddleware: {
      publicPath: "https://localhost:4000/dist/",
    },
    hot: "only",
  },
};
