const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const deps = require('./package.json').dependencies;

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const EnvironmentPlugin = webpack.EnvironmentPlugin;

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs'],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'map_react',
      filename: 'remoteEntry.js',
      remotes: {
        container: 'container@https://container-elastic-clarke-4ee228.netlify.app/remoteEntry.js',
      },
      exposes: {
        './Map': './src/Map',
      },
      shared: {
        ...deps,
        'react-router-dom': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
    new EnvironmentPlugin(['MAPBOX_ACCESS_TOKEN']),
  ],
};
