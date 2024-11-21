/**
 * Centennial Variables.
 */

module.exports = function () {
  const modtype = {};
  
  // Reponsive modular typography system
  // type-0 is the base step = 1em
  // type-1 to type-9 (largest) available
  // Each step includes difference font sizes and letterspacing for mobile, tablet and desktop breakpoints
  // Generate responsive modular typography steps from 1 to 9
  for (let i = 0; i < 10; i += 1) {
    modtype[`type-${i}`] = {
      fontSize: `${(1.18 ** i).toFixed(2)}em`,
      letterSpacing: `${(-0.01 - (i - 1) * 0.002).toFixed(3)}em`,
      '@screen md': {
        fontSize: `${(1.9 ** i).toFixed(2)}em`,
      },
      '@screen lg': {
        fontSize: `${(1.21 ** i).toFixed(2)}em`,
      },
    };
  }

  // Returned values.
  return {
    typography: {
      ...modtype,
    },
  };
};