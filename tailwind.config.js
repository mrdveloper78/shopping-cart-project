/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        productLink: '#1a73e8',
        productLinkHover: '#0b499b',
        shopIcon:'#1a73e8',
        itemsConter:'#0b499b',
        silver:'#C0C0C0',
        cartPrice:'#404040',
        paymentPargraf:'#3d3d3d',
        blueDark:'#1a73e8'
      },
    },
  },
  plugins: [],
}
