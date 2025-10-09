import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: '/react-quiz/',
  },
  base: '/react-quiz/', // GitHub Pages用の設定
  plugins: [react()],
});
