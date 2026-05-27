import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2F7',
          100: '#D9E4EF',
          200: '#B3C8DF',
          300: '#7EA4C8',
          400: '#4A7FAD',
          500: '#1E5C8F',
          600: '#174B79',
          700: '#0D1B35',
          800: '#0A1628',
          900: '#050D1A',
          950: '#020B18',
        },
        gold: {
          50: '#FBF7F0',
          100: '#F5EDD8',
          200: '#ECD9AF',
          300: '#E2C27E',
          400: '#D4AF7A',
          500: '#C9A96E',
          600: '#B08C50',
          700: '#8A6A38',
          800: '#654D28',
          900: '#4A3620',
        },
        silver: {
          300: '#D4D8E4',
          400: '#B8BCC8',
          500: '#8E95A8',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'ultra': '0.3em',
        'wide-xl': '0.2em',
      },
    },
  },
  plugins: [],
};

export default config;
