module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/css/global/_vars.scss";
        `
      }
    }
  }
};
