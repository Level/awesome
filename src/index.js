'use strict'

const path = require('path')
const glob = require('glob')
const vfile = require('to-vfile')
const remark = require('remark')
const toc = require('remark-toc')
const github = require('remark-github')
const stringify = require('remark-stringify')
const report = require('vfile-reporter')
const generator = require('./remark-generator')
const bookmarks = require('./remark-bookmarks')

const fp = process.argv[2]
const sections = glob.sync(process.argv[3], { absolute: true }).map(require)
const modules = {}

// Normalize and validate sections
for (let section of sections) {
  for (let [id, module] of Object.entries(section.modules)) {
    if (modules[id]) {
      throw new Error('duplicate module: ' + id)
    }

    if (!module.url) {
      if (!module.github) {
        throw new TypeError('either "github" or "url" must be set')
      }

      module.url = `https://github.com/${module.github}`
    }

    // Collect links for bookmarks
    modules[id] = module.url
  }
}

remark()
  .use(generator, { sections })
  .use(toc, { tight: true })
  .use(github)
  .use(bookmarks, { modules })

  // Disable padding to lessen diff noise
  .use(stringify, { paddedTable: false, looseTable: true })

  .process(vfile.readSync(fp), (err, file) => {
    if (err) throw err
    console.error(report(file))
    vfile.writeSync(file)
  })
