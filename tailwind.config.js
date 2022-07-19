module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: true,
  mode: 'jit',
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        swivel: {
          primary: '#00796b',
          secondary: '#004c40'
        }
      },
      screens: {
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '1024px' },
        desktop: { min: '1025px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
