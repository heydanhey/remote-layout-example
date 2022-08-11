const path = require("path");

module.exports = {
  entry: {
    layout: "./src/index.ts",
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
        },
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "../../packages/ui")],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  externals: {
    react: "react",
  },
};
