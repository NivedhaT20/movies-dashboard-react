import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Always hosted in port 3000 in local
    port: 3000,
  },
  test: {
    environment: 'jsdom', // necessary for DOM testing
    globals: true, // to use test/expect without importing
    setupFiles: './src/test/setup.ts',
  },
})
