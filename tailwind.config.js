/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        signature:["Great Vibes"],
      },
      boxShadow:{
        myshadow1:"4.3px -3px 0 0 rgb(75 85 99 )",
        myshadow2:"-4.3px -3px 0 0 rgb(75 85 99 )",
      }
    },
  },
  plugins: [],
}