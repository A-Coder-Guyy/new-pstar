/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans",
      },
      backgroundImage: {
        hero: "url('../images/hero.jpg')",
        education: "url('../images/edu.jpg')",
        wedding: "url('../images/wedding.jpg')",
      },
    },
  },
  plugins: [],
};
