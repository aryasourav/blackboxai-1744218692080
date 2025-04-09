module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d6efd',
          dark: '#0b5ed7'
        },
        accent: {
          green: '#20c997',
          purple: '#6f42c1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
