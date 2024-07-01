import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        federation({
            name: 'svelte_project',
            filename: 'remoteEntry.js',
            // Module to epose
            exposes: {
                './App': './src/App.svelte',
            },
            shared: ['svelte']
        })
    ],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        port: 4174
    }
})
