const withTM = require("next-transpile-modules")(["ui"]);

const withLayoutConfig = (itaNextConfig) => {
  let UI = require("../../bundles/layout/dist/layout.js");

  const nextConfig = {
    ...itaNextConfig,
    experimental: {
      ...itaNextConfig.experimental,
      runtime: "nodejs",
      serverComponents: true,
    },
    serverRuntimeConfig: {
      ...itaNextConfig.serverRuntimeConfig,
      getUI: () => UI,
    },
  };

  setInterval(() => {
    delete require.cache[
      require.resolve("../../bundles/layout/dist/layout.js")
    ];
    UI = require("../../bundles/layout/dist/layout.js");
  }, 1000);

  return nextConfig;
};

module.exports = withLayoutConfig(
  withTM({
    reactStrictMode: true,
    basePath: "",
  })
);
