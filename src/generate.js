'use strict'

const sentence = require('sentence-case')
const mapLimit = require('map-limit')
const compatibilityBadges = require('./compatibility').badges
const davidBadge = require('./david-badge')
const minimalTable = require('./util/minimal-table')

// TODO: generate markdown nodes with unist-builder.
module.exports = function (sections, done) {
  mapLimit(sections, 4, generateSection, done)
}

function generateSection (section, done) {
  const paragraphs = []
  const descriptor = section.descriptor || 'description'

  if (section.description) {
    paragraphs.push([].concat(section.description).join(' '))
  }

  mapLimit(Object.entries(section.modules), 4, generateRow, (err, rows) => {
    if (err) return done(err)

    paragraphs.push(minimalTable(rows, {
      columns: [
        { name: 'Name' },
        { name: 'Compatibility', skip: !section.compatibility },
        { name: 'Status' },
        { name: sentence(descriptor) }
      ]
    }))

    done(null, {
      section: section.section,
      markdown: paragraphs.join('\n\n')
    })
  })

  function generateRow ([id, module], done) {
    const name = '**[`' + id.toLowerCase() + '`]**'
    const status = davidBadge(module.github)
    const description = [].concat(module[descriptor]).join(' ')

    if (section.compatibility) {
      const dependencies = [].concat(section.compatibility).concat(module.compatibility || [])

      compatibilityBadges(id, dependencies, '<br>', (err, compatibility) => {
        if (err) return done(err)
        done(null, { name, compatibility, status, description })
      })
    } else {
      done(null, { name, status, description })
    }
  }
}
