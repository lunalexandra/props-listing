import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lunalexandra.github.io/props-listing/",
  plugins: [react()],
})
