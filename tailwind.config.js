/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heroBackgroundColor: 'rgb(249, 244, 241)',
        wygBackgroundColor:'rgb(0,27,102)',
        toolsBackgroundColor1:"rgb(233,171,255)",
        toolsBackgroundColor2:"rgb(205,178,241)",
        toolsBackgroundColor3:"rgb(184,182,231)",
        toolsBackgroundColor4:"rgb(163,187,221)",
        toolsBackgroundColor5:"rgb(225,195,225)",
        toolsBackgroundColor6:"rgb(234,191,190)",
        toolsBackgroundColor7:"rgb(241,188,166)",
        toolsBackgroundColor8:"rgb(244,218,198)",
      },
      spacing: {
        '128': '40rem', 
        '256': '64rem', 
      },
    },
  },
  plugins: [],
}

