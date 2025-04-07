import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslistToEsbuild from 'browserslist-to-esbuild'
// import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
// NOTE: renamed to .mts -> https://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only

// NOTE: I didnt need to add tailwind here, needed it in the postcss.config.js file
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    target: browserslistToEsbuild(), // it will look for your browserslist config in either package.json or the .browserslistrc.
  },
})
