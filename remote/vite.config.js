import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { join } from "path";

const jsxRuntimePath = join(__dirname, "node_modules", "react", "jsx-runtime.js");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './Counter': './src/components/Counter'
      },
      shared: {
        react: {},
        "react/jsx-runtime": {
          packagePath: jsxRuntimePath,
        },
        "react-dom": {},
      },
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
