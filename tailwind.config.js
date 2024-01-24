/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Outfit"],
        young: "'Young Serif', serif",
      },
      colors: {
        sectionTitle: "#854632",
        text: "#5f574e",
      },
    },
  },
  plugins: [],
};
