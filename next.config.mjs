/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  basePath: '/soe-centennial',
  output: 'export', 
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);
