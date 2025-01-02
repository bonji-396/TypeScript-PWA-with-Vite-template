import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs/promises';

// Service Worker用のプラグイン
function serviceWorkerPlugin() {
  return {
    name: 'service-worker',
    async writeBundle() {
      try {
        // TypeScriptファイルを読み込み
        const swContent = await fs.readFile('src/service-worker.ts', 'utf-8');
        
        // publicディレクトリにコピー
        await fs.writeFile('public/service-worker.js', swContent);
        
        console.log('Service Worker has been copied to public directory');
      } catch (error) {
        console.error('Error processing service worker:', error);
      }
    }
  };
}

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [serviceWorkerPlugin()]
});