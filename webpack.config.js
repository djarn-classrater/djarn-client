const path = require('path')

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname)
  }

  return config
}