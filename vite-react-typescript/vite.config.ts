import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    // plugins: [react({
    //   jsxRuntime: 'classic',
    // })],
    // plugins: [mode === "development" ? react() : undefined],
    // optimizeDeps: {
    //   exclude: ['react', 'react-dom'],
    //   // exclude: ['react', 'react-dom', 'react/jsx-runtime'],
    // },
    server: {
      host: true,
      port: 3000,
      open: true,
      hmr: {
        overlay: true,
      },
    },
    build: {
      target: ["es2015"],
      rollupOptions: {
        external: ['react', 'react-dom'],
        // external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            // 'react/jsx-runtime': 'react/jsx-runtime',
          },
          // manualChunks: {
          //   vendor: [
          //     'react',
          //     'react-dom',
          //   ],
          // },
        },
      },
      outDir: 'dist',
      sourcemap: isProduction ? false : 'inline',
      minify: isProduction,
      chunkSizeWarningLimit: 1500,
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
    },
  }
})
