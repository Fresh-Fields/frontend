// vite.config.js
import { resolve } from 'path';

export default {
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),

        base: resolve(__dirname, 'base.html'),
        analytics: resolve(__dirname, 'ml.html'),
        landing: resolve(__dirname, 'landing.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        ml: resolve(__dirname, 'ml.html'),
      },
    }
  }
}