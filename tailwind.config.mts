export default {
  mode: 'jit',
  content: ['index.html', './src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffb700',
        'background-color': 'black',
        'text-color': 'rgba(249, 249, 249, 067)',
        'secondary-color-light': 'rgba(124, 123, 123, 0.26)',
        'secondary-color-normal': 'rgba(124, 123, 123, 0.4)',
        'secondary-color-strong': 'rgba(124, 123, 123, 0.8)',
      },
      fontFamily: {
        luckiest: ['Luckiest guy', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
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
