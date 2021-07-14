const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');
const webpack = require('webpack');

const basePath = __dirname;
const distPath = 'dist';

const indextInput = './public/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  externals: [ 'foundation-sites' ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9000,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: 'bundle-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css/,
        use: [
          MiniCSSExtract.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCSSExtract.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', 
            options: { 
              sourceMap: true,
              sassOptions: {includePaths: ['./node_modules/foundation-sites/scss']}},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images/',
              // publicPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
    new MiniCSSExtract({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = webpackInitConfig;