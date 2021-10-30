const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./src",
        source: "options",
        aliases: {
          apis: "apis",
          components: "components",
          assets: "assets",
          images: "assets/images",
          commonFunctions: "common",
          commonComponents: "components/Common",
        },
      },
    },
  ],
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
