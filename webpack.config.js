const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');
const fs = require('fs');


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
      template: 'public/index.html',
      templateParameters: {
        header: fs.readFileSync(path.resolve(__dirname, './src/template/header.html'), 'utf8'),
        firstScreen: fs.readFileSync(path.resolve(__dirname, './src/template/first-screen.html'), 'utf8'),
        startQuiz: fs.readFileSync(path.resolve(__dirname, './src/template/start-quiz.html'), 'utf8'),
        calculator: fs.readFileSync(path.resolve(__dirname, './src/template/calculator.html'), 'utf8'),
        question: fs.readFileSync(path.resolve(__dirname, './src/template/question.html'), 'utf8'),
        result: fs.readFileSync(path.resolve(__dirname, './src/template/result.html'), 'utf8'),
        product: fs.readFileSync(path.resolve(__dirname, './src/template/product.html'), 'utf8'),
        footer: fs.readFileSync(path.resolve(__dirname, './src/template/footer.html'), 'utf8'),
      },
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
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader", // добавляет css в CommonJS
          "sass-loader", // sass в css
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets/img', '[name].[contenthash][ext]'),
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets/icons', '[name].[contenthash][ext]'),
        },
      },
    ]
  }
};
