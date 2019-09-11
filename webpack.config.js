const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx$/, // Regular Exp... chay babel moi khi thay file co duoi la .js
      exclude: /node_modules/ // tru cac file trong node_modules
    },{
      test: /\.s?css$/, // SCSS
      use: [ // use duoc dung de goi nhieu loader
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}