/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: true }];
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./src/app/variables.scss";`,
  },
  env: {
    BOOK_LINK: process.env.BOOK_LINK,
  },
};

module.exports = nextConfig;
