const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue
        },
        cta: {
          ...colors.orange
        },
        gray: {
          ...colors.stone
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
