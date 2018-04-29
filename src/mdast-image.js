'use strict'

const b = require('unist-builder')

module.exports = function (img, alt, link) {
  const image = b('image', { url: img, alt })
  return link ? b('link', { url: link }, [image]) : image
}
