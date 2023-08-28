/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./src/app/[lang]/variables.scss";`,
  },
};

module.exports = nextConfig;
