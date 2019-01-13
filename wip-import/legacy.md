### [q-level](https://github.com/mvayngrib/q-level)

levelup with Q promises

```js
db.batch([
    { type: 'put', key: 'a', value: 1 },
    { type: 'put', key: 'b', value: 2 },
    { type: 'put', key: 'c', value: 3 }
  ])
  .then(function() {
    return db.createReadStream()
  })
  .progress(function(data) {
    console.log(data)
  })
  .then(function() {
    return db.close()
  })
```
