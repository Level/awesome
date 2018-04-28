'use strict'

const heading = require('mdast-util-heading-range')
const processor = require('remark')()
const generate = require('./generate')

module.exports = function generator ({ sections, bookmarks }) {
  return function transformer (tree, file, next) {
    generate(sections, bookmarks, (err, sections) => {
      for (let [section, markdown] of Object.entries(sections)) {
        // Find current section and replace it with new nodes
        heading(tree, section, (start, nodes, end) => {
          const newNodes = processor.parse(markdown, { position: false }).children

          // TODO: isn't start already an array?
          return [start].concat(newNodes).concat([end])
        })
      }

      next()
    })
  }
}
