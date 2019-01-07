'use strict'

const glob = require('glob')
const vfile = require('to-vfile')
const remark = require('remark')
const toc = require('remark-toc')
const collapse = require('remark-collapse')
const github = require('remark-github')
const stringify = require('remark-stringify')
const report = require('vfile-reporter')
const generator = require('./remark-generator')
const bookmarks = require('./remark-bookmarks')

const fp = process.argv[2]
const files = process.argv.slice(3).reduce((acc, pattern) => {
  acc.push(...glob.sync(pattern, { absolute: true }))
  return acc
}, [])

const sections = Array.from(new Set(files)).map(require)
const modules = {}

remark()
  .use(generator, { sections, modules })
  .use(toc, { maxDepth: 2, tight: true })
  .use(collapse, {
    test: 'Table of Contents',
    summary: () => 'Click to expand'
  })
  .use(github)
  .use(bookmarks, { modules })

  // Disable padding to lessen diff noise
  .use(stringify, { paddedTable: false, looseTable: true })

  .process(vfile.readSync(fp), (err, file) => {
    if (err) throw err
    console.error(report(file))
    vfile.writeSync(file)
  })
