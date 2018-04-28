'use strict'

// Adapted from ben-eb/remark-bookmarks (MIT © Ben Briggs). Changes:
//
// - Allow late initialization of bookmarks
// - Support modules (quoted identifiers)
// - Fix removal of nodes.
// - Support image references.
// - Throw on dead references.
// - Sort definitions.

const visit = require('unist-util-visit')
const b = require('unist-builder')

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

    // Find module references and existing bookmarks
    visit(tree, ['linkReference', 'definition'], (node, index, parent) => {
      const { type, identifier } = node

      if (type === 'linkReference') {
        const name = identifier.replace(/`/g, '').toLowerCase()

        if (modules[name]) {
          const quoted = '`' + name + '`'

          bookmarks[quoted] = modules[name]
          node.identifier = quoted

          if (node.referenceType === 'shortcut') {
            node.children = [b('text', quoted)]
          }
        }
      } else if (type === 'definition') {
        bookmarks[identifier] = bookmarks[identifier] || node.url

        // Remove node and return current index to visit sibling
        parent.children.splice(index, 1)
        return index
      }
    })

    // Find which bookmarks are used
    const refs = new Set()

    visit(tree, ['linkReference', 'imageReference'], (node, index, parent) => {
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
