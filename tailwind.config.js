/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        Deep_Red:'#AD343E',  // for background color
        Dark_Olive:'#2C2F24', // for title color
        Light_Olive:'Light Olive', // gray  for some background like home
        white_yellow:'#DBDFD0', // like white background

      },
      screens: {
        'xl2': '1400px',  // Définir un point de rupture personnalisé
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

