const Path = require("path");
const CopyWebPackPlugin = require("copy-webpack-plugin");

const distPath = Path.resolve(__dirname, "dist");
console.log("distPath = ", distPath);

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: distPath,
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: "var",
    library: "WebPackRoot"
  },
  devServer: {
    contentBase: distPath,
    watchContentBase: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ]
  },
  plugins: [
    new CopyWebPackPlugin([
      {
        from: Path.resolve(__dirname, "public/**/*"), to: distPath, transformPath: (targetPath, absolutePath) => {
          return Path.relative("public/", targetPath);
        }
      }
    ])
  ]
};
