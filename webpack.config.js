const path = require('path');

const entryPoint = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const outputPoint = path.resolve(__dirname, 'client', 'dist', 'public');
// const outputPoint = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  entry: entryPoint,
  output: {
    filename: 'bundle.js',
    path: outputPoint,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]',
            },
          },
        }],
      },
    ]
  }
};