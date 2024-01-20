/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      fontSize: {
        base: '15px',
        title: '22px',
      },
      fontWeight: {
        regular: '400',
        bold: '700'
      },
      lineHeight: {
        title: "27.72px",
        base: "18.9px"
      },
      letterSpacing: {
        regular: "0.188px"
      },
      container: {
        mobile: "375px"
      },
      width: {
        card: "320px",
        title: "288px",
        base: "256px"
      },
      colors: {
        primary: {
          "dark-navy": "#1F314F",
          "grey": "#7D889E"
        },
        secondary: {
          "light-grey": "#D5E1EF",
          white: "#FFFFFF"
        }
      },
      borderRadius: {
        card: "20px",
        code: "10px"
      },
      dropShadow: {
        card: "box-shadow: 0px 25px 25px 0px #0000000C",
        code: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}