import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inkline from '@inkline/plugin/vite'
import Components from 'unplugin-vue-components/vite'
const inklineConfig = {
  outputDir: 'src/css/variables'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [inkline(inklineConfig), vue(), Components()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
