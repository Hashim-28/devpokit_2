/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': '#050816',
        'space-light': '#0a0f28',
        'navy': '#0d1b3e',
        'cyan': {
          DEFAULT: '#00f5ff',
          dark: '#00b8c4',
          glow: 'rgba(0,245,255,0.15)',
        },
        'purple': {
          DEFAULT: '#7b2ff7',
          dark: '#5a1db8',
          glow: 'rgba(123,47,247,0.15)',
        },
        'glass': 'rgba(255,255,255,0.04)',
        'glass-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 80% 50%, rgba(123,47,247,0.15) 0%, rgba(0,245,255,0.05) 50%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'cyan-glow': 'radial-gradient(ellipse at center, rgba(0,245,255,0.2) 0%, transparent 70%)',
        'purple-glow': 'radial-gradient(ellipse at center, rgba(123,47,247,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.5)',
        'glow-cyan': '0 0 40px rgba(0,245,255,0.2), 0 0 80px rgba(0,245,255,0.08)',
        'glow-purple': '0 0 40px rgba(123,47,247,0.2), 0 0 80px rgba(123,47,247,0.08)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
