import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss(),],
  server: {
    host: '0.0.0.0', // Allow access from any device
    port: 5173, // Keep it default or change if needed
  },
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
    },
  },
})
