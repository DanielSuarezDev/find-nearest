/* eslint-disable @typescript-eslint/ban-ts-comment */
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  //@ts-ignore
  test: {
    testFiles: "**/*.test.tsx",
    files: "src/**/*.ts",
    globals: true,
    environment: 'jsdom',
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
