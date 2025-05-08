import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // Ensures fallback for local dev
  },
  build: {
    outDir: 'dist', // Ensure Vercel is looking for this directory for deployment
  },
});
