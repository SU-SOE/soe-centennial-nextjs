let twoColumn = {},
  threeColumn = {},
  i;
for (i = 1; i <= 4; i++) {
  twoColumn[`1-${i}`] = `minmax(0, 1fr) minmax(0, ${i}fr)`;
  twoColumn[`${i}-1`] = `minmax(0, ${i}fr) minmax(0, 1fr)`;
}

for (i = 1; i <= 4; i++) {
  threeColumn[`${i}-1-1`] = `minmax(0, ${i}fr) minmax(0, 1fr) minmax(0, 1fr)`;
  threeColumn[`1-${i}-1`] = `minmax(0, 1fr) minmax(0, ${i}fr) minmax(0, 1fr)`;
  threeColumn[`1-1-${i}`] = `minmax(0, 1fr) minmax(0, 1fr) minmax(0, ${i}fr)`;
}

module.exports = function () {
  return { ...twoColumn, ...threeColumn };
};
