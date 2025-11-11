// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'www.datocms-assets.com'
    }],
  }
};

export default nextConfig;
