import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { checker } from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer'

const analyze = process.env.ANALYZE;

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? '/vite-react-starter/' : '/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    checker({
      typescript: true
    }),
    analyze && visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      open: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  },
})
