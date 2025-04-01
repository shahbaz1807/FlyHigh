/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'primary': '#4FD1C5',
      },
    },
    fontFamily: {
      k2d: ['K2d', 'serif'],
      worksans: ['Work Sans', 'serif'],
      poppins: ['poppins', 'serif'],
      montserrat: ['Montserrat', 'serif'],
    }
  },
  plugins: [],
}

