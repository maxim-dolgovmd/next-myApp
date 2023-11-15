/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true
    },
    images: {
      domains: ['img.freepik.com', 'thesarai.ru']
    },
  
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  }
  
module.exports = nextConfig
