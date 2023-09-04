/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.CLIENT_URL,
  generateRobotsTxt: true,
  changefreq: 'daily',
  outDir: 'out',
};
