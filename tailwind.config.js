// tailwind.config.js
module.exports = {

  purge: {
    enabled: true,
    content: ["./public/*.html", "./public/poemario/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
