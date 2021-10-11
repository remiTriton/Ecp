import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        }
    }
});