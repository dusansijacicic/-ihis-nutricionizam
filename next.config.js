/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Šifrovani slajdovi se čitaju sa diska u runtime-u, pa ih treba ručno uključiti u Vercel funkciju.
    outputFileTracingIncludes: {
      '/api/predavanja/*/*/*': ['./private/predavanja/**/*'],
    },
  },
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
