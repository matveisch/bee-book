/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./src/app/variables.scss";`,
  },
};

module.exports = nextConfig;
