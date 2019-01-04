'use strict'

const sentence = require('sentence-case')
const mapLimit = require('map-limit')
const intersperse = require('intersperse')
const compat = require('./shield-compat').badge
const david = require('./shield-david')
const img = require('./mdast-image')
const b = require('unist-builder')
const processor = require('remark')()

module.exports = function (section, done) {
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

    done(null, nodes)
  })

  function generateRow ([id, module], done) {
    const name = moduleName(id)
    const dm = david(module.github, { label: '♥' })
    const status = img(dm.image, dm.alt, dm.link)
    const description = parse(join(module[descriptor], '<br>'))

    if (section.compatibility) {
      const targets = module.compatibility || section.compatibility

      mapLimit(targets, 4, compat.bind(null, id), (err, badges) => {
        if (err) return done(err)

        const nodes = badges.map(({ image, alt, link }) => img(image, alt, link))
        const compat = intersperse(nodes, { type: 'html', value: '<br>' })

        done(null, buildRow([name, compat, status, description]))
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
      b('inlineCode', identifier)
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
