/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0 1px 0 0 #ffffff4d',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
