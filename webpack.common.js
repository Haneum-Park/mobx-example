const { resolve } = require('path');

const root = (path) => resolve(__dirname, `./${path}`);

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [root('.'), 'node_modules'],
    alias: {
      '@': root('src'),
      src: root('src'),
      components: root('src/components'),
      pages: root('src/pages'),
      utils: root('src/utils'),
      stores: root('src/stores'),
    },
  },
};
