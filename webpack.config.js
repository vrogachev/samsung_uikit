const path = require('path');
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: 'production',
  entry: './src/store.ts',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    clean: true,
    globalObject: 'this'
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react-transition-group': 'react-transition-group',
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'svg-inline-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ]
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
