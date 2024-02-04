// vite.config.js
import { resolve } from 'path';

export default {
  build: {
    sourcemap: true,
    outDir: '../dist',
    rollupOptions: {
      input: {
        base: resolve(__dirname, 'base.html'),

        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),

        home: resolve(__dirname, 'HomePage.html'),
        ml: resolve(__dirname, 'MLPage.html'),
        landing: resolve(__dirname, 'LandingPage.html'),
      },
    },
  },
}