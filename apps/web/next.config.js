const withTM = require("next-transpile-modules")(["ui"]);
const { writeFile } = require("fs").promises;

async function download(url, path) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  await writeFile(path, buffer);
}

const withLayoutConfig = async (itaNextConfig) => {
  const isProd = process.env.NODE_ENV === "production";

  const bundleName = "layout.js";
  let bundlePath;

  if (isProd) {
    bundlePath = `./${bundleName}`;
    await download(`${process.env.CDN_DIR}/${bundleName}`, bundleName);
  } else {
    bundlePath = `../../bundles/layout/dist/${bundleName}`;
  }

  let UI = require(bundlePath);

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

  setInterval(async () => {
    if (isProd) {
      await download(`${process.env.CDN_DIR}/${bundleName}`, bundleName);
    }
    delete require.cache[require.resolve(bundlePath)];
    UI = require(bundlePath);
  }, 1000);

  return nextConfig;
};

module.exports = withLayoutConfig(
  withTM({
    reactStrictMode: true,
    basePath: "",
  })
);