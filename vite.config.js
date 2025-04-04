import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.PORT_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "/how-to-work-with-paid-events"
});