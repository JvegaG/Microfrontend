import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        react(),
        federation({
            name: 'mainproject',
            remotes: {
                react_project: 'http://localhost:4173/assets/remoteEntry.js',
                svelte_project: 'http://localhost:4174/assets/remoteEntry.js',
                vue_project: 'http://localhost:4175/assets/remoteEntry.js',
            },
            shared: ['react', 'react-dom']
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})
