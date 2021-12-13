const {resolve} = require('path');

// plugins
const HTMLWebpackPlugin = require('html-webpack-plugin'); // plugin for generate html file
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // plugin for output css styles in a separate file

const isDevMode =
  process.argv[process.argv.indexOf('--mode') + 1] === 'development'; // check development mode

const src = resolve(__dirname, 'src'); // save src folder

module.exports = {
  entry: resolve(src, 'page/main.js'), // this is entry point for webpack
  output: {
    // dist folder is the default output directory
    filename: 'index.js', // this is name of output js file after build
    clean: true, // clear the output directory on every build
  },
  stats: 'errors-warnings', // show after run webpack only errors and warnings
  resolve: {
    extensions: ['.ts', '.js'], // array of files extensions for import without extension & working import in .ts files
    alias: {
      '@components': resolve(src, 'components'), // short path to components folder

      '@images': resolve(src, 'assets/images'), // short path to images folder
      '@icons': resolve(src, 'assets/icons'), // short path to icons folder
      '@fonts': resolve(src, 'assets/fonts'), // short path to icons folder

      '@scss-utils': resolve(src, 'scss/utils'), // short path to scss/utils folder
      '@scss-vars': resolve(src, 'scss/variables'), // short path to scss/vars folder
    },
  },
  devtool: isDevMode ? 'eval-source-map' : false, // generate source map only in development mode
  devServer: {
    // dev server in default has been started on port 8080 with live reload
    open: true, // open dev server in default browser
  },
  plugins: [
    new HTMLWebpackPlugin({
      // index.html is default filename
      template: resolve(src, 'page/main.pug'), // template for html
      minify: !isDevMode, // minify output html only in production mode
    }),
    new MiniCSSExtractPlugin({
      filename: 'style.css', // filename for output css file
    }),
  ],
  module: {
    rules: [
      // this is array of loaders (any files apart from .js and .json files)
      {
        test: /\.pug$/,
        loader: 'simple-pug-loader',
        options: {
          basedir: resolve(src, 'components'),
        },
      },
      {
        test: /\.(c|sc)ss$/, // search style files (.css and .scss)
        use: [
          // if development mode then put styles in the <style>
          // if production mode then put styles in a separate file by using mini-css-extract-plugin loader
          isDevMode ? 'style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader', // for transform css styles to js module (processing all @import and url())
          'sass-loader', // transform scss to css styles
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name][ext]'
        }
      },
      {
        test: /\.(jpg|png|webp)$/, // search graphic files
        type: 'asset/resource', // use default webpack resource loader
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2)$/, // search fonts files
        type: 'asset/resource', // use default webpack resource loader
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
    ],
  },
};