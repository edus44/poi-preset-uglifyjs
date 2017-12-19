module.exports = pluginOptions => {
  return poi => {
    poi.extendWebpack(config => {
      const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

      // do not use if `minimize` is off
      if (config.plugins.has('minimize')) {
        config.plugin('minimize').use(UglifyJSPlugin, [pluginOptions])
      }
    })
  }
}
