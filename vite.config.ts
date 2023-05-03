import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'

import { defineConfig } from 'vite'
import { resolve } from 'path'
import {
  fileURLToPath, URL
} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  build: {
    target: 'es2015',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueBartender',
      fileName: 'VueBartender',
      formats: [
        'es',
      ],
    },
    rollupOptions: {
      external: [
        'vue',
        '@fokke-/bartender.js',
      ],
    },
  },
  plugins: [
    eslint({ fix: false }),
    vue(),
    dts({
      skipDiagnostics: false,
      copyDtsFiles: true,
    }),
  ],
})
