module.exports = {
  mode: 'jit',
  content: ['index.html', './src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffb700',
        'background-color': 'black',
        'secondary-color': 'rgba(124, 123, 123, 0.26)',
        'secondary-color-strong': 'rgba(124, 123, 123, 0.8)',
        'text-color': 'rgb(248, 244, 232)',
      },
      spacing: {
        'spacing-xxs': '0.25em',
        'spacing-xs': '0.5em',
        'spacing-sm': '0.75em',
        'spacing-md': '1em',
        'spacing-lg': '1.25em',
        'spacing-xl': '1.75em',
        'spacing-xxl': '2.5em',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      typography: {
        'font-size-xxs': '0.6em',
        'font-size-xs': '0.75em',
        'font-size-sm': '0.875em',
        'font-size-md': '1em',
        'font-size-lg': '1.25em',
        'font-size-xl': '1.5em',
        'font-size-xxl': '2em',
      },
    },
  },
  plugins: [],
};
