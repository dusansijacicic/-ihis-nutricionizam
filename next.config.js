/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
