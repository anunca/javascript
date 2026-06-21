const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'index.bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
},  
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [   
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    port: 80,
    hot: true
  },
}
