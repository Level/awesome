'use strict'

// TODO: move this to an npm module.

const semver = require('semver')
const memoize = require('thunky-with-args')
const mapLimit = require('map-limit')
const intersperse = require('intersperse')
const image = require('./mdast-image')
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

function normalizeTarget (target) {
  if (typeof target === 'string') {
    return normalizeTarget({ package: target })
  } else if (typeof target === 'object' && target !== null) {
    if (typeof target.package !== 'string' || target.package === '') {
      throw new TypeError('target package must be a non-empty string')
    }

    return target
  } else {
    throw new TypeError('target must be a string or object')
  }
}

exports.url = function (module, target, done) {
  exports.data(module, target, (err, badge) => {
    if (err) return done(err)

    const left = encode(badge.left)
    const right = encode(badge.right)
    const color = encode(badge.color)

    done(null, `https://img.shields.io/badge/${left}-${right}-${color}.svg`)
  })
}

exports.badge = function (module, target, done) {
  target = normalizeTarget(target)

  exports.url(module, target, (err, url) => {
    if (err) return done(err)
    done(null, image(url, target.package))
  })
}

exports.badges = function (module, targets, done) {
  mapLimit(targets, 4, exports.badge.bind(null, module), (err, badges) => {
    if (err) return done(err)
    done(null, intersperse(badges, { type: 'html', value: '<br>' }))
  })
}

exports.data = function (module, target, opts, callback) {
  target = normalizeTarget(target)

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
      left: target.package,
      right: right || 'unknown',
      color: color || 'lightgrey'
    })
  }

  getPackage(module, function handlePackage (err, pkg) {
    if (err) return finish(err, 'inaccessible')

    const deps = pkg.dependencies
    const range = deps && deps[target.package]

    if (!range) {
      // A target can be a transient dependency
      if (target.via && deps && deps[target.via]) {
        const version = deps[target.via]
        return getPackage(target.via, { version }, handlePackage)
      }

      return finish(null, 'missing')
    } else if (range === '*') {
      // Discourage use of this specifier.
      return finish(null, range, 'red')
    }

    getPackument(target.package, (err, packument) => {
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
