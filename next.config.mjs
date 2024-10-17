/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  output: 'export', 
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);
