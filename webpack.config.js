const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlTemplateConatent = (module.exports = {
  mode: "development",
  entry: {
    root: "./src/root.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackDeployPlugin({
      useHash: true,
      assets: {
        copy: [{ from: "./assets", to: "" }],
        links: ["base.css"],
      },
    }),
    new HtmlWebpackPlugin({
      title: "Flux • TodoMVC • Development",
      inject: false,
      templateContent: require("./htmlTemplateContent"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
});
