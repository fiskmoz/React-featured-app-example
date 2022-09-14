var webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {}, // intentionally left empty,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
    modules: ["src", "node_modules"], // Assuming that your files are inside the src dir
  },
  output: {
    filename: "featured-app.federated.js",
    publicPath: "auto",
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "__feature_hub_feature_app_module_container__",
      exposes: {
        featureAppModule: path.join(__dirname, "src/index"),
      },
      shared: {
        react: { singleton: true, eager: true },
      },
    }),
  ],
};
