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
      // 13. savetovanje je održano, a prijava je sada za radionicu — stari poziv i
      // sponzorstvo vode na radionicu dok ne krene sledeće savetovanje.
      { source: '/rs/invitation', destination: '/rs/radionica', permanent: false },
      { source: '/rs/sponsorship', destination: '/rs/radionica', permanent: false },
      { source: '/en/invitation', destination: '/en/workshop', permanent: false },
      { source: '/en/sponsorship', destination: '/en/workshop', permanent: false },
    ];
  },
};

module.exports = nextConfig;
