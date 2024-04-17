const path = require("path");

module.exports = {
  output: {
    filename: "/src/index.html",
    path: path.resolve("/src/index.html", "dist"),
  },
};
