'use strict'

// TODO: move this to an npm module. First gotta solve
// transient dependencies, see jsondown comment below.

const semver = require('semver')
const after = require('after')
const memoize = require('thunky-with-args')
const getPackument = memoize(require('packument').factory({ keepAlive: true }))
const getPackage = require('packument-package').factory(getPackument)

exports.compatibility = function (versions, range) {
  const baseVersion = semver.minSatisfying(versions, range)

  if (!baseVersion) {
    throw new Error('no matching version in: ' + range)
  }

  // Ignore patch because it says nothing about compatibility.
  const major = semver.major(baseVersion)
  const minor = semver.minor(baseVersion)
  const short = major + '.' + minor

  return { major, minor, short, long: baseVersion }
}

exports.url = function (module, dependency, done) {
  exports.data(module, dependency, (err, badge) => {
    if (err) return done(err)

    const left = encode(badge.left)
    const right = encode(badge.right)
    const color = encode(badge.color)

    done(null, `https://img.shields.io/badge/${left}-${right}-${color}.svg`)
  })
}

exports.badge = function (module, dependency, done) {
  exports.url(module, dependency, (err, url) => {
    if (err) return done(err)
    done(null, `![${dependency}](${url})`)
  })
}

exports.badges = function (module, dependencies, separator, done) {
  const badges = new Array(dependencies.length)

  // TODO: use `run-parallel` instead of `after`, to reduce boilerplate.
  const next = after(dependencies.length, (err) => {
    if (err) return done(err)
    done(null, badges.join(separator))
  })

  for (let [index, dependency] of dependencies.entries()) {
    exports.badge(module, dependency, (err, badge) => {
      if (err) return next(err)

      // Keep sort order.
      badges[index] = badge

      next()
    })
  }
}

exports.data = function (module, dependency, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts
    opts = null
  }

  function finish (err, right, color) {
    if (err && opts && opts.swallow) {
      console.error(err)
    } else if (err) {
      return callback(err)
    }

    callback(null, {
      left: dependency,
      right: right || 'unknown',
      color: color || 'lightgrey'
    })
  }

  getPackage(module, function handlePackage (err, pkg) {
    if (err) return finish(err, 'inaccessible')

    const deps = pkg.dependencies
    const range = deps && deps[dependency]

    if (!range) {
      // jsondown extends memdown, making abstract-leveldown a
      // transient dependency. TODO: find a generic solution.
      if (module === 'jsondown' && deps && deps.memdown) {
        return getPackage('memdown', { version: deps.memdown }, handlePackage)
      }

      return finish(null, 'missing')
    } else if (range === '*') {
      // Discourage use of this specifier.
      return finish(null, range, 'red')
    }

    getPackument(dependency, (err, packument) => {
      if (err) return finish(err, 'inaccessible')

      const versions = Object.keys(packument.versions)
      const latest = semver.maxSatisfying(versions, '*')
      const major = semver.major(latest)
      const minor = semver.minor(latest)

      try {
        var compat = exports.compatibility(versions, range)
      } catch (err) {
        return finish(err, 'invalid')
      }

      // TODO: should 1 major back be red?
      if (compat.major < major - 2) {
        finish(null, compat.short, 'red')
      } else if (compat.major < major) {
        finish(null, compat.short, 'orange')
      } else if (compat.minor < minor) {
        finish(null, compat.short, 'yellow')
      } else {
        finish(null, compat.short, 'brightgreen')
      }
    })
  })
}

function encode (text) {
  return encodeURIComponent(text.replace(/-/g, '--'))
}
