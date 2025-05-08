/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://engineering100.stanford.edu/',
  generateRobotsTxt: true,
  exclude: [
    '/example', 
    '/example/*', 
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
