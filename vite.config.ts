import { URL } from 'node:url';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin } from 'vite-plugin-html'

const analyze = process.env.ANALYZE;
const isProd = process.env.NODE_ENV === 'production';

const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`
function reactVirtualized(): PluginOption {
  return {
    name: 'flat:react-virtualized',
    configResolved: async () => {
      const require = createRequire(import.meta.url)
      const reactVirtualizedPath = require.resolve('react-virtualized')
      const { pathname: reactVirtualizedFilePath } = new URL(reactVirtualizedPath, import.meta.url)
      const file = reactVirtualizedFilePath
        .replace(
          join('dist', 'commonjs', 'index.js'),
          join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js'),
        )
      const code = readFileSync(file, 'utf-8')
      const modified = code.replace(WRONG_CODE, '')
      writeFileSync(file, modified)
    },
  }
}

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
    analyze && visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      open: true,
    }),
    tsconfigPaths(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Vite React Starter'
        }
      }
    }),
    reactVirtualized(),
  ],
  esbuild: {
    drop: ["console", "debugger"],
  },
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
