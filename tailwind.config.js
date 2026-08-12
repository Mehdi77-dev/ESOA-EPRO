/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        esoa: {
          navy: '#0B2A4A',
          blue: '#1e40af',
          cyan: '#06b6d4',
          orange: '#F97316',
          light: '#f8fafc',
          blueBg: '#eef4ff',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'hero-fade-up': 'heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'hero-fade-right': 'heroFadeRight 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'hero-image-reveal': 'heroImageReveal 1.1s cubic-bezier(0.22,1,0.36,1) 0.2s both',
        'hero-scale-in': 'heroScaleIn 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'hero-bg-shape': 'heroBgShape 1s cubic-bezier(0.22,1,0.36,1) 0.1s both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroFadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        heroImageReveal: {
          '0%': { opacity: '0', clipPath: 'inset(0 0 0 100%)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0 0%)' },
        },
        heroScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heroBgShape: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
