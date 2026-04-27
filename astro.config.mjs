import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  integrations: [], // Aquí van tus otras integraciones si tenés
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Software Escolar Cole...',
          short_name: 'EscolarApp',
          description: 'Gestión de asistencia y notas offline para docentes',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png', // Deberás crear estos iconos en /public
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          // Esto asegura que todos tus archivos .astro y assets se guarden en caché
          globPatterns: ['**/*.{js,css,html,ico,png,svg}']
        }
      })
    ]
  }
});