module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 1,
        features: {
          'focus-within-pseudo-class': false,
          'custom-properties': false
        }
      }
    ]
  ]
};

