'use strict'

const mapLimit = require('map-limit')
const intersperse = require('intersperse')
const compat = require('./shield-compat').badge
const img = require('./mdast-image')
const b = require('unist-builder')
const processor = require('remark')()
const fs = require('fs')
const path = require('path')

module.exports = function (section, done) {
  mapLimit(Object.entries(section.modules), 4, generateModuleSection, (err, res) => {
    if (err) return done(err)

    const nodes = res.flat()

    if (section.example) {
      const fp = path.join('modules', section.example)
      const js = fs.readFileSync(fp, 'utf8').trim()
      nodes.unshift(b('code', { lang: 'js' }, js))
    }

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

    if (section.dependencies !== false) {
      fns.push(generateNpmVersionBadge)
      fns.push(generateNpmDownloadsBadge)
      fns.push(generateLicenseBadge)
      fns.push(generateLastCommitBadge)
      fns.push(generateContributorsBadge)
    }

    for (const target of (module.compatibility || section.compatibility || [])) {
      fns.push((id, module, next) => {
        compat(id, target, (err, badge) => {
          if (err) return next(err)
          next(null, img(badge.image, badge.alt, badge.link))
        })
      })
    }

    mapLimit(fns, 4, (fn, next) => fn(id, module, next), (err, badges) => {
      if (err) return done(err)
      done(null, badges.filter(Boolean))
    })
  }

  function generateNpmVersionBadge (id, module, done) {
    const image = `https://img.shields.io/npm/v/${id}`
    const alt = 'npm package version'
    const link = `https://www.npmjs.com/package/${id}`

    process.nextTick(done, null, img(image, alt, link))
  }

  function generateNpmDownloadsBadge (id, module, done) {
    const image = `https://img.shields.io/npm/dw/${id}`
    const alt = 'npm downloads'
    const link = `https://www.npmjs.com/package/${id}`

    process.nextTick(done, null, img(image, alt, link))
  }

  function generateLicenseBadge (id, module, done) {
    // Don't care for interpretation of "good" licenses so use informational color
    const image = `https://img.shields.io/npm/l/${id}?color=blue`
    const alt = 'License'
    const link = `https://www.npmjs.com/package/${id}`

    process.nextTick(done, null, img(image, alt, link))
  }

  function generateLastCommitBadge (id, module, done) {
    if (!module.github) return process.nextTick(done)

    let image = `https://img.shields.io/github/last-commit/${module.github}`

    if (module.timeless) {
      image += '?color=brightgreen'
    }

    const alt = 'Last commit'
    const link = `https://github.com/${module.github}`

    process.nextTick(done, null, img(image, alt, link))
  }

  function generateContributorsBadge (id, module, done) {
    if (!module.github) return process.nextTick(done)

    const image = `https://img.shields.io/github/contributors/${module.github}?color=blue`
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
