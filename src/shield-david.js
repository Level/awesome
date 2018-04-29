'use strict'

const shield = require('./shield')
const custom = require('./shield-custom')

module.exports = function (slug, opts) {
  if (slug) {
    return {
      image: shield('david', slug, opts),
      alt: 'dependencies',
      link: `https://david-dm.org/${slug}`
    }
  } else {
    return {
      image: custom('dependencies', 'unknown', 'lightgrey', opts),
      alt: 'dependencies'
    }
  }
}
