import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'react_project',
            filename: 'remoteEntry.js',
            // Module to epose
            exposes: {
                './App': './src/App',
            },
            shared: ['react', 'react-dom']
        }),
    ],
    build: {
        target: 'esnext',
        minify: false,
    },
    server: {
        port: 4200
    }
})
