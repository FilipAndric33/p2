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
        'gradient-light': 'rgba(194, 194, 163, 0.3)',
        'gradient-normal': 'rgba(0, 5, 10, 0.5)',
        'gradient-dark': 'rgba(0, 5, 10, 0.65)',
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
      boxShadow: {
        'form-white': '6px 6px 8px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
