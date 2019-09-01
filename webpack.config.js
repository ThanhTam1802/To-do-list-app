const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // Regular Exp... chau babel moi khi thay file co duoi la .js
      exclude: /node_modules/ // tru cac file trong node_modules
    }]
  }
}