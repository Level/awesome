'use strict'

const sentence = require('sentence-case')
const mapLimit = require('map-limit')
const compatibilityBadges = require('./compatibility').badges
const davidBadge = require('./david-badge')
const b = require('unist-builder')
const processor = require('remark')()

module.exports = function (sections, done) {
  mapLimit(sections, 4, generateSection, done)
}

function generateSection (section, done) {
  const nodes = []
  const descriptor = section.descriptor || 'description'

  if (section.description) {
    nodes.push(b('paragraph', parse(join(section.description, ' '))))
  }

  mapLimit(Object.entries(section.modules), 4, generateRow, (err, rows) => {
    if (err) return done(err)

    const header = section.compatibility
      ? ['Name', 'Compatibility', 'Dependencies', sentence(descriptor)]
      : ['Name', 'Dependencies', sentence(descriptor)]

    nodes.push(b('table', { align: new Array(header.length).fill('left') }, [
      buildRow(header.map(column => b('text', column))),
      ...rows
    ]))

    done(null, {
      section: section.section,
      nodes
    })
  })

  function generateRow ([id, module], done) {
    const name = moduleName(id)
    const status = davidBadge(module.github)
    const description = parse(join(module[descriptor], '<br>'))

    if (section.compatibility) {
      const targets = module.compatibility || section.compatibility

      compatibilityBadges(id, targets, (err, compatibility) => {
        if (err) return done(err)
        done(null, buildRow([name, compatibility, status, description]))
      })
    } else {
      done(null, buildRow([name, status, description]))
    }
  }
}

function moduleName (identifier) {
  identifier = identifier.toLowerCase()

  return b('strong', [
    b('linkReference', { identifier, referenceType: 'shortcut' }, [
      [b('inlineCode', identifier)]
    ])
  ])
}

function join (parts, glue) {
  return [].concat(parts).join(glue)
}

function buildRow (columns) {
  return b('tableRow', columns.map(buildCell))
}

function buildCell (children) {
  return b('tableCell', [].concat(children))
}

function parse (md) {
  return processor.parse(md, { position: false }).children
}
