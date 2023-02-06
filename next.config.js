/** @format */

module.exports = {
  useFileSystemPublicRoutes: false,
  images: { domains: ["laravel.layouti.com"] },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
