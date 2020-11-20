module.exports = {
  devServer: {
    proxy: {
      "/": {
        // target: "https://yflh.hkzhtech.com/housekeeper",
        target: "http://192.168.0.113:8081/",
		
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  }
};
