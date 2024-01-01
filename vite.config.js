// vite.config.js
import { resolve } from 'path';

export default {
  build: {
    minify: false,
    outDir: '../dist',
    rollupOptions: {
      input: {
        base: resolve(__dirname, 'base.html'),
        landing: resolve(__dirname, 'landing.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),
        success: resolve(__dirname, 'success.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        ml: resolve(__dirname, 'ml.html'),
      },
    }
  }
}