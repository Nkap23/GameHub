module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        gray: '2px solid #F9FAFB',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
