import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@lib', replacement: '/src/lib' }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pretendard: ['src/lib/foundation/Typography/FontFamily/Pretendard/css/pretendard.css'],
          roboto: ['src/lib/foundation/Typography/FontFamily/Roboto/css/roboto/roboto-fontface.css'],
          font: ['src/lib/foundation/Typography/FontFamily/font.css'],
        },
      },
    },
    assetsInlineLimit: 0,
  },
  define: {
    'import.meta.env.VITE_SERVER_URL': JSON.stringify(
      process.env.VITE_SERVER_URL || 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app',
    ),
  },
});
