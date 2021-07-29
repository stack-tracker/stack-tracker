module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'poker-image': "url('./assets/images/poker-image.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
