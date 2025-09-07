import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
     base: '/quiz/',   // 👈 リポジトリ名に合わせる
    plugins: [react()],
})
