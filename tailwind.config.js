/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF1F8',
          100: '#D5DCEE',
          200: '#ABBAD8',
          300: '#8097C2',
          400: '#5675AC',
          500: '#2C5296',
          600: '#1B2F5E',
          700: '#162649',
          800: '#101C35',
          900: '#0B1320',
        },
        brand: {
          green: '#1F7A2C',
          'green-light': '#2E9E3C',
          'green-dark': '#165920',
          blue: '#0D4FA0',
          'blue-light': '#1565C0',
          teal: '#0891B2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(27,47,94,0.08)',
        'card-hover': '0 8px 32px 0 rgba(27,47,94,0.14)',
      },
    },
  },
  plugins: [],
};
