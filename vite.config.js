import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dashboard/',
  root: 'source',
  build: {
    outDir: '../dist'
  }
})