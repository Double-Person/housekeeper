module.exports = {
  devServer: {
    proxy: {
      "/": {
        // target: "https://yflh.hkzhtech.com/housekeeper",
        target: "https://fgj.slfgapp.com/housekeeper",
        // target: "http://192.168.0.111:8081/",
		
		
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  }
};
