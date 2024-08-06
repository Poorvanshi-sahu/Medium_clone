export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#6B6B6B",
        "secondary":"#0179BB",
        "gray-light":"#F9F9F9",
        "texture-1":"#FAEBA0",
        "texture-2":"#FEE34D",
        "texture-3":"#FFA90E",
        "black-900":"#242424",
        "gray-back":"#F2F2F2"
      },
      fontFamily:{
        'serif':["Bodoni Moda", "serif"],
        'Inter':["Inter", "sans-serif"],
      },
      width:{
        "38":"35%",
        "71":"65%"
      }
    },
  },
  plugins: [],
}