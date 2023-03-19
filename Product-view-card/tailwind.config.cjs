/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Fraunces": ["Fraunces", "serif"],
        "Montserrat": ["Montserrat", "sans-serif"]
      },
      colors: {
        "white": "#FFFFFF",
        "deepAquamarine": "#3D8168",
        "deepdeepAquamarine": "#1A4032",
        "saurus": "#6C7289",
        "gunMetal": "#1C232B",
        "cream": "#F2EAE2",
      }, 

      screens: {
        'smx': '400px'
      }
    },
  },
  plugins: [],
}
