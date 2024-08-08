const fs = require('fs')
const path = require('path')

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: './public',
})

module.exports = withPWA({
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  basePath: '/gitmoji-zh',
  trailingSlash: true,
})
