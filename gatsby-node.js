const path = require('path');
const fs = require("fs-extra")


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

exports.onPostBuild = () => {
    console.log("Copying locales")
    fs.copySync(
      path.join(__dirname, "/src/locales"),
    )
  }
