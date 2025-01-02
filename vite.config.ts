import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        serviceWorker: './src/service-worker.ts',
      },
      output: {
        dir: 'dist',
      },
    },
  },
});
