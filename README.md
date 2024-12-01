# Awesome

**An open list of awesome [Level][level-org] modules and resources. [Add yours!](#contributing)**

[![level badge][level-badge]](https://github.com/level/awesome)
[![Test](https://github.com/Level/awesome/actions/workflows/test.yml/badge.svg)](https://github.com/Level/awesome/actions/workflows/test.yml)
[![Donate](https://img.shields.io/badge/donate-orange?logo=open-collective\&logoColor=fff)](https://opencollective.com/level)

## Table of Contents

<details><summary>Click to expand</summary>

-   [Core](#core)
-   [Storage](#storage)
-   [Encodings](#encodings)
-   [Streams](#streams)
-   [Shared Access](#shared-access)
-   [Processing](#processing)
-   [Databases](#databases)
-   [Data Structures](#data-structures)
-   [Transience](#transience)
-   [Atomicity](#atomicity)
-   [Jobs](#jobs)
-   [File System](#file-system)
-   [Utilities](#utilities)
-   [Replication](#replication)
-   [Tools](#tools)
-   [Benchmarking & Debugging](#benchmarking--debugging)
-   [Resources](#resources)
-   [Applications](#applications)
-   [Legacy](#legacy)
-   [Contributing](#contributing)
-   [License](#license)

</details>

## Core

### [`abstract-level`][abstract-level]

[![npm package version](https://img.shields.io/npm/v/abstract-level)](https://www.npmjs.com/package/abstract-level) [![npm downloads](https://img.shields.io/npm/dw/abstract-level)](https://www.npmjs.com/package/abstract-level) [![License](https://img.shields.io/npm/l/abstract-level?color=blue)](https://www.npmjs.com/package/abstract-level) [![Last commit](https://img.shields.io/github/last-commit/Level/abstract-level?color=brightgreen)](https://github.com/Level/abstract-level) [![Contributors](https://img.shields.io/github/contributors/Level/abstract-level?color=blue)](https://github.com/Level/abstract-level/graphs/contributors)

Abstract class for a lexicographically sorted key-value database.

## Storage

**Modules that implement [`abstract-level`][abstract-level].**

### [`level`][level]

[![npm package version](https://img.shields.io/npm/v/level)](https://www.npmjs.com/package/level) [![npm downloads](https://img.shields.io/npm/dw/level)](https://www.npmjs.com/package/level) [![License](https://img.shields.io/npm/l/level?color=blue)](https://www.npmjs.com/package/level) [![Last commit](https://img.shields.io/github/last-commit/Level/level?color=brightgreen)](https://github.com/Level/level) [![Contributors](https://img.shields.io/github/contributors/Level/level?color=blue)](https://github.com/Level/level/graphs/contributors) ![abstract-level](https://img.shields.io/badge/abstract--level-2.0-brightgreen.svg)

Universal [`abstract-level`][abstract-level] database for Node.js and browsers. Main entry point for beginners.

### [`classic-level`][classic-level]

[![npm package version](https://img.shields.io/npm/v/classic-level)](https://www.npmjs.com/package/classic-level) [![npm downloads](https://img.shields.io/npm/dw/classic-level)](https://www.npmjs.com/package/classic-level) [![License](https://img.shields.io/npm/l/classic-level?color=blue)](https://www.npmjs.com/package/classic-level) [![Last commit](https://img.shields.io/github/last-commit/Level/classic-level?color=brightgreen)](https://github.com/Level/classic-level) [![Contributors](https://img.shields.io/github/contributors/Level/classic-level?color=blue)](https://github.com/Level/classic-level/graphs/contributors) ![abstract-level](https://img.shields.io/badge/abstract--level-2.0-brightgreen.svg)

An [`abstract-level`][abstract-level] database backed by LevelDB.

### [`browser-level`][browser-level]

[![npm package version](https://img.shields.io/npm/v/browser-level)](https://www.npmjs.com/package/browser-level) [![npm downloads](https://img.shields.io/npm/dw/browser-level)](https://www.npmjs.com/package/browser-level) [![License](https://img.shields.io/npm/l/browser-level?color=blue)](https://www.npmjs.com/package/browser-level) [![Last commit](https://img.shields.io/github/last-commit/Level/browser-level?color=brightgreen)](https://github.com/Level/browser-level) [![Contributors](https://img.shields.io/github/contributors/Level/browser-level?color=blue)](https://github.com/Level/browser-level/graphs/contributors) ![abstract-level](https://img.shields.io/badge/abstract--level-2.0-brightgreen.svg)

An [`abstract-level`][abstract-level] database for browsers, backed by IndexedDB.

### [`memory-level`][memory-level]

[![npm package version](https://img.shields.io/npm/v/memory-level)](https://www.npmjs.com/package/memory-level) [![npm downloads](https://img.shields.io/npm/dw/memory-level)](https://www.npmjs.com/package/memory-level) [![License](https://img.shields.io/npm/l/memory-level?color=blue)](https://www.npmjs.com/package/memory-level) [![Last commit](https://img.shields.io/github/last-commit/Level/memory-level?color=brightgreen)](https://github.com/Level/memory-level) [![Contributors](https://img.shields.io/github/contributors/Level/memory-level?color=blue)](https://github.com/Level/memory-level/graphs/contributors) ![abstract-level](https://img.shields.io/badge/abstract--level-2.0-brightgreen.svg)

In-memory [`abstract-level`][abstract-level] database for Node.js and browsers.

## Encodings

```js
// Example of a custom encoding
const { Level } = require('level')
const charwise = require('charwise')

const db = new Level('./db', {
  keyEncoding: charwise
})

await db.put(['users', 2], 'example')
```

### [`protocol-buffers`][protocol-buffers]

[![npm package version](https://img.shields.io/npm/v/protocol-buffers)](https://www.npmjs.com/package/protocol-buffers) [![npm downloads](https://img.shields.io/npm/dw/protocol-buffers)](https://www.npmjs.com/package/protocol-buffers) [![License](https://img.shields.io/npm/l/protocol-buffers?color=blue)](https://www.npmjs.com/package/protocol-buffers) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/protocol-buffers?color=brightgreen)](https://github.com/mafintosh/protocol-buffers) [![Contributors](https://img.shields.io/github/contributors/mafintosh/protocol-buffers?color=blue)](https://github.com/mafintosh/protocol-buffers/graphs/contributors)

[Protocol Buffers](https://developers.google.com/protocol-buffers/) for Node.js. Compiled messages are valid as encodings.

### [`charwise`][charwise]

[![npm package version](https://img.shields.io/npm/v/charwise)](https://www.npmjs.com/package/charwise) [![npm downloads](https://img.shields.io/npm/dw/charwise)](https://www.npmjs.com/package/charwise) [![License](https://img.shields.io/npm/l/charwise?color=blue)](https://www.npmjs.com/package/charwise) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/charwise?color=brightgreen)](https://github.com/dominictarr/charwise) [![Contributors](https://img.shields.io/github/contributors/dominictarr/charwise?color=blue)](https://github.com/dominictarr/charwise/graphs/contributors)

Encode / decode with same encoded sort order as [`bytewise`][bytewise].

### [`bytewise`][bytewise]

[![npm package version](https://img.shields.io/npm/v/bytewise)](https://www.npmjs.com/package/bytewise) [![npm downloads](https://img.shields.io/npm/dw/bytewise)](https://www.npmjs.com/package/bytewise) [![License](https://img.shields.io/npm/l/bytewise?color=blue)](https://www.npmjs.com/package/bytewise) [![Last commit](https://img.shields.io/github/last-commit/deanlandolt/bytewise)](https://github.com/deanlandolt/bytewise) [![Contributors](https://img.shields.io/github/contributors/deanlandolt/bytewise?color=blue)](https://github.com/deanlandolt/bytewise/graphs/contributors)

Binary serialization which sorts bytewise for arbitrarily complex data structures.  NB. Use [`charwise`][charwise] if possible. Gives you almost everything `bytewise` does but much faster.

### [`lexicographic-integer-encoding`][lexicographic-integer-encoding]

[![npm package version](https://img.shields.io/npm/v/lexicographic-integer-encoding)](https://www.npmjs.com/package/lexicographic-integer-encoding) [![npm downloads](https://img.shields.io/npm/dw/lexicographic-integer-encoding)](https://www.npmjs.com/package/lexicographic-integer-encoding) [![License](https://img.shields.io/npm/l/lexicographic-integer-encoding?color=blue)](https://www.npmjs.com/package/lexicographic-integer-encoding) [![Last commit](https://img.shields.io/github/last-commit/vweevers/lexicographic-integer-encoding?color=brightgreen)](https://github.com/vweevers/lexicographic-integer-encoding) [![Contributors](https://img.shields.io/github/contributors/vweevers/lexicographic-integer-encoding?color=blue)](https://github.com/vweevers/lexicographic-integer-encoding/graphs/contributors)

Wraps [`lexicographic-integer`](https://github.com/substack/lexicographic-integer).

## Streams

**[Node.js stream](https://nodejs.org/api/stream.html), [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) or [`pull-stream`](https://github.com/pull-stream/pull-stream) implementations for reading and writing data from/to databases.**

### [`level-read-stream`][level-read-stream]

[![npm package version](https://img.shields.io/npm/v/level-read-stream)](https://www.npmjs.com/package/level-read-stream) [![npm downloads](https://img.shields.io/npm/dw/level-read-stream)](https://www.npmjs.com/package/level-read-stream) [![License](https://img.shields.io/npm/l/level-read-stream?color=blue)](https://www.npmjs.com/package/level-read-stream) [![Last commit](https://img.shields.io/github/last-commit/Level/read-stream?color=brightgreen)](https://github.com/Level/read-stream) [![Contributors](https://img.shields.io/github/contributors/Level/read-stream?color=blue)](https://github.com/Level/read-stream/graphs/contributors)

Read from an [`abstract-level`][abstract-level] database using Node.js streams.

### [`level-web-stream`][level-web-stream]

[![npm package version](https://img.shields.io/npm/v/level-web-stream)](https://www.npmjs.com/package/level-web-stream) [![npm downloads](https://img.shields.io/npm/dw/level-web-stream)](https://www.npmjs.com/package/level-web-stream) [![License](https://img.shields.io/npm/l/level-web-stream?color=blue)](https://www.npmjs.com/package/level-web-stream) [![Last commit](https://img.shields.io/github/last-commit/Level/web-stream)](https://github.com/Level/web-stream) [![Contributors](https://img.shields.io/github/contributors/Level/web-stream?color=blue)](https://github.com/Level/web-stream/graphs/contributors)

Read from an [`abstract-level`][abstract-level] database using Web Streams.

### [`level-ws`][level-ws]

[![npm package version](https://img.shields.io/npm/v/level-ws)](https://www.npmjs.com/package/level-ws) [![npm downloads](https://img.shields.io/npm/dw/level-ws)](https://www.npmjs.com/package/level-ws) [![License](https://img.shields.io/npm/l/level-ws?color=blue)](https://www.npmjs.com/package/level-ws) [![Last commit](https://img.shields.io/github/last-commit/Level/level-ws)](https://github.com/Level/level-ws) [![Contributors](https://img.shields.io/github/contributors/Level/level-ws?color=blue)](https://github.com/Level/level-ws/graphs/contributors)

A basic writable stream for [`abstract-level`][abstract-level] databases, using Node.js core streams. Has not been updated for `abstract-level` 2 yet (to use the promise API).

## Shared Access

### [`many-level`][many-level]

[![npm package version](https://img.shields.io/npm/v/many-level)](https://www.npmjs.com/package/many-level) [![npm downloads](https://img.shields.io/npm/dw/many-level)](https://www.npmjs.com/package/many-level) [![License](https://img.shields.io/npm/l/many-level?color=blue)](https://www.npmjs.com/package/many-level) [![Last commit](https://img.shields.io/github/last-commit/Level/many-level)](https://github.com/Level/many-level) [![Contributors](https://img.shields.io/github/contributors/Level/many-level?color=blue)](https://github.com/Level/many-level/graphs/contributors) ![abstract-level](https://img.shields.io/badge/abstract--level-1.0-orange.svg)

Share an [`abstract-level`][abstract-level] database over the network or other kind of stream. Supersedes [`multileveldown`][multileveldown] and [`multilevel`][multilevel].

### [`rave-level`][rave-level]

[![npm package version](https://img.shields.io/npm/v/rave-level)](https://www.npmjs.com/package/rave-level) [![npm downloads](https://img.shields.io/npm/dw/rave-level)](https://www.npmjs.com/package/rave-level) [![License](https://img.shields.io/npm/l/rave-level?color=blue)](https://www.npmjs.com/package/rave-level) [![Last commit](https://img.shields.io/github/last-commit/Level/rave-level)](https://github.com/Level/rave-level) [![Contributors](https://img.shields.io/github/contributors/Level/rave-level?color=blue)](https://github.com/Level/rave-level/graphs/contributors) ![abstract-level](https://img.shields.io/badge/abstract--level-1.0-orange.svg)

Use a LevelDB database from multiple processes with seamless failover. Supersedes [`level-party`][level-party].

## Processing

**Modules for indexing, alternative forms of querying data, MapReduce models and other forms of data processing. This section has not been updated for [`abstract-level`][abstract-level] yet.**

### [`level-auto-index`][level-auto-index]

[![npm package version](https://img.shields.io/npm/v/level-auto-index)](https://www.npmjs.com/package/level-auto-index) [![npm downloads](https://img.shields.io/npm/dw/level-auto-index)](https://www.npmjs.com/package/level-auto-index) [![License](https://img.shields.io/npm/l/level-auto-index?color=blue)](https://www.npmjs.com/package/level-auto-index) [![Last commit](https://img.shields.io/github/last-commit/hypermodules/level-auto-index)](https://github.com/hypermodules/level-auto-index) [![Contributors](https://img.shields.io/github/contributors/hypermodules/level-auto-index?color=blue)](https://github.com/hypermodules/level-auto-index/graphs/contributors)

Automatic secondary indexing for [`levelup`][levelup] and [`subleveldown`][subleveldown].

### [`jsonquery`][jsonquery]

[![npm package version](https://img.shields.io/npm/v/jsonquery)](https://www.npmjs.com/package/jsonquery) [![npm downloads](https://img.shields.io/npm/dw/jsonquery)](https://www.npmjs.com/package/jsonquery) [![License](https://img.shields.io/npm/l/jsonquery?color=blue)](https://www.npmjs.com/package/jsonquery) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/jsonquery)](https://github.com/eugeneware/jsonquery) [![Contributors](https://img.shields.io/github/contributors/eugeneware/jsonquery?color=blue)](https://github.com/eugeneware/jsonquery/graphs/contributors)

Query [`levelup`][levelup] with a MongoDB-like query API that returns streams.

### [`jsonquery-engine`][jsonquery-engine]

[![npm package version](https://img.shields.io/npm/v/jsonquery-engine)](https://www.npmjs.com/package/jsonquery-engine) [![npm downloads](https://img.shields.io/npm/dw/jsonquery-engine)](https://www.npmjs.com/package/jsonquery-engine) [![License](https://img.shields.io/npm/l/jsonquery-engine?color=blue)](https://www.npmjs.com/package/jsonquery-engine) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/jsonquery-engine)](https://github.com/eugeneware/jsonquery-engine) [![Contributors](https://img.shields.io/github/contributors/eugeneware/jsonquery-engine?color=blue)](https://github.com/eugeneware/jsonquery-engine/graphs/contributors)

A full MongoDB query language implementation with indexes for querying [`levelup`][levelup].

### [`level-indico`][level-indico]

[![npm package version](https://img.shields.io/npm/v/level-indico)](https://www.npmjs.com/package/level-indico) [![npm downloads](https://img.shields.io/npm/dw/level-indico)](https://www.npmjs.com/package/level-indico) [![License](https://img.shields.io/npm/l/level-indico?color=blue)](https://www.npmjs.com/package/level-indico) [![Last commit](https://img.shields.io/github/last-commit/mariocasciaro/level-indico)](https://github.com/mariocasciaro/level-indico) [![Contributors](https://img.shields.io/github/contributors/mariocasciaro/level-indico?color=blue)](https://github.com/mariocasciaro/level-indico/graphs/contributors)

Yet another indexing plugin for [`levelup`][levelup]. By providing only a low-level querying mechanism it gives you the power to build more complicated and optimized queries on top of it.<br><br>NB. Relies on [`bytewise`][bytewise] and [`level-sublevel`][level-sublevel], both of which have caveats.

### [`level-inverted-index`][level-inverted-index]

[![npm package version](https://img.shields.io/npm/v/level-inverted-index)](https://www.npmjs.com/package/level-inverted-index) [![npm downloads](https://img.shields.io/npm/dw/level-inverted-index)](https://www.npmjs.com/package/level-inverted-index) [![License](https://img.shields.io/npm/l/level-inverted-index?color=blue)](https://www.npmjs.com/package/level-inverted-index) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-inverted-index)](https://github.com/dominictarr/level-inverted-index) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-inverted-index?color=blue)](https://github.com/dominictarr/level-inverted-index/graphs/contributors)

Create an inverted index for full-text search.

### [`map-reduce`][map-reduce]

[![npm package version](https://img.shields.io/npm/v/map-reduce)](https://www.npmjs.com/package/map-reduce) [![npm downloads](https://img.shields.io/npm/dw/map-reduce)](https://www.npmjs.com/package/map-reduce) [![License](https://img.shields.io/npm/l/map-reduce?color=blue)](https://www.npmjs.com/package/map-reduce) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/map-reduce)](https://github.com/dominictarr/map-reduce) [![Contributors](https://img.shields.io/github/contributors/dominictarr/map-reduce?color=blue)](https://github.com/dominictarr/map-reduce/graphs/contributors)

A MapReduce implementation on top of [`levelup`][levelup]. Allows you to define a map reduce query that will run on top of your db. The map reduces are incremental, and you can query the results in real-time.

### [`level-map-merge`][level-map-merge]

[![npm package version](https://img.shields.io/npm/v/level-map-merge)](https://www.npmjs.com/package/level-map-merge) [![npm downloads](https://img.shields.io/npm/dw/level-map-merge)](https://www.npmjs.com/package/level-map-merge) [![License](https://img.shields.io/npm/l/level-map-merge?color=blue)](https://www.npmjs.com/package/level-map-merge) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-map-merge)](https://github.com/dominictarr/level-map-merge) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-map-merge?color=blue)](https://github.com/dominictarr/level-map-merge/graphs/contributors)

Like [`map-reduce`][map-reduce] but simpler. Has a batch component that runs periodically, and a real-time component that fills in the gaps. Good for generating inverted indexes.

### [`level-queryengine`][level-queryengine]

[![npm package version](https://img.shields.io/npm/v/level-queryengine)](https://www.npmjs.com/package/level-queryengine) [![npm downloads](https://img.shields.io/npm/dw/level-queryengine)](https://www.npmjs.com/package/level-queryengine) [![License](https://img.shields.io/npm/l/level-queryengine?color=blue)](https://www.npmjs.com/package/level-queryengine) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-queryengine)](https://github.com/eugeneware/level-queryengine) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-queryengine?color=blue)](https://github.com/eugeneware/level-queryengine/graphs/contributors)

A generic pluggable query-engine system (that supports indexes) for [`levelup`][levelup].

### [`level-trigger`][level-trigger]

[![npm package version](https://img.shields.io/npm/v/level-trigger)](https://www.npmjs.com/package/level-trigger) [![npm downloads](https://img.shields.io/npm/dw/level-trigger)](https://www.npmjs.com/package/level-trigger) [![License](https://img.shields.io/npm/l/level-trigger?color=blue)](https://www.npmjs.com/package/level-trigger) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-trigger)](https://github.com/dominictarr/level-trigger) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-trigger?color=blue)](https://github.com/dominictarr/level-trigger/graphs/contributors)

Triggers for [`levelup`][levelup]. Runs an async job when a key changes. All jobs will eventually run, even across restarts!

### [`levels`][levels]

[![npm package version](https://img.shields.io/npm/v/levels)](https://www.npmjs.com/package/levels) [![npm downloads](https://img.shields.io/npm/dw/levels)](https://www.npmjs.com/package/levels) [![License](https://img.shields.io/npm/l/levels?color=blue)](https://www.npmjs.com/package/levels) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/levels)](https://github.com/eugeneware/levels) [![Contributors](https://img.shields.io/github/contributors/eugeneware/levels?color=blue)](https://github.com/eugeneware/levels/graphs/contributors)

A light-weight full text search engine for [`levelup`][levelup] (Port of TJ's [reds](https://github.com/visionmedia/reds) redis search engine).

### [`map-reduce-chained`][map-reduce-chained]

[![npm package version](https://img.shields.io/npm/v/map-reduce-chained)](https://www.npmjs.com/package/map-reduce-chained) [![npm downloads](https://img.shields.io/npm/dw/map-reduce-chained)](https://www.npmjs.com/package/map-reduce-chained) [![License](https://img.shields.io/npm/l/map-reduce-chained?color=blue)](https://www.npmjs.com/package/map-reduce-chained) [![Last commit](https://img.shields.io/github/last-commit/ryanramage/map-reduce-chained)](https://github.com/ryanramage/map-reduce-chained) [![Contributors](https://img.shields.io/github/contributors/ryanramage/map-reduce-chained?color=blue)](https://github.com/ryanramage/map-reduce-chained/graphs/contributors)

Extends [`map-reduce`][map-reduce] and [`level-mapped-index`][level-mapped-index] to provide easy to setup chained MapReduce. An example use case is to find the top 10 values after a reduce.

### [`path-engine`][path-engine]

[![npm package version](https://img.shields.io/npm/v/path-engine)](https://www.npmjs.com/package/path-engine) [![npm downloads](https://img.shields.io/npm/dw/path-engine)](https://www.npmjs.com/package/path-engine) [![License](https://img.shields.io/npm/l/path-engine?color=blue)](https://www.npmjs.com/package/path-engine) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/path-engine)](https://github.com/eugeneware/path-engine) [![Contributors](https://img.shields.io/github/contributors/eugeneware/path-engine?color=blue)](https://github.com/eugeneware/path-engine/graphs/contributors)

Query [`levelup`][levelup] using a JavaScript property path array syntax with indexes.

### [`subindex`][subindex]

[![npm package version](https://img.shields.io/npm/v/subindex)](https://www.npmjs.com/package/subindex) [![npm downloads](https://img.shields.io/npm/dw/subindex)](https://www.npmjs.com/package/subindex) [![License](https://img.shields.io/npm/l/subindex?color=blue)](https://www.npmjs.com/package/subindex) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/subindex)](https://github.com/eugeneware/subindex) [![Contributors](https://img.shields.io/github/contributors/eugeneware/subindex?color=blue)](https://github.com/eugeneware/subindex/graphs/contributors)

Generic pluggable indexing system for [`levelup`][levelup].

### [`level-sec`][level-sec]

[![npm package version](https://img.shields.io/npm/v/level-sec)](https://www.npmjs.com/package/level-sec) [![npm downloads](https://img.shields.io/npm/dw/level-sec)](https://www.npmjs.com/package/level-sec) [![License](https://img.shields.io/npm/l/level-sec?color=blue)](https://www.npmjs.com/package/level-sec) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sec)](https://github.com/juliangruber/level-sec) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sec?color=blue)](https://github.com/juliangruber/level-sec/graphs/contributors)

High-level API for creating secondary indexes.

### [`level-secondary`][level-secondary]

[![npm package version](https://img.shields.io/npm/v/level-secondary)](https://www.npmjs.com/package/level-secondary) [![npm downloads](https://img.shields.io/npm/dw/level-secondary)](https://www.npmjs.com/package/level-secondary) [![License](https://img.shields.io/npm/l/level-secondary?color=blue)](https://www.npmjs.com/package/level-secondary) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-secondary)](https://github.com/juliangruber/level-secondary) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-secondary?color=blue)](https://github.com/juliangruber/level-secondary/graphs/contributors)

Create and query secondary indexes.

### [`inverted-index`][inverted-index]

[![npm package version](https://img.shields.io/npm/v/inverted-index)](https://www.npmjs.com/package/inverted-index) [![npm downloads](https://img.shields.io/npm/dw/inverted-index)](https://www.npmjs.com/package/inverted-index) [![License](https://img.shields.io/npm/l/inverted-index?color=blue)](https://www.npmjs.com/package/inverted-index) [![Last commit](https://img.shields.io/github/last-commit/kordon/inverted)](https://github.com/kordon/inverted) [![Contributors](https://img.shields.io/github/contributors/kordon/inverted?color=blue)](https://github.com/kordon/inverted/graphs/contributors)

Inverted index built upon [`levelup`][levelup].

### [`level-index-update`][level-index-update]

[![npm package version](https://img.shields.io/npm/v/level-index-update)](https://www.npmjs.com/package/level-index-update) [![npm downloads](https://img.shields.io/npm/dw/level-index-update)](https://www.npmjs.com/package/level-index-update) [![License](https://img.shields.io/npm/l/level-index-update?color=blue)](https://www.npmjs.com/package/level-index-update) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/level-index-update)](https://github.com/binocarlos/level-index-update) [![Contributors](https://img.shields.io/github/contributors/binocarlos/level-index-update?color=blue)](https://github.com/binocarlos/level-index-update/graphs/contributors)

Remove the old indexes in the same batch as the new ones are inserted.

### [`range-index`][range-index]

[![npm package version](https://img.shields.io/npm/v/range-index)](https://www.npmjs.com/package/range-index) [![npm downloads](https://img.shields.io/npm/dw/range-index)](https://www.npmjs.com/package/range-index) [![License](https://img.shields.io/npm/l/range-index?color=blue)](https://www.npmjs.com/package/range-index) [![Last commit](https://img.shields.io/github/last-commit/kordon/range)](https://github.com/kordon/range) [![Contributors](https://img.shields.io/github/contributors/kordon/range?color=blue)](https://github.com/kordon/range/graphs/contributors)

Range indexes for [`levelup`][levelup].

### [`level-path-index`][level-path-index]

[![npm package version](https://img.shields.io/npm/v/level-path-index)](https://www.npmjs.com/package/level-path-index) [![npm downloads](https://img.shields.io/npm/dw/level-path-index)](https://www.npmjs.com/package/level-path-index) [![License](https://img.shields.io/npm/l/level-path-index?color=blue)](https://www.npmjs.com/package/level-path-index) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/level-path-index)](https://github.com/binocarlos/level-path-index) [![Contributors](https://img.shields.io/github/contributors/binocarlos/level-path-index?color=blue)](https://github.com/binocarlos/level-path-index/graphs/contributors)

Index properties of items that live in a tree of materialized paths.

### [`level-sql`][level-sql]

[![npm package version](https://img.shields.io/npm/v/level-sql)](https://www.npmjs.com/package/level-sql) [![npm downloads](https://img.shields.io/npm/dw/level-sql)](https://www.npmjs.com/package/level-sql) [![License](https://img.shields.io/npm/l/level-sql?color=blue)](https://www.npmjs.com/package/level-sql) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-sql)](https://github.com/hij1nx/level-sql) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-sql?color=blue)](https://github.com/hij1nx/level-sql/graphs/contributors)

SQL queries for [`levelup`][levelup].

### [`level-hash-index`][level-hash-index]

[![npm package version](https://img.shields.io/npm/v/level-hash-index)](https://www.npmjs.com/package/level-hash-index) [![npm downloads](https://img.shields.io/npm/dw/level-hash-index)](https://www.npmjs.com/package/level-hash-index) [![License](https://img.shields.io/npm/l/level-hash-index?color=blue)](https://www.npmjs.com/package/level-hash-index) [![Last commit](https://img.shields.io/github/last-commit/smallhelm/level-hash-index)](https://github.com/smallhelm/level-hash-index) [![Contributors](https://img.shields.io/github/contributors/smallhelm/level-hash-index?color=blue)](https://github.com/smallhelm/level-hash-index/graphs/contributors)

Store any string into [`levelup`][levelup], and get a collision free hash of that value that you can use in an index (or similar).

### [`level-idx`][level-idx]

[![npm package version](https://img.shields.io/npm/v/level-idx)](https://www.npmjs.com/package/level-idx) [![npm downloads](https://img.shields.io/npm/dw/level-idx)](https://www.npmjs.com/package/level-idx) [![License](https://img.shields.io/npm/l/level-idx?color=blue)](https://www.npmjs.com/package/level-idx) [![Last commit](https://img.shields.io/github/last-commit/hypermodules/level-idx)](https://github.com/hypermodules/level-idx) [![Contributors](https://img.shields.io/github/contributors/hypermodules/level-idx?color=blue)](https://github.com/hypermodules/level-idx/graphs/contributors)

Another high-level API for creating secondary indexes, using [`level-auto-index`][level-auto-index].

### [`level-indexer`][level-indexer]

[![npm package version](https://img.shields.io/npm/v/level-indexer)](https://www.npmjs.com/package/level-indexer) [![npm downloads](https://img.shields.io/npm/dw/level-indexer)](https://www.npmjs.com/package/level-indexer) [![License](https://img.shields.io/npm/l/level-indexer?color=blue)](https://www.npmjs.com/package/level-indexer) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-indexer)](https://github.com/mafintosh/level-indexer) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-indexer?color=blue)](https://github.com/mafintosh/level-indexer/graphs/contributors)

Generic indexer for [`levelup`][levelup]. Only stores document keys for space efficiency.

### [`level-librarian`][level-librarian]

[![npm package version](https://img.shields.io/npm/v/level-librarian)](https://www.npmjs.com/package/level-librarian) [![npm downloads](https://img.shields.io/npm/dw/level-librarian)](https://www.npmjs.com/package/level-librarian) [![License](https://img.shields.io/npm/l/level-librarian?color=blue)](https://www.npmjs.com/package/level-librarian) [![Last commit](https://img.shields.io/github/last-commit/microstar-db/level-librarian)](https://github.com/microstar-db/level-librarian) [![Contributors](https://img.shields.io/github/contributors/microstar-db/level-librarian?color=blue)](https://github.com/microstar-db/level-librarian/graphs/contributors)

Lightweight indexing and querying with the LLCJ query language.

### [`level-match-index`][level-match-index]

[![npm package version](https://img.shields.io/npm/v/level-match-index)](https://www.npmjs.com/package/level-match-index) [![npm downloads](https://img.shields.io/npm/dw/level-match-index)](https://www.npmjs.com/package/level-match-index) [![License](https://img.shields.io/npm/l/level-match-index?color=blue)](https://www.npmjs.com/package/level-match-index) [![Last commit](https://img.shields.io/github/last-commit/mmckegg/level-match-index)](https://github.com/mmckegg/level-match-index) [![Contributors](https://img.shields.io/github/contributors/mmckegg/level-match-index?color=blue)](https://github.com/mmckegg/level-match-index/graphs/contributors)

Index and filter [`level-sublevel`][level-sublevel] databases and watch for future changes.

### [`level-assoc`][level-assoc]

[![npm package version](https://img.shields.io/npm/v/level-assoc)](https://www.npmjs.com/package/level-assoc) [![npm downloads](https://img.shields.io/npm/dw/level-assoc)](https://www.npmjs.com/package/level-assoc) [![License](https://img.shields.io/npm/l/level-assoc?color=blue)](https://www.npmjs.com/package/level-assoc) [![Last commit](https://img.shields.io/github/last-commit/substack/level-assoc)](https://github.com/substack/level-assoc) [![Contributors](https://img.shields.io/github/contributors/substack/level-assoc?color=blue)](https://github.com/substack/level-assoc/graphs/contributors)

Relational foreign key associations (`hasMany`, `belongsTo`) for [`levelup`][levelup].

### [`level-tree-index`][level-tree-index]

[![npm package version](https://img.shields.io/npm/v/level-tree-index)](https://www.npmjs.com/package/level-tree-index) [![npm downloads](https://img.shields.io/npm/dw/level-tree-index)](https://www.npmjs.com/package/level-tree-index) [![License](https://img.shields.io/npm/l/level-tree-index?color=blue)](https://www.npmjs.com/package/level-tree-index) [![Last commit](https://img.shields.io/github/last-commit/biobricks/level-tree-index)](https://github.com/biobricks/level-tree-index) [![Contributors](https://img.shields.io/github/contributors/biobricks/level-tree-index?color=blue)](https://github.com/biobricks/level-tree-index/graphs/contributors)

Tree indexer for [`levelup`][levelup].

### [`changes-index`][changes-index]

[![npm package version](https://img.shields.io/npm/v/changes-index)](https://www.npmjs.com/package/changes-index) [![npm downloads](https://img.shields.io/npm/dw/changes-index)](https://www.npmjs.com/package/changes-index) [![License](https://img.shields.io/npm/l/changes-index?color=blue)](https://www.npmjs.com/package/changes-index) [![Last commit](https://img.shields.io/github/last-commit/substack/changes-index)](https://github.com/substack/changes-index) [![Contributors](https://img.shields.io/github/contributors/substack/changes-index?color=blue)](https://github.com/substack/changes-index/graphs/contributors)

Create indexes from a [changes-feed](https://github.com/mafintosh/changes-feed). Provides a way to create a materialized view on top of an append-only log.

### [`changesdown`][changesdown]

[![npm package version](https://img.shields.io/npm/v/changesdown)](https://www.npmjs.com/package/changesdown) [![npm downloads](https://img.shields.io/npm/dw/changesdown)](https://www.npmjs.com/package/changesdown) [![License](https://img.shields.io/npm/l/changesdown?color=blue)](https://www.npmjs.com/package/changesdown) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/changesdown)](https://github.com/mafintosh/changesdown) [![Contributors](https://img.shields.io/github/contributors/mafintosh/changesdown?color=blue)](https://github.com/mafintosh/changesdown/graphs/contributors)

[`levelup`][levelup] interface that uses an [`abstract-leveldown`][abstract-leveldown] store that writes to a [changes-feed](https://github.com/mafintosh/changes-feed) to store its state.

### [`level-ordered`][level-ordered]

[![npm package version](https://img.shields.io/npm/v/level-ordered)](https://www.npmjs.com/package/level-ordered) [![npm downloads](https://img.shields.io/npm/dw/level-ordered)](https://www.npmjs.com/package/level-ordered) [![License](https://img.shields.io/npm/l/level-ordered?color=blue)](https://www.npmjs.com/package/level-ordered) [![Last commit](https://img.shields.io/github/last-commit/eranbnn/level-ordered)](https://github.com/eranbnn/level-ordered) [![Contributors](https://img.shields.io/github/contributors/eranbnn/level-ordered?color=blue)](https://github.com/eranbnn/level-ordered/graphs/contributors)

A wrapper for [`level`][level] that keeps inserted items ordered.

## Databases

**Complete Node.js databases built with Level.**

### [`dat`][dat]

[![npm package version](https://img.shields.io/npm/v/dat)](https://www.npmjs.com/package/dat) [![npm downloads](https://img.shields.io/npm/dw/dat)](https://www.npmjs.com/package/dat) [![License](https://img.shields.io/npm/l/dat?color=blue)](https://www.npmjs.com/package/dat) [![Last commit](https://img.shields.io/github/last-commit/maxogden/dat)](https://github.com/maxogden/dat) [![Contributors](https://img.shields.io/github/contributors/maxogden/dat?color=blue)](https://github.com/maxogden/dat/graphs/contributors)

Lets you build streaming data pipelines that can be shared and replicated by others.

### [`pouchdb`][pouchdb]

[![npm package version](https://img.shields.io/npm/v/pouchdb)](https://www.npmjs.com/package/pouchdb) [![npm downloads](https://img.shields.io/npm/dw/pouchdb)](https://www.npmjs.com/package/pouchdb) [![License](https://img.shields.io/npm/l/pouchdb?color=blue)](https://www.npmjs.com/package/pouchdb)

PouchDB allows you to store and query data offline and then sync with CouchDB when online. For Node, browser and mobile.

### [`levelgraph`][levelgraph]

[![npm package version](https://img.shields.io/npm/v/levelgraph)](https://www.npmjs.com/package/levelgraph) [![npm downloads](https://img.shields.io/npm/dw/levelgraph)](https://www.npmjs.com/package/levelgraph) [![License](https://img.shields.io/npm/l/levelgraph?color=blue)](https://www.npmjs.com/package/levelgraph) [![Last commit](https://img.shields.io/github/last-commit/mcollina/node-levelgraph)](https://github.com/mcollina/node-levelgraph) [![Contributors](https://img.shields.io/github/contributors/mcollina/node-levelgraph?color=blue)](https://github.com/mcollina/node-levelgraph/graphs/contributors)

A Graph database built on top of [`levelup`][levelup] with pattern-matching and join support.

### [`linvodb3`][linvodb3]

[![npm package version](https://img.shields.io/npm/v/linvodb3)](https://www.npmjs.com/package/linvodb3) [![npm downloads](https://img.shields.io/npm/dw/linvodb3)](https://www.npmjs.com/package/linvodb3) [![License](https://img.shields.io/npm/l/linvodb3?color=blue)](https://www.npmjs.com/package/linvodb3) [![Last commit](https://img.shields.io/github/last-commit/Ivshti/linvodb3)](https://github.com/Ivshti/linvodb3) [![Contributors](https://img.shields.io/github/contributors/Ivshti/linvodb3?color=blue)](https://github.com/Ivshti/linvodb3/graphs/contributors)

Persistent database on top of [`levelup`][levelup] for Node.js/NW.js with MongoDB-style queries, Mongoose-like models and a map/reduce system.

### [`rxdb`][rxdb]

[![npm package version](https://img.shields.io/npm/v/rxdb)](https://www.npmjs.com/package/rxdb) [![npm downloads](https://img.shields.io/npm/dw/rxdb)](https://www.npmjs.com/package/rxdb) [![License](https://img.shields.io/npm/l/rxdb?color=blue)](https://www.npmjs.com/package/rxdb) [![Last commit](https://img.shields.io/github/last-commit/pubkey/rxdb)](https://github.com/pubkey/rxdb) [![Contributors](https://img.shields.io/github/contributors/pubkey/rxdb?color=blue)](https://github.com/pubkey/rxdb/graphs/contributors)

Event-driven database based on [`pouchdb`][pouchdb]. Optimized for reactive programming with observables. Events and state is automatically shared between multiple browser tabs. Queries are defined by the mongoDB mango-standard.

### [`search-index`][search-index]

[![npm package version](https://img.shields.io/npm/v/search-index)](https://www.npmjs.com/package/search-index) [![npm downloads](https://img.shields.io/npm/dw/search-index)](https://www.npmjs.com/package/search-index) [![License](https://img.shields.io/npm/l/search-index?color=blue)](https://www.npmjs.com/package/search-index) [![Last commit](https://img.shields.io/github/last-commit/fergiemcdowall/search-index)](https://github.com/fergiemcdowall/search-index) [![Contributors](https://img.shields.io/github/contributors/fergiemcdowall/search-index?color=blue)](https://github.com/fergiemcdowall/search-index/graphs/contributors)

A persistent full text search engine for browser and Node.js.

## Data Structures

**Modules that utilize a specific key/value scheme to provide a higher-level data structure.**

### [`merkle-dag`][merkle-dag]

[![npm package version](https://img.shields.io/npm/v/merkle-dag)](https://www.npmjs.com/package/merkle-dag) [![npm downloads](https://img.shields.io/npm/dw/merkle-dag)](https://www.npmjs.com/package/merkle-dag) [![License](https://img.shields.io/npm/l/merkle-dag?color=blue)](https://www.npmjs.com/package/merkle-dag) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/merkle-dag)](https://github.com/mafintosh/merkle-dag) [![Contributors](https://img.shields.io/github/contributors/mafintosh/merkle-dag?color=blue)](https://github.com/mafintosh/merkle-dag/graphs/contributors)

Merkle DAG on top of LevelDB

### [`merkle-patricia-tree`][merkle-patricia-tree]

[![npm package version](https://img.shields.io/npm/v/merkle-patricia-tree)](https://www.npmjs.com/package/merkle-patricia-tree) [![npm downloads](https://img.shields.io/npm/dw/merkle-patricia-tree)](https://www.npmjs.com/package/merkle-patricia-tree) [![License](https://img.shields.io/npm/l/merkle-patricia-tree?color=blue)](https://www.npmjs.com/package/merkle-patricia-tree) [![Last commit](https://img.shields.io/github/last-commit/ethereumjs/merkle-patricia-tree)](https://github.com/ethereumjs/merkle-patricia-tree) [![Contributors](https://img.shields.io/github/contributors/ethereumjs/merkle-patricia-tree?color=blue)](https://github.com/ethereumjs/merkle-patricia-tree/graphs/contributors)

Implementation of the modified merkle patricia tree as specified in [Ethereum's yellow paper](http://gavwood.com/Paper.pdf).

### [`level-array`][level-array]

[![npm package version](https://img.shields.io/npm/v/level-array)](https://www.npmjs.com/package/level-array) [![npm downloads](https://img.shields.io/npm/dw/level-array)](https://www.npmjs.com/package/level-array) [![License](https://img.shields.io/npm/l/level-array?color=blue)](https://www.npmjs.com/package/level-array) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-array)](https://github.com/juliangruber/level-array) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-array?color=blue)](https://github.com/juliangruber/level-array/graphs/contributors)

The array datatype inside [`levelup`][levelup].

### [`level-set`][level-set]

[![npm package version](https://img.shields.io/npm/v/level-set)](https://www.npmjs.com/package/level-set) [![npm downloads](https://img.shields.io/npm/dw/level-set)](https://www.npmjs.com/package/level-set) [![License](https://img.shields.io/npm/l/level-set?color=blue)](https://www.npmjs.com/package/level-set) [![Last commit](https://img.shields.io/github/last-commit/maiah/level-set)](https://github.com/maiah/level-set) [![Contributors](https://img.shields.io/github/contributors/maiah/level-set?color=blue)](https://github.com/maiah/level-set/graphs/contributors)

Add a `set` method to [`levelup`][levelup] for saving objects in a tree-like structure.

### [`level-push`][level-push]

[![npm package version](https://img.shields.io/npm/v/level-push)](https://www.npmjs.com/package/level-push) [![npm downloads](https://img.shields.io/npm/dw/level-push)](https://www.npmjs.com/package/level-push) [![License](https://img.shields.io/npm/l/level-push?color=blue)](https://www.npmjs.com/package/level-push) [![Last commit](https://img.shields.io/github/last-commit/maiah/level-push)](https://github.com/maiah/level-push) [![Contributors](https://img.shields.io/github/contributors/maiah/level-push?color=blue)](https://github.com/maiah/level-push/graphs/contributors)

Add a `push` method to [`levelup`][levelup] for saving objects using [`level-set`][level-set] with auto-generated UUID.

### [`level-version`][level-version]

[![npm package version](https://img.shields.io/npm/v/level-version)](https://www.npmjs.com/package/level-version) [![npm downloads](https://img.shields.io/npm/dw/level-version)](https://www.npmjs.com/package/level-version) [![License](https://img.shields.io/npm/l/level-version?color=blue)](https://www.npmjs.com/package/level-version) [![Last commit](https://img.shields.io/github/last-commit/brycebaril/level-version)](https://github.com/brycebaril/level-version) [![Contributors](https://img.shields.io/github/contributors/brycebaril/level-version?color=blue)](https://github.com/brycebaril/level-version/graphs/contributors)

Store and retrieve versioned data in [`levelup`][levelup].

### [`level-queue-type`][level-queue-type]

[![npm package version](https://img.shields.io/npm/v/level-queue-type)](https://www.npmjs.com/package/level-queue-type) [![npm downloads](https://img.shields.io/npm/dw/level-queue-type)](https://www.npmjs.com/package/level-queue-type) [![License](https://img.shields.io/npm/l/level-queue-type?color=blue)](https://www.npmjs.com/package/level-queue-type) [![Last commit](https://img.shields.io/github/last-commit/mcollina/level-queue-type)](https://github.com/mcollina/level-queue-type) [![Contributors](https://img.shields.io/github/contributors/mcollina/level-queue-type?color=blue)](https://github.com/mcollina/level-queue-type/graphs/contributors)

The queue datatype inside [`levelup`][levelup].

### [`level-q`][level-q]

[![npm package version](https://img.shields.io/npm/v/level-q)](https://www.npmjs.com/package/level-q) [![npm downloads](https://img.shields.io/npm/dw/level-q)](https://www.npmjs.com/package/level-q) [![License](https://img.shields.io/npm/l/level-q?color=blue)](https://www.npmjs.com/package/level-q) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-q)](https://github.com/eugeneware/level-q) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-q?color=blue)](https://github.com/eugeneware/level-q/graphs/contributors)

Priority queuing for [`levelup`][levelup].

### [`qool`][qool]

[![npm package version](https://img.shields.io/npm/v/qool)](https://www.npmjs.com/package/qool) [![npm downloads](https://img.shields.io/npm/dw/qool)](https://www.npmjs.com/package/qool) [![License](https://img.shields.io/npm/l/qool?color=blue)](https://www.npmjs.com/package/qool) [![Last commit](https://img.shields.io/github/last-commit/kessler/qool)](https://github.com/kessler/qool) [![Contributors](https://img.shields.io/github/contributors/kessler/qool?color=blue)](https://github.com/kessler/qool/graphs/contributors)

A queue backed by [`levelup`][levelup], durable and FIFO.

### [`level-trie`][level-trie]

[![npm package version](https://img.shields.io/npm/v/level-trie)](https://www.npmjs.com/package/level-trie) [![npm downloads](https://img.shields.io/npm/dw/level-trie)](https://www.npmjs.com/package/level-trie) [![License](https://img.shields.io/npm/l/level-trie?color=blue)](https://www.npmjs.com/package/level-trie) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-trie)](https://github.com/juliangruber/level-trie) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-trie?color=blue)](https://github.com/juliangruber/level-trie/graphs/contributors)

The TRIE data structure and search algorithm, on top of [`levelup`][levelup].

### [`level-geospatial`][level-geospatial]

[![npm package version](https://img.shields.io/npm/v/level-geospatial)](https://www.npmjs.com/package/level-geospatial) [![npm downloads](https://img.shields.io/npm/dw/level-geospatial)](https://www.npmjs.com/package/level-geospatial) [![License](https://img.shields.io/npm/l/level-geospatial?color=blue)](https://www.npmjs.com/package/level-geospatial) [![Last commit](https://img.shields.io/github/last-commit/richorama/level-geospatial)](https://github.com/richorama/level-geospatial) [![Contributors](https://img.shields.io/github/contributors/richorama/level-geospatial?color=blue)](https://github.com/richorama/level-geospatial/graphs/contributors)

Store key values pairs with lat/lon coordinates, and query using a radius.

### [`level-pathwise`][level-pathwise]

[![npm package version](https://img.shields.io/npm/v/level-pathwise)](https://www.npmjs.com/package/level-pathwise) [![npm downloads](https://img.shields.io/npm/dw/level-pathwise)](https://www.npmjs.com/package/level-pathwise) [![License](https://img.shields.io/npm/l/level-pathwise?color=blue)](https://www.npmjs.com/package/level-pathwise) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-pathwise)](https://github.com/juliangruber/level-pathwise) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-pathwise?color=blue)](https://github.com/juliangruber/level-pathwise/graphs/contributors)

Turn [`levelup`][levelup] into one huge object of arbitrary size! Efficiently and atomically update and read parts of it.

### [`level-places`][level-places]

[![npm package version](https://img.shields.io/npm/v/level-places)](https://www.npmjs.com/package/level-places) [![npm downloads](https://img.shields.io/npm/dw/level-places)](https://www.npmjs.com/package/level-places) [![License](https://img.shields.io/npm/l/level-places?color=blue)](https://www.npmjs.com/package/level-places) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-places)](https://github.com/Wayla/level-places) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-places?color=blue)](https://github.com/Wayla/level-places/graphs/contributors)

Store and retrieve places near a lat/long pair.

### [`level-nearby-stream`][level-nearby-stream]

[![npm package version](https://img.shields.io/npm/v/level-nearby-stream)](https://www.npmjs.com/package/level-nearby-stream) [![npm downloads](https://img.shields.io/npm/dw/level-nearby-stream)](https://www.npmjs.com/package/level-nearby-stream) [![License](https://img.shields.io/npm/l/level-nearby-stream?color=blue)](https://www.npmjs.com/package/level-nearby-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-nearby-stream)](https://github.com/juliangruber/level-nearby-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-nearby-stream?color=blue)](https://github.com/juliangruber/level-nearby-stream/graphs/contributors)

Stream in nearby places using the browser's geolocation and [`level-places`][level-places].

### [`level-tree`][level-tree]

[![npm package version](https://img.shields.io/npm/v/level-tree)](https://www.npmjs.com/package/level-tree) [![npm downloads](https://img.shields.io/npm/dw/level-tree)](https://www.npmjs.com/package/level-tree) [![License](https://img.shields.io/npm/l/level-tree?color=blue)](https://www.npmjs.com/package/level-tree) [![Last commit](https://img.shields.io/github/last-commit/calvinmetcalf/level-tree)](https://github.com/calvinmetcalf/level-tree) [![Contributors](https://img.shields.io/github/contributors/calvinmetcalf/level-tree?color=blue)](https://github.com/calvinmetcalf/level-tree/graphs/contributors)

Geospatial indexing for GeoJSON in [`levelup`][levelup]

### [`level-list`][level-list]

[![npm package version](https://img.shields.io/npm/v/level-list)](https://www.npmjs.com/package/level-list) [![npm downloads](https://img.shields.io/npm/dw/level-list)](https://www.npmjs.com/package/level-list) [![License](https://img.shields.io/npm/l/level-list?color=blue)](https://www.npmjs.com/package/level-list) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-list)](https://github.com/juliangruber/level-list) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-list?color=blue)](https://github.com/juliangruber/level-list/graphs/contributors)

Map lists of data stored in [`levelup`][levelup] to DOM elements.

### [`level-reactive`][level-reactive]

[![npm package version](https://img.shields.io/npm/v/level-reactive)](https://www.npmjs.com/package/level-reactive) [![npm downloads](https://img.shields.io/npm/dw/level-reactive)](https://www.npmjs.com/package/level-reactive) [![License](https://img.shields.io/npm/l/level-reactive?color=blue)](https://www.npmjs.com/package/level-reactive) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-reactive)](https://github.com/juliangruber/level-reactive) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-reactive?color=blue)](https://github.com/juliangruber/level-reactive/graphs/contributors)

Reactive templating for data stored in [`levelup`][levelup].

### [`level-paginate`][level-paginate]

[![npm package version](https://img.shields.io/npm/v/level-paginate)](https://www.npmjs.com/package/level-paginate) [![npm downloads](https://img.shields.io/npm/dw/level-paginate)](https://www.npmjs.com/package/level-paginate) [![License](https://img.shields.io/npm/l/level-paginate?color=blue)](https://www.npmjs.com/package/level-paginate) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-paginate)](https://github.com/juliangruber/level-paginate) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-paginate?color=blue)](https://github.com/juliangruber/level-paginate/graphs/contributors)

Streaming pagination for [`levelup`][levelup].

### [`level-average`][level-average]

[![npm package version](https://img.shields.io/npm/v/level-average)](https://www.npmjs.com/package/level-average) [![npm downloads](https://img.shields.io/npm/dw/level-average)](https://www.npmjs.com/package/level-average) [![License](https://img.shields.io/npm/l/level-average?color=blue)](https://www.npmjs.com/package/level-average) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-average)](https://github.com/juliangruber/level-average) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-average?color=blue)](https://github.com/juliangruber/level-average/graphs/contributors)

Calculate rolling averages in [`levelup`][levelup].

### [`level-sum`][level-sum]

[![npm package version](https://img.shields.io/npm/v/level-sum)](https://www.npmjs.com/package/level-sum) [![npm downloads](https://img.shields.io/npm/dw/level-sum)](https://www.npmjs.com/package/level-sum) [![License](https://img.shields.io/npm/l/level-sum?color=blue)](https://www.npmjs.com/package/level-sum) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sum)](https://github.com/juliangruber/level-sum) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sum?color=blue)](https://github.com/juliangruber/level-sum/graphs/contributors)

Calculate sums in [`levelup`][levelup] and get live updates.

### [`level-historical-json`][level-historical-json]

[![npm package version](https://img.shields.io/npm/v/level-historical-json)](https://www.npmjs.com/package/level-historical-json) [![npm downloads](https://img.shields.io/npm/dw/level-historical-json)](https://www.npmjs.com/package/level-historical-json) [![License](https://img.shields.io/npm/l/level-historical-json?color=blue)](https://www.npmjs.com/package/level-historical-json) [![Last commit](https://img.shields.io/github/last-commit/ellell/level-historical-json)](https://github.com/ellell/level-historical-json) [![Contributors](https://img.shields.io/github/contributors/ellell/level-historical-json?color=blue)](https://github.com/ellell/level-historical-json/graphs/contributors)

Keep a history of all the changes of a JSON document.

### [`level-immutable`][level-immutable]

[![npm package version](https://img.shields.io/npm/v/level-immutable)](https://www.npmjs.com/package/level-immutable) [![npm downloads](https://img.shields.io/npm/dw/level-immutable)](https://www.npmjs.com/package/level-immutable) [![License](https://img.shields.io/npm/l/level-immutable?color=blue)](https://www.npmjs.com/package/level-immutable) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-immutable)](https://github.com/eugeneware/level-immutable) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-immutable?color=blue)](https://github.com/eugeneware/level-immutable/graphs/contributors)

[`levelup`][levelup] immutable history and database snapshotting based on ideas in `datomic`.

### [`level-model`][level-model]

[![npm package version](https://img.shields.io/npm/v/level-model)](https://www.npmjs.com/package/level-model) [![npm downloads](https://img.shields.io/npm/dw/level-model)](https://www.npmjs.com/package/level-model) [![License](https://img.shields.io/npm/l/level-model?color=blue)](https://www.npmjs.com/package/level-model) [![Last commit](https://img.shields.io/github/last-commit/sethvincent/level-model)](https://github.com/sethvincent/level-model) [![Contributors](https://img.shields.io/github/contributors/sethvincent/level-model?color=blue)](https://github.com/sethvincent/level-model/graphs/contributors)

A higher-level module for creating content models using [`levelup`][levelup] and JSON Schema validation.

### [`level-stream`][level-stream]

[![npm package version](https://img.shields.io/npm/v/level-stream)](https://www.npmjs.com/package/level-stream) [![npm downloads](https://img.shields.io/npm/dw/level-stream)](https://www.npmjs.com/package/level-stream) [![License](https://img.shields.io/npm/l/level-stream?color=blue)](https://www.npmjs.com/package/level-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-stream)](https://github.com/juliangruber/level-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-stream?color=blue)](https://github.com/juliangruber/level-stream/graphs/contributors)

Persist streams in [`levelup`][levelup].

### [`level-stay`][level-stay]

[![npm package version](https://img.shields.io/npm/v/level-stay)](https://www.npmjs.com/package/level-stay) [![npm downloads](https://img.shields.io/npm/dw/level-stay)](https://www.npmjs.com/package/level-stay) [![License](https://img.shields.io/npm/l/level-stay?color=blue)](https://www.npmjs.com/package/level-stay) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-stay)](https://github.com/juliangruber/level-stay) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-stay?color=blue)](https://github.com/juliangruber/level-stay/graphs/contributors)

An alternative approach to storing scuttlebutts in [`levelup`][levelup].

### [`skeyma`][skeyma]

[![npm package version](https://img.shields.io/npm/v/skeyma)](https://www.npmjs.com/package/skeyma) [![npm downloads](https://img.shields.io/npm/dw/skeyma)](https://www.npmjs.com/package/skeyma) [![License](https://img.shields.io/npm/l/skeyma?color=blue)](https://www.npmjs.com/package/skeyma) [![Last commit](https://img.shields.io/github/last-commit/jed/skeyma)](https://github.com/jed/skeyma) [![Contributors](https://img.shields.io/github/contributors/jed/skeyma?color=blue)](https://github.com/jed/skeyma/graphs/contributors)

Turns a template string (like `${forumId}/${postId}`) into parse/serialize streams that transform objects like `{forumId, postId, text}` into key-value pairs and back.

### [`level-autotable`][level-autotable]

[![npm package version](https://img.shields.io/npm/v/level-autotable)](https://www.npmjs.com/package/level-autotable) [![npm downloads](https://img.shields.io/npm/dw/level-autotable)](https://www.npmjs.com/package/level-autotable) [![License](https://img.shields.io/npm/l/level-autotable?color=blue)](https://www.npmjs.com/package/level-autotable) [![Last commit](https://img.shields.io/github/last-commit/santoshrajan/levelup-autotable)](https://github.com/santoshrajan/levelup-autotable) [![Contributors](https://img.shields.io/github/contributors/santoshrajan/levelup-autotable?color=blue)](https://github.com/santoshrajan/levelup-autotable/graphs/contributors)

Auto incrementing keys with "fields" and "records".

### [`level-forks`][level-forks]

[![npm package version](https://img.shields.io/npm/v/level-forks)](https://www.npmjs.com/package/level-forks) [![npm downloads](https://img.shields.io/npm/dw/level-forks)](https://www.npmjs.com/package/level-forks) [![License](https://img.shields.io/npm/l/level-forks?color=blue)](https://www.npmjs.com/package/level-forks) [![Last commit](https://img.shields.io/github/last-commit/substack/level-forks)](https://github.com/substack/level-forks) [![Contributors](https://img.shields.io/github/contributors/substack/level-forks?color=blue)](https://github.com/substack/level-forks/graphs/contributors)

Forking graph of cascading namespaces.

### [`level-geo`][level-geo]

[![npm package version](https://img.shields.io/npm/v/level-geo)](https://www.npmjs.com/package/level-geo) [![npm downloads](https://img.shields.io/npm/dw/level-geo)](https://www.npmjs.com/package/level-geo) [![License](https://img.shields.io/npm/l/level-geo?color=blue)](https://www.npmjs.com/package/level-geo) [![Last commit](https://img.shields.io/github/last-commit/julianduque/level-geo)](https://github.com/julianduque/level-geo) [![Contributors](https://img.shields.io/github/contributors/julianduque/level-geo?color=blue)](https://github.com/julianduque/level-geo/graphs/contributors)

A geospatial index for [`levelup`][levelup].

### [`level-geography`][level-geography]

[![npm package version](https://img.shields.io/npm/v/level-geography)](https://www.npmjs.com/package/level-geography) [![npm downloads](https://img.shields.io/npm/dw/level-geography)](https://www.npmjs.com/package/level-geography) [![License](https://img.shields.io/npm/l/level-geography?color=blue)](https://www.npmjs.com/package/level-geography) [![Last commit](https://img.shields.io/github/last-commit/morganherlocker/level-geography)](https://github.com/morganherlocker/level-geography) [![Contributors](https://img.shields.io/github/contributors/morganherlocker/level-geography?color=blue)](https://github.com/morganherlocker/level-geography/graphs/contributors)

Indexed geography storage in [`levelup`][levelup].

### [`accountdown`][accountdown]

[![npm package version](https://img.shields.io/npm/v/accountdown)](https://www.npmjs.com/package/accountdown) [![npm downloads](https://img.shields.io/npm/dw/accountdown)](https://www.npmjs.com/package/accountdown) [![License](https://img.shields.io/npm/l/accountdown?color=blue)](https://www.npmjs.com/package/accountdown) [![Last commit](https://img.shields.io/github/last-commit/substack/accountdown)](https://github.com/substack/accountdown) [![Contributors](https://img.shields.io/github/contributors/substack/accountdown?color=blue)](https://github.com/substack/accountdown/graphs/contributors)

Persistent user accounts.

### [`accountdown-model`][accountdown-model]

[![npm package version](https://img.shields.io/npm/v/accountdown-model)](https://www.npmjs.com/package/accountdown-model) [![npm downloads](https://img.shields.io/npm/dw/accountdown-model)](https://www.npmjs.com/package/accountdown-model) [![License](https://img.shields.io/npm/l/accountdown-model?color=blue)](https://www.npmjs.com/package/accountdown-model) [![Last commit](https://img.shields.io/github/last-commit/sethvincent/accountdown-model)](https://github.com/sethvincent/accountdown-model) [![Contributors](https://img.shields.io/github/contributors/sethvincent/accountdown-model?color=blue)](https://github.com/sethvincent/accountdown-model/graphs/contributors)

A wrapper around [`accountdown`][accountdown] that provides a few additional features

## Transience

### [`cachedown`][cachedown]

[![npm package version](https://img.shields.io/npm/v/cachedown)](https://www.npmjs.com/package/cachedown) [![npm downloads](https://img.shields.io/npm/dw/cachedown)](https://www.npmjs.com/package/cachedown) [![License](https://img.shields.io/npm/l/cachedown?color=blue)](https://www.npmjs.com/package/cachedown) [![Last commit](https://img.shields.io/github/last-commit/mvayngrib/cachedown)](https://github.com/mvayngrib/cachedown) [![Contributors](https://img.shields.io/github/contributors/mvayngrib/cachedown?color=blue)](https://github.com/mvayngrib/cachedown/graphs/contributors)

LRU cache implemented as an [`abstract-leveldown`][abstract-leveldown] layer.

### [`level-ttl`][level-ttl]

[![npm package version](https://img.shields.io/npm/v/level-ttl)](https://www.npmjs.com/package/level-ttl) [![npm downloads](https://img.shields.io/npm/dw/level-ttl)](https://www.npmjs.com/package/level-ttl) [![License](https://img.shields.io/npm/l/level-ttl?color=blue)](https://www.npmjs.com/package/level-ttl) [![Last commit](https://img.shields.io/github/last-commit/Level/level-ttl)](https://github.com/Level/level-ttl) [![Contributors](https://img.shields.io/github/contributors/Level/level-ttl?color=blue)](https://github.com/Level/level-ttl/graphs/contributors)

Add a `ttl` (time-to-live) option to [`levelup`][levelup]. NB. Suffers from race issues. See also [`tiny-level-ttl`][tiny-level-ttl].

### [`tiny-level-ttl`][tiny-level-ttl]

[![npm package version](https://img.shields.io/npm/v/tiny-level-ttl)](https://www.npmjs.com/package/tiny-level-ttl) [![npm downloads](https://img.shields.io/npm/dw/tiny-level-ttl)](https://www.npmjs.com/package/tiny-level-ttl) [![License](https://img.shields.io/npm/l/tiny-level-ttl?color=blue)](https://www.npmjs.com/package/tiny-level-ttl) [![Last commit](https://img.shields.io/github/last-commit/ArtskydJ/tiny-level-ttl)](https://github.com/ArtskydJ/tiny-level-ttl) [![Contributors](https://img.shields.io/github/contributors/ArtskydJ/tiny-level-ttl?color=blue)](https://github.com/ArtskydJ/tiny-level-ttl/graphs/contributors)

Add a `ttl` (time-to-live) option to [`levelup`][levelup], [`level-sublevel`][level-sublevel] or [`level-spaces`][level-spaces]. Also respects [`level-lock`][level-lock].

### [`level-live-cache`][level-live-cache]

[![npm package version](https://img.shields.io/npm/v/level-live-cache)](https://www.npmjs.com/package/level-live-cache) [![npm downloads](https://img.shields.io/npm/dw/level-live-cache)](https://www.npmjs.com/package/level-live-cache) [![License](https://img.shields.io/npm/l/level-live-cache?color=blue)](https://www.npmjs.com/package/level-live-cache) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-live-cache)](https://github.com/juliangruber/level-live-cache) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-live-cache?color=blue)](https://github.com/juliangruber/level-live-cache/graphs/contributors)

An in-memory cache that keeps up to date with its source.

### [`level-lru-cache`][level-lru-cache]

[![npm package version](https://img.shields.io/npm/v/level-lru-cache)](https://www.npmjs.com/package/level-lru-cache) [![npm downloads](https://img.shields.io/npm/dw/level-lru-cache)](https://www.npmjs.com/package/level-lru-cache) [![License](https://img.shields.io/npm/l/level-lru-cache?color=blue)](https://www.npmjs.com/package/level-lru-cache) [![Last commit](https://img.shields.io/github/last-commit/kemitchell/level-lru-cache.js)](https://github.com/kemitchell/level-lru-cache.js) [![Contributors](https://img.shields.io/github/contributors/kemitchell/level-lru-cache.js?color=blue)](https://github.com/kemitchell/level-lru-cache.js/graphs/contributors)

Simple LRU cache.

### [`level-ttl-cache`][level-ttl-cache]

[![npm package version](https://img.shields.io/npm/v/level-ttl-cache)](https://www.npmjs.com/package/level-ttl-cache) [![npm downloads](https://img.shields.io/npm/dw/level-ttl-cache)](https://www.npmjs.com/package/level-ttl-cache) [![License](https://img.shields.io/npm/l/level-ttl-cache?color=blue)](https://www.npmjs.com/package/level-ttl-cache) [![Last commit](https://img.shields.io/github/last-commit/rvagg/level-ttl-cache)](https://github.com/rvagg/level-ttl-cache) [![Contributors](https://img.shields.io/github/contributors/rvagg/level-ttl-cache?color=blue)](https://github.com/rvagg/level-ttl-cache/graphs/contributors)

A pass-through cache for arbitrary objects or binary data using LevelDB, expired by a TTL.

### [`level-cache`][level-cache]

[![npm package version](https://img.shields.io/npm/v/level-cache)](https://www.npmjs.com/package/level-cache) [![npm downloads](https://img.shields.io/npm/dw/level-cache)](https://www.npmjs.com/package/level-cache) [![License](https://img.shields.io/npm/l/level-cache?color=blue)](https://www.npmjs.com/package/level-cache) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-cache)](https://github.com/Raynos/level-cache) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-cache?color=blue)](https://github.com/Raynos/level-cache/graphs/contributors)

A caching module you can place in front of a [`levelup`][levelup] database. It will cache a subset of the database in an in-memory LRU cache based on configuration. It has an optional synchronous API which will return from the cache only.

### [`levelup-cache`][levelup-cache]

[![npm package version](https://img.shields.io/npm/v/levelup-cache)](https://www.npmjs.com/package/levelup-cache) [![npm downloads](https://img.shields.io/npm/dw/levelup-cache)](https://www.npmjs.com/package/levelup-cache) [![License](https://img.shields.io/npm/l/levelup-cache?color=blue)](https://www.npmjs.com/package/levelup-cache) [![Last commit](https://img.shields.io/github/last-commit/TehShrike/levelup-cache)](https://github.com/TehShrike/levelup-cache) [![Contributors](https://img.shields.io/github/contributors/TehShrike/levelup-cache?color=blue)](https://github.com/TehShrike/levelup-cache/graphs/contributors)

Use [`levelup`][levelup] to cache remote data.

## Atomicity

### [`level-lock`][level-lock]

[![npm package version](https://img.shields.io/npm/v/level-lock)](https://www.npmjs.com/package/level-lock) [![npm downloads](https://img.shields.io/npm/dw/level-lock)](https://www.npmjs.com/package/level-lock) [![License](https://img.shields.io/npm/l/level-lock?color=blue)](https://www.npmjs.com/package/level-lock) [![Last commit](https://img.shields.io/github/last-commit/substack/level-lock)](https://github.com/substack/level-lock) [![Contributors](https://img.shields.io/github/contributors/substack/level-lock?color=blue)](https://github.com/substack/level-lock/graphs/contributors)

In-memory advisory read/write locks for [`levelup`][levelup] keys.

### [`level-mutex`][level-mutex]

[![npm package version](https://img.shields.io/npm/v/level-mutex)](https://www.npmjs.com/package/level-mutex) [![npm downloads](https://img.shields.io/npm/dw/level-mutex)](https://www.npmjs.com/package/level-mutex) [![License](https://img.shields.io/npm/l/level-mutex?color=blue)](https://www.npmjs.com/package/level-mutex) [![Last commit](https://img.shields.io/github/last-commit/mikeal/level-mutex)](https://github.com/mikeal/level-mutex) [![Contributors](https://img.shields.io/github/contributors/mikeal/level-mutex?color=blue)](https://github.com/mikeal/level-mutex/graphs/contributors)

Mutex read/write lock for [`levelup`][levelup].

### [`level-updater`][level-updater]

[![npm package version](https://img.shields.io/npm/v/level-updater)](https://www.npmjs.com/package/level-updater) [![npm downloads](https://img.shields.io/npm/dw/level-updater)](https://www.npmjs.com/package/level-updater) [![License](https://img.shields.io/npm/l/level-updater?color=blue)](https://www.npmjs.com/package/level-updater) [![Last commit](https://img.shields.io/github/last-commit/hughsk/level-updater)](https://github.com/hughsk/level-updater) [![Contributors](https://img.shields.io/github/contributors/hughsk/level-updater?color=blue)](https://github.com/hughsk/level-updater/graphs/contributors)

Update keys without overlapping changes - makes it possible to implement an atomic incrementer, JSON merger, etc.

### [`levelplus`][levelplus]

[![npm package version](https://img.shields.io/npm/v/levelplus)](https://www.npmjs.com/package/levelplus) [![npm downloads](https://img.shields.io/npm/dw/levelplus)](https://www.npmjs.com/package/levelplus) [![License](https://img.shields.io/npm/l/levelplus?color=blue)](https://www.npmjs.com/package/levelplus) [![Last commit](https://img.shields.io/github/last-commit/https://github.com/eugeneware/levelplus)](https://github.com/https://github.com/eugeneware/levelplus) [![Contributors](https://img.shields.io/github/contributors/https://github.com/eugeneware/levelplus?color=blue)](https://github.com/https://github.com/eugeneware/levelplus/graphs/contributors)

Adds atomic updates, increments, array pushes, set additions and user-defined atomic operations to [`levelup`][levelup].

### [`level-atomics`][level-atomics]

[![npm package version](https://img.shields.io/npm/v/level-atomics)](https://www.npmjs.com/package/level-atomics) [![npm downloads](https://img.shields.io/npm/dw/level-atomics)](https://www.npmjs.com/package/level-atomics) [![License](https://img.shields.io/npm/l/level-atomics?color=blue)](https://www.npmjs.com/package/level-atomics) [![Last commit](https://img.shields.io/github/last-commit/IndigoUnited/node-level-atomics)](https://github.com/IndigoUnited/node-level-atomics) [![Contributors](https://img.shields.io/github/contributors/IndigoUnited/node-level-atomics?color=blue)](https://github.com/IndigoUnited/node-level-atomics/graphs/contributors)

Add (parallel) atomic operations like `insert`, `replace`, `increment` and `decrement` to [`levelup`][levelup].

### [`level-transactions`][level-transactions]

[![npm package version](https://img.shields.io/npm/v/level-transactions)](https://www.npmjs.com/package/level-transactions) [![npm downloads](https://img.shields.io/npm/dw/level-transactions)](https://www.npmjs.com/package/level-transactions) [![License](https://img.shields.io/npm/l/level-transactions?color=blue)](https://www.npmjs.com/package/level-transactions) [![Last commit](https://img.shields.io/github/last-commit/cshum/level-transactions)](https://github.com/cshum/level-transactions) [![Contributors](https://img.shields.io/github/contributors/cshum/level-transactions?color=blue)](https://github.com/cshum/level-transactions/graphs/contributors)

Transaction layer for [`levelup`][levelup].

## Jobs

### [`level-schedule`][level-schedule]

[![npm package version](https://img.shields.io/npm/v/level-schedule)](https://www.npmjs.com/package/level-schedule) [![npm downloads](https://img.shields.io/npm/dw/level-schedule)](https://www.npmjs.com/package/level-schedule) [![License](https://img.shields.io/npm/l/level-schedule?color=blue)](https://www.npmjs.com/package/level-schedule) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-schedule)](https://github.com/juliangruber/level-schedule) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-schedule?color=blue)](https://github.com/juliangruber/level-schedule/graphs/contributors)

A durable job scheduler.

### [`level-jobs`][level-jobs]

[![npm package version](https://img.shields.io/npm/v/level-jobs)](https://www.npmjs.com/package/level-jobs) [![npm downloads](https://img.shields.io/npm/dw/level-jobs)](https://www.npmjs.com/package/level-jobs) [![License](https://img.shields.io/npm/l/level-jobs?color=blue)](https://www.npmjs.com/package/level-jobs) [![Last commit](https://img.shields.io/github/last-commit/pgte/level-jobs)](https://github.com/pgte/level-jobs) [![Contributors](https://img.shields.io/github/contributors/pgte/level-jobs?color=blue)](https://github.com/pgte/level-jobs/graphs/contributors)

Job Queue in [`levelup`][levelup].

### [`batchdb`][batchdb]

[![npm package version](https://img.shields.io/npm/v/batchdb)](https://www.npmjs.com/package/batchdb) [![npm downloads](https://img.shields.io/npm/dw/batchdb)](https://www.npmjs.com/package/batchdb) [![License](https://img.shields.io/npm/l/batchdb?color=blue)](https://www.npmjs.com/package/batchdb) [![Last commit](https://img.shields.io/github/last-commit/substack/batchdb)](https://github.com/substack/batchdb) [![Contributors](https://img.shields.io/github/contributors/substack/batchdb?color=blue)](https://github.com/substack/batchdb/graphs/contributors)

[`levelup`][levelup] and disk storage for queued batch jobs.

## File System

### [`level-filesystem`][level-filesystem]

[![npm package version](https://img.shields.io/npm/v/level-filesystem)](https://www.npmjs.com/package/level-filesystem) [![npm downloads](https://img.shields.io/npm/dw/level-filesystem)](https://www.npmjs.com/package/level-filesystem) [![License](https://img.shields.io/npm/l/level-filesystem?color=blue)](https://www.npmjs.com/package/level-filesystem) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-filesystem)](https://github.com/mafintosh/level-filesystem) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-filesystem?color=blue)](https://github.com/mafintosh/level-filesystem/graphs/contributors)

Full implementation of the Node.js `fs` module on top of [`levelup`][levelup].

### [`browserify-fs`][browserify-fs]

[![npm package version](https://img.shields.io/npm/v/browserify-fs)](https://www.npmjs.com/package/browserify-fs) [![npm downloads](https://img.shields.io/npm/dw/browserify-fs)](https://www.npmjs.com/package/browserify-fs) [![License](https://img.shields.io/npm/l/browserify-fs?color=blue)](https://www.npmjs.com/package/browserify-fs) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/browserify-fs)](https://github.com/mafintosh/browserify-fs) [![Contributors](https://img.shields.io/github/contributors/mafintosh/browserify-fs?color=blue)](https://github.com/mafintosh/browserify-fs/graphs/contributors)

[`level-filesystem`][level-filesystem] as drop-in `fs` replacement for the browser, to be used with `browserify`.

### [`level-fs`][level-fs]

[![npm package version](https://img.shields.io/npm/v/level-fs)](https://www.npmjs.com/package/level-fs) [![npm downloads](https://img.shields.io/npm/dw/level-fs)](https://www.npmjs.com/package/level-fs) [![License](https://img.shields.io/npm/l/level-fs?color=blue)](https://www.npmjs.com/package/level-fs) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-fs)](https://github.com/juliangruber/level-fs) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-fs?color=blue)](https://github.com/juliangruber/level-fs/graphs/contributors)

Node's `fs` module with [`levelup`][levelup] as backend.

### [`level-fs-browser`][level-fs-browser]

[![npm package version](https://img.shields.io/npm/v/level-fs-browser)](https://www.npmjs.com/package/level-fs-browser) [![npm downloads](https://img.shields.io/npm/dw/level-fs-browser)](https://www.npmjs.com/package/level-fs-browser) [![License](https://img.shields.io/npm/l/level-fs-browser?color=blue)](https://www.npmjs.com/package/level-fs-browser) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-fs-browser)](https://github.com/juliangruber/level-fs-browser) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-fs-browser?color=blue)](https://github.com/juliangruber/level-fs-browser/graphs/contributors)

[`level-fs`][level-fs] as drop-in `fs` replacement for the browser, to be used with `browserify`.

### [`level-store`][level-store]

[![npm package version](https://img.shields.io/npm/v/level-store)](https://www.npmjs.com/package/level-store) [![npm downloads](https://img.shields.io/npm/dw/level-store)](https://www.npmjs.com/package/level-store) [![License](https://img.shields.io/npm/l/level-store?color=blue)](https://www.npmjs.com/package/level-store) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-store)](https://github.com/juliangruber/level-store) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-store?color=blue)](https://github.com/juliangruber/level-store/graphs/contributors)

A streaming storage engine based on [`levelup`][levelup].

### [`level-serve`][level-serve]

[![npm package version](https://img.shields.io/npm/v/level-serve)](https://www.npmjs.com/package/level-serve) [![npm downloads](https://img.shields.io/npm/dw/level-serve)](https://www.npmjs.com/package/level-serve) [![License](https://img.shields.io/npm/l/level-serve?color=blue)](https://www.npmjs.com/package/level-serve) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-serve)](https://github.com/Wayla/level-serve) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-serve?color=blue)](https://github.com/Wayla/level-serve/graphs/contributors)

Streaming static file server based on [`levelup`][levelup].

### [`suckit`][suckit]

[![npm package version](https://img.shields.io/npm/v/suckit)](https://www.npmjs.com/package/suckit) [![npm downloads](https://img.shields.io/npm/dw/suckit)](https://www.npmjs.com/package/suckit) [![License](https://img.shields.io/npm/l/suckit?color=blue)](https://www.npmjs.com/package/suckit) [![Last commit](https://img.shields.io/github/last-commit/deoxxa/suckit)](https://github.com/deoxxa/suckit) [![Contributors](https://img.shields.io/github/contributors/deoxxa/suckit?color=blue)](https://github.com/deoxxa/suckit/graphs/contributors)

Expose a [`level-store`][level-store] over HTTP.

### [`level-vinyl`][level-vinyl]

[![npm package version](https://img.shields.io/npm/v/level-vinyl)](https://www.npmjs.com/package/level-vinyl) [![npm downloads](https://img.shields.io/npm/dw/level-vinyl)](https://www.npmjs.com/package/level-vinyl) [![License](https://img.shields.io/npm/l/level-vinyl?color=blue)](https://www.npmjs.com/package/level-vinyl) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-vinyl)](https://github.com/vweevers/level-vinyl) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-vinyl?color=blue)](https://github.com/vweevers/level-vinyl/graphs/contributors)

[Vinyl](https://github.com/gulpjs/vinyl-fs) adapter and blob store. Saves file contents in a content addressable blob store, file metadata in [`levelup`][levelup].

### [`level-blob`][level-blob]

[![npm package version](https://img.shields.io/npm/v/level-blob)](https://www.npmjs.com/package/level-blob) [![npm downloads](https://img.shields.io/npm/dw/level-blob)](https://www.npmjs.com/package/level-blob) [![License](https://img.shields.io/npm/l/level-blob?color=blue)](https://www.npmjs.com/package/level-blob) [![Last commit](https://img.shields.io/github/last-commit/crodas/level-blob)](https://github.com/crodas/level-blob) [![Contributors](https://img.shields.io/github/contributors/crodas/level-blob?color=blue)](https://github.com/crodas/level-blob/graphs/contributors)

Store blobs in [`levelup`][levelup]

### [`level-blob-store`][level-blob-store]

[![npm package version](https://img.shields.io/npm/v/level-blob-store)](https://www.npmjs.com/package/level-blob-store) [![npm downloads](https://img.shields.io/npm/dw/level-blob-store)](https://www.npmjs.com/package/level-blob-store) [![License](https://img.shields.io/npm/l/level-blob-store?color=blue)](https://www.npmjs.com/package/level-blob-store) [![Last commit](https://img.shields.io/github/last-commit/diasdavid/level-blob-store)](https://github.com/diasdavid/level-blob-store) [![Contributors](https://img.shields.io/github/contributors/diasdavid/level-blob-store?color=blue)](https://github.com/diasdavid/level-blob-store/graphs/contributors)

An [`abstract-blob-store`](https://github.com/maxogden/abstract-blob-store) using LevelDB as the storage backend

### [`level-pull-blob-store`][level-pull-blob-store]

[![npm package version](https://img.shields.io/npm/v/level-pull-blob-store)](https://www.npmjs.com/package/level-pull-blob-store) [![npm downloads](https://img.shields.io/npm/dw/level-pull-blob-store)](https://www.npmjs.com/package/level-pull-blob-store) [![License](https://img.shields.io/npm/l/level-pull-blob-store?color=blue)](https://www.npmjs.com/package/level-pull-blob-store) [![Last commit](https://img.shields.io/github/last-commit/ipfs/js-level-pull-blob-store)](https://github.com/ipfs/js-level-pull-blob-store) [![Contributors](https://img.shields.io/github/contributors/ipfs/js-level-pull-blob-store?color=blue)](https://github.com/ipfs/js-level-pull-blob-store/graphs/contributors)

A [`pull-blob-store`](https://github.com/ipfs/interface-pull-blob-store) implementation backed by LevelDB.

### [`level-server`][level-server]

[![npm package version](https://img.shields.io/npm/v/level-server)](https://www.npmjs.com/package/level-server) [![npm downloads](https://img.shields.io/npm/dw/level-server)](https://www.npmjs.com/package/level-server) [![License](https://img.shields.io/npm/l/level-server?color=blue)](https://www.npmjs.com/package/level-server) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-server)](https://github.com/Wayla/level-server) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-server?color=blue)](https://github.com/Wayla/level-server/graphs/contributors)

Standalone LevelDB file server based on [`level-serve`][level-serve], [`multilevel`][multilevel] and [`level-sublevel`][level-sublevel].

## Utilities

### [`level-transcoder`][level-transcoder]

[![npm package version](https://img.shields.io/npm/v/level-transcoder)](https://www.npmjs.com/package/level-transcoder) [![npm downloads](https://img.shields.io/npm/dw/level-transcoder)](https://www.npmjs.com/package/level-transcoder) [![License](https://img.shields.io/npm/l/level-transcoder?color=blue)](https://www.npmjs.com/package/level-transcoder) [![Last commit](https://img.shields.io/github/last-commit/Level/transcoder)](https://github.com/Level/transcoder) [![Contributors](https://img.shields.io/github/contributors/Level/transcoder?color=blue)](https://github.com/Level/transcoder/graphs/contributors)

Encode data with built-in or custom encodings. Used in [`abstract-level`][abstract-level].

### [`level-test`][level-test]

[![npm package version](https://img.shields.io/npm/v/level-test)](https://www.npmjs.com/package/level-test) [![npm downloads](https://img.shields.io/npm/dw/level-test)](https://www.npmjs.com/package/level-test) [![License](https://img.shields.io/npm/l/level-test?color=blue)](https://www.npmjs.com/package/level-test) [![Last commit](https://img.shields.io/github/last-commit/Level/level-test)](https://github.com/Level/level-test) [![Contributors](https://img.shields.io/github/contributors/Level/level-test?color=blue)](https://github.com/Level/level-test/graphs/contributors)

Inject temporary and isolated [`abstract-leveldown`][abstract-leveldown] stores ([`leveldown`][leveldown], [`level-js`][level-js], [`memdown`][memdown] or custom) into your tests.

### [`level-compose`][level-compose]

[![npm package version](https://img.shields.io/npm/v/level-compose)](https://www.npmjs.com/package/level-compose) [![npm downloads](https://img.shields.io/npm/dw/level-compose)](https://www.npmjs.com/package/level-compose) [![License](https://img.shields.io/npm/l/level-compose?color=blue)](https://www.npmjs.com/package/level-compose) [![Last commit](https://img.shields.io/github/last-commit/Level/compose)](https://github.com/Level/compose) [![Contributors](https://img.shields.io/github/contributors/Level/compose?color=blue)](https://github.com/Level/compose/graphs/contributors)

Compose a database factory from [`abstract-leveldown`][abstract-leveldown] and [`levelup`][levelup] layers. TBD if still relevant after [`abstract-level`][abstract-level].

### [`level-exists`][level-exists]

[![npm package version](https://img.shields.io/npm/v/level-exists)](https://www.npmjs.com/package/level-exists) [![npm downloads](https://img.shields.io/npm/dw/level-exists)](https://www.npmjs.com/package/level-exists) [![License](https://img.shields.io/npm/l/level-exists?color=blue)](https://www.npmjs.com/package/level-exists) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-exists)](https://github.com/juliangruber/level-exists) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-exists?color=blue)](https://github.com/juliangruber/level-exists/graphs/contributors)

Check if a datum exists without reading its value.

### [`level-move`][level-move]

[![npm package version](https://img.shields.io/npm/v/level-move)](https://www.npmjs.com/package/level-move) [![npm downloads](https://img.shields.io/npm/dw/level-move)](https://www.npmjs.com/package/level-move) [![License](https://img.shields.io/npm/l/level-move?color=blue)](https://www.npmjs.com/package/level-move) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-move)](https://github.com/juliangruber/level-move) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-move?color=blue)](https://github.com/juliangruber/level-move/graphs/contributors)

Move a value to another key.

### [`level-capped`][level-capped]

[![npm package version](https://img.shields.io/npm/v/level-capped)](https://www.npmjs.com/package/level-capped) [![npm downloads](https://img.shields.io/npm/dw/level-capped)](https://www.npmjs.com/package/level-capped) [![License](https://img.shields.io/npm/l/level-capped?color=blue)](https://www.npmjs.com/package/level-capped) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-capped)](https://github.com/juliangruber/level-capped) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-capped?color=blue)](https://github.com/juliangruber/level-capped/graphs/contributors)

Capped collections.

### [`level-create`][level-create]

[![npm package version](https://img.shields.io/npm/v/level-create)](https://www.npmjs.com/package/level-create) [![npm downloads](https://img.shields.io/npm/dw/level-create)](https://www.npmjs.com/package/level-create) [![License](https://img.shields.io/npm/l/level-create?color=blue)](https://www.npmjs.com/package/level-create) [![Last commit](https://img.shields.io/github/last-commit/substack/level-create)](https://github.com/substack/level-create) [![Contributors](https://img.shields.io/github/contributors/substack/level-create?color=blue)](https://github.com/substack/level-create/graphs/contributors)

Insert a key if and only if it doesn't already exist

### [`level-create-batch`][level-create-batch]

[![npm package version](https://img.shields.io/npm/v/level-create-batch)](https://www.npmjs.com/package/level-create-batch) [![npm downloads](https://img.shields.io/npm/dw/level-create-batch)](https://www.npmjs.com/package/level-create-batch) [![License](https://img.shields.io/npm/l/level-create-batch?color=blue)](https://www.npmjs.com/package/level-create-batch) [![Last commit](https://img.shields.io/github/last-commit/substack/level-create-batch)](https://github.com/substack/level-create-batch) [![Contributors](https://img.shields.io/github/contributors/substack/level-create-batch?color=blue)](https://github.com/substack/level-create-batch/graphs/contributors)

Insert a batch of keys if and only if none of the keys already exist

### [`level-modify`][level-modify]

[![npm package version](https://img.shields.io/npm/v/level-modify)](https://www.npmjs.com/package/level-modify) [![npm downloads](https://img.shields.io/npm/dw/level-modify)](https://www.npmjs.com/package/level-modify) [![License](https://img.shields.io/npm/l/level-modify?color=blue)](https://www.npmjs.com/package/level-modify) [![Last commit](https://img.shields.io/github/last-commit/dskrepps/level-modify)](https://github.com/dskrepps/level-modify) [![Contributors](https://img.shields.io/github/contributors/dskrepps/level-modify?color=blue)](https://github.com/dskrepps/level-modify/graphs/contributors)

Modify an existing key in [`levelup`][levelup]. Uses [`level-lock`][level-lock]. See also [`level-create`][level-create] and [`level-move`][level-move].

### [`level-random`][level-random]

[![npm package version](https://img.shields.io/npm/v/level-random)](https://www.npmjs.com/package/level-random) [![npm downloads](https://img.shields.io/npm/dw/level-random)](https://www.npmjs.com/package/level-random) [![License](https://img.shields.io/npm/l/level-random?color=blue)](https://www.npmjs.com/package/level-random) [![Last commit](https://img.shields.io/github/last-commit/michaelnisi/level-random)](https://github.com/michaelnisi/level-random) [![Contributors](https://img.shields.io/github/contributors/michaelnisi/level-random?color=blue)](https://github.com/michaelnisi/level-random/graphs/contributors)

Read values of random [`levelup`][levelup] keys.

### [`level-shared-batch`][level-shared-batch]

[![npm package version](https://img.shields.io/npm/v/level-shared-batch)](https://www.npmjs.com/package/level-shared-batch) [![npm downloads](https://img.shields.io/npm/dw/level-shared-batch)](https://www.npmjs.com/package/level-shared-batch) [![License](https://img.shields.io/npm/l/level-shared-batch?color=blue)](https://www.npmjs.com/package/level-shared-batch) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-shared-batch)](https://github.com/juliangruber/level-shared-batch) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-shared-batch?color=blue)](https://github.com/juliangruber/level-shared-batch/graphs/contributors)

Share batches and commit collectively

### [`batchlevel`][batchlevel]

[![npm package version](https://img.shields.io/npm/v/batchlevel)](https://www.npmjs.com/package/batchlevel) [![npm downloads](https://img.shields.io/npm/dw/batchlevel)](https://www.npmjs.com/package/batchlevel) [![License](https://img.shields.io/npm/l/batchlevel?color=blue)](https://www.npmjs.com/package/batchlevel) [![Last commit](https://img.shields.io/github/last-commit/biobricks/batchlevel)](https://github.com/biobricks/batchlevel) [![Contributors](https://img.shields.io/github/contributors/biobricks/batchlevel?color=blue)](https://github.com/biobricks/batchlevel/graphs/contributors)

Batch all operations made on a [`levelup`][levelup] instance. Compatible with [`subleveldown`][subleveldown].

### [`ltest`][ltest]

[![npm package version](https://img.shields.io/npm/v/ltest)](https://www.npmjs.com/package/ltest) [![npm downloads](https://img.shields.io/npm/dw/ltest)](https://www.npmjs.com/package/ltest) [![License](https://img.shields.io/npm/l/ltest?color=blue)](https://www.npmjs.com/package/ltest) [![Last commit](https://img.shields.io/github/last-commit/ralphtheninja/ltest)](https://github.com/ralphtheninja/ltest) [![Contributors](https://img.shields.io/github/contributors/ralphtheninja/ltest?color=blue)](https://github.com/ralphtheninja/ltest/graphs/contributors)

Test function for [`levelup`][levelup] testing, based on [`level-test`][level-test].

### [`level-probe`][level-probe]

[![npm package version](https://img.shields.io/npm/v/level-probe)](https://www.npmjs.com/package/level-probe) [![npm downloads](https://img.shields.io/npm/dw/level-probe)](https://www.npmjs.com/package/level-probe) [![License](https://img.shields.io/npm/l/level-probe?color=blue)](https://www.npmjs.com/package/level-probe) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-probe)](https://github.com/vweevers/level-probe) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-probe?color=blue)](https://github.com/vweevers/level-probe/graphs/contributors)

Get the first record in a range, using an iterator or stream. NB. Not compatible with latest [`levelup`][levelup].

### [`autolevel`][autolevel]

[![npm package version](https://img.shields.io/npm/v/autolevel)](https://www.npmjs.com/package/autolevel) [![npm downloads](https://img.shields.io/npm/dw/autolevel)](https://www.npmjs.com/package/autolevel) [![License](https://img.shields.io/npm/l/autolevel?color=blue)](https://www.npmjs.com/package/autolevel) [![Last commit](https://img.shields.io/github/last-commit/finwo/autolevel)](https://github.com/finwo/autolevel) [![Contributors](https://img.shields.io/github/contributors/finwo/autolevel?color=blue)](https://github.com/finwo/autolevel/graphs/contributors)

Automatically combine [`levelup`][levelup] with the right [`abstract-leveldown`][abstract-leveldown] store for your configuration.

### [`level-lazy-open`][level-lazy-open]

[![npm package version](https://img.shields.io/npm/v/level-lazy-open)](https://www.npmjs.com/package/level-lazy-open) [![npm downloads](https://img.shields.io/npm/dw/level-lazy-open)](https://www.npmjs.com/package/level-lazy-open) [![License](https://img.shields.io/npm/l/level-lazy-open?color=blue)](https://www.npmjs.com/package/level-lazy-open) [![Last commit](https://img.shields.io/github/last-commit/Level/lazy-open)](https://github.com/Level/lazy-open) [![Contributors](https://img.shields.io/github/contributors/Level/lazy-open?color=blue)](https://github.com/Level/lazy-open/graphs/contributors)

Lazily open a leveldown compatible backend.

### [`changeset`][changeset]

[![npm package version](https://img.shields.io/npm/v/changeset)](https://www.npmjs.com/package/changeset) [![npm downloads](https://img.shields.io/npm/dw/changeset)](https://www.npmjs.com/package/changeset) [![License](https://img.shields.io/npm/l/changeset?color=blue)](https://www.npmjs.com/package/changeset) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/changeset)](https://github.com/eugeneware/changeset) [![Contributors](https://img.shields.io/github/contributors/eugeneware/changeset?color=blue)](https://github.com/eugeneware/changeset/graphs/contributors)

Generate diff changesets for javascript objects, decomposing diffs into a series of puts and delete operations. The format is compatible with [`levelup`][levelup] batch operations. Useful to synchronize objects.

### [`levelup-defaults`][levelup-defaults]

[![npm package version](https://img.shields.io/npm/v/levelup-defaults)](https://www.npmjs.com/package/levelup-defaults) [![npm downloads](https://img.shields.io/npm/dw/levelup-defaults)](https://www.npmjs.com/package/levelup-defaults) [![License](https://img.shields.io/npm/l/levelup-defaults?color=blue)](https://www.npmjs.com/package/levelup-defaults) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/levelup-defaults)](https://github.com/mafintosh/levelup-defaults) [![Contributors](https://img.shields.io/github/contributors/mafintosh/levelup-defaults?color=blue)](https://github.com/mafintosh/levelup-defaults/graphs/contributors)

Change the defaults settings on a [`levelup`][levelup] instance by returning a new [`levelup`][levelup] instance that uses the same [`abstract-leveldown`][abstract-leveldown] but different options.

### [`level-methods`][level-methods]

[![npm package version](https://img.shields.io/npm/v/level-methods)](https://www.npmjs.com/package/level-methods) [![npm downloads](https://img.shields.io/npm/dw/level-methods)](https://www.npmjs.com/package/level-methods) [![License](https://img.shields.io/npm/l/level-methods?color=blue)](https://www.npmjs.com/package/level-methods) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-methods)](https://github.com/Wayla/level-methods) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-methods?color=blue)](https://github.com/Wayla/level-methods/graphs/contributors)

Useful meta information about [`levelup`][levelup] methods.

## Replication

### [`level-2pc`][level-2pc]

[![npm package version](https://img.shields.io/npm/v/level-2pc)](https://www.npmjs.com/package/level-2pc) [![npm downloads](https://img.shields.io/npm/dw/level-2pc)](https://www.npmjs.com/package/level-2pc) [![License](https://img.shields.io/npm/l/level-2pc?color=blue)](https://www.npmjs.com/package/level-2pc) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-2pc)](https://github.com/hij1nx/level-2pc) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-2pc?color=blue)](https://github.com/hij1nx/level-2pc/graphs/contributors)

A two-phase commit protocol.

### [`level-couch-sync`][level-couch-sync]

[![npm package version](https://img.shields.io/npm/v/level-couch-sync)](https://www.npmjs.com/package/level-couch-sync) [![npm downloads](https://img.shields.io/npm/dw/level-couch-sync)](https://www.npmjs.com/package/level-couch-sync) [![License](https://img.shields.io/npm/l/level-couch-sync?color=blue)](https://www.npmjs.com/package/level-couch-sync) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-couch-sync)](https://github.com/dominictarr/level-couch-sync) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-couch-sync?color=blue)](https://github.com/dominictarr/level-couch-sync/graphs/contributors)

Replicate from CouchDB to LevelDB.

### [`level-master`][level-master]

[![npm package version](https://img.shields.io/npm/v/level-master)](https://www.npmjs.com/package/level-master) [![npm downloads](https://img.shields.io/npm/dw/level-master)](https://www.npmjs.com/package/level-master) [![License](https://img.shields.io/npm/l/level-master?color=blue)](https://www.npmjs.com/package/level-master) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-master)](https://github.com/dominictarr/level-master) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-master?color=blue)](https://github.com/dominictarr/level-master/graphs/contributors)

Master-Slave replication for [`levelup`][levelup].

### [`level-merkle`][level-merkle]

[![npm package version](https://img.shields.io/npm/v/level-merkle)](https://www.npmjs.com/package/level-merkle) [![npm downloads](https://img.shields.io/npm/dw/level-merkle)](https://www.npmjs.com/package/level-merkle) [![License](https://img.shields.io/npm/l/level-merkle?color=blue)](https://www.npmjs.com/package/level-merkle) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-merkle)](https://github.com/dominictarr/level-merkle) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-merkle?color=blue)](https://github.com/dominictarr/level-merkle/graphs/contributors)

Uses [merkle-trees](http://en.wikipedia.org/wiki/Merkle_tree) to replicate data sets. Data must be sets and currently, deletes are not supported.

### [`level-replicate`][level-replicate]

[![npm package version](https://img.shields.io/npm/v/level-replicate)](https://www.npmjs.com/package/level-replicate) [![npm downloads](https://img.shields.io/npm/dw/level-replicate)](https://www.npmjs.com/package/level-replicate) [![License](https://img.shields.io/npm/l/level-replicate?color=blue)](https://www.npmjs.com/package/level-replicate) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-replicate)](https://github.com/dominictarr/level-replicate) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-replicate?color=blue)](https://github.com/dominictarr/level-replicate/graphs/contributors)

Master-master replication with [`levelup`][levelup]. Implements scuttlebutt style handshake, syncs data, then replicates real time changes.

### [`level-replicator`][level-replicator]

[![npm package version](https://img.shields.io/npm/v/level-replicator)](https://www.npmjs.com/package/level-replicator) [![npm downloads](https://img.shields.io/npm/dw/level-replicator)](https://www.npmjs.com/package/level-replicator) [![License](https://img.shields.io/npm/l/level-replicator?color=blue)](https://www.npmjs.com/package/level-replicator) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-replicator)](https://github.com/hij1nx/level-replicator) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-replicator?color=blue)](https://github.com/hij1nx/level-replicator/graphs/contributors)

Master-master replication. Same goal as [`level-replicate`][level-replicate] but different approach.

## Tools

**CLI, GUI and web interfaces for exploring data.**

### [`lev2`][lev2]

[![npm package version](https://img.shields.io/npm/v/lev2)](https://www.npmjs.com/package/lev2) [![npm downloads](https://img.shields.io/npm/dw/lev2)](https://www.npmjs.com/package/lev2) [![License](https://img.shields.io/npm/l/lev2?color=blue)](https://www.npmjs.com/package/lev2) [![Last commit](https://img.shields.io/github/last-commit/maxlath/lev2)](https://github.com/maxlath/lev2) [![Contributors](https://img.shields.io/github/contributors/maxlath/lev2?color=blue)](https://github.com/maxlath/lev2/graphs/contributors)

A complete REPL & CLI for managing LevelDB instances

### [`level-in`][level-in]

[![npm package version](https://img.shields.io/npm/v/level-in)](https://www.npmjs.com/package/level-in) [![npm downloads](https://img.shields.io/npm/dw/level-in)](https://www.npmjs.com/package/level-in) [![License](https://img.shields.io/npm/l/level-in?color=blue)](https://www.npmjs.com/package/level-in) [![Last commit](https://img.shields.io/github/last-commit/fergiemcdowall/level-in)](https://github.com/fergiemcdowall/level-in) [![Contributors](https://img.shields.io/github/contributors/fergiemcdowall/level-in?color=blue)](https://github.com/fergiemcdowall/level-in/graphs/contributors)

A simple command-line utility for writing data to LevelDB via [`levelup`][levelup].

### [`level-out`][level-out]

[![npm package version](https://img.shields.io/npm/v/level-out)](https://www.npmjs.com/package/level-out) [![npm downloads](https://img.shields.io/npm/dw/level-out)](https://www.npmjs.com/package/level-out) [![License](https://img.shields.io/npm/l/level-out?color=blue)](https://www.npmjs.com/package/level-out) [![Last commit](https://img.shields.io/github/last-commit/fergiemcdowall/level-out)](https://github.com/fergiemcdowall/level-out) [![Contributors](https://img.shields.io/github/contributors/fergiemcdowall/level-out?color=blue)](https://github.com/fergiemcdowall/level-out/graphs/contributors)

A simple command-line utility for reading LevelDB data via [`levelup`][levelup].

### [`level-key-list`][level-key-list]

[![npm package version](https://img.shields.io/npm/v/level-key-list)](https://www.npmjs.com/package/level-key-list) [![npm downloads](https://img.shields.io/npm/dw/level-key-list)](https://www.npmjs.com/package/level-key-list) [![License](https://img.shields.io/npm/l/level-key-list?color=blue)](https://www.npmjs.com/package/level-key-list) [![Last commit](https://img.shields.io/github/last-commit/hughsk/level-key-list)](https://github.com/hughsk/level-key-list) [![Contributors](https://img.shields.io/github/contributors/hughsk/level-key-list?color=blue)](https://github.com/hughsk/level-key-list/graphs/contributors)

Command-line tool for quickly printing a list of keys in a LevelDB database.

### [`lev`][lev]

[![npm package version](https://img.shields.io/npm/v/lev)](https://www.npmjs.com/package/lev) [![npm downloads](https://img.shields.io/npm/dw/lev)](https://www.npmjs.com/package/lev) [![License](https://img.shields.io/npm/l/lev?color=blue)](https://www.npmjs.com/package/lev) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/lev)](https://github.com/hij1nx/lev) [![Contributors](https://img.shields.io/github/contributors/hij1nx/lev?color=blue)](https://github.com/hij1nx/lev/graphs/contributors)

A CLI REPL interface for LevelDB.

### [`leveldb-repl`][leveldb-repl]

[![npm package version](https://img.shields.io/npm/v/leveldb-repl)](https://www.npmjs.com/package/leveldb-repl) [![npm downloads](https://img.shields.io/npm/dw/leveldb-repl)](https://www.npmjs.com/package/leveldb-repl) [![License](https://img.shields.io/npm/l/leveldb-repl?color=blue)](https://www.npmjs.com/package/leveldb-repl) [![Last commit](https://img.shields.io/github/last-commit/lapwinglabs/leveldb-repl)](https://github.com/lapwinglabs/leveldb-repl) [![Contributors](https://img.shields.io/github/contributors/lapwinglabs/leveldb-repl?color=blue)](https://github.com/lapwinglabs/leveldb-repl/graphs/contributors)

Super simple REPL for LevelDB. Supports filter globbing.

### [`levelhud`][levelhud]

[![npm package version](https://img.shields.io/npm/v/levelhud)](https://www.npmjs.com/package/levelhud) [![npm downloads](https://img.shields.io/npm/dw/levelhud)](https://www.npmjs.com/package/levelhud) [![License](https://img.shields.io/npm/l/levelhud?color=blue)](https://www.npmjs.com/package/levelhud) [![Last commit](https://img.shields.io/github/last-commit/ricardobeat/levelhud)](https://github.com/ricardobeat/levelhud) [![Contributors](https://img.shields.io/github/contributors/ricardobeat/levelhud?color=blue)](https://github.com/ricardobeat/levelhud/graphs/contributors)

LevelDB GUI with an interactive console.

### [`levelweb`][levelweb]

[![npm package version](https://img.shields.io/npm/v/levelweb)](https://www.npmjs.com/package/levelweb) [![npm downloads](https://img.shields.io/npm/dw/levelweb)](https://www.npmjs.com/package/levelweb) [![License](https://img.shields.io/npm/l/levelweb?color=blue)](https://www.npmjs.com/package/levelweb) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/levelui)](https://github.com/hij1nx/levelui) [![Contributors](https://img.shields.io/github/contributors/hij1nx/levelui?color=blue)](https://github.com/hij1nx/levelui/graphs/contributors)

A LevelDB GUI. Includes simple data visualization tools.

### [`level-cli`][level-cli]

[![npm package version](https://img.shields.io/npm/v/level-cli)](https://www.npmjs.com/package/level-cli) [![npm downloads](https://img.shields.io/npm/dw/level-cli)](https://www.npmjs.com/package/level-cli) [![License](https://img.shields.io/npm/l/level-cli?color=blue)](https://www.npmjs.com/package/level-cli) [![Last commit](https://img.shields.io/github/last-commit/mablay/level-cli)](https://github.com/mablay/level-cli) [![Contributors](https://img.shields.io/github/contributors/mablay/level-cli?color=blue)](https://github.com/mablay/level-cli/graphs/contributors)

Interact with LevelDB on the command line.

### [`level-explore`][level-explore]

[![npm package version](https://img.shields.io/npm/v/level-explore)](https://www.npmjs.com/package/level-explore) [![npm downloads](https://img.shields.io/npm/dw/level-explore)](https://www.npmjs.com/package/level-explore) [![License](https://img.shields.io/npm/l/level-explore?color=blue)](https://www.npmjs.com/package/level-explore) [![Last commit](https://img.shields.io/github/last-commit/jcblw/level-explore)](https://github.com/jcblw/level-explore) [![Contributors](https://img.shields.io/github/contributors/jcblw/level-explore?color=blue)](https://github.com/jcblw/level-explore/graphs/contributors)

A terminal program to visualize LevelDB data. Early stages.

### [`level-repair`][level-repair]

[![npm package version](https://img.shields.io/npm/v/level-repair)](https://www.npmjs.com/package/level-repair) [![npm downloads](https://img.shields.io/npm/dw/level-repair)](https://www.npmjs.com/package/level-repair) [![License](https://img.shields.io/npm/l/level-repair?color=blue)](https://www.npmjs.com/package/level-repair) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-repair)](https://github.com/kesla/level-repair) [![Contributors](https://img.shields.io/github/contributors/kesla/level-repair?color=blue)](https://github.com/kesla/level-repair/graphs/contributors)

CLI tool to repair a LevelDB.

### [`leveldb-editor`][leveldb-editor]

[![npm package version](https://img.shields.io/npm/v/leveldb-editor)](https://www.npmjs.com/package/leveldb-editor) [![npm downloads](https://img.shields.io/npm/dw/leveldb-editor)](https://www.npmjs.com/package/leveldb-editor) [![License](https://img.shields.io/npm/l/leveldb-editor?color=blue)](https://www.npmjs.com/package/leveldb-editor) [![Last commit](https://img.shields.io/github/last-commit/derhuerst/leveldb-editor)](https://github.com/derhuerst/leveldb-editor) [![Contributors](https://img.shields.io/github/contributors/derhuerst/leveldb-editor?color=blue)](https://github.com/derhuerst/leveldb-editor/graphs/contributors)

Edit a LevelDB from the command line.

### [`levelscan`][levelscan]

[![npm package version](https://img.shields.io/npm/v/levelscan)](https://www.npmjs.com/package/levelscan) [![npm downloads](https://img.shields.io/npm/dw/levelscan)](https://www.npmjs.com/package/levelscan) [![License](https://img.shields.io/npm/l/levelscan?color=blue)](https://www.npmjs.com/package/levelscan) [![Last commit](https://img.shields.io/github/last-commit/joeledwards/node-levelscan)](https://github.com/joeledwards/node-levelscan) [![Contributors](https://img.shields.io/github/contributors/joeledwards/node-levelscan?color=blue)](https://github.com/joeledwards/node-levelscan/graphs/contributors)

LevelDB command line scanning utility

### [`levelui`][levelui]

[![npm package version](https://img.shields.io/npm/v/levelui)](https://www.npmjs.com/package/levelui) [![npm downloads](https://img.shields.io/npm/dw/levelui)](https://www.npmjs.com/package/levelui) [![License](https://img.shields.io/npm/l/levelui?color=blue)](https://www.npmjs.com/package/levelui) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/levelui)](https://github.com/hij1nx/levelui) [![Contributors](https://img.shields.io/github/contributors/hij1nx/levelui?color=blue)](https://github.com/hij1nx/levelui/graphs/contributors)

A LevelDB GUI based on [`atom-shell`](https://github.com/atom/atom-shell) (now called Electron).

## Benchmarking & Debugging

### [`level-bench`][level-bench]

[![npm package version](https://img.shields.io/npm/v/level-bench)](https://www.npmjs.com/package/level-bench) [![npm downloads](https://img.shields.io/npm/dw/level-bench)](https://www.npmjs.com/package/level-bench) [![License](https://img.shields.io/npm/l/level-bench?color=blue)](https://www.npmjs.com/package/level-bench) [![Last commit](https://img.shields.io/github/last-commit/Level/bench)](https://github.com/Level/bench) [![Contributors](https://img.shields.io/github/contributors/Level/bench?color=blue)](https://github.com/Level/bench/graphs/contributors)

Benchmark [`abstract-leveldown`][abstract-leveldown] and [`levelup`][levelup] stores.

### [`level-compare-forks`][level-compare-forks]

[![npm package version](https://img.shields.io/npm/v/level-compare-forks)](https://www.npmjs.com/package/level-compare-forks) [![npm downloads](https://img.shields.io/npm/dw/level-compare-forks)](https://www.npmjs.com/package/level-compare-forks) [![License](https://img.shields.io/npm/l/level-compare-forks?color=blue)](https://www.npmjs.com/package/level-compare-forks) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-compare-forks)](https://github.com/kesla/level-compare-forks) [![Contributors](https://img.shields.io/github/contributors/kesla/level-compare-forks?color=blue)](https://github.com/kesla/level-compare-forks/graphs/contributors)

Run benchmarks on different level-forks and see how they compare.

### [`level-log`][level-log]

[![npm package version](https://img.shields.io/npm/v/level-log)](https://www.npmjs.com/package/level-log) [![npm downloads](https://img.shields.io/npm/dw/level-log)](https://www.npmjs.com/package/level-log) [![License](https://img.shields.io/npm/l/level-log?color=blue)](https://www.npmjs.com/package/level-log) [![Last commit](https://img.shields.io/github/last-commit/micnews/level-log)](https://github.com/micnews/level-log) [![Contributors](https://img.shields.io/github/contributors/micnews/level-log?color=blue)](https://github.com/micnews/level-log/graphs/contributors)

Log all [`levelup`][levelup] operations, including method calls.

### [`debugdown`][debugdown]

[![npm package version](https://img.shields.io/npm/v/debugdown)](https://www.npmjs.com/package/debugdown) [![npm downloads](https://img.shields.io/npm/dw/debugdown)](https://www.npmjs.com/package/debugdown) [![License](https://img.shields.io/npm/l/debugdown?color=blue)](https://www.npmjs.com/package/debugdown) [![Last commit](https://img.shields.io/github/last-commit/vweevers/debugdown)](https://github.com/vweevers/debugdown) [![Contributors](https://img.shields.io/github/contributors/vweevers/debugdown?color=blue)](https://github.com/vweevers/debugdown/graphs/contributors)

Log all operations made on an [`abstract-leveldown`][abstract-leveldown] compliant store. For node and browsers.

### [`level-time`][level-time]

[![npm package version](https://img.shields.io/npm/v/level-time)](https://www.npmjs.com/package/level-time) [![npm downloads](https://img.shields.io/npm/dw/level-time)](https://www.npmjs.com/package/level-time) [![License](https://img.shields.io/npm/l/level-time?color=blue)](https://www.npmjs.com/package/level-time) [![Last commit](https://img.shields.io/github/last-commit/micnews/level-time)](https://github.com/micnews/level-time) [![Contributors](https://img.shields.io/github/contributors/micnews/level-time?color=blue)](https://github.com/micnews/level-time/graphs/contributors)

Log [`levelup`][levelup] operations and their duration.

### [`level-dump`][level-dump]

[![npm package version](https://img.shields.io/npm/v/level-dump)](https://www.npmjs.com/package/level-dump) [![npm downloads](https://img.shields.io/npm/dw/level-dump)](https://www.npmjs.com/package/level-dump) [![License](https://img.shields.io/npm/l/level-dump?color=blue)](https://www.npmjs.com/package/level-dump) [![Last commit](https://img.shields.io/github/last-commit/thlorenz/level-dump)](https://github.com/thlorenz/level-dump) [![Contributors](https://img.shields.io/github/contributors/thlorenz/level-dump?color=blue)](https://github.com/thlorenz/level-dump/graphs/contributors)

Dumps all values and/or keys of a [`levelup`][levelup] or [`level-sublevel`][level-sublevel] instance to the console.

### [`level-benchmarks`][level-benchmarks]

[![npm package version](https://img.shields.io/npm/v/level-benchmarks)](https://www.npmjs.com/package/level-benchmarks) [![npm downloads](https://img.shields.io/npm/dw/level-benchmarks)](https://www.npmjs.com/package/level-benchmarks) [![License](https://img.shields.io/npm/l/level-benchmarks?color=blue)](https://www.npmjs.com/package/level-benchmarks) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-benchmarks)](https://github.com/kesla/level-benchmarks) [![Contributors](https://img.shields.io/github/contributors/kesla/level-benchmarks?color=blue)](https://github.com/kesla/level-benchmarks/graphs/contributors)

Run benchmarks against levelup-compatible engines

## Resources

### [`leveljs.org`][leveljs.org]

Website for [Level][level-org]

### [`level-community`][level-community]

General discussion, cross-repo efforts and common information for projects in the community

### [`electron-demo`][electron-demo]

Demo app loading LevelDB into an Electron context.

### [`browserify-starter`][browserify-starter]

Demonstrates bundling [`level`][level] for browsers using [`browserify`](https://github.com/browserify/browserify).

### [`webpack-starter`][webpack-starter]

Demonstrates bundling [`level`][level] for browsers using [`webpack`](https://webpack.js.org/).

### [`level-awesome`][level-awesome]

An open list of awesome [Level][level-org] libraries and resources.

### [`levelmeup`][levelmeup]

Level Me Up Scotty! An intro to Node.js databases via a set of self-guided workshops.

## Applications

**Applications and libraries that use Level modules under the hood.**

### [`ipfs`][ipfs]

A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.

### [`clocker`][clocker]

Track project hours

### [`copy-on-write`][copy-on-write]

A copy-on-write FUSE implementation

### [`chrome-localstorage`][chrome-localstorage]

CLI to manipulate Chrome and Chromium's localStorage on disk.

### [`cipherhub`][cipherhub]

Encrypt messages based on GitHub SSH public keys

### [`code-music-studio`][code-music-studio]

Design musical algorithms

### [`level-todo`][level-todo]

A todo list using LevelDB.

### [`electron-crash-report-service`][electron-crash-report-service]

Aggregate crash reports for Electron apps

### [`cross-street-indexer`][cross-street-indexer]

Blazing fast tile based geocoder that matches cross street (road intersections) entirely sourced by OSM QA Tiles.

### [`lt-core`][lt-core]

Time tracking library.

### [`npm-search`][npm-search]

An index of npm using [`levelup`][levelup].

### [`connect-level`][connect-level]

A `connect` / `express` session store backed by LevelDB via [`levelup`][levelup].

### [`hadron`][hadron]

A hackable publishing platform using LevelDB as main database.

### [`groove basin`][groove basin]

Music player server with a web-based user interface. Uses [`levelup`][levelup] for the music library database.

### [`prerender-level-cache`][prerender-level-cache]

[Prerender](https://github.com/prerender/prerender) plugin to use level as a cache store.

### [`tsd`][tsd]

Spin up a quick server to visualize time series data.

### [`appfeed`][appfeed]

Version feed for trusted application delivery

### [`arrivals-osx`][arrivals-osx]

Watch a folder for audio and video arrivals and convert them to Apple-friendly formats.

### [`bleach-log-server`][bleach-log-server]

Keep track of bleach levels for a hot tub or a pool.

### [`browserify-cdn`][browserify-cdn]

Browserify CDN. Caches browserify bundles in LevelDB.

## Legacy

**Modules that are deprecated, archived or superseded. Listed here for the historical record.**

### [`levelup`][levelup]

[![npm package version](https://img.shields.io/npm/v/levelup)](https://www.npmjs.com/package/levelup) [![npm downloads](https://img.shields.io/npm/dw/levelup)](https://www.npmjs.com/package/levelup) [![License](https://img.shields.io/npm/l/levelup?color=blue)](https://www.npmjs.com/package/levelup) [![Last commit](https://img.shields.io/github/last-commit/Level/levelup)](https://github.com/Level/levelup) [![Contributors](https://img.shields.io/github/contributors/Level/levelup?color=blue)](https://github.com/Level/levelup/graphs/contributors)

Wrapper for [`abstract-leveldown`][abstract-leveldown] stores. Superseded by [`abstract-level`][abstract-level].

### [`abstract-leveldown`][abstract-leveldown]

[![npm package version](https://img.shields.io/npm/v/abstract-leveldown)](https://www.npmjs.com/package/abstract-leveldown) [![npm downloads](https://img.shields.io/npm/dw/abstract-leveldown)](https://www.npmjs.com/package/abstract-leveldown) [![License](https://img.shields.io/npm/l/abstract-leveldown?color=blue)](https://www.npmjs.com/package/abstract-leveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/abstract-leveldown)](https://github.com/Level/abstract-leveldown) [![Contributors](https://img.shields.io/github/contributors/Level/abstract-leveldown?color=blue)](https://github.com/Level/abstract-leveldown/graphs/contributors)

An abstract prototype matching the [`leveldown`][leveldown] API. Superseded by [`abstract-level`][abstract-level].

### [`level-mem`][level-mem]

[![npm package version](https://img.shields.io/npm/v/level-mem)](https://www.npmjs.com/package/level-mem) [![npm downloads](https://img.shields.io/npm/dw/level-mem)](https://www.npmjs.com/package/level-mem) [![License](https://img.shields.io/npm/l/level-mem?color=blue)](https://www.npmjs.com/package/level-mem) [![Last commit](https://img.shields.io/github/last-commit/Level/level-mem)](https://github.com/Level/level-mem) [![Contributors](https://img.shields.io/github/contributors/Level/level-mem?color=blue)](https://github.com/Level/level-mem/graphs/contributors) ![levelup](https://img.shields.io/badge/levelup-5.1-inactive.svg)

Bundles [`memdown`][memdown] with [`levelup`][levelup] and [`encoding-down`][encoding-down]. Superseded by [`memory-level`][memory-level].

### [`level-rocksdb`][level-rocksdb]

[![npm package version](https://img.shields.io/npm/v/level-rocksdb)](https://www.npmjs.com/package/level-rocksdb) [![npm downloads](https://img.shields.io/npm/dw/level-rocksdb)](https://www.npmjs.com/package/level-rocksdb) [![License](https://img.shields.io/npm/l/level-rocksdb?color=blue)](https://www.npmjs.com/package/level-rocksdb) [![Last commit](https://img.shields.io/github/last-commit/Level/level-rocksdb)](https://github.com/Level/level-rocksdb) [![Contributors](https://img.shields.io/github/contributors/Level/level-rocksdb?color=blue)](https://github.com/Level/level-rocksdb/graphs/contributors) ![levelup](https://img.shields.io/badge/levelup-5.1-inactive.svg)

Bundles [`rocksdb`][rocksdb] with [`levelup`][levelup] and [`encoding-down`][encoding-down].

### [`level-hyper`][level-hyper]

[![npm package version](https://img.shields.io/npm/v/level-hyper)](https://www.npmjs.com/package/level-hyper) [![npm downloads](https://img.shields.io/npm/dw/level-hyper)](https://www.npmjs.com/package/level-hyper) [![License](https://img.shields.io/npm/l/level-hyper?color=blue)](https://www.npmjs.com/package/level-hyper) [![Last commit](https://img.shields.io/github/last-commit/Level/level-hyper)](https://github.com/Level/level-hyper) [![Contributors](https://img.shields.io/github/contributors/Level/level-hyper?color=blue)](https://github.com/Level/level-hyper/graphs/contributors) ![levelup](https://img.shields.io/badge/levelup-3.0-inactive.svg)

Bundles [`leveldown-hyper`][leveldown-hyper] with [`levelup`][levelup] and [`encoding-down`][encoding-down].

### [`level-indexed`][level-indexed]

[![npm package version](https://img.shields.io/npm/v/level-indexed)](https://www.npmjs.com/package/level-indexed) [![npm downloads](https://img.shields.io/npm/dw/level-indexed)](https://www.npmjs.com/package/level-indexed) [![License](https://img.shields.io/npm/l/level-indexed?color=blue)](https://www.npmjs.com/package/level-indexed) [![Last commit](https://img.shields.io/github/last-commit/kapetan/level-indexed)](https://github.com/kapetan/level-indexed) [![Contributors](https://img.shields.io/github/contributors/kapetan/level-indexed?color=blue)](https://github.com/kapetan/level-indexed/graphs/contributors) ![levelup](https://img.shields.io/badge/levelup-2.0-inactive.svg)

Bundles [`indexeddown`][indexeddown] with [`levelup`][levelup] and [`encoding-down`][encoding-down].

### [`leveldown`][leveldown]

[![npm package version](https://img.shields.io/npm/v/leveldown)](https://www.npmjs.com/package/leveldown) [![npm downloads](https://img.shields.io/npm/dw/leveldown)](https://www.npmjs.com/package/leveldown) [![License](https://img.shields.io/npm/l/leveldown?color=blue)](https://www.npmjs.com/package/leveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/leveldown)](https://github.com/Level/leveldown) [![Contributors](https://img.shields.io/github/contributors/Level/leveldown?color=blue)](https://github.com/Level/leveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [LevelDB](https://github.com/google/leveldb). Superseded by [`classic-level`][classic-level].

### [`memdown`][memdown]

[![npm package version](https://img.shields.io/npm/v/memdown)](https://www.npmjs.com/package/memdown) [![npm downloads](https://img.shields.io/npm/dw/memdown)](https://www.npmjs.com/package/memdown) [![License](https://img.shields.io/npm/l/memdown?color=blue)](https://www.npmjs.com/package/memdown) [![Last commit](https://img.shields.io/github/last-commit/Level/memdown)](https://github.com/Level/memdown) [![Contributors](https://img.shields.io/github/contributors/Level/memdown?color=blue)](https://github.com/Level/memdown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [in-memory RBTree](https://www.npmjs.com/package/functional-red-black-tree). Superseded by [`memory-level`][memory-level].

### [`level-js`][level-js]

[![npm package version](https://img.shields.io/npm/v/level-js)](https://www.npmjs.com/package/level-js) [![npm downloads](https://img.shields.io/npm/dw/level-js)](https://www.npmjs.com/package/level-js) [![License](https://img.shields.io/npm/l/level-js?color=blue)](https://www.npmjs.com/package/level-js) [![Last commit](https://img.shields.io/github/last-commit/Level/level.js)](https://github.com/Level/level.js) [![Contributors](https://img.shields.io/github/contributors/Level/level.js?color=blue)](https://github.com/Level/level.js/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB). Superseded by [`browser-level`][browser-level].

### [`rocksdb`][rocksdb]

[![npm package version](https://img.shields.io/npm/v/rocksdb)](https://www.npmjs.com/package/rocksdb) [![npm downloads](https://img.shields.io/npm/dw/rocksdb)](https://www.npmjs.com/package/rocksdb) [![License](https://img.shields.io/npm/l/rocksdb?color=blue)](https://www.npmjs.com/package/rocksdb) [![Last commit](https://img.shields.io/github/last-commit/Level/rocksdb)](https://github.com/Level/rocksdb) [![Contributors](https://img.shields.io/github/contributors/Level/rocksdb?color=blue)](https://github.com/Level/rocksdb/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [RocksDB](https://github.com/facebook/rocksdb/).

### [`leveldown-hyper`][leveldown-hyper]

[![npm package version](https://img.shields.io/npm/v/leveldown-hyper)](https://www.npmjs.com/package/leveldown-hyper) [![npm downloads](https://img.shields.io/npm/dw/leveldown-hyper)](https://www.npmjs.com/package/leveldown-hyper) [![License](https://img.shields.io/npm/l/leveldown-hyper?color=blue)](https://www.npmjs.com/package/leveldown-hyper) [![Last commit](https://img.shields.io/github/last-commit/Level/leveldown-hyper)](https://github.com/Level/leveldown-hyper) [![Contributors](https://img.shields.io/github/contributors/Level/leveldown-hyper?color=blue)](https://github.com/Level/leveldown-hyper/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [HyperLevelDB](https://github.com/rescrv/HyperLevelDB).

### [`medeadown`][medeadown]

[![npm package version](https://img.shields.io/npm/v/medeadown)](https://www.npmjs.com/package/medeadown) [![npm downloads](https://img.shields.io/npm/dw/medeadown)](https://www.npmjs.com/package/medeadown) [![License](https://img.shields.io/npm/l/medeadown?color=blue)](https://www.npmjs.com/package/medeadown) [![Last commit](https://img.shields.io/github/last-commit/kesla/medeadown)](https://github.com/kesla/medeadown) [![Contributors](https://img.shields.io/github/contributors/kesla/medeadown?color=blue)](https://github.com/kesla/medeadown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-3.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [medea](https://github.com/argo/medea).

### [`jsondown`][jsondown]

[![npm package version](https://img.shields.io/npm/v/jsondown)](https://www.npmjs.com/package/jsondown) [![npm downloads](https://img.shields.io/npm/dw/jsondown)](https://www.npmjs.com/package/jsondown) [![License](https://img.shields.io/npm/l/jsondown?color=blue)](https://www.npmjs.com/package/jsondown) [![Last commit](https://img.shields.io/github/last-commit/toolness/jsondown)](https://github.com/toolness/jsondown) [![Contributors](https://img.shields.io/github/contributors/toolness/jsondown?color=blue)](https://github.com/toolness/jsondown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by JSON on disk.

### [`asyncstorage-down`][asyncstorage-down]

[![npm package version](https://img.shields.io/npm/v/asyncstorage-down)](https://www.npmjs.com/package/asyncstorage-down) [![npm downloads](https://img.shields.io/npm/dw/asyncstorage-down)](https://www.npmjs.com/package/asyncstorage-down) [![License](https://img.shields.io/npm/l/asyncstorage-down?color=blue)](https://www.npmjs.com/package/asyncstorage-down) [![Last commit](https://img.shields.io/github/last-commit/tradle/asyncstorage-down)](https://github.com/tradle/asyncstorage-down) [![Contributors](https://img.shields.io/github/contributors/tradle/asyncstorage-down?color=blue)](https://github.com/tradle/asyncstorage-down/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) (React Native).

### [`mongodown`][mongodown]

[![npm package version](https://img.shields.io/npm/v/mongodown)](https://www.npmjs.com/package/mongodown) [![npm downloads](https://img.shields.io/npm/dw/mongodown)](https://www.npmjs.com/package/mongodown) [![License](https://img.shields.io/npm/l/mongodown?color=blue)](https://www.npmjs.com/package/mongodown) [![Last commit](https://img.shields.io/github/last-commit/watson/mongodown)](https://github.com/watson/mongodown) [![Contributors](https://img.shields.io/github/contributors/watson/mongodown?color=blue)](https://github.com/watson/mongodown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [MongoDB](https://www.mongodb.com/).

### [`sqldown`][sqldown]

[![npm package version](https://img.shields.io/npm/v/sqldown)](https://www.npmjs.com/package/sqldown) [![npm downloads](https://img.shields.io/npm/dw/sqldown)](https://www.npmjs.com/package/sqldown) [![License](https://img.shields.io/npm/l/sqldown?color=blue)](https://www.npmjs.com/package/sqldown) [![Last commit](https://img.shields.io/github/last-commit/calvinmetcalf/sqldown)](https://github.com/calvinmetcalf/sqldown) [![Contributors](https://img.shields.io/github/contributors/calvinmetcalf/sqldown?color=blue)](https://github.com/calvinmetcalf/sqldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [`sqlite3`](https://www.npmjs.com/package/sqlite3), [`pg`](https://www.npmjs.com/package/pg), [`mysql`](https://www.npmjs.com/package/mysql) or WebSQL.

### [`dynamo-down`][dynamo-down]

[![npm package version](https://img.shields.io/npm/v/dynamo-down)](https://www.npmjs.com/package/dynamo-down) [![npm downloads](https://img.shields.io/npm/dw/dynamo-down)](https://www.npmjs.com/package/dynamo-down) [![License](https://img.shields.io/npm/l/dynamo-down?color=blue)](https://www.npmjs.com/package/dynamo-down) [![Last commit](https://img.shields.io/github/last-commit/jed/dynamo-down)](https://github.com/jed/dynamo-down) [![Contributors](https://img.shields.io/github/contributors/jed/dynamo-down?color=blue)](https://github.com/jed/dynamo-down/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [AWS DynamoDB](http://aws.amazon.com/dynamodb).

### [`azureleveldown`][azureleveldown]

[![npm package version](https://img.shields.io/npm/v/azureleveldown)](https://www.npmjs.com/package/azureleveldown) [![npm downloads](https://img.shields.io/npm/dw/azureleveldown)](https://www.npmjs.com/package/azureleveldown) [![License](https://img.shields.io/npm/l/azureleveldown?color=blue)](https://www.npmjs.com/package/azureleveldown) [![Last commit](https://img.shields.io/github/last-commit/richorama/azureleveldown)](https://github.com/richorama/azureleveldown) [![Contributors](https://img.shields.io/github/contributors/richorama/azureleveldown?color=blue)](https://github.com/richorama/azureleveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.11-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by Windows Azure Table Storage.

### [`fruitdown`][fruitdown]

[![npm package version](https://img.shields.io/npm/v/fruitdown)](https://www.npmjs.com/package/fruitdown) [![npm downloads](https://img.shields.io/npm/dw/fruitdown)](https://www.npmjs.com/package/fruitdown) [![License](https://img.shields.io/npm/l/fruitdown?color=blue)](https://www.npmjs.com/package/fruitdown) [![Last commit](https://img.shields.io/github/last-commit/nolanlawson/fruitdown)](https://github.com/nolanlawson/fruitdown) [![Contributors](https://img.shields.io/github/contributors/nolanlawson/fruitdown?color=blue)](https://github.com/nolanlawson/fruitdown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by IndexedDB (Apple).

### [`localstorage-down`][localstorage-down]

[![npm package version](https://img.shields.io/npm/v/localstorage-down)](https://www.npmjs.com/package/localstorage-down) [![npm downloads](https://img.shields.io/npm/dw/localstorage-down)](https://www.npmjs.com/package/localstorage-down) [![License](https://img.shields.io/npm/l/localstorage-down?color=blue)](https://www.npmjs.com/package/localstorage-down) [![Last commit](https://img.shields.io/github/last-commit/No9/localstorage-down)](https://github.com/No9/localstorage-down) [![Contributors](https://img.shields.io/github/contributors/No9/localstorage-down?color=blue)](https://github.com/No9/localstorage-down/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### [`riakdown`][riakdown]

[![npm package version](https://img.shields.io/npm/v/riakdown)](https://www.npmjs.com/package/riakdown) [![npm downloads](https://img.shields.io/npm/dw/riakdown)](https://www.npmjs.com/package/riakdown) [![License](https://img.shields.io/npm/l/riakdown?color=blue)](https://www.npmjs.com/package/riakdown) [![Last commit](https://img.shields.io/github/last-commit/nlf/riakdown)](https://github.com/nlf/riakdown) [![Contributors](https://img.shields.io/github/contributors/nlf/riakdown?color=blue)](https://github.com/nlf/riakdown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [riakpbc](https://github.com/nlf/riakpbc).

### [`mysqldown`][mysqldown]

[![npm package version](https://img.shields.io/npm/v/mysqldown)](https://www.npmjs.com/package/mysqldown) [![npm downloads](https://img.shields.io/npm/dw/mysqldown)](https://www.npmjs.com/package/mysqldown) [![License](https://img.shields.io/npm/l/mysqldown?color=blue)](https://www.npmjs.com/package/mysqldown) [![Last commit](https://img.shields.io/github/last-commit/kesla/mysqldown)](https://github.com/kesla/mysqldown) [![Contributors](https://img.shields.io/github/contributors/kesla/mysqldown?color=blue)](https://github.com/kesla/mysqldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.7-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [MySQL](https://www.mysql.com/).

### [`redisdown`][redisdown]

[![npm package version](https://img.shields.io/npm/v/redisdown)](https://www.npmjs.com/package/redisdown) [![npm downloads](https://img.shields.io/npm/dw/redisdown)](https://www.npmjs.com/package/redisdown) [![License](https://img.shields.io/npm/l/redisdown?color=blue)](https://www.npmjs.com/package/redisdown) [![Last commit](https://img.shields.io/github/last-commit/hmalphettes/redisdown)](https://github.com/hmalphettes/redisdown) [![Contributors](https://img.shields.io/github/contributors/hmalphettes/redisdown?color=blue)](https://github.com/hmalphettes/redisdown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [Redis](https://redis.io/).

### [`leveldown-basho`][leveldown-basho]

[![npm package version](https://img.shields.io/npm/v/leveldown-basho)](https://www.npmjs.com/package/leveldown-basho) [![npm downloads](https://img.shields.io/npm/dw/leveldown-basho)](https://www.npmjs.com/package/leveldown-basho) [![License](https://img.shields.io/npm/l/leveldown-basho?color=blue)](https://www.npmjs.com/package/leveldown-basho) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [Basho's LevelDB fork](https://github.com/basho/leveldb).

### [`sheet-down`][sheet-down]

[![npm package version](https://img.shields.io/npm/v/sheet-down)](https://www.npmjs.com/package/sheet-down) [![npm downloads](https://img.shields.io/npm/dw/sheet-down)](https://www.npmjs.com/package/sheet-down) [![License](https://img.shields.io/npm/l/sheet-down?color=blue)](https://www.npmjs.com/package/sheet-down) [![Last commit](https://img.shields.io/github/last-commit/jed/sheet-down)](https://github.com/jed/sheet-down) [![Contributors](https://img.shields.io/github/contributors/jed/sheet-down?color=blue)](https://github.com/jed/sheet-down/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [Google Sheets](https://docs.google.com/spreadsheets).

### [`indexeddown`][indexeddown]

[![npm package version](https://img.shields.io/npm/v/indexeddown)](https://www.npmjs.com/package/indexeddown) [![npm downloads](https://img.shields.io/npm/dw/indexeddown)](https://www.npmjs.com/package/indexeddown) [![License](https://img.shields.io/npm/l/indexeddown?color=blue)](https://www.npmjs.com/package/indexeddown) [![Last commit](https://img.shields.io/github/last-commit/kapetan/indexeddown)](https://github.com/kapetan/indexeddown) [![Contributors](https://img.shields.io/github/contributors/kapetan/indexeddown?color=blue)](https://github.com/kapetan/indexeddown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by IndexedDB.

### [`lmdb-leveldown`][lmdb-leveldown]

[![npm package version](https://img.shields.io/npm/v/lmdb-leveldown)](https://www.npmjs.com/package/lmdb-leveldown) [![npm downloads](https://img.shields.io/npm/dw/lmdb-leveldown)](https://www.npmjs.com/package/lmdb-leveldown) [![License](https://img.shields.io/npm/l/lmdb-leveldown?color=blue)](https://www.npmjs.com/package/lmdb-leveldown) [![Last commit](https://img.shields.io/github/last-commit/chrbala/lmdb-leveldown)](https://github.com/chrbala/lmdb-leveldown) [![Contributors](https://img.shields.io/github/contributors/chrbala/lmdb-leveldown?color=blue)](https://github.com/chrbala/lmdb-leveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by LMDB.

### [`localdown`][localdown]

[![npm package version](https://img.shields.io/npm/v/localdown)](https://www.npmjs.com/package/localdown) [![npm downloads](https://img.shields.io/npm/dw/localdown)](https://www.npmjs.com/package/localdown) [![License](https://img.shields.io/npm/l/localdown?color=blue)](https://www.npmjs.com/package/localdown) [![Last commit](https://img.shields.io/github/last-commit/bhoriuchi/localdown)](https://github.com/bhoriuchi/localdown) [![Contributors](https://img.shields.io/github/contributors/bhoriuchi/localdown?color=blue)](https://github.com/bhoriuchi/localdown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by localStorage in Node.js.

### [`aerospike-leveldown`][aerospike-leveldown]

[![npm package version](https://img.shields.io/npm/v/aerospike-leveldown)](https://www.npmjs.com/package/aerospike-leveldown) [![npm downloads](https://img.shields.io/npm/dw/aerospike-leveldown)](https://www.npmjs.com/package/aerospike-leveldown) [![License](https://img.shields.io/npm/l/aerospike-leveldown?color=blue)](https://www.npmjs.com/package/aerospike-leveldown) [![Last commit](https://img.shields.io/github/last-commit/ProjectThor/aerospikedown)](https://github.com/ProjectThor/aerospikedown) [![Contributors](https://img.shields.io/github/contributors/ProjectThor/aerospikedown?color=blue)](https://github.com/ProjectThor/aerospikedown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by Aerospike.

### [`s3leveldown`][s3leveldown]

[![npm package version](https://img.shields.io/npm/v/s3leveldown)](https://www.npmjs.com/package/s3leveldown) [![npm downloads](https://img.shields.io/npm/dw/s3leveldown)](https://www.npmjs.com/package/s3leveldown) [![License](https://img.shields.io/npm/l/s3leveldown?color=blue)](https://www.npmjs.com/package/s3leveldown) [![Last commit](https://img.shields.io/github/last-commit/loune/s3leveldown)](https://github.com/loune/s3leveldown) [![Contributors](https://img.shields.io/github/contributors/loune/s3leveldown?color=blue)](https://github.com/loune/s3leveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [AWS S3](https://aws.amazon.com/s3/).

### [`gaiadown-ts`][gaiadown-ts]

[![npm package version](https://img.shields.io/npm/v/gaiadown-ts)](https://www.npmjs.com/package/gaiadown-ts) [![npm downloads](https://img.shields.io/npm/dw/gaiadown-ts)](https://www.npmjs.com/package/gaiadown-ts) [![License](https://img.shields.io/npm/l/gaiadown-ts?color=blue)](https://www.npmjs.com/package/gaiadown-ts) [![Last commit](https://img.shields.io/github/last-commit/acidleroy/gaiadown-ts)](https://github.com/acidleroy/gaiadown-ts) [![Contributors](https://img.shields.io/github/contributors/acidleroy/gaiadown-ts?color=blue)](https://github.com/acidleroy/gaiadown-ts/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [Gaia](https://github.com/blockstack/gaia).

### [`dynamodb-leveldown`][dynamodb-leveldown]

[![npm package version](https://img.shields.io/npm/v/dynamodb-leveldown)](https://www.npmjs.com/package/dynamodb-leveldown) [![npm downloads](https://img.shields.io/npm/dw/dynamodb-leveldown)](https://www.npmjs.com/package/dynamodb-leveldown) [![License](https://img.shields.io/npm/l/dynamodb-leveldown?color=blue)](https://www.npmjs.com/package/dynamodb-leveldown) [![Last commit](https://img.shields.io/github/last-commit/GioCirque/DynamoDb-LevelDown)](https://github.com/GioCirque/DynamoDb-LevelDown) [![Contributors](https://img.shields.io/github/contributors/GioCirque/DynamoDb-LevelDown?color=blue)](https://github.com/GioCirque/DynamoDb-LevelDown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [AWS DynamoDB](http://aws.amazon.com/dynamodb/).

### [`localforagedown`][localforagedown]

[![npm package version](https://img.shields.io/npm/v/localforagedown)](https://www.npmjs.com/package/localforagedown) [![npm downloads](https://img.shields.io/npm/dw/localforagedown)](https://www.npmjs.com/package/localforagedown) [![License](https://img.shields.io/npm/l/localforagedown?color=blue)](https://www.npmjs.com/package/localforagedown) [![Last commit](https://img.shields.io/github/last-commit/KsRyY/localforagedown)](https://github.com/KsRyY/localforagedown) [![Contributors](https://img.shields.io/github/contributors/KsRyY/localforagedown?color=blue)](https://github.com/KsRyY/localforagedown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [localForage](https://github.com/localForage/localForage/).

### [`react-native-leveldown`][react-native-leveldown]

[![npm package version](https://img.shields.io/npm/v/react-native-leveldown)](https://www.npmjs.com/package/react-native-leveldown) [![npm downloads](https://img.shields.io/npm/dw/react-native-leveldown)](https://www.npmjs.com/package/react-native-leveldown) [![License](https://img.shields.io/npm/l/react-native-leveldown?color=blue)](https://www.npmjs.com/package/react-native-leveldown) [![Last commit](https://img.shields.io/github/last-commit/andymatuschak/react-native-leveldown)](https://github.com/andymatuschak/react-native-leveldown) [![Contributors](https://img.shields.io/github/contributors/andymatuschak/react-native-leveldown?color=blue)](https://github.com/andymatuschak/react-native-leveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [LevelDB](https://github.com/google/leveldb) (React Native).

### [`networked-hyperbeedown`][networked-hyperbeedown]

[![npm package version](https://img.shields.io/npm/v/networked-hyperbeedown)](https://www.npmjs.com/package/networked-hyperbeedown) [![npm downloads](https://img.shields.io/npm/dw/networked-hyperbeedown)](https://www.npmjs.com/package/networked-hyperbeedown) [![License](https://img.shields.io/npm/l/networked-hyperbeedown?color=blue)](https://www.npmjs.com/package/networked-hyperbeedown) [![Last commit](https://img.shields.io/github/last-commit/RangerMauve/networked-hyperbeedown)](https://github.com/RangerMauve/networked-hyperbeedown) [![Contributors](https://img.shields.io/github/contributors/RangerMauve/networked-hyperbeedown?color=blue)](https://github.com/RangerMauve/networked-hyperbeedown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg)

An [`abstract-leveldown`][abstract-leveldown] implementation backed by [Hyperbee](https://github.com/hypercore-protocol/hyperbee/).

### [`encoding-down`][encoding-down]

[![npm package version](https://img.shields.io/npm/v/encoding-down)](https://www.npmjs.com/package/encoding-down) [![npm downloads](https://img.shields.io/npm/dw/encoding-down)](https://www.npmjs.com/package/encoding-down) [![License](https://img.shields.io/npm/l/encoding-down?color=blue)](https://www.npmjs.com/package/encoding-down) [![Last commit](https://img.shields.io/github/last-commit/Level/encoding-down)](https://github.com/Level/encoding-down) [![Contributors](https://img.shields.io/github/contributors/Level/encoding-down?color=blue)](https://github.com/Level/encoding-down/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] layer that provides key/value encoding. Superseded by [`abstract-level`][abstract-level].

### [`@adorsys/encrypt-down`][@adorsys/encrypt-down]

[![npm package version](https://img.shields.io/npm/v/@adorsys/encrypt-down)](https://www.npmjs.com/package/@adorsys/encrypt-down) [![npm downloads](https://img.shields.io/npm/dw/@adorsys/encrypt-down)](https://www.npmjs.com/package/@adorsys/encrypt-down) [![License](https://img.shields.io/npm/l/@adorsys/encrypt-down?color=blue)](https://www.npmjs.com/package/@adorsys/encrypt-down) [![Last commit](https://img.shields.io/github/last-commit/adorsys/encrypt-down)](https://github.com/adorsys/encrypt-down) [![Contributors](https://img.shields.io/github/contributors/adorsys/encrypt-down?color=blue)](https://github.com/adorsys/encrypt-down/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] layer that provides encryption for values.

### [`deferred-leveldown`][deferred-leveldown]

[![npm package version](https://img.shields.io/npm/v/deferred-leveldown)](https://www.npmjs.com/package/deferred-leveldown) [![npm downloads](https://img.shields.io/npm/dw/deferred-leveldown)](https://www.npmjs.com/package/deferred-leveldown) [![License](https://img.shields.io/npm/l/deferred-leveldown?color=blue)](https://www.npmjs.com/package/deferred-leveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/deferred-leveldown)](https://github.com/Level/deferred-leveldown) [![Contributors](https://img.shields.io/github/contributors/Level/deferred-leveldown?color=blue)](https://github.com/Level/deferred-leveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg)

An [`abstract-leveldown`][abstract-leveldown] layer that handles delayed-open. Built into [`levelup`][levelup]. Both are superseded by [`abstract-level`][abstract-level].

### [`level-cowdown`][level-cowdown]

[![npm package version](https://img.shields.io/npm/v/level-cowdown)](https://www.npmjs.com/package/level-cowdown) [![npm downloads](https://img.shields.io/npm/dw/level-cowdown)](https://www.npmjs.com/package/level-cowdown) [![License](https://img.shields.io/npm/l/level-cowdown?color=blue)](https://www.npmjs.com/package/level-cowdown) [![Last commit](https://img.shields.io/github/last-commit/substack/level-cowdown)](https://github.com/substack/level-cowdown) [![Contributors](https://img.shields.io/github/contributors/substack/level-cowdown?color=blue)](https://github.com/substack/level-cowdown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-inactive.svg)

Copy-on-write [`abstract-leveldown`][abstract-leveldown] layer.

### [`abstract-stream-leveldown`][abstract-stream-leveldown]

[![npm package version](https://img.shields.io/npm/v/abstract-stream-leveldown)](https://www.npmjs.com/package/abstract-stream-leveldown) [![npm downloads](https://img.shields.io/npm/dw/abstract-stream-leveldown)](https://www.npmjs.com/package/abstract-stream-leveldown) [![License](https://img.shields.io/npm/l/abstract-stream-leveldown?color=blue)](https://www.npmjs.com/package/abstract-stream-leveldown) [![Last commit](https://img.shields.io/github/last-commit/jed/abstract-stream-leveldown)](https://github.com/jed/abstract-stream-leveldown) [![Contributors](https://img.shields.io/github/contributors/jed/abstract-stream-leveldown?color=blue)](https://github.com/jed/abstract-stream-leveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-inactive.svg)

A stream-based [`abstract-leveldown`][abstract-leveldown] prototype.

### [`level-iterator-stream`][level-iterator-stream]

[![npm package version](https://img.shields.io/npm/v/level-iterator-stream)](https://www.npmjs.com/package/level-iterator-stream) [![npm downloads](https://img.shields.io/npm/dw/level-iterator-stream)](https://www.npmjs.com/package/level-iterator-stream) [![License](https://img.shields.io/npm/l/level-iterator-stream?color=blue)](https://www.npmjs.com/package/level-iterator-stream) [![Last commit](https://img.shields.io/github/last-commit/Level/iterator-stream)](https://github.com/Level/iterator-stream) [![Contributors](https://img.shields.io/github/contributors/Level/iterator-stream?color=blue)](https://github.com/Level/iterator-stream/graphs/contributors)

Turn an [`abstract-leveldown`][abstract-leveldown] iterator into a readable stream. Included in [`levelup`][levelup]. For [`abstract-level`][abstract-level] databases, this is superseded by [`level-read-stream`][level-read-stream].

### [`level-batch-stream`][level-batch-stream]

[![npm package version](https://img.shields.io/npm/v/level-batch-stream)](https://www.npmjs.com/package/level-batch-stream) [![npm downloads](https://img.shields.io/npm/dw/level-batch-stream)](https://www.npmjs.com/package/level-batch-stream) [![License](https://img.shields.io/npm/l/level-batch-stream?color=blue)](https://www.npmjs.com/package/level-batch-stream) [![Last commit](https://img.shields.io/github/last-commit/jcrugzz/level-batch-stream)](https://github.com/jcrugzz/level-batch-stream) [![Contributors](https://img.shields.io/github/contributors/jcrugzz/level-batch-stream?color=blue)](https://github.com/jcrugzz/level-batch-stream/graphs/contributors)

Streams2 writable stream for [`levelup`][levelup].

### [`level-writestream`][level-writestream]

[![npm package version](https://img.shields.io/npm/v/level-writestream)](https://www.npmjs.com/package/level-writestream) [![npm downloads](https://img.shields.io/npm/dw/level-writestream)](https://www.npmjs.com/package/level-writestream) [![License](https://img.shields.io/npm/l/level-writestream?color=blue)](https://www.npmjs.com/package/level-writestream) [![Last commit](https://img.shields.io/github/last-commit/pgte/level-writestream)](https://github.com/pgte/level-writestream) [![Contributors](https://img.shields.io/github/contributors/pgte/level-writestream?color=blue)](https://github.com/pgte/level-writestream/graphs/contributors)

Streams2 writable stream for [`levelup`][levelup].

### [`level-write-stream`][level-write-stream]

[![npm package version](https://img.shields.io/npm/v/level-write-stream)](https://www.npmjs.com/package/level-write-stream) [![npm downloads](https://img.shields.io/npm/dw/level-write-stream)](https://www.npmjs.com/package/level-write-stream) [![License](https://img.shields.io/npm/l/level-write-stream?color=blue)](https://www.npmjs.com/package/level-write-stream) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-write-stream)](https://github.com/Raynos/level-write-stream) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-write-stream?color=blue)](https://github.com/Raynos/level-write-stream/graphs/contributors)

Streams1 writable stream for [`levelup`][levelup] or [`abstract-leveldown`][abstract-leveldown].

### [`level-livefeed`][level-livefeed]

[![npm package version](https://img.shields.io/npm/v/level-livefeed)](https://www.npmjs.com/package/level-livefeed) [![npm downloads](https://img.shields.io/npm/dw/level-livefeed)](https://www.npmjs.com/package/level-livefeed) [![License](https://img.shields.io/npm/l/level-livefeed?color=blue)](https://www.npmjs.com/package/level-livefeed) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-livefeed)](https://github.com/Raynos/level-livefeed) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-livefeed?color=blue)](https://github.com/Raynos/level-livefeed/graphs/contributors)

A live query of a range in [`levelup`][levelup]. Similar to [`level-live-stream`][level-live-stream] but with a streams2 interface.

### [`level-range`][level-range]

[![npm package version](https://img.shields.io/npm/v/level-range)](https://www.npmjs.com/package/level-range) [![npm downloads](https://img.shields.io/npm/dw/level-range)](https://www.npmjs.com/package/level-range) [![License](https://img.shields.io/npm/l/level-range?color=blue)](https://www.npmjs.com/package/level-range) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-range)](https://github.com/juliangruber/level-range) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-range?color=blue)](https://github.com/juliangruber/level-range/graphs/contributors)

Find all K/V-pairs prefixed by a certain key. Streams1.

### [`level-cursor`][level-cursor]

[![npm package version](https://img.shields.io/npm/v/level-cursor)](https://www.npmjs.com/package/level-cursor) [![npm downloads](https://img.shields.io/npm/dw/level-cursor)](https://www.npmjs.com/package/level-cursor) [![License](https://img.shields.io/npm/l/level-cursor?color=blue)](https://www.npmjs.com/package/level-cursor) [![Last commit](https://img.shields.io/github/last-commit/kordon/cursor)](https://github.com/kordon/cursor) [![Contributors](https://img.shields.io/github/contributors/kordon/cursor?color=blue)](https://github.com/kordon/cursor/graphs/contributors)

A stream "cursor" to iterate through a ReadStream / KeyStream / ValueStream.

### [`level-live`][level-live]

[![npm package version](https://img.shields.io/npm/v/level-live)](https://www.npmjs.com/package/level-live) [![npm downloads](https://img.shields.io/npm/dw/level-live)](https://www.npmjs.com/package/level-live) [![License](https://img.shields.io/npm/l/level-live?color=blue)](https://www.npmjs.com/package/level-live) [![Last commit](https://img.shields.io/github/last-commit/voltraco/level-live)](https://github.com/voltraco/level-live) [![Contributors](https://img.shields.io/github/contributors/voltraco/level-live?color=blue)](https://github.com/voltraco/level-live/graphs/contributors)

Simple, light and correct live read stream implementation.  NB. Uses an undefined streams version, as well as [`ltgt`][ltgt] which is not compatible with [`abstract-level`][abstract-level].

### [`level-glob`][level-glob]

[![npm package version](https://img.shields.io/npm/v/level-glob)](https://www.npmjs.com/package/level-glob) [![npm downloads](https://img.shields.io/npm/dw/level-glob)](https://www.npmjs.com/package/level-glob) [![License](https://img.shields.io/npm/l/level-glob?color=blue)](https://www.npmjs.com/package/level-glob) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-glob)](https://github.com/vweevers/level-glob) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-glob?color=blue)](https://github.com/vweevers/level-glob/graphs/contributors)

A streams2 read stream filtered and ordered by glob patterns. Keys in the database should be unix-like paths.

### [`pull-level`][pull-level]

[![npm package version](https://img.shields.io/npm/v/pull-level)](https://www.npmjs.com/package/pull-level) [![npm downloads](https://img.shields.io/npm/dw/pull-level)](https://www.npmjs.com/package/pull-level) [![License](https://img.shields.io/npm/l/pull-level?color=blue)](https://www.npmjs.com/package/pull-level) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/pull-level)](https://github.com/dominictarr/pull-level) [![Contributors](https://img.shields.io/github/contributors/dominictarr/pull-level?color=blue)](https://github.com/dominictarr/pull-level/graphs/contributors)

[`pull-stream`](https://github.com/pull-stream/pull-stream) interface to [`levelup`][levelup] with read streams, write streams and realtime (tail/live) reads. Not compatible with [`abstract-level`][abstract-level].

### [`level-live-stream`][level-live-stream]

[![npm package version](https://img.shields.io/npm/v/level-live-stream)](https://www.npmjs.com/package/level-live-stream) [![npm downloads](https://img.shields.io/npm/dw/level-live-stream)](https://www.npmjs.com/package/level-live-stream) [![License](https://img.shields.io/npm/l/level-live-stream?color=blue)](https://www.npmjs.com/package/level-live-stream) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-live-stream)](https://github.com/dominictarr/level-live-stream) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-live-stream?color=blue)](https://github.com/dominictarr/level-live-stream/graphs/contributors)

Like `db.createReadStream()` except it's live / tailable. i.e. instead of ending, it will stay open and stream changes to the database as they are inserted. Not compatible with [`abstract-level`][abstract-level].

### [`level-concat-iterator`][level-concat-iterator]

[![npm package version](https://img.shields.io/npm/v/level-concat-iterator)](https://www.npmjs.com/package/level-concat-iterator) [![npm downloads](https://img.shields.io/npm/dw/level-concat-iterator)](https://www.npmjs.com/package/level-concat-iterator) [![License](https://img.shields.io/npm/l/level-concat-iterator?color=blue)](https://www.npmjs.com/package/level-concat-iterator) [![Last commit](https://img.shields.io/github/last-commit/Level/concat-iterator)](https://github.com/Level/concat-iterator) [![Contributors](https://img.shields.io/github/contributors/Level/concat-iterator?color=blue)](https://github.com/Level/concat-iterator/graphs/contributors)

Concatenate items from an [`abstract-leveldown`][abstract-leveldown] iterator into an array. On [`abstract-level`][abstract-level] databases, this is superseded by `iterator.all()`.

### [`subleveldown`][subleveldown]

[![npm package version](https://img.shields.io/npm/v/subleveldown)](https://www.npmjs.com/package/subleveldown) [![npm downloads](https://img.shields.io/npm/dw/subleveldown)](https://www.npmjs.com/package/subleveldown) [![License](https://img.shields.io/npm/l/subleveldown?color=blue)](https://www.npmjs.com/package/subleveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/subleveldown)](https://github.com/Level/subleveldown) [![Contributors](https://img.shields.io/github/contributors/Level/subleveldown?color=blue)](https://github.com/Level/subleveldown/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-inactive.svg) ![levelup](https://img.shields.io/badge/levelup-5.1-inactive.svg)

Split a [`levelup`][levelup] database into sublevels with their own keyspace, encoding and events. Superseded by [`abstract-level`][abstract-level].

### [`level-temp`][level-temp]

[![npm package version](https://img.shields.io/npm/v/level-temp)](https://www.npmjs.com/package/level-temp) [![npm downloads](https://img.shields.io/npm/dw/level-temp)](https://www.npmjs.com/package/level-temp) [![License](https://img.shields.io/npm/l/level-temp?color=blue)](https://www.npmjs.com/package/level-temp) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-temp)](https://github.com/mafintosh/level-temp) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-temp?color=blue)](https://github.com/mafintosh/level-temp/graphs/contributors)

Create a temporary [`subleveldown`][subleveldown] sublevel that is guaranteed to be empty.

### [`level-mount`][level-mount]

[![npm package version](https://img.shields.io/npm/v/level-mount)](https://www.npmjs.com/package/level-mount) [![npm downloads](https://img.shields.io/npm/dw/level-mount)](https://www.npmjs.com/package/level-mount) [![License](https://img.shields.io/npm/l/level-mount?color=blue)](https://www.npmjs.com/package/level-mount) [![Last commit](https://img.shields.io/github/last-commit/u8sand/level-mount)](https://github.com/u8sand/level-mount) [![Contributors](https://img.shields.io/github/contributors/u8sand/level-mount?color=blue)](https://github.com/u8sand/level-mount/graphs/contributors) ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-inactive.svg)

Mount multiple [`abstract-leveldown`][abstract-leveldown] stores by key prefix onto a single store. Can be used with [`subleveldown`][subleveldown].

### [`bytespace`][bytespace]

[![npm package version](https://img.shields.io/npm/v/bytespace)](https://www.npmjs.com/package/bytespace) [![npm downloads](https://img.shields.io/npm/dw/bytespace)](https://www.npmjs.com/package/bytespace) [![License](https://img.shields.io/npm/l/bytespace?color=blue)](https://www.npmjs.com/package/bytespace) [![Last commit](https://img.shields.io/github/last-commit/deanlandolt/bytespace)](https://github.com/deanlandolt/bytespace) [![Contributors](https://img.shields.io/github/contributors/deanlandolt/bytespace?color=blue)](https://github.com/deanlandolt/bytespace/graphs/contributors)

Keypath subspaces prefixed with [`bytewise`][bytewise] tuples. Similar to [`level-sublevel`][level-sublevel].  NB. [`bytewise`][bytewise] - and thus [`bytespace`][bytespace] - can be slow. Consider using the [`charwise`][charwise] encoding instead.

### [`level-sublevel`][level-sublevel]

[![npm package version](https://img.shields.io/npm/v/level-sublevel)](https://www.npmjs.com/package/level-sublevel) [![npm downloads](https://img.shields.io/npm/dw/level-sublevel)](https://www.npmjs.com/package/level-sublevel) [![License](https://img.shields.io/npm/l/level-sublevel?color=blue)](https://www.npmjs.com/package/level-sublevel) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-sublevel)](https://github.com/dominictarr/level-sublevel) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-sublevel?color=blue)](https://github.com/dominictarr/level-sublevel/graphs/contributors) ![levelup](https://img.shields.io/badge/levelup-0.19-inactive.svg)

Adds the ability to create subsections with the same API as [`levelup`][levelup], but only write/read to a prefixed section, or bucket, of the key-space. Each section also has [`level-hooks`][level-hooks] installed.  NB. No longer maintained. Instead use [`subleveldown`][subleveldown] for [`levelup`][levelup], or the built-in sublevels of [`abstract-level`][abstract-level].

### [`sublevel-prefixer`][sublevel-prefixer]

[![npm package version](https://img.shields.io/npm/v/sublevel-prefixer)](https://www.npmjs.com/package/sublevel-prefixer) [![npm downloads](https://img.shields.io/npm/dw/sublevel-prefixer)](https://www.npmjs.com/package/sublevel-prefixer) [![License](https://img.shields.io/npm/l/sublevel-prefixer?color=blue)](https://www.npmjs.com/package/sublevel-prefixer) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/sublevel-prefixer)](https://github.com/mafintosh/sublevel-prefixer) [![Contributors](https://img.shields.io/github/contributors/mafintosh/sublevel-prefixer?color=blue)](https://github.com/mafintosh/sublevel-prefixer/graphs/contributors)

Utility to prefix a key with a sublevel prefix.

### [`level-sublevel-stream`][level-sublevel-stream]

[![npm package version](https://img.shields.io/npm/v/level-sublevel-stream)](https://www.npmjs.com/package/level-sublevel-stream) [![npm downloads](https://img.shields.io/npm/dw/level-sublevel-stream)](https://www.npmjs.com/package/level-sublevel-stream) [![License](https://img.shields.io/npm/l/level-sublevel-stream?color=blue)](https://www.npmjs.com/package/level-sublevel-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sublevel-stream)](https://github.com/juliangruber/level-sublevel-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sublevel-stream?color=blue)](https://github.com/juliangruber/level-sublevel-stream/graphs/contributors)

Find [`level-sublevel`][level-sublevel] sublevels, not requiring them to be in memory already.

### [`level-subtree`][level-subtree]

[![npm package version](https://img.shields.io/npm/v/level-subtree)](https://www.npmjs.com/package/level-subtree) [![npm downloads](https://img.shields.io/npm/dw/level-subtree)](https://www.npmjs.com/package/level-subtree) [![License](https://img.shields.io/npm/l/level-subtree?color=blue)](https://www.npmjs.com/package/level-subtree) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-subtree)](https://github.com/hij1nx/level-subtree) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-subtree?color=blue)](https://github.com/hij1nx/level-subtree/graphs/contributors)

Generate a tree from [`level-sublevel`][level-sublevel] sublevels, useful when there is no manifest.

### [`level-superlevel`][level-superlevel]

[![npm package version](https://img.shields.io/npm/v/level-superlevel)](https://www.npmjs.com/package/level-superlevel) [![npm downloads](https://img.shields.io/npm/dw/level-superlevel)](https://www.npmjs.com/package/level-superlevel) [![License](https://img.shields.io/npm/l/level-superlevel?color=blue)](https://www.npmjs.com/package/level-superlevel) [![Last commit](https://img.shields.io/github/last-commit/randymized/level-superlevel)](https://github.com/randymized/level-superlevel) [![Contributors](https://img.shields.io/github/contributors/randymized/level-superlevel?color=blue)](https://github.com/randymized/level-superlevel/graphs/contributors)

Superlevel adds a "super" level that allows accessing the entire database, discovering [`level-sublevel`][level-sublevel] sublevels and browsing the database without knowledge of the sublevel structure.

### [`level-subkey`][level-subkey]

[![npm package version](https://img.shields.io/npm/v/level-subkey)](https://www.npmjs.com/package/level-subkey) [![npm downloads](https://img.shields.io/npm/dw/level-subkey)](https://www.npmjs.com/package/level-subkey) [![License](https://img.shields.io/npm/l/level-subkey?color=blue)](https://www.npmjs.com/package/level-subkey) [![Last commit](https://img.shields.io/github/last-commit/snowyu/level-subkey)](https://github.com/snowyu/level-subkey) [![Contributors](https://img.shields.io/github/contributors/snowyu/level-subkey?color=blue)](https://github.com/snowyu/level-subkey/graphs/contributors)

Use path-like keys to separate sections of [`levelup`][levelup], with hooks. Adapted from [`level-sublevel`][level-sublevel].

### [`level-mirror`][level-mirror]

[![npm package version](https://img.shields.io/npm/v/level-mirror)](https://www.npmjs.com/package/level-mirror) [![npm downloads](https://img.shields.io/npm/dw/level-mirror)](https://www.npmjs.com/package/level-mirror) [![License](https://img.shields.io/npm/l/level-mirror?color=blue)](https://www.npmjs.com/package/level-mirror) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-mirror)](https://github.com/juliangruber/level-mirror) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-mirror?color=blue)](https://github.com/juliangruber/level-mirror/graphs/contributors)

Mirror and optionally transform data from one [`level-sublevel`][level-sublevel] sublevel into another.

### [`couchup`][couchup]

[![npm package version](https://img.shields.io/npm/v/couchup)](https://www.npmjs.com/package/couchup) [![npm downloads](https://img.shields.io/npm/dw/couchup)](https://www.npmjs.com/package/couchup) [![License](https://img.shields.io/npm/l/couchup?color=blue)](https://www.npmjs.com/package/couchup) [![Last commit](https://img.shields.io/github/last-commit/mikeal/couchup)](https://github.com/mikeal/couchup) [![Contributors](https://img.shields.io/github/contributors/mikeal/couchup?color=blue)](https://github.com/mikeal/couchup/graphs/contributors)

A CouchDB implementation on top of [`levelup`][levelup].

### [`firedup`][firedup]

[![npm package version](https://img.shields.io/npm/v/firedup)](https://www.npmjs.com/package/firedup) [![npm downloads](https://img.shields.io/npm/dw/firedup)](https://www.npmjs.com/package/firedup) [![License](https://img.shields.io/npm/l/firedup?color=blue)](https://www.npmjs.com/package/firedup) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/firedup)](https://github.com/eugeneware/firedup) [![Contributors](https://img.shields.io/github/contributors/eugeneware/firedup?color=blue)](https://github.com/eugeneware/firedup/graphs/contributors)

A node.js implementation of firebase based on [`levelup`][levelup].

### [`len`][len]

[![npm package version](https://img.shields.io/npm/v/len)](https://www.npmjs.com/package/len) [![npm downloads](https://img.shields.io/npm/dw/len)](https://www.npmjs.com/package/len) [![License](https://img.shields.io/npm/l/len?color=blue)](https://www.npmjs.com/package/len) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/len)](https://github.com/binocarlos/len) [![Contributors](https://img.shields.io/github/contributors/binocarlos/len?color=blue)](https://github.com/binocarlos/len/graphs/contributors)

Len is a resource booking database using LevelDB for storage. Useful for calendar and gantt chart apps and for questions like 'can a customer book this resource starting X and ending Y'.

### [`lem`][lem]

[![npm package version](https://img.shields.io/npm/v/lem)](https://www.npmjs.com/package/lem) [![npm downloads](https://img.shields.io/npm/dw/lem)](https://www.npmjs.com/package/lem) [![License](https://img.shields.io/npm/l/lem?color=blue)](https://www.npmjs.com/package/lem) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/lem)](https://github.com/binocarlos/lem) [![Contributors](https://img.shields.io/github/contributors/binocarlos/lem?color=blue)](https://github.com/binocarlos/lem/graphs/contributors)

Lem is a telemetry storage database using LevelDB. Keys are indexed by timestamp and you can read values in-between 2 points in time.

### [`pushdb`][pushdb]

[![npm package version](https://img.shields.io/npm/v/pushdb)](https://www.npmjs.com/package/pushdb) [![npm downloads](https://img.shields.io/npm/dw/pushdb)](https://www.npmjs.com/package/pushdb) [![License](https://img.shields.io/npm/l/pushdb?color=blue)](https://www.npmjs.com/package/pushdb) [![Last commit](https://img.shields.io/github/last-commit/mikeal/pushdb)](https://github.com/mikeal/pushdb) [![Contributors](https://img.shields.io/github/contributors/mikeal/pushdb?color=blue)](https://github.com/mikeal/pushdb/graphs/contributors)

A programmable database with document storage and unique indexing capabilities.

### [`tacodb`][tacodb]

[![npm package version](https://img.shields.io/npm/v/tacodb)](https://www.npmjs.com/package/tacodb) [![npm downloads](https://img.shields.io/npm/dw/tacodb)](https://www.npmjs.com/package/tacodb) [![License](https://img.shields.io/npm/l/tacodb?color=blue)](https://www.npmjs.com/package/tacodb) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/tacodb)](https://github.com/dominictarr/tacodb) [![Contributors](https://img.shields.io/github/contributors/dominictarr/tacodb?color=blue)](https://github.com/dominictarr/tacodb/graphs/contributors)

A responsive, Node.js-style database ideal for realtime data. Highly modular and adaptable, allowing extension with the [Level][level-org] ecosystem.

### [`timestreamdb`][timestreamdb]

[![npm package version](https://img.shields.io/npm/v/timestreamdb)](https://www.npmjs.com/package/timestreamdb) [![npm downloads](https://img.shields.io/npm/dw/timestreamdb)](https://www.npmjs.com/package/timestreamdb) [![License](https://img.shields.io/npm/l/timestreamdb?color=blue)](https://www.npmjs.com/package/timestreamdb) [![Last commit](https://img.shields.io/github/last-commit/brycebaril/timestreamdb)](https://github.com/brycebaril/timestreamdb) [![Contributors](https://img.shields.io/github/contributors/brycebaril/timestreamdb?color=blue)](https://github.com/brycebaril/timestreamdb/graphs/contributors)

A full-featured timeseries database on top of LevelDB. Includes a library for streaming statistical operations on timeseries data including joins, aggregates, filters, and map-like operations.

### [`level-orm`][level-orm]

[![npm package version](https://img.shields.io/npm/v/level-orm)](https://www.npmjs.com/package/level-orm) [![npm downloads](https://img.shields.io/npm/dw/level-orm)](https://www.npmjs.com/package/level-orm) [![License](https://img.shields.io/npm/l/level-orm?color=blue)](https://www.npmjs.com/package/level-orm) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-orm)](https://github.com/eugeneware/level-orm) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-orm?color=blue)](https://github.com/eugeneware/level-orm/graphs/contributors)

Simple ORM built on [`levelup`][levelup].

### [`level-restful`][level-restful]

[![npm package version](https://img.shields.io/npm/v/level-restful)](https://www.npmjs.com/package/level-restful) [![npm downloads](https://img.shields.io/npm/dw/level-restful)](https://www.npmjs.com/package/level-restful) [![License](https://img.shields.io/npm/l/level-restful?color=blue)](https://www.npmjs.com/package/level-restful) [![Last commit](https://img.shields.io/github/last-commit/karissa/level-restful)](https://github.com/karissa/level-restful) [![Contributors](https://img.shields.io/github/contributors/karissa/level-restful?color=blue)](https://github.com/karissa/level-restful/graphs/contributors)

REST wrapper for [`levelup`][levelup], as an extension to [`level-orm`][level-orm].

### [`level-rest`][level-rest]

[![npm package version](https://img.shields.io/npm/v/level-rest)](https://www.npmjs.com/package/level-rest) [![npm downloads](https://img.shields.io/npm/dw/level-rest)](https://www.npmjs.com/package/level-rest) [![License](https://img.shields.io/npm/l/level-rest?color=blue)](https://www.npmjs.com/package/level-rest) [![Last commit](https://img.shields.io/github/last-commit/shama/level-rest)](https://github.com/shama/level-rest) [![Contributors](https://img.shields.io/github/contributors/shama/level-rest?color=blue)](https://github.com/shama/level-rest/graphs/contributors)

REST wrapper for [`levelup`][levelup]. Not compatible with latest [`levelup`][levelup].

### [`level-lively`][level-lively]

[![npm package version](https://img.shields.io/npm/v/level-lively)](https://www.npmjs.com/package/level-lively) [![npm downloads](https://img.shields.io/npm/dw/level-lively)](https://www.npmjs.com/package/level-lively) [![License](https://img.shields.io/npm/l/level-lively?color=blue)](https://www.npmjs.com/package/level-lively) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-lively)](https://github.com/eugeneware/level-lively) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-lively?color=blue)](https://github.com/eugeneware/level-lively/graphs/contributors)

[`levelup`][levelup] implementation of [LivelyDb](https://github.com/eugeneware/livelydb) for doing real-time data binding of a database with local javascript objects.

### [`level-mongo`][level-mongo]

[![npm package version](https://img.shields.io/npm/v/level-mongo)](https://www.npmjs.com/package/level-mongo) [![npm downloads](https://img.shields.io/npm/dw/level-mongo)](https://www.npmjs.com/package/level-mongo) [![License](https://img.shields.io/npm/l/level-mongo?color=blue)](https://www.npmjs.com/package/level-mongo) [![Last commit](https://img.shields.io/github/last-commit/simon-p-r/level-mongo)](https://github.com/simon-p-r/level-mongo) [![Contributors](https://img.shields.io/github/contributors/simon-p-r/level-mongo?color=blue)](https://github.com/simon-p-r/level-mongo/graphs/contributors) ![leveldown](https://img.shields.io/badge/leveldown-3.0-red.svg)

MongoDB-like database backed by LevelDB.

### [`levi`][levi]

[![npm package version](https://img.shields.io/npm/v/levi)](https://www.npmjs.com/package/levi) [![npm downloads](https://img.shields.io/npm/dw/levi)](https://www.npmjs.com/package/levi) [![License](https://img.shields.io/npm/l/levi?color=blue)](https://www.npmjs.com/package/levi) [![Last commit](https://img.shields.io/github/last-commit/cshum/levi)](https://github.com/cshum/levi) [![Contributors](https://img.shields.io/github/contributors/cshum/levi?color=blue)](https://github.com/cshum/levi/graphs/contributors)

Stream based full-text search for Node.js and browser using [`levelup`][levelup].

### [`dulcimer`][dulcimer]

[![npm package version](https://img.shields.io/npm/v/dulcimer)](https://www.npmjs.com/package/dulcimer) [![npm downloads](https://img.shields.io/npm/dw/dulcimer)](https://www.npmjs.com/package/dulcimer) [![License](https://img.shields.io/npm/l/dulcimer?color=blue)](https://www.npmjs.com/package/dulcimer) [![Last commit](https://img.shields.io/github/last-commit/fritzy/dulcimer)](https://github.com/fritzy/dulcimer) [![Contributors](https://img.shields.io/github/contributors/fritzy/dulcimer?color=blue)](https://github.com/fritzy/dulcimer/graphs/contributors)

Define JSON models and manage indexes, children, foreign keys and much more.

### [`level-fact-base`][level-fact-base]

[![npm package version](https://img.shields.io/npm/v/level-fact-base)](https://www.npmjs.com/package/level-fact-base) [![npm downloads](https://img.shields.io/npm/dw/level-fact-base)](https://www.npmjs.com/package/level-fact-base) [![License](https://img.shields.io/npm/l/level-fact-base?color=blue)](https://www.npmjs.com/package/level-fact-base) [![Last commit](https://img.shields.io/github/last-commit/smallhelm/level-fact-base)](https://github.com/smallhelm/level-fact-base) [![Contributors](https://img.shields.io/github/contributors/smallhelm/level-fact-base?color=blue)](https://github.com/smallhelm/level-fact-base/graphs/contributors)

Store immutable facts and query them with datalog.

### [`ltgt`][ltgt]

[![npm package version](https://img.shields.io/npm/v/ltgt)](https://www.npmjs.com/package/ltgt) [![npm downloads](https://img.shields.io/npm/dw/ltgt)](https://www.npmjs.com/package/ltgt) [![License](https://img.shields.io/npm/l/ltgt?color=blue)](https://www.npmjs.com/package/ltgt) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/ltgt)](https://github.com/dominictarr/ltgt) [![Contributors](https://img.shields.io/github/contributors/dominictarr/ltgt?color=blue)](https://github.com/dominictarr/ltgt/graphs/contributors)

Tool belt to find lower or upper bounds, compare and filter keys and more. Incompatible with [`abstract-level`][abstract-level], because in [`abstract-level`][abstract-level] `gte` and `lte` range options take precedence over `gt` and `lt` respectively.

### [`level-option-wrap`][level-option-wrap]

[![npm package version](https://img.shields.io/npm/v/level-option-wrap)](https://www.npmjs.com/package/level-option-wrap) [![npm downloads](https://img.shields.io/npm/dw/level-option-wrap)](https://www.npmjs.com/package/level-option-wrap) [![License](https://img.shields.io/npm/l/level-option-wrap?color=blue)](https://www.npmjs.com/package/level-option-wrap) [![Last commit](https://img.shields.io/github/last-commit/substack/level-option-wrap)](https://github.com/substack/level-option-wrap) [![Contributors](https://img.shields.io/github/contributors/substack/level-option-wrap?color=blue)](https://github.com/substack/level-option-wrap/graphs/contributors)

Wrap `ltgt` options with functions. Expose range options without leaking information about your internal key representations.

### [`interval-to-ltgt`][interval-to-ltgt]

[![npm package version](https://img.shields.io/npm/v/interval-to-ltgt)](https://www.npmjs.com/package/interval-to-ltgt) [![npm downloads](https://img.shields.io/npm/dw/interval-to-ltgt)](https://www.npmjs.com/package/interval-to-ltgt) [![License](https://img.shields.io/npm/l/interval-to-ltgt?color=blue)](https://www.npmjs.com/package/interval-to-ltgt) [![Last commit](https://img.shields.io/github/last-commit/nowsecure/interval-to-ltgt)](https://github.com/nowsecure/interval-to-ltgt) [![Contributors](https://img.shields.io/github/contributors/nowsecure/interval-to-ltgt?color=blue)](https://github.com/nowsecure/interval-to-ltgt/graphs/contributors)

Convert an interval string to an `ltgt` object. This is the counterpart to [`ltgt-to-interval`][ltgt-to-interval].

### [`ltgt-to-interval`][ltgt-to-interval]

[![npm package version](https://img.shields.io/npm/v/ltgt-to-interval)](https://www.npmjs.com/package/ltgt-to-interval) [![npm downloads](https://img.shields.io/npm/dw/ltgt-to-interval)](https://www.npmjs.com/package/ltgt-to-interval) [![License](https://img.shields.io/npm/l/ltgt-to-interval?color=blue)](https://www.npmjs.com/package/ltgt-to-interval) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/ltgt-to-interval)](https://github.com/juliangruber/ltgt-to-interval) [![Contributors](https://img.shields.io/github/contributors/juliangruber/ltgt-to-interval?color=blue)](https://github.com/juliangruber/ltgt-to-interval/graphs/contributors)

Convert an `ltgt` object to an interval string. This is the counterpart to [`interval-to-ltgt`][interval-to-ltgt].

### [`range-emitter`][range-emitter]

[![npm package version](https://img.shields.io/npm/v/range-emitter)](https://www.npmjs.com/package/range-emitter) [![npm downloads](https://img.shields.io/npm/dw/range-emitter)](https://www.npmjs.com/package/range-emitter) [![License](https://img.shields.io/npm/l/range-emitter?color=blue)](https://www.npmjs.com/package/range-emitter) [![Last commit](https://img.shields.io/github/last-commit/jameskyburz/range-emitter)](https://github.com/jameskyburz/range-emitter) [![Contributors](https://img.shields.io/github/contributors/jameskyburz/range-emitter?color=blue)](https://github.com/jameskyburz/range-emitter/graphs/contributors)

Range emitter. Publish keys and subscribe to ranges.

### [`level-codec`][level-codec]

[![npm package version](https://img.shields.io/npm/v/level-codec)](https://www.npmjs.com/package/level-codec) [![npm downloads](https://img.shields.io/npm/dw/level-codec)](https://www.npmjs.com/package/level-codec) [![License](https://img.shields.io/npm/l/level-codec?color=blue)](https://www.npmjs.com/package/level-codec) [![Last commit](https://img.shields.io/github/last-commit/Level/codec)](https://github.com/Level/codec) [![Contributors](https://img.shields.io/github/contributors/Level/codec?color=blue)](https://github.com/Level/codec/graphs/contributors)

Encode keys, values and ltgte options. Used in [`encoding-down`][encoding-down]. Superseded by [`level-transcoder`][level-transcoder].

### [`level-errors`][level-errors]

[![npm package version](https://img.shields.io/npm/v/level-errors)](https://www.npmjs.com/package/level-errors) [![npm downloads](https://img.shields.io/npm/dw/level-errors)](https://www.npmjs.com/package/level-errors) [![License](https://img.shields.io/npm/l/level-errors?color=blue)](https://www.npmjs.com/package/level-errors) [![Last commit](https://img.shields.io/github/last-commit/Level/errors)](https://github.com/Level/errors) [![Contributors](https://img.shields.io/github/contributors/Level/errors?color=blue)](https://github.com/Level/errors/graphs/contributors)

Error types for [`levelup`][levelup]. Superseded by [`abstract-level`][abstract-level].

### [`level-packager`][level-packager]

[![npm package version](https://img.shields.io/npm/v/level-packager)](https://www.npmjs.com/package/level-packager) [![npm downloads](https://img.shields.io/npm/dw/level-packager)](https://www.npmjs.com/package/level-packager) [![License](https://img.shields.io/npm/l/level-packager?color=blue)](https://www.npmjs.com/package/level-packager) [![Last commit](https://img.shields.io/github/last-commit/Level/packager)](https://github.com/Level/packager) [![Contributors](https://img.shields.io/github/contributors/Level/packager?color=blue)](https://github.com/Level/packager/graphs/contributors)

Legacy package helper to bundle an [`abstract-leveldown`][abstract-leveldown] store with [`levelup`][levelup] and [`encoding-down`][encoding-down].

### [`multileveldown`][multileveldown]

[![npm package version](https://img.shields.io/npm/v/multileveldown)](https://www.npmjs.com/package/multileveldown) [![npm downloads](https://img.shields.io/npm/dw/multileveldown)](https://www.npmjs.com/package/multileveldown) [![License](https://img.shields.io/npm/l/multileveldown?color=blue)](https://www.npmjs.com/package/multileveldown) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/multileveldown)](https://github.com/mafintosh/multileveldown) [![Contributors](https://img.shields.io/github/contributors/mafintosh/multileveldown?color=blue)](https://github.com/mafintosh/multileveldown/graphs/contributors)

Share a [`levelup`][levelup] instance across multiple processes or over the network. An alternative to [`multilevel`][multilevel], implemented as [`abstract-leveldown`][abstract-leveldown] stores with seamless retry support. Superseded by [`many-level`][many-level].

### [`level-party`][level-party]

[![npm package version](https://img.shields.io/npm/v/level-party)](https://www.npmjs.com/package/level-party) [![npm downloads](https://img.shields.io/npm/dw/level-party)](https://www.npmjs.com/package/level-party) [![License](https://img.shields.io/npm/l/level-party?color=blue)](https://www.npmjs.com/package/level-party) [![Last commit](https://img.shields.io/github/last-commit/substack/level-party)](https://github.com/substack/level-party) [![Contributors](https://img.shields.io/github/contributors/substack/level-party?color=blue)](https://github.com/substack/level-party/graphs/contributors)

Open a LevelDB ([`leveldown`][leveldown]) handle multiple times, transparently upgrading to [`multileveldown`][multileveldown] when more than 1 process try to use the same LevelDB data directory at once and re-electing a new master when the primary unix socket (or named pipe) goes down. Superseded by [`rave-level`][rave-level].

### [`multilevel`][multilevel]

[![npm package version](https://img.shields.io/npm/v/multilevel)](https://www.npmjs.com/package/multilevel) [![npm downloads](https://img.shields.io/npm/dw/multilevel)](https://www.npmjs.com/package/multilevel) [![License](https://img.shields.io/npm/l/multilevel?color=blue)](https://www.npmjs.com/package/multilevel) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/multilevel)](https://github.com/juliangruber/multilevel) [![Contributors](https://img.shields.io/github/contributors/juliangruber/multilevel?color=blue)](https://github.com/juliangruber/multilevel/graphs/contributors)

Share a [`levelup`][levelup] instance over the network.

### [`multilevel-http`][multilevel-http]

[![npm package version](https://img.shields.io/npm/v/multilevel-http)](https://www.npmjs.com/package/multilevel-http) [![npm downloads](https://img.shields.io/npm/dw/multilevel-http)](https://www.npmjs.com/package/multilevel-http) [![License](https://img.shields.io/npm/l/multilevel-http?color=blue)](https://www.npmjs.com/package/multilevel-http) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/multilevel-http)](https://github.com/juliangruber/multilevel-http) [![Contributors](https://img.shields.io/github/contributors/juliangruber/multilevel-http?color=blue)](https://github.com/juliangruber/multilevel-http/graphs/contributors)

Expose a [`levelup`][levelup] instance via HTTP.

### [`level-manifest`][level-manifest]

[![npm package version](https://img.shields.io/npm/v/level-manifest)](https://www.npmjs.com/package/level-manifest) [![npm downloads](https://img.shields.io/npm/dw/level-manifest)](https://www.npmjs.com/package/level-manifest) [![License](https://img.shields.io/npm/l/level-manifest?color=blue)](https://www.npmjs.com/package/level-manifest) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-manifest)](https://github.com/dominictarr/level-manifest) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-manifest?color=blue)](https://github.com/dominictarr/level-manifest/graphs/contributors)

Describe the functions that [`multilevel`][multilevel] should provide access to on the client.

### [`level-sandbox`][level-sandbox]

[![npm package version](https://img.shields.io/npm/v/level-sandbox)](https://www.npmjs.com/package/level-sandbox) [![npm downloads](https://img.shields.io/npm/dw/level-sandbox)](https://www.npmjs.com/package/level-sandbox) [![License](https://img.shields.io/npm/l/level-sandbox?color=blue)](https://www.npmjs.com/package/level-sandbox) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sandbox)](https://github.com/juliangruber/level-sandbox) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sandbox?color=blue)](https://github.com/juliangruber/level-sandbox/graphs/contributors)

A sandbox for hosting [`multilevel`][multilevel] enabled databases.

### [`level-range-emitter`][level-range-emitter]

[![npm package version](https://img.shields.io/npm/v/level-range-emitter)](https://www.npmjs.com/package/level-range-emitter) [![npm downloads](https://img.shields.io/npm/dw/level-range-emitter)](https://www.npmjs.com/package/level-range-emitter) [![License](https://img.shields.io/npm/l/level-range-emitter?color=blue)](https://www.npmjs.com/package/level-range-emitter) [![Last commit](https://img.shields.io/github/last-commit/jameskyburz/level-range-emitter)](https://github.com/jameskyburz/level-range-emitter) [![Contributors](https://img.shields.io/github/contributors/jameskyburz/level-range-emitter?color=blue)](https://github.com/jameskyburz/level-range-emitter/graphs/contributors)

Client and server using [`multileveldown`][multileveldown], [`range-emitter`][range-emitter] and [`ltgt`][ltgt].

### [`leveldb-mount`][leveldb-mount]

[![npm package version](https://img.shields.io/npm/v/leveldb-mount)](https://www.npmjs.com/package/leveldb-mount) [![npm downloads](https://img.shields.io/npm/dw/leveldb-mount)](https://www.npmjs.com/package/leveldb-mount) [![License](https://img.shields.io/npm/l/leveldb-mount?color=blue)](https://www.npmjs.com/package/leveldb-mount) [![Last commit](https://img.shields.io/github/last-commit/jameskyburz/leveldb-mount)](https://github.com/jameskyburz/leveldb-mount) [![Contributors](https://img.shields.io/github/contributors/jameskyburz/leveldb-mount?color=blue)](https://github.com/jameskyburz/leveldb-mount/graphs/contributors)

LevelDB server and client with optional client-side REPL. Built with [`subleveldown`][subleveldown] and [`multileveldown`][multileveldown].

### [`level2riak`][level2riak]

[![npm package version](https://img.shields.io/npm/v/level2riak)](https://www.npmjs.com/package/level2riak) [![npm downloads](https://img.shields.io/npm/dw/level2riak)](https://www.npmjs.com/package/level2riak) [![License](https://img.shields.io/npm/l/level2riak?color=blue)](https://www.npmjs.com/package/level2riak) [![Last commit](https://img.shields.io/github/last-commit/fritzy/level2git)](https://github.com/fritzy/level2git) [![Contributors](https://img.shields.io/github/contributors/fritzy/level2git?color=blue)](https://github.com/fritzy/level2git/graphs/contributors)

A network service that allows you to connect to a Riak database over HTTP.

### [`level-cluster-get`][level-cluster-get]

[![npm package version](https://img.shields.io/npm/v/level-cluster-get)](https://www.npmjs.com/package/level-cluster-get) [![npm downloads](https://img.shields.io/npm/dw/level-cluster-get)](https://www.npmjs.com/package/level-cluster-get) [![License](https://img.shields.io/npm/l/level-cluster-get?color=blue)](https://www.npmjs.com/package/level-cluster-get) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-cluster-get)](https://github.com/kesla/level-cluster-get) [![Contributors](https://img.shields.io/github/contributors/kesla/level-cluster-get?color=blue)](https://github.com/kesla/level-cluster-get/graphs/contributors)

Given a key, get all values from a cluster of [`multilevel`][multilevel] servers.

### [`level-connect`][level-connect]

[![npm package version](https://img.shields.io/npm/v/level-connect)](https://www.npmjs.com/package/level-connect) [![npm downloads](https://img.shields.io/npm/dw/level-connect)](https://www.npmjs.com/package/level-connect) [![License](https://img.shields.io/npm/l/level-connect?color=blue)](https://www.npmjs.com/package/level-connect) [![Last commit](https://img.shields.io/github/last-commit/mattstyles/level-connect)](https://github.com/mattstyles/level-connect) [![Contributors](https://img.shields.io/github/contributors/mattstyles/level-connect?color=blue)](https://github.com/mattstyles/level-connect/graphs/contributors)

Connect to a [`level-party`][level-party] and [`level-sublevel`][level-sublevel] enabled LevelDB over HTTP.

### [`level-pubsub`][level-pubsub]

[![npm package version](https://img.shields.io/npm/v/level-pubsub)](https://www.npmjs.com/package/level-pubsub) [![npm downloads](https://img.shields.io/npm/dw/level-pubsub)](https://www.npmjs.com/package/level-pubsub) [![License](https://img.shields.io/npm/l/level-pubsub?color=blue)](https://www.npmjs.com/package/level-pubsub) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-pubsub)](https://github.com/hij1nx/level-pubsub) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-pubsub?color=blue)](https://github.com/hij1nx/level-pubsub/graphs/contributors)

PubSub with server and client on top of [`levelup`][levelup].

### [`level-query`][level-query]

[![npm package version](https://img.shields.io/npm/v/level-query)](https://www.npmjs.com/package/level-query) [![npm downloads](https://img.shields.io/npm/dw/level-query)](https://www.npmjs.com/package/level-query) [![License](https://img.shields.io/npm/l/level-query?color=blue)](https://www.npmjs.com/package/level-query) [![Last commit](https://img.shields.io/github/last-commit/substack/level-query)](https://github.com/substack/level-query) [![Contributors](https://img.shields.io/github/contributors/substack/level-query?color=blue)](https://github.com/substack/level-query/graphs/contributors)

Expose a [`level-sublevel`][level-sublevel] database over HTTP, searchable with query strings.

### [`level-over-http`][level-over-http]

[![npm package version](https://img.shields.io/npm/v/level-over-http)](https://www.npmjs.com/package/level-over-http) [![npm downloads](https://img.shields.io/npm/dw/level-over-http)](https://www.npmjs.com/package/level-over-http) [![License](https://img.shields.io/npm/l/level-over-http?color=blue)](https://www.npmjs.com/package/level-over-http) [![Last commit](https://img.shields.io/github/last-commit/lakowske/level-over-http)](https://github.com/lakowske/level-over-http) [![Contributors](https://img.shields.io/github/contributors/lakowske/level-over-http?color=blue)](https://github.com/lakowske/level-over-http/graphs/contributors)

Another solution to expose [`levelup`][levelup] over HTTP.

### [`level-rpc`][level-rpc]

[![npm package version](https://img.shields.io/npm/v/level-rpc)](https://www.npmjs.com/package/level-rpc) [![npm downloads](https://img.shields.io/npm/dw/level-rpc)](https://www.npmjs.com/package/level-rpc) [![License](https://img.shields.io/npm/l/level-rpc?color=blue)](https://www.npmjs.com/package/level-rpc) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-rpc)](https://github.com/juliangruber/level-rpc) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-rpc?color=blue)](https://github.com/juliangruber/level-rpc/graphs/contributors)

Fast RPC mechanism for [`levelup`][levelup]. Intended as binary-compatible alternative to [`multilevel`][multilevel].

### [`level-events`][level-events]

[![npm package version](https://img.shields.io/npm/v/level-events)](https://www.npmjs.com/package/level-events) [![npm downloads](https://img.shields.io/npm/dw/level-events)](https://www.npmjs.com/package/level-events) [![License](https://img.shields.io/npm/l/level-events?color=blue)](https://www.npmjs.com/package/level-events) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-events)](https://github.com/mafintosh/level-events) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-events?color=blue)](https://github.com/mafintosh/level-events/graphs/contributors)

Get an event everytime something is written / read / deleted using [`levelup`][levelup].

### [`level-hookdown`][level-hookdown]

[![npm package version](https://img.shields.io/npm/v/level-hookdown)](https://www.npmjs.com/package/level-hookdown) [![npm downloads](https://img.shields.io/npm/dw/level-hookdown)](https://www.npmjs.com/package/level-hookdown) [![License](https://img.shields.io/npm/l/level-hookdown?color=blue)](https://www.npmjs.com/package/level-hookdown) [![Last commit](https://img.shields.io/github/last-commit/hypermodules/level-hookdown)](https://github.com/hypermodules/level-hookdown) [![Contributors](https://img.shields.io/github/contributors/hypermodules/level-hookdown?color=blue)](https://github.com/hypermodules/level-hookdown/graphs/contributors)

Simple [`levelup`][levelup] hooks.

### [`level-post`][level-post]

[![npm package version](https://img.shields.io/npm/v/level-post)](https://www.npmjs.com/package/level-post) [![npm downloads](https://img.shields.io/npm/dw/level-post)](https://www.npmjs.com/package/level-post) [![License](https://img.shields.io/npm/l/level-post?color=blue)](https://www.npmjs.com/package/level-post) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-post)](https://github.com/dominictarr/level-post) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-post?color=blue)](https://github.com/dominictarr/level-post/graphs/contributors)

Consistent post hooks for [`levelup`][levelup].

### [`level-condition`][level-condition]

[![npm package version](https://img.shields.io/npm/v/level-condition)](https://www.npmjs.com/package/level-condition) [![npm downloads](https://img.shields.io/npm/dw/level-condition)](https://www.npmjs.com/package/level-condition) [![License](https://img.shields.io/npm/l/level-condition?color=blue)](https://www.npmjs.com/package/level-condition) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-condition)](https://github.com/juliangruber/level-condition) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-condition?color=blue)](https://github.com/juliangruber/level-condition/graphs/contributors)

Get notified when a condition is triggered inside a [`levelup`][levelup] instance.

### [`level-hooks`][level-hooks]

[![npm package version](https://img.shields.io/npm/v/level-hooks)](https://www.npmjs.com/package/level-hooks) [![npm downloads](https://img.shields.io/npm/dw/level-hooks)](https://www.npmjs.com/package/level-hooks) [![License](https://img.shields.io/npm/l/level-hooks?color=blue)](https://www.npmjs.com/package/level-hooks) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-hooks)](https://github.com/dominictarr/level-hooks) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-hooks?color=blue)](https://github.com/dominictarr/level-hooks/graphs/contributors)

Implements a hook mechanism that allows you to intercept `put`, `delete` and `batch` operations. You can then turn those operations into batches. Useful if you want to turn a `put` into an atomic batch for say an automatic map operation.<br><br>NB. Author recommends using [`level-sublevel`][level-sublevel] instead of `level-hooks` directly. Note that [`level-sublevel`][level-sublevel] is not maintained.<br><br>Both are now (anno 2024) superseded by [`abstract-level`][abstract-level] which has builtin sublevels and hooks.

### [`levelup-async-iterator`][levelup-async-iterator]

[![npm package version](https://img.shields.io/npm/v/levelup-async-iterator)](https://www.npmjs.com/package/levelup-async-iterator) [![npm downloads](https://img.shields.io/npm/dw/levelup-async-iterator)](https://www.npmjs.com/package/levelup-async-iterator) [![License](https://img.shields.io/npm/l/levelup-async-iterator?color=blue)](https://www.npmjs.com/package/levelup-async-iterator) [![Last commit](https://img.shields.io/github/last-commit/MeirionHughes/levelup-async-iterator)](https://github.com/MeirionHughes/levelup-async-iterator) [![Contributors](https://img.shields.io/github/contributors/MeirionHughes/levelup-async-iterator?color=blue)](https://github.com/MeirionHughes/levelup-async-iterator/graphs/contributors)

Add an `iterator()` method to [`levelup`][levelup] with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration). Superseded by builtin `Symbol.asyncIterator` support on [`abstract-leveldown`][abstract-leveldown] iterators.

### [`level-iterator`][level-iterator]

[![npm package version](https://img.shields.io/npm/v/level-iterator)](https://www.npmjs.com/package/level-iterator) [![npm downloads](https://img.shields.io/npm/dw/level-iterator)](https://www.npmjs.com/package/level-iterator) [![License](https://img.shields.io/npm/l/level-iterator?color=blue)](https://www.npmjs.com/package/level-iterator) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-iterator)](https://github.com/vweevers/level-iterator) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-iterator?color=blue)](https://github.com/vweevers/level-iterator/graphs/contributors)

Decoding iterator for [`levelup`][levelup] instances. Wraps iterators like [`level-iterator-stream`][level-iterator-stream] does.  Superseded by [`encoding-down`][encoding-down] and later [`abstract-level`][abstract-level].

### [`level-delete-stream`][level-delete-stream]

[![npm package version](https://img.shields.io/npm/v/level-delete-stream)](https://www.npmjs.com/package/level-delete-stream) [![npm downloads](https://img.shields.io/npm/dw/level-delete-stream)](https://www.npmjs.com/package/level-delete-stream) [![License](https://img.shields.io/npm/l/level-delete-stream?color=blue)](https://www.npmjs.com/package/level-delete-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-delete-stream)](https://github.com/juliangruber/level-delete-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-delete-stream?color=blue)](https://github.com/juliangruber/level-delete-stream/graphs/contributors)

A streams1 deleteStream for [`levelup`][levelup]. Superseded by `db.clear()`.

### [`level-delete-range`][level-delete-range]

[![npm package version](https://img.shields.io/npm/v/level-delete-range)](https://www.npmjs.com/package/level-delete-range) [![npm downloads](https://img.shields.io/npm/dw/level-delete-range)](https://www.npmjs.com/package/level-delete-range) [![License](https://img.shields.io/npm/l/level-delete-range?color=blue)](https://www.npmjs.com/package/level-delete-range) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-delete-range)](https://github.com/Raynos/level-delete-range) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-delete-range?color=blue)](https://github.com/Raynos/level-delete-range/graphs/contributors)

Delete a range of keys from [`levelup`][levelup]. Superseded by `db.clear()`.

### [`level-browserify`][level-browserify]

[![npm package version](https://img.shields.io/npm/v/level-browserify)](https://www.npmjs.com/package/level-browserify) [![npm downloads](https://img.shields.io/npm/dw/level-browserify)](https://www.npmjs.com/package/level-browserify) [![License](https://img.shields.io/npm/l/level-browserify?color=blue)](https://www.npmjs.com/package/level-browserify) [![Last commit](https://img.shields.io/github/last-commit/Level/level-browserify)](https://github.com/Level/level-browserify) [![Contributors](https://img.shields.io/github/contributors/Level/level-browserify?color=blue)](https://github.com/Level/level-browserify/graphs/contributors)

Bundle for [`level-js`][level-js] and [`leveldown`][leveldown]. No longer maintained: superseded by [`level`][level] v5.0.0.

### [`level-mapped-index`][level-mapped-index]

[![npm package version](https://img.shields.io/npm/v/level-mapped-index)](https://www.npmjs.com/package/level-mapped-index) [![npm downloads](https://img.shields.io/npm/dw/level-mapped-index)](https://www.npmjs.com/package/level-mapped-index) [![License](https://img.shields.io/npm/l/level-mapped-index?color=blue)](https://www.npmjs.com/package/level-mapped-index) [![Last commit](https://img.shields.io/github/last-commit/rvagg/node-level-mapped-index)](https://github.com/rvagg/node-level-mapped-index) [![Contributors](https://img.shields.io/github/contributors/rvagg/node-level-mapped-index?color=blue)](https://github.com/rvagg/node-level-mapped-index/graphs/contributors)

Indexes for [`levelup`][levelup] built on [`map-reduce`][map-reduce]. Uses a custom indexing function for each index to parse and record index values for each entry. Archived.

### [`level-encoding`][level-encoding]

[![npm package version](https://img.shields.io/npm/v/level-encoding)](https://www.npmjs.com/package/level-encoding) [![npm downloads](https://img.shields.io/npm/dw/level-encoding)](https://www.npmjs.com/package/level-encoding) [![License](https://img.shields.io/npm/l/level-encoding?color=blue)](https://www.npmjs.com/package/level-encoding) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-encoding)](https://github.com/Raynos/level-encoding) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-encoding?color=blue)](https://github.com/Raynos/level-encoding/graphs/contributors)

Implements the encoding logic of a [`levelup`][levelup]-like database. This functionality lives on in [`level-codec`][level-codec].

### [`byteup`][byteup]

[![npm package version](https://img.shields.io/npm/v/byteup)](https://www.npmjs.com/package/byteup) [![npm downloads](https://img.shields.io/npm/dw/byteup)](https://www.npmjs.com/package/byteup) [![License](https://img.shields.io/npm/l/byteup?color=blue)](https://www.npmjs.com/package/byteup) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/byteup)](https://github.com/eugeneware/byteup) [![Contributors](https://img.shields.io/github/contributors/eugeneware/byteup?color=blue)](https://github.com/eugeneware/byteup/graphs/contributors)

Adds [`bytewise`][bytewise] as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: bytewise }`.

### [`msgpackup`][msgpackup]

[![npm package version](https://img.shields.io/npm/v/msgpackup)](https://www.npmjs.com/package/msgpackup) [![npm downloads](https://img.shields.io/npm/dw/msgpackup)](https://www.npmjs.com/package/msgpackup) [![License](https://img.shields.io/npm/l/msgpackup?color=blue)](https://www.npmjs.com/package/msgpackup) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/msgpackup)](https://github.com/eugeneware/msgpackup) [![Contributors](https://img.shields.io/github/contributors/eugeneware/msgpackup?color=blue)](https://github.com/eugeneware/msgpackup/graphs/contributors)

Adds [msgpack](https://github.com/msgpack/msgpack) as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: msgpack }`.

### [`level-cbatch`][level-cbatch]

[![npm package version](https://img.shields.io/npm/v/level-cbatch)](https://www.npmjs.com/package/level-cbatch) [![npm downloads](https://img.shields.io/npm/dw/level-cbatch)](https://www.npmjs.com/package/level-cbatch) [![License](https://img.shields.io/npm/l/level-cbatch?color=blue)](https://www.npmjs.com/package/level-cbatch) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-cbatch)](https://github.com/kesla/level-cbatch) [![Contributors](https://img.shields.io/github/contributors/kesla/level-cbatch?color=blue)](https://github.com/kesla/level-cbatch/graphs/contributors)

Provides a chainable API for `db.batch()`. This functionality is now provided by [`levelup`][levelup].

### [`memdb`][memdb]

[![npm package version](https://img.shields.io/npm/v/memdb)](https://www.npmjs.com/package/memdb) [![npm downloads](https://img.shields.io/npm/dw/memdb)](https://www.npmjs.com/package/memdb) [![License](https://img.shields.io/npm/l/memdb?color=blue)](https://www.npmjs.com/package/memdb) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/memdb)](https://github.com/juliangruber/memdb) [![Contributors](https://img.shields.io/github/contributors/juliangruber/memdb?color=blue)](https://github.com/juliangruber/memdb/graphs/contributors)

[`levelup`][levelup] + [`memdown`][memdown]. Superseded by [`level-mem`][level-mem].

### [`levelup-iterator`][levelup-iterator]

[![npm package version](https://img.shields.io/npm/v/levelup-iterator)](https://www.npmjs.com/package/levelup-iterator) [![npm downloads](https://img.shields.io/npm/dw/levelup-iterator)](https://www.npmjs.com/package/levelup-iterator) [![License](https://img.shields.io/npm/l/levelup-iterator?color=blue)](https://www.npmjs.com/package/levelup-iterator) [![Last commit](https://img.shields.io/github/last-commit/mirkokiefer/levelup-iterator)](https://github.com/mirkokiefer/levelup-iterator) [![Contributors](https://img.shields.io/github/contributors/mirkokiefer/levelup-iterator?color=blue)](https://github.com/mirkokiefer/levelup-iterator/graphs/contributors)

Use [`abstract-leveldown`][abstract-leveldown] iterators instead of readable streams to traverse the database. Iterators are exposed by [`levelup`][levelup] since `levelup@3.1.0`.

### [`levelidb`][levelidb]

[![npm package version](https://img.shields.io/npm/v/levelidb)](https://www.npmjs.com/package/levelidb) [![npm downloads](https://img.shields.io/npm/dw/levelidb)](https://www.npmjs.com/package/levelidb) [![License](https://img.shields.io/npm/l/levelidb?color=blue)](https://www.npmjs.com/package/levelidb) [![Last commit](https://img.shields.io/github/last-commit/Raynos/levelidb)](https://github.com/Raynos/levelidb) [![Contributors](https://img.shields.io/github/contributors/Raynos/levelidb?color=blue)](https://github.com/Raynos/levelidb/graphs/contributors)

A [`levelup`][levelup] interface on top of IndexedDB. Superseded by [`level-js`][level-js] and [`level`][level].

### [`level-multiply`][level-multiply]

[![npm package version](https://img.shields.io/npm/v/level-multiply)](https://www.npmjs.com/package/level-multiply) [![npm downloads](https://img.shields.io/npm/dw/level-multiply)](https://www.npmjs.com/package/level-multiply) [![License](https://img.shields.io/npm/l/level-multiply?color=blue)](https://www.npmjs.com/package/level-multiply) [![Last commit](https://img.shields.io/github/last-commit/rvagg/node-level-multiply)](https://github.com/rvagg/node-level-multiply) [![Contributors](https://img.shields.io/github/contributors/rvagg/node-level-multiply?color=blue)](https://github.com/rvagg/node-level-multiply/graphs/contributors)

Make [`levelup`][levelup] `get()`, `put()` and `del()` methods accept multiples keys & values. Archived.

### [`level-namespace`][level-namespace]

[![npm package version](https://img.shields.io/npm/v/level-namespace)](https://www.npmjs.com/package/level-namespace) [![npm downloads](https://img.shields.io/npm/dw/level-namespace)](https://www.npmjs.com/package/level-namespace) [![License](https://img.shields.io/npm/l/level-namespace?color=blue)](https://www.npmjs.com/package/level-namespace) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-namespace)](https://github.com/kesla/level-namespace) [![Contributors](https://img.shields.io/github/contributors/kesla/level-namespace?color=blue)](https://github.com/kesla/level-namespace/graphs/contributors)

Split your db up into multiple namespaces. Deprecated.

### [`q-level`][q-level]

[![npm package version](https://img.shields.io/npm/v/q-level)](https://www.npmjs.com/package/q-level) [![npm downloads](https://img.shields.io/npm/dw/q-level)](https://www.npmjs.com/package/q-level) [![License](https://img.shields.io/npm/l/q-level?color=blue)](https://www.npmjs.com/package/q-level) [![Last commit](https://img.shields.io/github/last-commit/mvayngrib/q-level)](https://github.com/mvayngrib/q-level) [![Contributors](https://img.shields.io/github/contributors/mvayngrib/q-level?color=blue)](https://github.com/mvayngrib/q-level/graphs/contributors)

[`levelup`][levelup] with Q promises. [`levelup`][levelup] has native Promise support now.

### [`level-static`][level-static]

[![npm package version](https://img.shields.io/npm/v/level-static)](https://www.npmjs.com/package/level-static) [![npm downloads](https://img.shields.io/npm/dw/level-static)](https://www.npmjs.com/package/level-static) [![License](https://img.shields.io/npm/l/level-static?color=blue)](https://www.npmjs.com/package/level-static) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-static)](https://github.com/dominictarr/level-static) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-static?color=blue)](https://github.com/dominictarr/level-static/graphs/contributors)

Use [`levelup`][levelup] as a static file server. Abandoned.

### [`level-spaces`][level-spaces]

[![npm package version](https://img.shields.io/npm/v/level-spaces)](https://www.npmjs.com/package/level-spaces) [![npm downloads](https://img.shields.io/npm/dw/level-spaces)](https://www.npmjs.com/package/level-spaces) [![License](https://img.shields.io/npm/l/level-spaces?color=blue)](https://www.npmjs.com/package/level-spaces) [![Last commit](https://img.shields.io/github/last-commit/rvagg/level-spaces)](https://github.com/rvagg/level-spaces) [![Contributors](https://img.shields.io/github/contributors/rvagg/level-spaces?color=blue)](https://github.com/rvagg/level-spaces/graphs/contributors)

A simple namespacing solution for [`levelup`][levelup]. Deprecated.

### [`level-object`][level-object]

[![npm package version](https://img.shields.io/npm/v/level-object)](https://www.npmjs.com/package/level-object) [![npm downloads](https://img.shields.io/npm/dw/level-object)](https://www.npmjs.com/package/level-object) [![License](https://img.shields.io/npm/l/level-object?color=blue)](https://www.npmjs.com/package/level-object) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-object)](https://github.com/juliangruber/level-object) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-object?color=blue)](https://github.com/juliangruber/level-object/graphs/contributors)

Store objects in [`levelup`][levelup]. Author recommends [`level-pathwise`][level-pathwise] instead.

### [`level-scuttlebutt`][level-scuttlebutt]

[![npm package version](https://img.shields.io/npm/v/level-scuttlebutt)](https://www.npmjs.com/package/level-scuttlebutt) [![npm downloads](https://img.shields.io/npm/dw/level-scuttlebutt)](https://www.npmjs.com/package/level-scuttlebutt) [![License](https://img.shields.io/npm/l/level-scuttlebutt?color=blue)](https://www.npmjs.com/package/level-scuttlebutt) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-scuttlebutt)](https://github.com/dominictarr/level-scuttlebutt) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-scuttlebutt?color=blue)](https://github.com/dominictarr/level-scuttlebutt/graphs/contributors)

Persist and query scuttlebutt documents (requires [`level-sublevel`][level-sublevel]). Abandoned.

### [`gun-level`][gun-level]

[![npm package version](https://img.shields.io/npm/v/gun-level)](https://www.npmjs.com/package/gun-level) [![npm downloads](https://img.shields.io/npm/dw/gun-level)](https://www.npmjs.com/package/gun-level) [![License](https://img.shields.io/npm/l/gun-level?color=blue)](https://www.npmjs.com/package/gun-level) [![Last commit](https://img.shields.io/github/last-commit/PsychoLlama/gun-level)](https://github.com/PsychoLlama/gun-level) [![Contributors](https://img.shields.io/github/contributors/PsychoLlama/gun-level?color=blue)](https://github.com/PsychoLlama/gun-level/graphs/contributors)

Sync graph-style data real-time between browsers and servers. Discontinued.

### [`level-co`][level-co]

[![npm package version](https://img.shields.io/npm/v/level-co)](https://www.npmjs.com/package/level-co) [![npm downloads](https://img.shields.io/npm/dw/level-co)](https://www.npmjs.com/package/level-co) [![License](https://img.shields.io/npm/l/level-co?color=blue)](https://www.npmjs.com/package/level-co) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-co)](https://github.com/juliangruber/level-co) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-co?color=blue)](https://github.com/juliangruber/level-co/graphs/contributors)

[`levelup`][levelup] wrappers for [co](https://github.com/tj/co). Instead use native ES6 features.

### [`level-session`][level-session]

[![npm package version](https://img.shields.io/npm/v/level-session)](https://www.npmjs.com/package/level-session) [![npm downloads](https://img.shields.io/npm/dw/level-session)](https://www.npmjs.com/package/level-session) [![License](https://img.shields.io/npm/l/level-session?color=blue)](https://www.npmjs.com/package/level-session) [![Last commit](https://img.shields.io/github/last-commit/rvagg/node-level-session)](https://github.com/rvagg/node-level-session) [![Contributors](https://img.shields.io/github/contributors/rvagg/node-level-session?color=blue)](https://github.com/rvagg/node-level-session/graphs/contributors)

Framework-agnostic, LevelDB-backed web server session manager. Archived.

### [`level-socket`][level-socket]

[![npm package version](https://img.shields.io/npm/v/level-socket)](https://www.npmjs.com/package/level-socket) [![npm downloads](https://img.shields.io/npm/dw/level-socket)](https://www.npmjs.com/package/level-socket) [![License](https://img.shields.io/npm/l/level-socket?color=blue)](https://www.npmjs.com/package/level-socket) [![Last commit](https://img.shields.io/github/last-commit/maxogden/level-socket)](https://github.com/maxogden/level-socket) [![Contributors](https://img.shields.io/github/contributors/maxogden/level-socket?color=blue)](https://github.com/maxogden/level-socket/graphs/contributors)

Backend server that exposes [`levelup`][levelup] over authenticated cross domain websockets.

### [`level-user`][level-user]

[![npm package version](https://img.shields.io/npm/v/level-user)](https://www.npmjs.com/package/level-user) [![npm downloads](https://img.shields.io/npm/dw/level-user)](https://www.npmjs.com/package/level-user) [![License](https://img.shields.io/npm/l/level-user?color=blue)](https://www.npmjs.com/package/level-user) [![Last commit](https://img.shields.io/github/last-commit/maxogden/level-user)](https://github.com/maxogden/level-user) [![Contributors](https://img.shields.io/github/contributors/maxogden/level-user?color=blue)](https://github.com/maxogden/level-user/graphs/contributors)

Client side library for authenticating with and moving data over [`level-socket`][level-socket].

### [`string-range`][string-range]

[![npm package version](https://img.shields.io/npm/v/string-range)](https://www.npmjs.com/package/string-range) [![npm downloads](https://img.shields.io/npm/dw/string-range)](https://www.npmjs.com/package/string-range) [![License](https://img.shields.io/npm/l/string-range?color=blue)](https://www.npmjs.com/package/string-range) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/string-range)](https://github.com/dominictarr/string-range) [![Contributors](https://img.shields.io/github/contributors/dominictarr/string-range?color=blue)](https://github.com/dominictarr/string-range/graphs/contributors)

Manipulate string ranges for `db.createReadStream()`. Abandoned.

### [`range-bucket`][range-bucket]

[![npm package version](https://img.shields.io/npm/v/range-bucket)](https://www.npmjs.com/package/range-bucket) [![npm downloads](https://img.shields.io/npm/dw/range-bucket)](https://www.npmjs.com/package/range-bucket) [![License](https://img.shields.io/npm/l/range-bucket?color=blue)](https://www.npmjs.com/package/range-bucket) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/range-bucket)](https://github.com/dominictarr/range-bucket) [![Contributors](https://img.shields.io/github/contributors/dominictarr/range-bucket?color=blue)](https://github.com/dominictarr/range-bucket/graphs/contributors)

Generate string ranges that group into ranges, suitable for use as database keys. Abandoned.

### [`level-partition-check`][level-partition-check]

[![npm package version](https://img.shields.io/npm/v/level-partition-check)](https://www.npmjs.com/package/level-partition-check) [![npm downloads](https://img.shields.io/npm/dw/level-partition-check)](https://www.npmjs.com/package/level-partition-check) [![License](https://img.shields.io/npm/l/level-partition-check?color=blue)](https://www.npmjs.com/package/level-partition-check) [![Last commit](https://img.shields.io/github/last-commit/soldair/level-partition-check)](https://github.com/soldair/level-partition-check) [![Contributors](https://img.shields.io/github/contributors/soldair/level-partition-check?color=blue)](https://github.com/soldair/level-partition-check/graphs/contributors)

Extend [`levelup`][levelup] to error if you write outside of a specified range of keys. Stalled work in progress.

### [`level-binomial-replication`][level-binomial-replication]

[![npm package version](https://img.shields.io/npm/v/level-binomial-replication)](https://www.npmjs.com/package/level-binomial-replication) [![npm downloads](https://img.shields.io/npm/dw/level-binomial-replication)](https://www.npmjs.com/package/level-binomial-replication) [![License](https://img.shields.io/npm/l/level-binomial-replication?color=blue)](https://www.npmjs.com/package/level-binomial-replication) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-binomial-replication)](https://github.com/dominictarr/level-binomial-replication) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-binomial-replication?color=blue)](https://github.com/dominictarr/level-binomial-replication/graphs/contributors)

Biniomial replication for [`levelup`][levelup]. Abandoned.

### [`level-bytewise`][level-bytewise]

[![npm package version](https://img.shields.io/npm/v/level-bytewise)](https://www.npmjs.com/package/level-bytewise) [![npm downloads](https://img.shields.io/npm/dw/level-bytewise)](https://www.npmjs.com/package/level-bytewise) [![License](https://img.shields.io/npm/l/level-bytewise?color=blue)](https://www.npmjs.com/package/level-bytewise) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-bytewise)](https://github.com/eugeneware/level-bytewise) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-bytewise?color=blue)](https://github.com/eugeneware/level-bytewise/graphs/contributors)

[`levelup`][levelup] with [`bytewise`][bytewise] key encoding and bytewise-friendly sublevels.

### [`level-peek`][level-peek]

[![npm package version](https://img.shields.io/npm/v/level-peek)](https://www.npmjs.com/package/level-peek) [![npm downloads](https://img.shields.io/npm/dw/level-peek)](https://www.npmjs.com/package/level-peek) [![License](https://img.shields.io/npm/l/level-peek?color=blue)](https://www.npmjs.com/package/level-peek) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-peek)](https://github.com/dominictarr/level-peek) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-peek?color=blue)](https://github.com/dominictarr/level-peek/graphs/contributors)

Get the first or last record in a range. Abandoned.

### [`level-party-hyper`][level-party-hyper]

[![npm package version](https://img.shields.io/npm/v/level-party-hyper)](https://www.npmjs.com/package/level-party-hyper) [![npm downloads](https://img.shields.io/npm/dw/level-party-hyper)](https://www.npmjs.com/package/level-party-hyper) [![License](https://img.shields.io/npm/l/level-party-hyper?color=blue)](https://www.npmjs.com/package/level-party-hyper) [![Last commit](https://img.shields.io/github/last-commit/jcrugzz/level-party)](https://github.com/jcrugzz/level-party) [![Contributors](https://img.shields.io/github/contributors/jcrugzz/level-party?color=blue)](https://github.com/jcrugzz/level-party/graphs/contributors)

Defunct fork of [`level-party`][level-party].

### [`level-prebuilt`][level-prebuilt]

[![npm package version](https://img.shields.io/npm/v/level-prebuilt)](https://www.npmjs.com/package/level-prebuilt) [![npm downloads](https://img.shields.io/npm/dw/level-prebuilt)](https://www.npmjs.com/package/level-prebuilt) [![License](https://img.shields.io/npm/l/level-prebuilt?color=blue)](https://www.npmjs.com/package/level-prebuilt) [![Last commit](https://img.shields.io/github/last-commit/jhermsmeier/level-prebuilt)](https://github.com/jhermsmeier/level-prebuilt) [![Contributors](https://img.shields.io/github/contributors/jhermsmeier/level-prebuilt?color=blue)](https://github.com/jhermsmeier/level-prebuilt/graphs/contributors)

Same as [`level`][level] but with prebuilt binaries. This is now provided by [`level`][level] too.

### [`level-promise`][level-promise]

[![npm package version](https://img.shields.io/npm/v/level-promise)](https://www.npmjs.com/package/level-promise) [![npm downloads](https://img.shields.io/npm/dw/level-promise)](https://www.npmjs.com/package/level-promise) [![License](https://img.shields.io/npm/l/level-promise?color=blue)](https://www.npmjs.com/package/level-promise) [![Last commit](https://img.shields.io/github/last-commit/nathan7/level-promise)](https://github.com/nathan7/level-promise) [![Contributors](https://img.shields.io/github/contributors/nathan7/level-promise?color=blue)](https://github.com/nathan7/level-promise/graphs/contributors)

[`levelup`][levelup] with Promises. This is now provided by [`levelup`][levelup] out of the box.

### [`level-search`][level-search]

[![npm package version](https://img.shields.io/npm/v/level-search)](https://www.npmjs.com/package/level-search) [![npm downloads](https://img.shields.io/npm/dw/level-search)](https://www.npmjs.com/package/level-search) [![License](https://img.shields.io/npm/l/level-search?color=blue)](https://www.npmjs.com/package/level-search) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-search)](https://github.com/dominictarr/level-search) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-search?color=blue)](https://github.com/dominictarr/level-search/graphs/contributors)

Index and search every property in [`levelup`][levelup] containing object values. Abandoned.

### [`level-scout`][level-scout]

[![npm package version](https://img.shields.io/npm/v/level-scout)](https://www.npmjs.com/package/level-scout) [![npm downloads](https://img.shields.io/npm/dw/level-scout)](https://www.npmjs.com/package/level-scout) [![License](https://img.shields.io/npm/l/level-scout?color=blue)](https://www.npmjs.com/package/level-scout) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-scout)](https://github.com/vweevers/level-scout) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-scout?color=blue)](https://github.com/vweevers/level-scout/graphs/contributors)

Range search with a query planner. Development stalled.

### [`leveldown-android-prebuilt`][leveldown-android-prebuilt]

[![npm package version](https://img.shields.io/npm/v/leveldown-android-prebuilt)](https://www.npmjs.com/package/leveldown-android-prebuilt) [![npm downloads](https://img.shields.io/npm/dw/leveldown-android-prebuilt)](https://www.npmjs.com/package/leveldown-android-prebuilt) [![License](https://img.shields.io/npm/l/leveldown-android-prebuilt?color=blue)](https://www.npmjs.com/package/leveldown-android-prebuilt) [![Last commit](https://img.shields.io/github/last-commit/level/leveldown)](https://github.com/level/leveldown) [![Contributors](https://img.shields.io/github/contributors/level/leveldown?color=blue)](https://github.com/level/leveldown/graphs/contributors)

Defunct fork of [`leveldown`][leveldown] to add Android support. Merged into `leveldown`.

### [`leveldown-prebuilt`][leveldown-prebuilt]

[![npm package version](https://img.shields.io/npm/v/leveldown-prebuilt)](https://www.npmjs.com/package/leveldown-prebuilt) [![npm downloads](https://img.shields.io/npm/dw/leveldown-prebuilt)](https://www.npmjs.com/package/leveldown-prebuilt) [![License](https://img.shields.io/npm/l/leveldown-prebuilt?color=blue)](https://www.npmjs.com/package/leveldown-prebuilt) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/leveldown-prebuilt)](https://github.com/mafintosh/leveldown-prebuilt) [![Contributors](https://img.shields.io/github/contributors/mafintosh/leveldown-prebuilt?color=blue)](https://github.com/mafintosh/leveldown-prebuilt/graphs/contributors)

Defunct fork of [`leveldown`][leveldown] to add prebuilt binaries. Now provided by `leveldown`.

### [`level-map-index`][level-map-index]

[![npm package version](https://img.shields.io/npm/v/level-map-index)](https://www.npmjs.com/package/level-map-index) [![npm downloads](https://img.shields.io/npm/dw/level-map-index)](https://www.npmjs.com/package/level-map-index) [![License](https://img.shields.io/npm/l/level-map-index?color=blue)](https://www.npmjs.com/package/level-map-index) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-map-index)](https://github.com/vweevers/level-map-index) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-map-index?color=blue)](https://github.com/vweevers/level-map-index/graphs/contributors)

Another indexing module. Adapted from [`map-reduce`][map-reduce]. Author recommends other solutions.

### [`level-memview`][level-memview]

[![npm package version](https://img.shields.io/npm/v/level-memview)](https://www.npmjs.com/package/level-memview) [![npm downloads](https://img.shields.io/npm/dw/level-memview)](https://www.npmjs.com/package/level-memview) [![License](https://img.shields.io/npm/l/level-memview?color=blue)](https://www.npmjs.com/package/level-memview) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-memview)](https://github.com/dominictarr/level-memview) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-memview?color=blue)](https://github.com/dominictarr/level-memview/graphs/contributors)

In memory view on top of [`levelup`][levelup]. Abandoned.

### [`plumbdb`][plumbdb]

[![npm package version](https://img.shields.io/npm/v/plumbdb)](https://www.npmjs.com/package/plumbdb) [![npm downloads](https://img.shields.io/npm/dw/plumbdb)](https://www.npmjs.com/package/plumbdb) [![License](https://img.shields.io/npm/l/plumbdb?color=blue)](https://www.npmjs.com/package/plumbdb) [![Last commit](https://img.shields.io/github/last-commit/maxogden/plumbdb)](https://github.com/maxogden/plumbdb) [![Contributors](https://img.shields.io/github/contributors/maxogden/plumbdb?color=blue)](https://github.com/maxogden/plumbdb/graphs/contributors)

HTTP request handlers for building web services on top of LevelDB. Not in active development.

## Contributing

Module and resource authors are welcome and encouraged to add an entry for their work via a pull request. To add a module, edit `modules/*.json` and run `npm run awesome` to update `README.md`. A module can have the following properties:

-   `github`: the GitHub slug, for example `Level/awesome`
-   `url`: homepage if `github` is not set meaning the project is hosted elsewhere
-   `description`: a short description. Supports markdown including links to other modules.
-   `compatibility`: an array of npm package names, to declare compatibility with (for example) `abstract-level` versions. Best explained by looking at examples.
-   `timeless`: if true, make the "last commit" badge green, to indicate that the module is feature-complete and can be used even if it seems old by lack of activity.
-   `copyrightYear`, `author` and `oldCategory`: not used, kept for the historical record.

## License

[MIT](LICENSE)

[@adorsys/encrypt-down]: https://github.com/adorsys/encrypt-down

[abstract-level]: https://github.com/Level/abstract-level

[abstract-leveldown]: https://github.com/Level/abstract-leveldown

[abstract-stream-leveldown]: https://github.com/jed/abstract-stream-leveldown

[accountdown]: https://github.com/substack/accountdown

[accountdown-model]: https://github.com/sethvincent/accountdown-model

[aerospike-leveldown]: https://github.com/ProjectThor/aerospikedown

[appfeed]: https://github.com/substack/appfeed

[arrivals-osx]: https://github.com/mshick/arrivals-osx

[asyncstorage-down]: https://github.com/tradle/asyncstorage-down

[autolevel]: https://github.com/finwo/autolevel

[azureleveldown]: https://github.com/richorama/azureleveldown

[batchdb]: https://github.com/substack/batchdb

[batchlevel]: https://github.com/biobricks/batchlevel

[bleach-log-server]: https://github.com/substack/bleach-log-server

[browser-level]: https://github.com/Level/browser-level

[browserify-cdn]: https://github.com/jesusabdullah/browserify-cdn

[browserify-fs]: https://github.com/mafintosh/browserify-fs

[browserify-starter]: https://github.com/Level/browserify-starter

[bytespace]: https://github.com/deanlandolt/bytespace

[byteup]: https://github.com/eugeneware/byteup

[bytewise]: https://github.com/deanlandolt/bytewise

[cachedown]: https://github.com/mvayngrib/cachedown

[changes-index]: https://github.com/substack/changes-index

[changesdown]: https://github.com/mafintosh/changesdown

[changeset]: https://github.com/eugeneware/changeset

[charwise]: https://github.com/dominictarr/charwise

[chrome-localstorage]: https://github.com/regular/chrome-localstorage

[cipherhub]: https://github.com/substack/cipherhub

[classic-level]: https://github.com/Level/classic-level

[clocker]: https://github.com/substack/clocker

[code-music-studio]: https://github.com/substack/code-music-studio

[connect-level]: https://github.com/davidbanham/connect-level

[copy-on-write]: https://github.com/andrewosh/copy-on-write

[couchup]: https://github.com/mikeal/couchup

[cross-street-indexer]: https://github.com/mapbox/cross-street-indexer

[dat]: https://github.com/maxogden/dat

[debugdown]: https://github.com/vweevers/debugdown

[deferred-leveldown]: https://github.com/Level/deferred-leveldown

[dulcimer]: https://github.com/fritzy/dulcimer

[dynamo-down]: https://github.com/jed/dynamo-down

[dynamodb-leveldown]: https://github.com/GioCirque/DynamoDb-LevelDown

[electron-crash-report-service]: https://github.com/yoshuawuyts/electron-crash-report-service

[electron-demo]: https://github.com/Level/electron-demo

[encoding-down]: https://github.com/Level/encoding-down

[firedup]: https://github.com/eugeneware/firedup

[fruitdown]: https://github.com/nolanlawson/fruitdown

[gaiadown-ts]: https://github.com/acidleroy/gaiadown-ts

[groove basin]: https://github.com/andrewrk/groovebasin

[gun-level]: https://github.com/PsychoLlama/gun-level

[hadron]: https://github.com/hadronjs/hadron

[indexeddown]: https://github.com/kapetan/indexeddown

[interval-to-ltgt]: https://github.com/nowsecure/interval-to-ltgt

[inverted-index]: https://github.com/kordon/inverted

[ipfs]: https://ipfs.io/

[jsondown]: https://github.com/toolness/jsondown

[jsonquery]: https://github.com/eugeneware/jsonquery

[jsonquery-engine]: https://github.com/eugeneware/jsonquery-engine

[lem]: https://github.com/binocarlos/lem

[len]: https://github.com/binocarlos/len

[lev]: https://github.com/hij1nx/lev

[lev2]: https://github.com/maxlath/lev2

[level]: https://github.com/Level/level

[level-2pc]: https://github.com/hij1nx/level-2pc

[level-array]: https://github.com/juliangruber/level-array

[level-assoc]: https://github.com/substack/level-assoc

[level-atomics]: https://github.com/IndigoUnited/node-level-atomics

[level-auto-index]: https://github.com/hypermodules/level-auto-index

[level-autotable]: https://github.com/santoshrajan/levelup-autotable

[level-average]: https://github.com/juliangruber/level-average

[level-awesome]: https://github.com/Level/awesome

[level-badge]: https://leveljs.org/img/badge.svg

[level-batch-stream]: https://github.com/jcrugzz/level-batch-stream

[level-bench]: https://github.com/Level/bench

[level-benchmarks]: https://github.com/kesla/level-benchmarks

[level-binomial-replication]: https://github.com/dominictarr/level-binomial-replication

[level-blob]: https://github.com/crodas/level-blob

[level-blob-store]: https://github.com/diasdavid/level-blob-store

[level-browserify]: https://github.com/Level/level-browserify

[level-bytewise]: https://github.com/eugeneware/level-bytewise

[level-cache]: https://github.com/Raynos/level-cache

[level-capped]: https://github.com/juliangruber/level-capped

[level-cbatch]: https://github.com/kesla/level-cbatch

[level-cli]: https://github.com/mablay/level-cli

[level-cluster-get]: https://github.com/kesla/level-cluster-get

[level-co]: https://github.com/juliangruber/level-co

[level-codec]: https://github.com/Level/codec

[level-community]: https://github.com/Level/community

[level-compare-forks]: https://github.com/kesla/level-compare-forks

[level-compose]: https://github.com/Level/compose

[level-concat-iterator]: https://github.com/Level/concat-iterator

[level-condition]: https://github.com/juliangruber/level-condition

[level-connect]: https://github.com/mattstyles/level-connect

[level-couch-sync]: https://github.com/dominictarr/level-couch-sync

[level-cowdown]: https://github.com/substack/level-cowdown

[level-create]: https://github.com/substack/level-create

[level-create-batch]: https://github.com/substack/level-create-batch

[level-cursor]: https://github.com/kordon/cursor

[level-delete-range]: https://github.com/Raynos/level-delete-range

[level-delete-stream]: https://github.com/juliangruber/level-delete-stream

[level-dump]: https://github.com/thlorenz/level-dump

[level-encoding]: https://github.com/Raynos/level-encoding

[level-errors]: https://github.com/Level/errors

[level-events]: https://github.com/mafintosh/level-events

[level-exists]: https://github.com/juliangruber/level-exists

[level-explore]: https://github.com/jcblw/level-explore

[level-fact-base]: https://github.com/smallhelm/level-fact-base

[level-filesystem]: https://github.com/mafintosh/level-filesystem

[level-forks]: https://github.com/substack/level-forks

[level-fs]: https://github.com/juliangruber/level-fs

[level-fs-browser]: https://github.com/juliangruber/level-fs-browser

[level-geo]: https://github.com/julianduque/level-geo

[level-geography]: https://github.com/morganherlocker/level-geography

[level-geospatial]: https://github.com/richorama/level-geospatial

[level-glob]: https://github.com/vweevers/level-glob

[level-hash-index]: https://github.com/smallhelm/level-hash-index

[level-historical-json]: https://github.com/ellell/level-historical-json

[level-hookdown]: https://github.com/hypermodules/level-hookdown

[level-hooks]: https://github.com/dominictarr/level-hooks

[level-hyper]: https://github.com/Level/level-hyper

[level-idx]: https://github.com/hypermodules/level-idx

[level-immutable]: https://github.com/eugeneware/level-immutable

[level-in]: https://github.com/fergiemcdowall/level-in

[level-index-update]: https://github.com/binocarlos/level-index-update

[level-indexed]: https://github.com/kapetan/level-indexed

[level-indexer]: https://github.com/mafintosh/level-indexer

[level-indico]: https://github.com/mariocasciaro/level-indico

[level-inverted-index]: https://github.com/dominictarr/level-inverted-index

[level-iterator]: https://github.com/vweevers/level-iterator

[level-iterator-stream]: https://github.com/Level/iterator-stream

[level-jobs]: https://github.com/pgte/level-jobs

[level-js]: https://github.com/Level/level.js

[level-key-list]: https://github.com/hughsk/level-key-list

[level-lazy-open]: https://github.com/Level/lazy-open

[level-librarian]: https://github.com/microstar-db/level-librarian

[level-list]: https://github.com/juliangruber/level-list

[level-live]: https://github.com/voltraco/level-live

[level-live-cache]: https://github.com/juliangruber/level-live-cache

[level-live-stream]: https://github.com/dominictarr/level-live-stream

[level-livefeed]: https://github.com/Raynos/level-livefeed

[level-lively]: https://github.com/eugeneware/level-lively

[level-lock]: https://github.com/substack/level-lock

[level-log]: https://github.com/micnews/level-log

[level-lru-cache]: https://github.com/kemitchell/level-lru-cache.js

[level-manifest]: https://github.com/dominictarr/level-manifest

[level-map-index]: https://github.com/vweevers/level-map-index

[level-map-merge]: https://github.com/dominictarr/level-map-merge

[level-mapped-index]: https://github.com/rvagg/node-level-mapped-index

[level-master]: https://github.com/dominictarr/level-master

[level-match-index]: https://github.com/mmckegg/level-match-index

[level-mem]: https://github.com/Level/level-mem

[level-memview]: https://github.com/dominictarr/level-memview

[level-merkle]: https://github.com/dominictarr/level-merkle

[level-methods]: https://github.com/Wayla/level-methods

[level-mirror]: https://github.com/juliangruber/level-mirror

[level-model]: https://github.com/sethvincent/level-model

[level-modify]: https://github.com/dskrepps/level-modify

[level-mongo]: https://github.com/simon-p-r/level-mongo

[level-mount]: https://github.com/u8sand/level-mount

[level-move]: https://github.com/juliangruber/level-move

[level-multiply]: https://github.com/rvagg/node-level-multiply

[level-mutex]: https://github.com/mikeal/level-mutex

[level-namespace]: https://github.com/kesla/level-namespace

[level-nearby-stream]: https://github.com/juliangruber/level-nearby-stream

[level-object]: https://github.com/juliangruber/level-object

[level-option-wrap]: https://github.com/substack/level-option-wrap

[level-ordered]: https://github.com/eranbnn/level-ordered

[level-org]: https://github.com/level

[level-orm]: https://github.com/eugeneware/level-orm

[level-out]: https://github.com/fergiemcdowall/level-out

[level-over-http]: https://github.com/lakowske/level-over-http

[level-packager]: https://github.com/Level/packager

[level-paginate]: https://github.com/juliangruber/level-paginate

[level-partition-check]: https://github.com/soldair/level-partition-check

[level-party]: https://github.com/substack/level-party

[level-party-hyper]: https://github.com/jcrugzz/level-party

[level-path-index]: https://github.com/binocarlos/level-path-index

[level-pathwise]: https://github.com/juliangruber/level-pathwise

[level-peek]: https://github.com/dominictarr/level-peek

[level-places]: https://github.com/Wayla/level-places

[level-post]: https://github.com/dominictarr/level-post

[level-prebuilt]: https://github.com/jhermsmeier/level-prebuilt

[level-probe]: https://github.com/vweevers/level-probe

[level-promise]: https://github.com/nathan7/level-promise

[level-pubsub]: https://github.com/hij1nx/level-pubsub

[level-pull-blob-store]: https://github.com/ipfs/js-level-pull-blob-store

[level-push]: https://github.com/maiah/level-push

[level-q]: https://github.com/eugeneware/level-q

[level-query]: https://github.com/substack/level-query

[level-queryengine]: https://github.com/eugeneware/level-queryengine

[level-queue-type]: https://github.com/mcollina/level-queue-type

[level-random]: https://github.com/michaelnisi/level-random

[level-range]: https://github.com/juliangruber/level-range

[level-range-emitter]: https://github.com/jameskyburz/level-range-emitter

[level-reactive]: https://github.com/juliangruber/level-reactive

[level-read-stream]: https://github.com/Level/read-stream

[level-repair]: https://github.com/kesla/level-repair

[level-replicate]: https://github.com/dominictarr/level-replicate

[level-replicator]: https://github.com/hij1nx/level-replicator

[level-rest]: https://github.com/shama/level-rest

[level-restful]: https://github.com/karissa/level-restful

[level-rocksdb]: https://github.com/Level/level-rocksdb

[level-rpc]: https://github.com/juliangruber/level-rpc

[level-sandbox]: https://github.com/juliangruber/level-sandbox

[level-schedule]: https://github.com/juliangruber/level-schedule

[level-scout]: https://github.com/vweevers/level-scout

[level-scuttlebutt]: https://github.com/dominictarr/level-scuttlebutt

[level-search]: https://github.com/dominictarr/level-search

[level-sec]: https://github.com/juliangruber/level-sec

[level-secondary]: https://github.com/juliangruber/level-secondary

[level-serve]: https://github.com/Wayla/level-serve

[level-server]: https://github.com/Wayla/level-server

[level-session]: https://github.com/rvagg/node-level-session

[level-set]: https://github.com/maiah/level-set

[level-shared-batch]: https://github.com/juliangruber/level-shared-batch

[level-socket]: https://github.com/maxogden/level-socket

[level-spaces]: https://github.com/rvagg/level-spaces

[level-sql]: https://github.com/hij1nx/level-sql

[level-static]: https://github.com/dominictarr/level-static

[level-stay]: https://github.com/juliangruber/level-stay

[level-store]: https://github.com/juliangruber/level-store

[level-stream]: https://github.com/juliangruber/level-stream

[level-subkey]: https://github.com/snowyu/level-subkey

[level-sublevel]: https://github.com/dominictarr/level-sublevel

[level-sublevel-stream]: https://github.com/juliangruber/level-sublevel-stream

[level-subtree]: https://github.com/hij1nx/level-subtree

[level-sum]: https://github.com/juliangruber/level-sum

[level-superlevel]: https://github.com/randymized/level-superlevel

[level-temp]: https://github.com/mafintosh/level-temp

[level-test]: https://github.com/Level/level-test

[level-time]: https://github.com/micnews/level-time

[level-todo]: https://github.com/nickleefly/level-todo

[level-transactions]: https://github.com/cshum/level-transactions

[level-transcoder]: https://github.com/Level/transcoder

[level-tree]: https://github.com/calvinmetcalf/level-tree

[level-tree-index]: https://github.com/biobricks/level-tree-index

[level-trie]: https://github.com/juliangruber/level-trie

[level-trigger]: https://github.com/dominictarr/level-trigger

[level-ttl]: https://github.com/Level/level-ttl

[level-ttl-cache]: https://github.com/rvagg/level-ttl-cache

[level-updater]: https://github.com/hughsk/level-updater

[level-user]: https://github.com/maxogden/level-user

[level-version]: https://github.com/brycebaril/level-version

[level-vinyl]: https://github.com/vweevers/level-vinyl

[level-web-stream]: https://github.com/Level/web-stream

[level-write-stream]: https://github.com/Raynos/level-write-stream

[level-writestream]: https://github.com/pgte/level-writestream

[level-ws]: https://github.com/Level/level-ws

[level2riak]: https://github.com/fritzy/level2git

[leveldb-editor]: https://github.com/derhuerst/leveldb-editor

[leveldb-mount]: https://github.com/jameskyburz/leveldb-mount

[leveldb-repl]: https://github.com/lapwinglabs/leveldb-repl

[leveldown]: https://github.com/Level/leveldown

[leveldown-android-prebuilt]: https://github.com/level/leveldown

[leveldown-basho]: https://www.npmjs.com/package/leveldown-basho

[leveldown-hyper]: https://github.com/Level/leveldown-hyper

[leveldown-prebuilt]: https://github.com/mafintosh/leveldown-prebuilt

[levelgraph]: https://github.com/mcollina/node-levelgraph

[levelhud]: https://github.com/ricardobeat/levelhud

[levelidb]: https://github.com/Raynos/levelidb

[leveljs.org]: https://leveljs.org

[levelmeup]: https://github.com/workshopper/levelmeup

[levelplus]: https://github.com/https://github.com/eugeneware/levelplus

[levels]: https://github.com/eugeneware/levels

[levelscan]: https://github.com/joeledwards/node-levelscan

[levelui]: https://github.com/hij1nx/levelui

[levelup]: https://github.com/Level/levelup

[levelup-async-iterator]: https://github.com/MeirionHughes/levelup-async-iterator

[levelup-cache]: https://github.com/TehShrike/levelup-cache

[levelup-defaults]: https://github.com/mafintosh/levelup-defaults

[levelup-iterator]: https://github.com/mirkokiefer/levelup-iterator

[levelweb]: https://github.com/hij1nx/levelui

[levi]: https://github.com/cshum/levi

[lexicographic-integer-encoding]: https://github.com/vweevers/lexicographic-integer-encoding

[linvodb3]: https://github.com/Ivshti/linvodb3

[lmdb-leveldown]: https://github.com/chrbala/lmdb-leveldown

[localdown]: https://github.com/bhoriuchi/localdown

[localforagedown]: https://github.com/KsRyY/localforagedown

[localstorage-down]: https://github.com/No9/localstorage-down

[lt-core]: https://github.com/juice49/lt-core

[ltest]: https://github.com/ralphtheninja/ltest

[ltgt]: https://github.com/dominictarr/ltgt

[ltgt-to-interval]: https://github.com/juliangruber/ltgt-to-interval

[many-level]: https://github.com/Level/many-level

[map-reduce]: https://github.com/dominictarr/map-reduce

[map-reduce-chained]: https://github.com/ryanramage/map-reduce-chained

[medeadown]: https://github.com/kesla/medeadown

[memdb]: https://github.com/juliangruber/memdb

[memdown]: https://github.com/Level/memdown

[memory-level]: https://github.com/Level/memory-level

[merkle-dag]: https://github.com/mafintosh/merkle-dag

[merkle-patricia-tree]: https://github.com/ethereumjs/merkle-patricia-tree

[mongodown]: https://github.com/watson/mongodown

[msgpackup]: https://github.com/eugeneware/msgpackup

[multilevel]: https://github.com/juliangruber/multilevel

[multilevel-http]: https://github.com/juliangruber/multilevel-http

[multileveldown]: https://github.com/mafintosh/multileveldown

[mysqldown]: https://github.com/kesla/mysqldown

[networked-hyperbeedown]: https://github.com/RangerMauve/networked-hyperbeedown

[npm-search]: https://github.com/dominictarr/npm-search

[path-engine]: https://github.com/eugeneware/path-engine

[plumbdb]: https://github.com/maxogden/plumbdb

[pouchdb]: http://pouchdb.com/

[prerender-level-cache]: https://github.com/maxlath/prerender-level-cache

[protocol-buffers]: https://github.com/mafintosh/protocol-buffers

[pull-level]: https://github.com/dominictarr/pull-level

[pushdb]: https://github.com/mikeal/pushdb

[q-level]: https://github.com/mvayngrib/q-level

[qool]: https://github.com/kessler/qool

[range-bucket]: https://github.com/dominictarr/range-bucket

[range-emitter]: https://github.com/jameskyburz/range-emitter

[range-index]: https://github.com/kordon/range

[rave-level]: https://github.com/Level/rave-level

[react-native-leveldown]: https://github.com/andymatuschak/react-native-leveldown

[redisdown]: https://github.com/hmalphettes/redisdown

[riakdown]: https://github.com/nlf/riakdown

[rocksdb]: https://github.com/Level/rocksdb

[rxdb]: https://github.com/pubkey/rxdb

[s3leveldown]: https://github.com/loune/s3leveldown

[search-index]: https://github.com/fergiemcdowall/search-index

[sheet-down]: https://github.com/jed/sheet-down

[skeyma]: https://github.com/jed/skeyma

[sqldown]: https://github.com/calvinmetcalf/sqldown

[string-range]: https://github.com/dominictarr/string-range

[subindex]: https://github.com/eugeneware/subindex

[sublevel-prefixer]: https://github.com/mafintosh/sublevel-prefixer

[subleveldown]: https://github.com/Level/subleveldown

[suckit]: https://github.com/deoxxa/suckit

[tacodb]: https://github.com/dominictarr/tacodb

[timestreamdb]: https://github.com/brycebaril/timestreamdb

[tiny-level-ttl]: https://github.com/ArtskydJ/tiny-level-ttl

[tsd]: https://github.com/hij1nx/tsd

[webpack-starter]: https://github.com/Level/webpack-starter
