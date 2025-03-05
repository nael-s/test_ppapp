/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: `${process.env.NEXT_API}/api`
  }
};

export default nextConfig;
