const Workbox = require('workbox-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new Workbox.InjectManifest({
      swSrc: './src/sw.js'
    })
  ]
}
