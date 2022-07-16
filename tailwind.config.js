module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  mode: 'jit',
  important: true,
  theme: {
    extend: {
      colors: {
        getahead: {
          'dark-grey': '#333333',
          'light-grey': '#F8F9FB',
          'mid-grey-0': '#525252',
          'mid-grey-1': '#666666',
          'mid-grey-2': '#959595',
          'gray-30': '#E5E7EB',
          'gray-40': '#EAEAEA',
          'gray-50': '#F5F5F5',
          'gray-60': '#F2F2F2',
          'gray-80': '#959595',
          'red-90': '#ff1744',
          bordered: '#C4C4C4',
          'light-bordered': '#D4D4D4',
          primary: '#64B7FB',
          'dark-blue': '#385682',
          'darker-blue': '#0078C1',
          'light-blue': '#5297FF',
          'primary-blue': '#466DF8',
          'secondary-blue': '#00D1FF',
          'lighter-dark-blue': '#3E4C66'
        }
      },
      fontFamily: {
        futura: ['FuturaStd'],
        'futura-bold': ['FuturaStdBold'],
        lato: ['Lato'],
        'dm-sans': ['DM Sans'],
        poppins: ['Poppins']
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
