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
      commonComponents: path.resolve(__dirname, "src/components/Common"),
      commonFunctions: path.resolve(__dirname, "src/common"),
      images: path.resolve(__dirname, "src/assets/images"),
      constants: path.resolve(__dirname, "src/constants"),
    },
  },
};
