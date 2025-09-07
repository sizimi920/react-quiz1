import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
     base: '/react-quiz1/',   // 👈 リポジトリ名に合わせる
    plugins: [react()],
})
