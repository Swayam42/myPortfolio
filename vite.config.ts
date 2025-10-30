import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure built assets use relative paths to work on GitHub Pages / custom domain
export default defineConfig({
  base: './',
  plugins: [react()],
})
