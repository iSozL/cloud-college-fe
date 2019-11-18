const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("postcss-aspect-ratio-mini")(),
                require("postcss-px-to-viewport")({
                  viewportWidth: 750,
                  viewportHeight: 1334,
                  unitPrecision: 3,
                  viewportUnit: "vw",
                  selectorBlackList: [".ignore", ".hairlines"],
                  minPixelValue: 1,
                  mediaQuery: false
                }),
                require("postcss-write-svg")(),
                require("postcss-cssnext")(),
                require("postcss-viewport-units")(),
                require("cssnano")({
                  autoprefixer: false,
                  "postcss-zindex": false
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        multihtmlCache:true// 解决多页打包的关键
    })
    // new CleanWebpackPlugin({ template: "./dist" })
  ]
};
