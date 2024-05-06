import { defineConfig } from 'vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// NOTE: renamed to .mts -> https://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    target: browserslistToEsbuild(), // it will look for your browserslist config in either package.json or the .browserslistrc.
  },
})
