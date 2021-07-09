// tailwind.config.js
module.exports = {
  purge: ["./public/*.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
