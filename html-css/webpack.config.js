const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, 'src/'),
  // entry: './landing.ts',
  entry: './pages/main/main.js',
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
      '@sections': path.resolve(__dirname, 'src/components/sections/'),

      // '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      // '@images': path.resolve(__dirname, 'src/assets/images'),
      // '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      //
      // '@scss-utils': path.resolve(__dirname, 'src/scss/utils'),
      // '@scss-vars': path.resolve(__dirname, 'src/scss/variables'),
    },
  },
  output: {
    filename: 'index.js',
    clean: true,
  },
  devServer: {
    open: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'pages/main/main.pug',
      minify: false,
    }),
    // new MiniCSSExtractPlugin({
    //   filename: 'style.css',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      // {
      //   test: /\.(c|sc)ss$/,
      //   use: [
      //     MiniCSSExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.ts$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.(svg|jpg|png)$/,
      //   type: 'asset/resource',
      // },
      // {
      //   test: /\.(woff2)$/,
      //   type: 'asset/resource'
      // }
    ],
  },
}