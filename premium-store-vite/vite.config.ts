import {defineConfig} from 'vite'
import PugPlugin from 'vite-plugin-pug'

const {resolve} = require('path')

const root = resolve(__dirname, 'src/pages')
const outDir = resolve(__dirname, 'dist')
const src = resolve(__dirname, 'src')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html')
      }
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.scss'],
    alias: {
      '@atoms': resolve(src, 'components/atoms'),
      '@molecules': resolve(src, 'components/molecules'),
      '@organisms': resolve(src, 'components/organisms'),
      '@sections': resolve(src, 'components/sections'),

      '@icons': resolve(src, 'assets/icons'),
      '@images': resolve(src, 'assets/images'),
      '@fonts': resolve(src, 'assets/fonts'),

      '@scss-utils': resolve(src, 'scss/utils'),
      '@scss-vars': resolve(src, 'scss/variables')
    }
  },
  plugins: [PugPlugin({localImports: true})],
  server: {
    open: true
  }
})