/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const path = require('path')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const nextConfig = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname),
    }

    return config
  }
}

module.exports = withPlugins([
  nextEnv({}),
], nextConfig)
