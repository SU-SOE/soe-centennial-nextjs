/**
 * Centennial specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.overview': {
        ...theme('decanter.typography.type1'),
        lineHeight: theme('lineHeight.cozy'),
        fontWeight: theme('fontWeight.normal'),
      },
      '.soe-caption': {
        fontSize: 'max(1.5rem, 0.81em)',
      },
      '.soe-card': {
        fontSize: '0.93em',
        lineHeight: theme('lineHeight.snug'),
      },
      '.soe-changemaker': {
        fontSize: '1.5rem',
        lineHeight: theme('lineHeight.snug'),
        '@screen 3xl': {
          fontSize: '1.6rem',
          lineHeight: theme('lineHeight.cozy'),
        },
      },
      '.soe-intro-text': {
        ...theme('decanter.typography.type2'),
        lineHeight: theme('lineHeight.cozy'),
      },
      // Custom fluid type for homepage hero
      // Slightly smaller than fluid-type-9 so we can fit each line on a 360px viewport
      '.soe-splash': {
        fontSize: 'clamp(5.8rem, 8.95vw + 2.58rem, 16rem)',
      },
      '.hero': {
        fontSize: 'clamp(4.5rem, 7.01vw + 1.98rem, 16rem)',
      },
      '.soe-quote-lg': {
        ...theme('decanter.typography.type3'),
        lineHeight: theme('lineHeight.display'),
      },
      '.soe-quote-md': {
        ...theme('decanter.typography.type2'),
        lineHeight: theme('lineHeight.display'),
      },
      '.soe-quote-sm': {
        ...theme('decanter.typography.type0'),
        lineHeight: theme('lineHeight.display'),
      },
    };

    addComponents(components);
  };
};
