import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'vue-project',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './App': './src/App.vue',
            },
            shared: ['vue']
        })
    ],
    build: {
        target: 'esnext',
        minify: false,
    },
    server: {
        port: 4203
    }
})
