module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|scss)$/,
        use: [{
          loader: 'webpack-import-glob-loader'
        }]
      }
    ]
  }
}