/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://engineering100.stanford.edu/',
  generateRobotsTxt: true,
  exclude: [
    '/april',
    '/example', 
    '/example/*', 
    '/stories/the-terman-era'
  ], 
  transform: async (config, path) => {
    return {
      loc: path, 
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
    };
  },
};
