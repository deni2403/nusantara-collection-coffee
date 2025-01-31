/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/Hero.jpg')",
        'hero-image-sm': "url('/images/Hero-sm.jpg')",
      },
      fontFamily: {
        bv: ['Baskervville', 'serif'],
        ps: ['El Messiri', 'sans-serif'],
      },
      colors: {
        'yellow-pastel': '#da9458',
        'cstm-brown': '#371406',
        'soft-brown': '#ecd6d0',
        'auth-green': '#043427',
      },
    },
  },
  plugins: [],
};
