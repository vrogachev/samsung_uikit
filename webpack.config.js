const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    clean: true,
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader'],
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
    ],
    plugins: [
      new SVGSpritemapPlugin('src/assets/icons/*.svg', {
        output: {
          filename: 'sprite.svg', // Name of the output SVG sprite file
          chunk: {
            name: 'sprite', // Name of the generated chunk
            keep: true, // Keep the chunk in the cache
          },
        },
        sprite: {
          prefix: 'icon-', // Prefix for the CSS classes of each SVG symbol
        },
      }),
    ],
  }
}