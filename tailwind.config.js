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
        "gray-back":"#F2F2F2",
        "text-light":"#B3B3B1"
      },
      fontFamily:{
        'Serif':["Bodoni Moda", "serif"],
        'Inter':["Inter", "sans-serif"],
      },
      width:{
        "24":"24%",
        "38":"35%",
        "60":"69%",
        "71":"65%",
        "80":"78%"
      },
    },
  },
  plugins: [],
}