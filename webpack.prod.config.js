
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
   },
  plugins: [
    // 请确保引入这个插件
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
}