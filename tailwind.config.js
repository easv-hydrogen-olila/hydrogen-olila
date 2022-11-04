/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clr_primary: '#9A684B',
        clr_primary_variaton:'#EAB787',
        clr_secondary: '#638990',
        clr_dropdown: '#745044',
        clr_grey_bg:'#E5E5E5',
        clr_navigation: '#596064',
        clr_header_bg: '#F4F4F4',
        clr_font_header: '#59606',
        clr_gold: '#EAB787',
        clr_blue_ocean_grad1: '#295760',
        clr_blue_ocean_grad2: '#638990',
        clr_variant_dropdown: '#F1F1F1'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
