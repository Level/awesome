'use strict'

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const vfile = require('to-vfile')
const remark = require('remark')
const toc = require('remark-toc')
const github = require('remark-github')
const stringify = require('remark-stringify')
const generator = require('./remark-generator')
const bookmarker = require('./remark-bookmarks')

const file = path.resolve(process.argv[2])
const sections = glob.sync(process.argv[3], { absolute: true }).map(require)
const bookmarks = {}

remark()
  .use(generator, { sections, bookmarks })
  .use(toc, { tight: true })
  .use(github)
  .use(bookmarker, { bookmarks })

  // Disable padding to lessen diff noise
  .use(stringify, { paddedTable: false, looseTable: true })

  .process(vfile.readSync(file), (err, buffer) => {
    if (err) throw err
    fs.writeFileSync(file, buffer)
    console.log('Updated %s.', path.relative('.', file))
  })
