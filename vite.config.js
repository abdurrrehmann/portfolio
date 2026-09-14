import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',   // critical for GitHub Pages relative paths
  plugins: [
    react(),
    tailwindcss(),
  ],
})