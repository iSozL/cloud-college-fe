const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  devServer:{
    historyApiFallback: true
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
              ident: 'postcss',
              plugins: (loader) => [
                require("postcss-aspect-ratio-mini")(),
                require("postcss-px-to-viewport")({
                  viewportWidth: 750, // (Number) The width of the viewport.
                  viewportHeight: 1334, // (Number) The height of the viewport.
                  unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
                  viewportUnit: "vw", // (String) Expected units.
                  selectorBlackList: [".ignore", ".hairlines"], // (Array) The selectors to ignore and leave as px.
                  minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                  mediaQuery: false // (Boolean) Allow px to be converted in media queries.
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
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "url-loader"
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ hash: true }),
    // new CleanWebpackPlugin({ template: "./dist" })
  ]
};