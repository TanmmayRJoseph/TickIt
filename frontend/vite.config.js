import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'mui': resolve(__dirname, 'node_modules/@mui/material'),
      'mui-icons': resolve(__dirname, 'node_modules/@mui/icons-material'),
    },
  },
});
