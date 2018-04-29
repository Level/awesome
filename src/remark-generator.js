'use strict'

const heading = require('mdast-util-heading-range')
const generate = require('./generate')

module.exports = function generator ({ sections }) {
  return function transformer (tree, file, next) {
    generate(sections, (err, sections) => {
      for (let { section, nodes: newNodes } of sections) {
        // Find current section and replace it with new nodes
        heading(tree, section, (start, nodes, end) => {
          // TODO: isn't start already an array?
          return [start].concat(newNodes).concat([end])
        })
      }

      next()
    })
  }
}
