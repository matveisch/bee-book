/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./src/app/variables.scss";`,
  },
  env: {
    BOOK_LINK: process.env.BOOK_LINK,
  },
};

module.exports = nextConfig;
