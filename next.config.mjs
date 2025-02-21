/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      // Cloudinary source with wildcard
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // Stanford Media source with wildcard
      {
        protocol: 'https',
        hostname: 'www-media.stanford.edu',
        pathname: '/**',
      },
      // ImgBB source with wildcard
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
