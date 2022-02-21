'use strict'

// TODO: move this to an npm module.

const semver = require('semver')
const memoize = require('thunky-with-args')
const shield = require('./shield-custom')
const getPackument = memoize(require('packument').factory({ keepAlive: true }))
const getPackage = require('packument-package').factory(getPackument)

function compatibility (versions, range) {
  const baseVersion = semver.minSatisfying(versions, range)

  if (!baseVersion) {
    throw new Error('no matching version in: ' + range)
  }

  // Ignore patch because it says nothing about compatibility.
  const major = semver.major(baseVersion)
  const minor = semver.minor(baseVersion)
  const short = major + '.' + minor

  return { major, minor, short }
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

exports.badge = function (module, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (opts == null) {
    opts = {}
  }

  exports.data(module, target, opts, (err, data) => {
    if (err) return callback(err)

    callback(null, {
      image: shield(data.subject, data.status, data.color, opts.shield),
      alt: data.subject
    })
  })
}

exports.data = function (module, target, opts, callback) {
  target = normalizeTarget(target)

  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  } else if (opts == null) {
    opts = {}
  }

  function finish (err, status, color) {
    if (err && opts.swallow) {
      console.error(err)
    } else if (err) {
      return callback(err)
    }

    callback(null, {
      subject: target.package,
      status: status || 'unknown',
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
    }

    getPackument(target.package, (err, packument) => {
      if (err) return finish(err, 'inaccessible')

      const versions = Object.keys(packument.versions)
      const latest = semver.maxSatisfying(versions, '*')
      const major = semver.major(latest)
      const minor = semver.minor(latest)

      let compat

      try {
        compat = compatibility(versions, range)
      } catch (err) {
        return finish(err, 'invalid')
      }

      if (target.package === 'levelup' || target.package === 'abstract-leveldown') {
        finish(null, compat.short, 'inactive')
      } else if (compat.major < major - 2) {
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
