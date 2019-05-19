module.exports = {
  publicPath: '',
  devServer: {
    // host: 'localhost',
    // disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://iservices-ng.bora.dopa.go.th',
        secure: true,
        changeOrigin: true,
      },
    },
  },
}
const { version } = require('./package.json')

process.env.VUE_APP_VERSION = version || 'dev'
