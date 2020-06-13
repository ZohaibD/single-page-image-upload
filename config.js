exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://single-page-image.herokuapp.com/'
  : 'http://localhost:3000'