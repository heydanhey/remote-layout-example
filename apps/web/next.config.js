const withTM = require("next-transpile-modules")(["ui"]);
const fetch = require("node-fetch");
const { writeFile } = require("fs").promises;

async function download(url, path) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const buffer = await response.buffer();
      await writeFile(path, buffer);
    }
  } catch (err) {
    console.log(err);
  }
}

const withLayoutConfig = async (itaNextConfig) => {
  const isProd = process.env.NODE_ENV == "production";

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
