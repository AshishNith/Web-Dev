/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        // this way we can add colors and other varibales like font family etc 
        'primary':'blue'
      },
      fontFamily:{
        'ashish-font':['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

