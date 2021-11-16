const {resolve} = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const src = resolve(__dirname, 'src')

module.exports = {
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
  // context: resolve(__dirname, 'src/page'),
  entry: resolve(src, 'pages/main', 'main.ts'),
  resolve: {
    alias: {
      '@atoms': resolve(src, 'components/atoms/'),
      '@molecules': resolve(src, 'components/molecules/'),
      '@organisms': resolve(src, 'components/organisms/'),
      '@sections': resolve(src, 'components/sections/'),

      '@icons': resolve(src, 'assets/icons/'),
      '@images': resolve(src, 'assets/images'),
      '@fonts': resolve(src, 'assets/fonts'),

      '@scss-utils': resolve(src, 'scss/utils'),
      '@scss-vars': resolve(src, 'scss/variables'),
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
      template: resolve(src, 'pages/main', 'main.pug'),
      minify: false,
    }),
    new MiniCSSExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'simple-pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|jpg|png|webp)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2)$/,
        type: 'asset/resource'
      }
    ],
  },
}