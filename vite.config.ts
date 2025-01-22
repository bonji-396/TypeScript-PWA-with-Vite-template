import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      ignored: [],
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
  plugins: [
    VitePWA({
      srcDir: 'src',
      filename: 'service-worker.ts',
      strategies: 'injectManifest', // Service Worker を手動で管理
      manifest: false, // PWA マニフェストを無効化
    }),
  ],
});
