import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: 'default'
        }),
        postcssPresetEnv({ stage: 1 })
      ]
    }
  }
});
