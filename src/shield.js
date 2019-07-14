'use strict'

const url = require('url')

const SHORTCUTS = [
  'style',
  'label',
  'logo',
  'logoWidth',
  'colorA',
  'colorB',
  'maxAge',
  'longCache',
  'link'
]

module.exports = function (service, path, opts) {
  if (!opts) opts = {}

  const type = opts.type || 'svg'
  const query = opts.query || {}

  for (const k of SHORTCUTS) {
    if (opts[k]) query[k] = opts[k]
  }

  return url.format({
    protocol: opts.protocol || 'https',
    hostname: opts.hostname || 'img.shields.io',
    pathname: `/${service}/${path}.${type}`,
    query
  })
}
