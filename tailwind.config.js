/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        cyan:'#FF115D',
        gold:'#ffd700',
        bott:'#252525',
        border:'#121212',
        card:'#262626',
        cardbord:'#4f4f4f',
        bidtxt:'#8f8f8f',
        text:'#959595',
      },
      boxShadow: {
        sh: '0 35px 60px -15px rgba(255, 215, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

