import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // For root deployment on Netlify
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'framer-motion'],  // Corrected syntax
  },
});
