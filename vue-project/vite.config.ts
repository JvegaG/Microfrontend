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
    define: {
        '__VUE_OPTIONS_API__': true,
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
    },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        port: 4203
    }
})
