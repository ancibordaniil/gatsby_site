const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        layouts: path.resolve(__dirname, 'src/layouts/'),
        components: path.resolve(__dirname, 'src/components/')
      }
    }
  });
};
