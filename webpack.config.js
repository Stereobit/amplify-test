const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./index.html"),
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: "./index.js",
  mode: "development",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    filename: "[hash].[name].js",
    sourceMapFilename: "[hash].[name].js.map",
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [htmlWebpackPlugin],
};