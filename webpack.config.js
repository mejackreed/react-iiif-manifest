module.exports = {
  context: __dirname,
  entry: {
    javascript: './source/index.js',
    html: './index.html',
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['react'],
        },
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
