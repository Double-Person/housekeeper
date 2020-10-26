"use strict";

module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "https://www.hemingbi.com/housekeeper",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": ""
        }
      }
    }
  }
};