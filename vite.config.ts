import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Enable PWA features in development
      },
      manifest: {
        name: 'Your App Name',
        short_name: 'AppName',
        description: 'A description of your app',
        theme_color: '#ffffff', // Set the theme color here
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/header_logo.avif',
            sizes: '192x192',
            type: 'image/avif',
          },
          {
            src: '/header_logo.avif',
            sizes: '512x512',
            type: 'image/avif',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'documents',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
});
