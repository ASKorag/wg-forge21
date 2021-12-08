const {resolve} = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const src = resolve(__dirname, 'src')

module.exports = {
  target: 'web',
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
  // context: resolve(__dirname, 'src/page'),
  entry: resolve(src, 'pages/main', 'main.ts'),
  // entry: resolve(src, 'pages/vehicles/m56-scorpion', 'm56-scorpion.ts'),
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
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    open: true,
    port: 9000,
    hot: true,
    static: resolve(src, 'assets'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(src, 'pages/main', 'main.pug'),
      chunks: ['main'],
      minify: false,
    }),
    new HTMLWebpackPlugin({
      filename: 'vehicles/m56-scorpion.html',
      template: resolve(src, 'pages/vehicles/m56-scorpion', 'm56-scorpion.pug'),
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
        // loader: '@webdiscus/pug-loader',
        options: {
          basedir: resolve(src, 'components'),
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
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'esnext'
        },
        // use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|jpg|png|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      }
    ],
  },
}