module.exports = () => {
  return poi => {
    poi.extendWebpack(config => {
      config.resolve.extensions.add('.yml').end()
      config.module
        .rule('yaml')
        .test(/\.ya?ml?$/)
        .use('json-loader')
        .loader('json-loader')
        .end()
        .use('yaml-loader')
        .loader('yaml-loader')
        .end()
    })
  }
}
