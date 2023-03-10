/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gochi: ["Gochi Hand", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
        sourceSerif: ["Source Serif Pro", "sans-serif"],
        sourceCode: ["Source Code Pro", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        notoSerif: ["Noto Serif", "sans-serif"],
        notoMono: ["Noto Mono", "sans-serif"],
        robotoMono: ["Roboto Mono", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
}