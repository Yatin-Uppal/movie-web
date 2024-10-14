/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      // This will disable ESLint checking during builds
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
