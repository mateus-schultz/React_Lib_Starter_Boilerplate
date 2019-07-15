const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const packageJs = require('./package.json');

module.exports = {
  output: {
    filename: `${packageJs.name}.min.js`,
    library: packageJs.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      components: path.resolve('./src/components'),
      utils: path.resolve('./src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true,
    })],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
