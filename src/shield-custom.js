'use strict'

const shield = require('./shield')

module.exports = function (subject, status, color, opts) {
  return shield('badge', [subject, status, color].map(encode).join('-'), opts)
}

function encode (str) {
  str = str.replace(/-+/g, '--').replace(/_+/g, '__').replace(/ +/g, '_')
  return encodeURIComponent(str)
}
