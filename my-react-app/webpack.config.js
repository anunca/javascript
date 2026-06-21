const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  target: 'web',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    server: 'spdy',
    compress: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /^react/
        ],
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx', // Use 'jsx' for JSX files
          target: 'es2015' // Optionally set target to 'es20XX' based on your needs
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your index.html template
      filename: 'index.html', // Output filename
      inject: 'body', // Inject the <script> tag in the body
    }),
  ],
};

module.exports = (env, argv) => {
  console.log(argv);
  // console.log(env);
  if (argv.watch === true) {
    config.mode = 'development';
  }
  if (argv.mode === undefined) {
    config.mode = 'development';
  }
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  return config;
};
