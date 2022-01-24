import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
      // '@': path.resolve(__dirname, './src')
    }
  },
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'project.html')
      },
    },
  }
})
