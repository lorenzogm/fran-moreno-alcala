/** @type {import('next').NextConfig} */

const withTranspileModules = require('next-transpile-modules')(['@ring/cms-storyblok']);

module.exports = withTranspileModules({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { crypto: false, fs: false, net: false, tls: false };

    return config;
  },
});
