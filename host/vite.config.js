import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { join } from "path";

const jsxRuntimePath = join(__dirname, "node_modules", "react", "jsx-runtime.js");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
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
