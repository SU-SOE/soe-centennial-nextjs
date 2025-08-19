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
        source: "/decades",
        destination: "/stories/decades",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "/stories/videos",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/stories/events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
