'use strict'

const mapLimit = require('map-limit')
const intersperse = require('intersperse')
const compat = require('./shield-compat').badge
const img = require('./mdast-image')
const b = require('unist-builder')
const processor = require('remark')()

module.exports = function (section, done) {
  mapLimit(Object.entries(section.modules), 4, generateModuleSection, (err, res) => {
    if (err) return done(err)

    const nodes = res.flat()

    if (section.description) {
      const children = parse(join(section.description, ' '))
      nodes.unshift(b('paragraph', b('strong', children)))
    }

    done(null, nodes)
  })

  function generateModuleSection ([id, module], done) {
    generateBadges(id, module, (err, badges) => {
      if (err) return done(err)

      const nodes = [generateName(id)]
      const description = parse(join(module.description, ' '))

      if (badges.length) {
        nodes.push(b('paragraph', intersperse(badges, { type: 'text', value: ' ' })))
      }

      done(null, nodes.concat(description))
    })
  }

  function generateName (id) {
    const identifier = id.toLowerCase()

    return b('heading', { depth: 3 }, [
      b('linkReference', { identifier, referenceType: 'shortcut' }, [
        b('inlineCode', identifier)
      ])
    ])
  }

  function generateBadges (id, module, done) {
    const fns = []

    if (section.compatibility) {
      for (const target of (module.compatibility || section.compatibility)) {
        fns.push((id, module, next) => {
          compat(id, target, (err, badge) => {
            if (err) return next(err)
            next(null, img(badge.image, badge.alt, badge.link))
          })
        })
      }
    }

    if (section.dependencies !== false) {
      fns.push(generateLastCommitBadge)
      fns.push(generateContributorsBadge)
    }

    mapLimit(fns, 4, (fn, next) => fn(id, module, next), (err, badges) => {
      if (err) return done(err)
      done(null, badges.filter(Boolean))
    })
  }

  function generateLastCommitBadge (id, module, done) {
    if (!module.github) return process.nextTick(done)

    const image = `https://img.shields.io/github/last-commit/${module.github}`
    const alt = 'Last commit'
    const link = `https://github.com/${module.github}`

    process.nextTick(done, null, img(image, alt, link))
  }

  function generateContributorsBadge (id, module, done) {
    if (!module.github) return process.nextTick(done)

    const image = `https://img.shields.io/github/contributors/${module.github}?color=brightgreen`
    const alt = 'Contributors'
    const link = `https://github.com/${module.github}/graphs/contributors`

    process.nextTick(done, null, img(image, alt, link))
  }
}

function join (parts, glue) {
  return [].concat(parts).join(glue)
}

function parse (md) {
  return processor.parse(md, { position: false }).children
}
