const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Typescript Exam",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx", // Or 'ts' if you don't need tsx
            target: "es2022",
          },
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              import: true,
              modules: {
                mode: "local",
                localIdentName: "styles__[local]__[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "/asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    compress: true,
    liveReload: true,
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
