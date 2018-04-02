const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'proportions.js',
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
