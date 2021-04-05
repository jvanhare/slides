'use strict';

var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Customized babel loader with the minimum we need to get `mdx` libraries
// working, which unfortunately codegen JSX instead of JS.
const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    // Use user-provided .babelrc
    babelrc: true,
    compact: true,
    // ... with some additional needed options.
    presets: [require.resolve('@babel/preset-react')],
    plugins: [
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
};

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
  resolve: {
    alias: {
      process: "process/browser"
    }
  },
  mode: 'development',
  entry: './src/index.js', // Default for boilerplate generation.
  output: {
    path: path.resolve('public'),
    filename: 'presentation.js'
  },
  devtool: 'source-map',
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.jsx?$/,
        use: [babelLoader]
      },
      // `.md` files are processed as pure text.
      {
        test: /\.md$/,
        use: [require.resolve('raw-loader')]
      },
      // `.mdx` files go through babel and our mdx transforming loader.
      {
        test: /\.mdx$/,
        use: [babelLoader, require.resolve('spectacle-mdx-loader')]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [require.resolve('file-loader')]
      },
      {
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ]
  },
  // Default for boilerplate generation.
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      title: 'Spectacle presentation',
      template: './src/index.html'
    })
  ]
};
