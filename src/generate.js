'use strict'

const after = require('after')
const sentence = require('sentence-case')
const compatibilityBadges = require('./compatibility').badges
const davidBadge = require('./david-badge')
const minimalTable = require('./util/minimal-table')
const bold = require('./util/bold')

// TODO: generate markdown nodes with unist-builder.
module.exports = function (sections, bookmarks, done) {
  const result = {}
  const modules = new Map()

  // Preregister all modules, to be able to add links.
  for (let section of sections) {
    for (let [id, module] of Object.entries(section.modules)) {
      if (modules.has(id)) {
        throw new Error('duplicate module: ' + id)
      }

      if (!module.url) {
        if (!module.github) {
          throw new TypeError('either "github" or "url" must be set')
        }

        module.url = `https://github.com/${module.github}`
      }

      modules.set(id, module)
    }
  }

  // TODO: use `run-parallel` instead of `after`
  const next = after(sections.length, (err) => {
    if (err) return done(err)
    done(null, result)
  })

  sections.forEach((section, index) => {
    generateSection(section, (err, markdown) => {
      if (err) return next(err)
      result[section.section] = markdown
      next()
    })
  })

  function generateSection (section, done) {
    const paragraphs = []

    if (section.description) {
      paragraphs.push([].concat(section.description).map(linkify).join(' '))
    }

    const descriptor = section.descriptor || 'description'
    const entries = Object.entries(section.modules)
    const rows = new Array(entries.length)

    const next = after(entries.length, (err) => {
      if (err) return done(err)

      const table = minimalTable(rows, {
        columns: [
          { name: 'Name' },
          { name: 'Compatibility', skip: !section.compatibility },
          { name: 'Status' },
          { name: sentence(descriptor) }
        ]
      })

      paragraphs.push(table)
      done(null, paragraphs.join('\n\n'))
    })

    entries.forEach(([id, module], index) => {
      const name = bold(bookmark(id, module.url, true))
      const status = davidBadge(module.github)
      const description = [].concat(module[descriptor]).map(linkify).join(' ')

      if (section.compatibility) {
        const dependencies = [].concat(section.compatibility).concat(module.compatibility || [])

        compatibilityBadges(id, dependencies, '<br>', (err, compatibility) => {
          if (err) return next(err)
          rows[index] = { name, compatibility, status, description }
          next()
        })
      } else {
        rows[index] = { name, status, description }
        next()
      }
    })
  }

  // TODO: move this to a remark plugin, to work on an AST.
  function linkify (markdown) {
    // Hack. Don't touch existing links like [foo][bar] and [foo](bar)
    return markdown.replace(/\[([^\]]+)\]([^\[\(]|$)/g, (match, name, suffix) => {
      const unquoted = name.replace(/`/g, '')

      if (modules.has(name)) {
        return bookmark(name, modules.get(name).url, true) + suffix
      } else if (modules.has(unquoted)) {
        return bookmark(unquoted, modules.get(unquoted).url, true) + suffix
      } else if (bookmarks[name]) {
        return match
      } else {
        throw new Error('orphan link: ' + name)
      }
    })
  }

  function bookmark (name, link, quote) {
    if (quote) {
      name = '`' + name + '`'
    }

    const identifier = name.toLowerCase()

    if (bookmarks[identifier] && bookmarks[identifier] !== link) {
      throw new Error('bookmark conflict: ' + identifier)
    }

    bookmarks[identifier] = link

    if (identifier === name) {
      // Shortcut reference
      return '[' + identifier + ']'
    } else {
      // Full reference
      return '[' + name + '][' + identifier + ']'
    }
  }
}
