const env = process.env.NODE_ENV || 'development'
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: env,
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true,
      extractComments: false,
    })],
  },
  entry: {
    app: {
      import: ['./src/log.js', './src/main.js'],
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          env !== 'production' ? 'style-loader': MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    http2: true,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/assets/js/',
    compress: true,
    port: 3000,
  }
}
