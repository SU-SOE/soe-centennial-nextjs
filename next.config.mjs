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
  webpack(config) {
    if (!isProduction) {
      config.resolve.alias["app/timeline/page"] = false; // Prevents Next.js from including it
    }
    return config;
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
        source: "/stories/:path*",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/timeline/:path*",
        destination: "/404",
        permanent: true,
      },
      {
        source: "/april/:path*",
        destination: "/404",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
