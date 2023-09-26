const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  devtool: 'source-map',
  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['build'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults, ie 11', // Целевые браузеры включают IE 11 и стандартные браузеры
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Замените 'style-loader' на MiniCssExtractPlugin.loader
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets/img', '[name].[contenthash][ext]'),
        },
        use: [
          {
            loader: 'image-webpack-loader', // Добавляем ImageWebpackLoader для минимизации JavaScript
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets/icons', '[name].[contenthash][ext]'),
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()], // Добавляем TerserPlugin для минимизации JavaScript
  },
};
