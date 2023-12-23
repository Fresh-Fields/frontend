// vite.config.js
import { resolve } from 'path';

export default {
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        base: resolve(__dirname, 'base.html'),
        landing: resolve(__dirname, 'LandingPage_New.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        ml: resolve(__dirname, 'ml.html'),
      },
    }
  }
}