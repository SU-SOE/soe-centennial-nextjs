/**
 * Centennial custom base styles extending Decanter 7 base
 */

module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      html: {
        color: '#544948', // Stone Dark
      },
      body: {
        fontSize: '1.6rem',
        color: '#544948',

        '@screen md': {
          fontSize: '1.9rem',
        },
        '@screen lg': {
          fontSize: '2.1rem',
        },
      },
      a: {
        color: config('theme.colors.digital-red.DEFAULT'),
        transition: 'color 0.25s ease-in-out',

        '&:hover, &:focus': {
          color: config('theme.colors.archway.light'),
          cursor: 'pointer',
        },
      },
      figcaption: {
        fontSize: 'max(1.5rem, 0.81em)',
      },
    });
  };
};
