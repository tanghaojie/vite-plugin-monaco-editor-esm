import { defineConfig } from 'vite'
import monacoEditorEsmPlugin from '../dist/index'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// console.log(resolve(__dirname, 'src/worker/share.worker'))
export default defineConfig({
  root: 'test',
  // base: 'sub',
  build: {
    minify: false,
  },
  plugins: [
    vue(),
    monacoEditorEsmPlugin({
      publicPath: 'a/monacoeditorwork',
      customWorkers: [
        {
          label: 'graphql',
          entry: 'monaco-graphql/esm/graphql.worker',
        },
        {
          label: 'share',
          entry: resolve(__dirname, 'src/worker/share.worker'),
        },
      ],
    }),
  ],
})
