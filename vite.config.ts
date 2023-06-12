import ReactPlugin from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG,
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13'
  },
  clearScreen: false,
  envPrefix: ['TAURI_', 'VITE_'],
  plugins: [
    ReactPlugin()
  ],
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`
    }
  },
  server: {
    strictPort: true
  }
})
