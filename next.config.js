const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    siteKey: "6LdMJA4pAAAAADYN5E_ZP-FU3Wf5CEXol4y8Oriu",
    copySecretKey: "6LdMJA4pAAAAAEsLN7h1RNb5Epw_8wGuPWY9Zjcj",
    resendKey: "re_UV9FxVgD_Nyy8cdfK987BGUdn9aHSfbms",
    IPINFO_TOKEN: "e1634de25686c6",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "in8cddcab4.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
