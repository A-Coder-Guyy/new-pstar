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
        'hero-wave': "url('../images/wave.svg')",
      },
    },
  },
  plugins: [],
};
