/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/elements/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
};
module.exports = config;