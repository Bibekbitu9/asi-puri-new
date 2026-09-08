import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://asi-puri.vercel.app';

// Read monuments data
const dataPath = path.resolve('src/data/monuments.json');
const monuments = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Define static routes
const staticRoutes = [
  '/',
  '/monuments',
  '/about',
  '/circle-museums',
  '/walkthrough',
  '/acts-and-rules',
  '/excavations',
  '/contact-us'
];

// Generate dynamic routes
const dynamicRoutes = monuments.map((monument) => `/monuments/${monument.id}`);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/monuments/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap.xml to public/ (which Vite copies to dist/ on build)
fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap);
console.log('✅ Generated sitemap.xml');

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml`;

fs.writeFileSync(path.resolve('public/robots.txt'), robots);
console.log('✅ Generated robots.txt');
