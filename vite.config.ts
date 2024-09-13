import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080, // Replace with your desired port number
  },
  plugins: [vue(),tailwindcss(),VueRouter()],
})
