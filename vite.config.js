import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    //host: '192.168.x.x',  // Replace with your actual local IP
    //port: 5173,
    strictPort: true
  }
})
