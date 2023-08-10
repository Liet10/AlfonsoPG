import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imagemin({
      // Enable the webp converter and set the quality (0 - 100) for the converted WebP images
      webp: {
        quality: 75,
      },
    }),
  ],
});