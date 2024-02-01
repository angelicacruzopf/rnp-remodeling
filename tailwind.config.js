/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('./img/banner-mobile.png')",
        'hero-desktop': "url('./img/banner-desktop.png')",
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        primary: "#FE860E",
        secondary: "#FF4F79",
        third: "#EF304F",
        fourth: "#D62744",
        fifth: "#FAC450",

        darkGray: "#191A1B",
        mediumGray: "#292D32",
        neutralGray: "#666666",
        lightGray: "#D2D2D2",
        grayWhite: "#F0F0F0",
        navGray: "#797C94",
      },
      height:{
        '100': '26rem',
        '120': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}