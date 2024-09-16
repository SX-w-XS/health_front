import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:"",
  assetsInclude: ["**/*.png"],
  server: {
    proxy:{
      "/Chronic": {
        target: "",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/Chronic/, "")
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
