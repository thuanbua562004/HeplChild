import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Đảm bảo rằng Vite sử dụng đúng cấu hình PostCSS
  }
})
