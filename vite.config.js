import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: '/',
  },
  base: '/', // Vercel用の設定（ルートパス）
  plugins: [react()],
});
