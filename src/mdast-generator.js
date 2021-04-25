'use strict'

const sentence = require('sentence-case').sentenceCase
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

  const columns = [{ name: 'Name', fn: generateName }]

  if (section.compatibility) {
    columns.push({ name: 'Compatibility', fn: generateCompatibilityBadge })
  }

  if (section.dependencies !== false) {
    columns.push({ name: 'Dependencies', fn: generateDependenciesBadge })
  }

  columns.push({ name: sentence(descriptor), fn: generateDescription })

  mapLimit(Object.entries(section.modules), 4, generateRow, (err, rows) => {
    if (err) return done(err)

    nodes.push(b('table', { align: new Array(columns.length).fill('left') }, [
      buildRow(columns.map(column => b('text', column.name))),
      ...rows.map(buildRow)
    ]))

    done(null, nodes)
  })

  function generateRow ([id, module], done) {
    mapLimit(columns, Infinity, ({ fn }, next) => fn(id, module, next), done)
  }

  function generateName (id, module, done) {
    const identifier = id.toLowerCase()
    const name = b('strong', [
      b('linkReference', { identifier, referenceType: 'shortcut' }, [
        b('inlineCode', identifier)
      ])
    ])

    done(null, name)
  }

  function generateCompatibilityBadge (id, module, done) {
    const targets = module.compatibility || section.compatibility

    mapLimit(targets, 4, compat.bind(null, id), (err, badges) => {
      if (err) return done(err)

      const nodes = badges.map(({ image, alt, link }) => img(image, alt, link))
      const badge = intersperse(nodes, { type: 'html', value: '<br>' })

      done(null, badge)
    })
  }

  function generateDependenciesBadge (id, module, done) {
    const dm = david(module.github, { label: '♥' })
    const badge = img(dm.image, dm.alt, dm.link)

    done(null, badge)
  }

  function generateDescription (id, module, done) {
    done(null, parse(join(module[descriptor], '<br>')))
  }
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
