'use strict'

const LOVE = '%E2%99%A5'

module.exports = function (slug) {
  if (!slug) {
    const image = `https://img.shields.io/badge/dependencies-unknown-lightgrey.svg?label=${LOVE}`
    return `![dependencies](${image})`
  }

  const image = `https://img.shields.io/david/${slug}.svg?label=${LOVE}`
  const link = `https://david-dm.org/${slug}`

  return `[![dependencies](${image})](${link})`
}
