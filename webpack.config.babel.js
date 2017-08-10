import webpack from 'webpack';
import path from 'path';
import  fs from 'fs';

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/main.js')
  ],
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'backend.js'
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false })
                              ],
  externals:nodeModules,
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
    ]
  }
}
