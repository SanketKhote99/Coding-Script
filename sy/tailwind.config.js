// const colors = require('tailwindcss/colors')  
module.exports = {
  content: [
    './index.html',
  ],
  
  theme: {
    extend: {
      colors:{
        'body':'#17171F',
        'selected-text':'#A3A3FF',
        'theme':'#3F3FFF',
        'nav':'#404053',
        'secondary':'#9191A4',
        'badge':'#3F3F51',
        'input-border':'#565666',
        'input':'#2A2A35'
      },
      fontFamaily:{
        'poppins':["'Poppins'",'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
  ],
}
