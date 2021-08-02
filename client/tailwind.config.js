module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
    extend: {
      backgroundImage: theme => ({
        'poker-image': "url('./assets/images/poker-image.jpg')"
      })
    },
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [],
}
