import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/postcss'

// NOTE: tailwind would not work without this file
// the '@tailwindcss/vite' plugin did not work on its own in the vite.config.js file.

export default {
  plugins: [tailwindcss, autoprefixer],
}
