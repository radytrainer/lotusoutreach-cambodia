import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'auto',
      includeAssets: ['/icons/Lotus_1.p'],
      manifest: {
        name: 'Lotus Outreach Cambodia',
        short_name: 'Lotus Outreach',
        description: 'Empowering Cambodian girls through education.',
        theme_color: '#ffffff',
        background_color: '#f0f0f0',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/Lotus_1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/Lotus_2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})