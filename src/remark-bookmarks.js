'use strict'

// Adapted from ben-eb/remark-bookmarks (MIT © Ben Briggs). Changes:
//
// - Allow late initialization of bookmarks
// - Support modules (as auto-quoted links)
// - Fix removal of nodes
// - Support image references
// - Warn about dead references
// - Sort definitions for deterministic result.
//
// TODO: publish as remark-module-bookmarks

const visit = require('unist-util-visit')
const b = require('unist-builder')
const BACKTICK = '`'

module.exports = function (opts) {
  if (!opts) opts = {}

  // Don't iterate bookmarks until transform(), in
  // order to pick up bookmarks added by other plugins.
  let bookmarks = opts.bookmarks || {}
  let modules = opts.modules || {}

  return function transform (tree, file) {
    // All identifiers should be case-insensitive
    bookmarks = lowercaseKeys(bookmarks)
    modules = lowercaseKeys(modules)

    // Find and remove existing bookmarks
    visit(tree, 'definition', (node, index, parent) => {
      bookmarks[node.identifier] = bookmarks[node.identifier] || node.url
      parent.children.splice(index, 1)
      return index
    })

    // Track which bookmarks are used
    const refs = new Set()

    // Find references to modules and bookmarks
    visit(tree, ['linkReference', 'imageReference'], (node, index, parent) => {
      if (node.type === 'linkReference') {
        const name = node.identifier.replace(/`/g, '').toLowerCase()
        const quoted = BACKTICK + name + BACKTICK

        if (modules[name]) {
          bookmarks[quoted] = modules[name]
        }

        if (bookmarks[quoted]) {
          node.identifier = quoted
          node.children = [b('inlineCode', name)]
        }
      }

      if (bookmarks[node.identifier]) {
        refs.add(node.identifier)
      } else {
        file.message('dead reference: ' + node.identifier, node, 'remark-bookmarks')
      }
    })

    // Sort for deterministic result (and less diff noise)
    for (let identifier of Array.from(refs).sort()) {
      const url = bookmarks[identifier]
      tree.children.push(b('definition', { url, identifier }, identifier))
    }
  }
}

function lowercaseKeys (obj) {
  return Object.keys(obj).reduce((acc, k) => {
    acc[k.toLowerCase()] = obj[k]
    return acc
  }, {})
}
