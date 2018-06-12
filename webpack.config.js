const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/bootstrapper.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
      new CopyWebpackPlugin([
          {
              from: './src/index.html',
              to: './index.html',
              toType: 'file'
          },
          {
              from: './src/styles/style.css',
              to: './style.css',
              toType: 'file'
          },
          {
            from: 'src/img',
            to: 'img'
          }
      ])
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  }
};