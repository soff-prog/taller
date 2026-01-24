import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        motos: resolve(__dirname, 'src/pages/motos.html'),
        accesorios: resolve(__dirname, 'src/pages/accesorios.html'),
        servicios: resolve(__dirname, 'src/pages/servicios.html'),
        sobreNosotros: resolve(__dirname, 'src/pages/sobreNosotros.html'),
      }
    }
  }
})
