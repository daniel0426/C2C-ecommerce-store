module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      fontFamily:{
        'epilogue': ['epilogue', 'sans-serif']
      },

      colors:{
        'bright-purple': '#ba82ee',
        'dark-purple': '#534ae0',
        'purple-grey': '#8585b0',
        'light-purple': '#a695b4',
        'cream': '#f7f7f6'
      },

      screens: {
        'sm': '250px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
