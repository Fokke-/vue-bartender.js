import eslint from '@nabla/vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueBartender',
      fileName: 'vue-bartender',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@fokke-/bartender.js'],
    },
  },
  plugins: [
    eslint({
      eslintOptions: {
        fix: false,
      },
    }),
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      copyDtsFiles: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
