'use strict'

// Don't add padding, for a cleaner diff when the table is regenerated.
module.exports = function (rows, opts) {
  const lines = []
  const columns = opts.columns.filter(column => !column.skip)

  lines.push(columns.map(column => column.name).join(' | '))
  lines.push(columns.map(column => ':-').join(' | '))

  for (let row of rows) {
    lines.push(Object.values(row).join(' | '))
  }

  return lines.join('\n')
}
