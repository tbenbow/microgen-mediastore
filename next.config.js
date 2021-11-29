module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/index/',
        destination: '/',
      },
    ]
  },
}