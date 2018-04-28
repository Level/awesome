'use strict'

// Adapted from ben-eb/remark-bookmarks (MIT © Ben Briggs). Changes:
//
// - Allow late initialization of bookmarks
// - Fix removal of nodes.
// - Support image references.
// - Throw on dead references.
// - Sort definitions.

const visit = require('unist-util-visit')
const b = require('unist-builder')

module.exports = function (opts) {
  // Don't iterate bookmarks until transform(), in
  // order to pick up bookmarks added by other plugins.
  let bookmarks = (opts && opts.bookmarks) || {}

  return function transform (tree) {
    // All identifiers should be case-insensitive
    bookmarks = Object.keys(bookmarks).reduce((obj, identifier) => {
      obj[identifier.toLowerCase()] = bookmarks[identifier]
      return obj
    }, {})

    // Track which bookmarks are used
    const refs = new Set()

    visit(tree, ['linkReference', 'imageReference', 'definition'], (node, index, parent) => {
      const { type, identifier, url } = node

      if (type === 'linkReference' || type === 'imageReference') {
        refs.add(identifier)
      } else if (type === 'definition') {
        bookmarks[identifier] = bookmarks[identifier] || url

        // Remove node and return current index to visit sibling
        parent.children.splice(index, 1)
        return index
      }
    })

    for (let identifier of refs) {
      if (!bookmarks[identifier]) {
        throw new Error('dead reference: ' + identifier)
      }
    }

    // Sort for deterministic result (and less diff noise)
    for (let identifier of Object.keys(bookmarks).sort()) {
      const url = bookmarks[identifier]

      if (refs.has(identifier)) {
        tree.children.push(b('definition', { url, identifier }, identifier))
      }
    }
  }
}
