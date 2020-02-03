const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')]
    },
  })

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname)
  }

  return config
}