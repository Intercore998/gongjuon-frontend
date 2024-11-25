import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/Pages', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/main.scss";`,
      },
    },
  },

  server: {
    proxy: {
      '/api/*': {
        target: 'https://port-0-test-m1if3ps00e268a84.sel4.cloudtype.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
