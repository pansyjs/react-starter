import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { resolve } from 'node:path';
import { vitePluginForArco } from '@arco-plugins/vite-react'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

const analyze = process.env.ANALYZE;

const root = process.cwd();
const pathResolve = (pathname: string) => resolve(root, '.', pathname);

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/vite-react-starter/' : '/',
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    plugins: [
      react(),
      vitePluginForArco({ }),
      analyze && visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        open: true,
      }) as any,
      Unocss(),
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
    server: {
      port: 8888,
    }
  }
})
