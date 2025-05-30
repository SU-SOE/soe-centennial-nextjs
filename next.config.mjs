const isProduction = process.env.VERCEL_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    // unoptimized: true,
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
  async redirects() {
    if (!isProduction) {
      return []; // No redirects in non-production environments
    }

    return [
      {
        source: "/example/:path*",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/404",
        destination: "/events/centennial-perspectives-ai-future-computing",
        permanent: true,
      },
      {
        source: "/events/centennial-perspectives-ai-future-computing",
        destination: "/404",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
