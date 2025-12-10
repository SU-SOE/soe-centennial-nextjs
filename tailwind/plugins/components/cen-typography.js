/**
 * Centennial specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.overview': {
        ...theme('decanter.typography.type1'),
        lineHeight: '1.9em',
        fontWeight: theme('fontWeight.normal'),
      },
      '.cen-big-paragraph': {
        ...theme('decanter.typography.type0'),
        lineHeight: theme('lineHeight.cozy'),
        '@screen md': {
          lineHeight: theme('lineHeight.DEFAULT'),
        },
      },
      '.cen-caption': {
        fontSize: 'max(1.6rem, 0.7em)',
      },
      '.cen-card': {
        fontSize: '0.93em',
        lineHeight: theme('lineHeight.snug'),
      },
      '.cen-changemaker': {
        fontSize: '1.5rem',
        lineHeight: theme('lineHeight.snug'),
        '@screen 3xl': {
          fontSize: '1.6rem',
          lineHeight: theme('lineHeight.cozy'),
        },
      },
      '.cen-intro-text': {
        ...theme('decanter.typography.type2'),
        lineHeight: theme('lineHeight.cozy'),
      },
      '.cen-drop-cap:first-letter': {
        fontSize: '3.81em',
        float: 'left',
        lineHeight: '0.85',
        paddingTop: '1rem',
        paddingRight: '1rem',
      },
      // Custom fluid type for homepage hero
      // Slightly smaller than fluid-type-9 so we can fit each line on a 360px viewport
      '.cen-splash': {
        fontSize: 'clamp(5.8rem, 8.95vw + 2.58rem, 16rem)',
      },
      '.hero': {
        fontSize: 'clamp(4.5rem, 7.01vw + 1.98rem, 16rem)',
      },
      '.cen-quote-lg': {
        ...theme('decanter.typography.type3'),
        lineHeight: theme('lineHeight.normal'),
      },
      '.cen-quote-md': {
        ...theme('decanter.typography.type2'),
        lineHeight: theme('lineHeight.normal'),
      },
      '.cen-quote-sm': {
        ...theme('decanter.typography.type0'),
        lineHeight: theme('lineHeight.normal'),
      },
    };

    addComponents(components);
  };
};
