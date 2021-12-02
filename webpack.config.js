const glob = require("glob");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const list = {};
const makeList = async (dirPath, list) => {
  const files = glob.sync(`${dirPath}/**/index.js`);

  for (let file of files) {
    let component = file.split("/")[2];
    if (component.includes(".")) component = "index";
    list[component] = `./${file}`;
  }
};

makeList("components/lib", list);

console.log(list);

module.exports = {
  mode: "development",
  entry: list,
  output: {
    filename: "[name].umd.js",
    path: path.resolve("dist"),
    library: "mui",
    libraryTarget: "umd",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
