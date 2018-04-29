'use strict'

const image = require('./mdast-image')
const LOVE = '%E2%99%A5'

module.exports = function (slug) {
  if (!slug) {
    return image(
      `https://img.shields.io/badge/dependencies-unknown-lightgrey.svg?label=${LOVE}`,
      'dependencies'
    )
  }

  return image(
    `https://img.shields.io/david/${slug}.svg?label=${LOVE}`,
    'dependencies',
    `https://david-dm.org/${slug}`
  )
}
