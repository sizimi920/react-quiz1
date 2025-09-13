import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
    return {
        server: {
            open: "/"
        },
        base: command === "build" ? "/quiz/" : "/", // build時だけ /quiz/
        plugins: [react()],
    }
})
