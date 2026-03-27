module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3B82F6',
          DEFAULT: '#1D4ED8',
          dark: '#1E40AF',
        },
      },
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
};