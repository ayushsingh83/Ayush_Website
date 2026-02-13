/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        neonCyan: '#00f5ff',
        neonPurple: '#a855f7'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.35)',
        glow: '0 0 30px rgba(56,189,248,0.45)'
      },
      borderRadius: {
        '3xl': '1.5rem'
      },
      transitionTimingFunction: {
        'soft-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.08)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        ringPulse: {
          '0%': { transform: 'scale(1)', opacity: 0.8 },
          '100%': { transform: 'scale(1.7)', opacity: 0 }
        },
        sparkle: {
          '0%': { opacity: 0, transform: 'translateY(0) scale(0.8)' },
          '50%': { opacity: 1, transform: 'translateY(-6px) scale(1)' },
          '100%': { opacity: 0, transform: 'translateY(-12px) scale(0.6)' }
        }
      },
      animation: {
        'pulse-soft': 'pulseSoft 2s infinite',
        float: 'float 3s ease-in-out infinite',
        'ring-pulse': 'ringPulse 2s ease-out infinite',
        sparkle: 'sparkle 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

