import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { vitePluginForArco } from '@arco-plugins/vite-react'
import { virtualized } from 'vite-plugin-react-virtualized';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

const analyze = process.env.ANALYZE;

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
      tsconfigPaths(),
      virtualized(),
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
  }
})
