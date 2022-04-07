module.exports = {
  //mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/forms') 
   , require('@tailwindcss/aspect-ratio')
   , require('@tailwindcss/line-clamp')
   , require('@tailwindcss/typography')
  ]
};
