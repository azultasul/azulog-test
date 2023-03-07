/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    );
    return config
  },
}

module.exports = nextConfig
