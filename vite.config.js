// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// export default defineConfig({
//   server: {
//     host: true,
//     port: 3000
//   },

//   preview: {
//     host: true,
//     port:3000
//   },
  
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       manifest: {
//         name: 'Desbrave Recife',
//         short_name: 'Desbrave',
//         start_url: '/',
//         display: 'standalone',
//         background_color: '#ffffff',
//         theme_color: '#1E88E5',
//         description: 'Descubra pontos turísticos e resgate cupons em Recife!',
//         icons: [
//           {
//             src: '/desbrave-icon-192x192.png',
//             sizes: '192x192',
//             type: 'image/png'
//           },
//           {
//             src: '/desbrave-icon-512x512.png',
//             sizes: '512x512',
//             type: 'image/png'
//           }
//         ]
//       }
//     })
//   ]
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: 3000
  },
  preview: {
    host: true,
    port: 3000
  },
  
  plugins: [
    react()
  ]
})