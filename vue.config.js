module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "https://www.hemingbi.com/housekeeper",
        // target: "http://192.168.0.110:8081/",
		
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  }
};
