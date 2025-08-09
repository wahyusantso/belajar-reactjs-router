import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3001,
    watch: {
      usePolling: true,
      interval: 100, // lebih responsif di Docker Windows
    }
  }
})
