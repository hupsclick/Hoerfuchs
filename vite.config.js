// vite.config.js
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'   ← falls du React nutzt, sonst auskommentieren

export default defineConfig({
  // base: './',           // sehr wichtig für Electron! (relative Pfade)
  base: './',

  build: {
    outDir: 'dist',       // explizit festlegen (sollte eh Standard sein)
    emptyOutDir: true,    // räumt alten dist-Ordner vorher auf
  },

  // plugins: [react()],    ← falls React
})