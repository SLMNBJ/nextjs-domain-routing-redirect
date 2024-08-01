/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'default',
    locales: ['default', 'en', 'fr'],
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en'
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr'
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/will-be-removed/blog/:path*',
        destination: '/blog/:path*',
        permanent: true
      },
    ]
  }
};

export default nextConfig;
