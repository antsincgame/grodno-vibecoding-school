import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@vibecoding/shared': path.resolve(__dirname, 'shared/src/index.ts'),
      '@vibecoding/shared/styles': path.resolve(__dirname, 'shared/src/styles/shared.css'),
    },
  },
});
