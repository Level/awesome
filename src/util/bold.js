'use strict'

module.exports = function bold (md) {
  return '**' + md.replace(/\*/g, '\\*') + '**'
}
