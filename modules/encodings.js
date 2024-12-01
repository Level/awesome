// Example of a custom encoding
const { Level } = require('level')
const charwise = require('charwise')

const db = new Level('./db', {
  keyEncoding: charwise
})

await db.put(['users', 2], 'example')
