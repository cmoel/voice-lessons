var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", path.resolve(__dirname, "src/index.js")],
  },
  target: "electron",
  resolve: {
    extensions: ["", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "errors-only",
    publicPath: "http://localhost:8080/dist/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"]},

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,   loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=image/svg+xml" },

      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
