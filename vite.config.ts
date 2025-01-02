import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  publicDir: 'public', // Service Worker と manifest.json を配置
});