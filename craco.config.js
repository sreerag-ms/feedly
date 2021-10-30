/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      apis: path.resolve(__dirname, "src/apis"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      commonFunctions: path.resolve(__dirname, "src/common"),
      commonComponents: path.resolve(__dirname, "src/components/Common"),
      images: path.resolve(__dirname, "src/assets/images"),
    },
  },
};
