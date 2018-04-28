'use strict'

const after = require('after')
const sentence = require('sentence-case')
const compatibilityBadges = require('./compatibility').badges
const davidBadge = require('./david-badge')
const minimalTable = require('./util/minimal-table')

// TODO: generate markdown nodes with unist-builder.
module.exports = function (sections, done) {
  const result = {}

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
      paragraphs.push([].concat(section.description).join(' '))
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
      const name = '**[`' + id.toLowerCase() + '`]**'
      const status = davidBadge(module.github)
      const description = [].concat(module[descriptor]).join(' ')

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
}
