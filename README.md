# Awesome Level ![level badge][level-badge]

> A curated list of amazingly awesome **[Level][level-org]** modules and resources. [Add yours!](#contributing)

## Table of Contents

<details><summary>Click to expand</summary>

-   [Bundles](#bundles)
-   [Core](#core)
-   [Stores](#stores)
-   [Layers](#layers)
-   [Databases](#databases)
-   [Replication](#replication)
-   [Plugins for levelup](#plugins-for-levelup)
-   [Utilities](#utilities)
-   [Resources](#resources)
-   [Contributing](#contributing)
-   [License](#license)

</details>

## Bundles

Convenience modules that bundle [a store](#stores) with [`levelup`] and [`encoding-down`].

Name | Compatibility | Dependencies | Description
:--- | :------------ | :----------- | :----------
**[`level`]** | ![levelup](https://img.shields.io/badge/levelup-2.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/level.svg?label=%E2%99%A5)](https://david-dm.org/level/level) | Bundle for [`leveldown`].<br>Main entry point for beginners.
**[`level-mem`]** | ![levelup](https://img.shields.io/badge/levelup-2.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/level-mem.svg?label=%E2%99%A5)](https://david-dm.org/level/level-mem) | Bundle for [`memdown`].
**[`level-rocksdb`]** | ![levelup](https://img.shields.io/badge/levelup-2.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/level-rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/level/level-rocksdb) | Bundle for [`rocksdb`].
**[`level-browserify`]** | ![levelup](https://img.shields.io/badge/levelup-1.3-orange.svg) | [![dependencies](https://img.shields.io/david/level/level-browserify.svg?label=%E2%99%A5)](https://david-dm.org/level/level-browserify) | Bundle for [`level-js`].

## Core

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup`]** | [![dependencies](https://img.shields.io/david/level/levelup.svg?label=%E2%99%A5)](https://david-dm.org/level/levelup) | The glue that holds everything together.<br>Use this when you need a [custom or swappable store](#stores).
**[`abstract-leveldown`]** | [![dependencies](https://img.shields.io/david/level/abstract-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/level/abstract-leveldown) | An abstract prototype matching the [`leveldown`] API.<br>Use this to implement your own store.
**[`level-packager`]** | [![dependencies](https://img.shields.io/david/level/packager.svg?label=%E2%99%A5)](https://david-dm.org/level/packager) | Package helper to export [a bundle](#bundles).<br>Use this to create a new `level-*` bundle.

## Stores

Modules that implement [`abstract-leveldown`] as storage for [`levelup`].

Name | Compatibility | Dependencies | Type
:--- | :------------ | :----------- | :---
**[`leveldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/leveldown.svg?label=%E2%99%A5)](https://david-dm.org/level/leveldown) | [LevelDB](https://github.com/google/leveldb)
**[`memdown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/memdown.svg?label=%E2%99%A5)](https://david-dm.org/level/memdown) | [In-memory RBTree](https://www.npmjs.com/package/functional-red-black-tree)
**[`rocksdb`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/level/rocksdb) | [RocksDB](https://github.com/facebook/rocksdb/)
**[`medeadown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/kesla/medeadown.svg?label=%E2%99%A5)](https://david-dm.org/kesla/medeadown) | [medea](https://github.com/argo/medea)
**[`jsondown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-orange.svg) | [![dependencies](https://img.shields.io/david/toolness/jsondown.svg?label=%E2%99%A5)](https://david-dm.org/toolness/jsondown) | JSON on disk
**[`leveldown-hyper`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-orange.svg) | [![dependencies](https://img.shields.io/david/level/leveldown-hyper.svg?label=%E2%99%A5)](https://david-dm.org/level/leveldown-hyper) | [HyperLevelDB](https://github.com/rescrv/HyperLevelDB)
**[`asyncstorage-down`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-orange.svg) | [![dependencies](https://img.shields.io/david/tradle/asyncstorage-down.svg?label=%E2%99%A5)](https://david-dm.org/tradle/asyncstorage-down) | [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) (React Native)
**[`mongodown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-orange.svg) | [![dependencies](https://img.shields.io/david/watson/mongodown.svg?label=%E2%99%A5)](https://david-dm.org/watson/mongodown) | [MongoDB](https://www.mongodb.com/)
**[`sqldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-orange.svg) | [![dependencies](https://img.shields.io/david/calvinmetcalf/sqldown.svg?label=%E2%99%A5)](https://david-dm.org/calvinmetcalf/sqldown) | [`sqlite3`](https://www.npmjs.com/package/sqlite3), [`pg`](https://www.npmjs.com/package/pg), [`mysql`](https://www.npmjs.com/package/mysql), WebSQL
**[`dynamo-down`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-orange.svg) | [![dependencies](https://img.shields.io/david/jed/dynamo-down.svg?label=%E2%99%A5)](https://david-dm.org/jed/dynamo-down) | [AWS DynamoDB](http://aws.amazon.com/dynamodb)
**[`azureleveldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.11-red.svg) | [![dependencies](https://img.shields.io/david/richorama/azureleveldown.svg?label=%E2%99%A5)](https://david-dm.org/richorama/azureleveldown) | Windows Azure Table Storage
**[`level-js`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/level/level.js.svg?label=%E2%99%A5)](https://david-dm.org/level/level.js) | [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB)
**[`fruitdown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/nolanlawson/fruitdown.svg?label=%E2%99%A5)](https://david-dm.org/nolanlawson/fruitdown) | IndexedDB (Apple)
**[`localstorage-down`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/No9/localstorage-down.svg?label=%E2%99%A5)](https://david-dm.org/No9/localstorage-down) | [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
**[`riakdown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/nlf/riakdown.svg?label=%E2%99%A5)](https://david-dm.org/nlf/riakdown) | [riakpbc](https://github.com/nlf/riakpbc)
**[`mysqldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.7-red.svg) | [![dependencies](https://img.shields.io/david/kesla/mysqldown.svg?label=%E2%99%A5)](https://david-dm.org/kesla/mysqldown) | [MySQL](https://www.mysql.com/)
**[`redisdown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-*-red.svg) | [![dependencies](https://img.shields.io/david/hmalphettes/redisdown.svg?label=%E2%99%A5)](https://david-dm.org/hmalphettes/redisdown) | [Redis](https://redis.io/)
**[`leveldown-basho`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) | ![dependencies](https://img.shields.io/badge/dependencies-unknown-lightgrey.svg?label=%E2%99%A5) | [Basho's LevelDB fork](https://github.com/basho/leveldb)
**[`sheet-down`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) | [![dependencies](https://img.shields.io/david/jed/sheet-down.svg?label=%E2%99%A5)](https://david-dm.org/jed/sheet-down) | [Google Sheets](https://docs.google.com/spreadsheets)

## Layers

Modules that implement [`abstract-leveldown`] to wrap another [`abstract-leveldown`]. This is the preferred extension point.

Name | Compatibility | Dependencies | Description
:--- | :------------ | :----------- | :----------
**[`encoding-down`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/encoding-down.svg?label=%E2%99%A5)](https://david-dm.org/level/encoding-down) | Provides key/value encoding.
**[`deferred-leveldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/deferred-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/level/deferred-leveldown) | Handles delayed-open. Built into [`levelup`].
**[`subleveldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-orange.svg)<br>![levelup](https://img.shields.io/badge/levelup-1.2-orange.svg) | [![dependencies](https://img.shields.io/david/mafintosh/subleveldown.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/subleveldown) | Sublevels implemented using leveldowns.
**[`cachedown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-orange.svg) | [![dependencies](https://img.shields.io/david/mvayngrib/cachedown.svg?label=%E2%99%A5)](https://david-dm.org/mvayngrib/cachedown) | LRU cache.

## Databases

Complete Node.js databases built with Level.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`dat`]** | [![dependencies](https://img.shields.io/david/maxogden/dat.svg?label=%E2%99%A5)](https://david-dm.org/maxogden/dat) | Lets you build streaming data pipelines that can be shared and replicated by others.
**[`pouchdb`]** | ![dependencies](https://img.shields.io/badge/dependencies-unknown-lightgrey.svg?label=%E2%99%A5) | PouchDB allows you to store and query data offline and then sync with CouchDB when online. For Node, browser and mobile.
**[`couchup`]** | [![dependencies](https://img.shields.io/david/mikeal/couchup.svg?label=%E2%99%A5)](https://david-dm.org/mikeal/couchup) | A CouchDB implementation on top of [`levelup`].
**[`firedup`]** | [![dependencies](https://img.shields.io/david/eugeneware/firedup.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/firedup) | A node.js implementation of firebase based on [`levelup`].
**[`len`]** | [![dependencies](https://img.shields.io/david/binocarlos/len.svg?label=%E2%99%A5)](https://david-dm.org/binocarlos/len) | Len is a resource booking database using LevelDB for storage. Useful for calendar and gantt chart apps and for questions like 'can a customer book this resource starting X and ending Y'.
**[`lem`]** | [![dependencies](https://img.shields.io/david/binocarlos/lem.svg?label=%E2%99%A5)](https://david-dm.org/binocarlos/lem) | Lem is a telemetry storage database using LevelDB. Keys are indexed by timestamp and you can read values in-between 2 points in time.
**[`levelgraph`]** | [![dependencies](https://img.shields.io/david/mcollina/node-levelgraph.svg?label=%E2%99%A5)](https://david-dm.org/mcollina/node-levelgraph) | A Graph database built on top of [`levelup`] with pattern-matching and join support.
**[`linvodb3`]** | [![dependencies](https://img.shields.io/david/Ivshti/linvodb3.svg?label=%E2%99%A5)](https://david-dm.org/Ivshti/linvodb3) | Persistent database on top of [`levelup`] for Node.js/NW.js with MongoDB-style queries, Mongoose-like models and a map/reduce system.
**[`plumbdb`]** | [![dependencies](https://img.shields.io/david/maxogden/plumbdb.svg?label=%E2%99%A5)](https://david-dm.org/maxogden/plumbdb) | HTTP request handlers for building web services on top of LevelDB. Not in active development.
**[`rxdb`]** | [![dependencies](https://img.shields.io/david/pubkey/rxdb.svg?label=%E2%99%A5)](https://david-dm.org/pubkey/rxdb) | Event-driven database based on [`pouchdb`]. Optimized for reactive programming with observables. Events and state is automatically shared between multiple browser tabs. Queries are defined by the mongoDB mango-standard.
**[`pushdb`]** | [![dependencies](https://img.shields.io/david/mikeal/pushdb.svg?label=%E2%99%A5)](https://david-dm.org/mikeal/pushdb) | A programmable database with document storage and unique indexing capabilities.
**[`search-index`]** | [![dependencies](https://img.shields.io/david/fergiemcdowall/search-index.svg?label=%E2%99%A5)](https://david-dm.org/fergiemcdowall/search-index) | A persistent full text search engine for browser and Node.js.
**[`tacodb`]** | [![dependencies](https://img.shields.io/david/dominictarr/tacodb.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/tacodb) | A responsive, Node.js-style database ideal for realtime data. Highly modular and adaptable, allowing extension with the [Level][level-org] ecosystem.
**[`timestreamdb`]** | [![dependencies](https://img.shields.io/david/brycebaril/timestreamdb.svg?label=%E2%99%A5)](https://david-dm.org/brycebaril/timestreamdb) | A full-featured timeseries database on top of LevelDB. Includes a library for streaming statistical operations on timeseries data including joins, aggregates, filters, and map-like operations.
**[`nanosql`]** | [![dependencies](https://img.shields.io/david/ClickSimply/Nano-SQL.svg?label=%E2%99%A5)](https://david-dm.org/ClickSimply/Nano-SQL) | A small (10Kb) RDBMS abstraction on top of [`levelup`] that also runs in the browser with undo/redo support, immutable objects and IndexedDB persistence.
**[`vertical`]** | [![dependencies](https://img.shields.io/david/zy445566/vertical.svg?label=%E2%99%A5)](https://david-dm.org/zy445566/vertical) | LevelDB distributed, Server and Client!

## Replication

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-2pc`]** | [![dependencies](https://img.shields.io/david/hij1nx/level-2pc.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-2pc) | A two-phase commit protocol.
**[`level-couch-sync`]** | [![dependencies](https://img.shields.io/david/dominictarr/level-couch-sync.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-couch-sync) | Replicate from CouchDB to LevelDB.
**[`level-master`]** | [![dependencies](https://img.shields.io/david/dominictarr/level-master.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-master) | Master-Slave replication for [`levelup`].
**[`level-merkle`]** | [![dependencies](https://img.shields.io/david/dominictarr/level-merkle.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-merkle) | Uses [merkle-trees](http://en.wikipedia.org/wiki/Merkle_tree) to replicate data sets. Data must be sets and currently, deletes are not supported.
**[`level-replicate`]** | [![dependencies](https://img.shields.io/david/dominictarr/level-replicate.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-replicate) | Master-master replication with [`levelup`]. Implements scuttlebutt style handshake, syncs data, then replicates real time changes.
**[`level-replicator`]** | [![dependencies](https://img.shields.io/david/hij1nx/level-replicator.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-replicator) | Master-master replication. Same goal as [`level-replicate`] but different approach.

## Plugins for levelup

Modules that add functionality to [`levelup`].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup-async-iterator`]** | [![dependencies](https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg?label=%E2%99%A5)](https://david-dm.org/MeirionHughes/levelup-async-iterator) | Expose `iterator()` with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration).
**[`cluster-levelup`]** | [![dependencies](https://img.shields.io/david/chiguireitor/cluster-levelup.svg?label=%E2%99%A5)](https://david-dm.org/chiguireitor/cluster-levelup) | Wrap any [`levelup`] instance for [`cluster`](https://nodejs.org/api/cluster.html) usage among multiple processes.

## Utilities

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-iterator-stream`]** | [![dependencies](https://img.shields.io/david/level/iterator-stream.svg?label=%E2%99%A5)](https://david-dm.org/level/iterator-stream) | Turn an [`abstract-leveldown`] iterator into a readable stream.
**[`level-test`]** | [![dependencies](https://img.shields.io/david/level/level-test.svg?label=%E2%99%A5)](https://david-dm.org/level/level-test) | Easily run your `level-*` tests against [all stores](#stores).

## Resources

Name | Description
:--- | :----------
**[leveldb.org]** | Website for LevelDB

## Contributing

Module and resource authors are welcome and encouraged to add an entry for their work via a pull request. To add a module, edit `modules/*.json` and run `npm run awesome` to update `README.md`.

Level is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See [`CONTRIBUTING.md`](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## License

Copyright © 2012-2018 **Level** [contributors](https://github.com/level/community#contributors).

Level is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.

[`abstract-leveldown`]: https://github.com/level/abstract-leveldown

[`asyncstorage-down`]: https://github.com/tradle/asyncstorage-down

[`azureleveldown`]: https://github.com/richorama/azureleveldown

[`cachedown`]: https://github.com/mvayngrib/cachedown

[`cluster-levelup`]: https://github.com/chiguireitor/cluster-levelup

[`couchup`]: https://github.com/mikeal/couchup

[`dat`]: https://github.com/maxogden/dat

[`deferred-leveldown`]: https://github.com/level/deferred-leveldown

[`dynamo-down`]: https://github.com/jed/dynamo-down

[`encoding-down`]: https://github.com/level/encoding-down

[`firedup`]: https://github.com/eugeneware/firedup

[`fruitdown`]: https://github.com/nolanlawson/fruitdown

[`jsondown`]: https://github.com/toolness/jsondown

[`lem`]: https://github.com/binocarlos/lem

[`len`]: https://github.com/binocarlos/len

[`level-2pc`]: https://github.com/hij1nx/level-2pc

[`level-browserify`]: https://github.com/level/level-browserify

[`level-couch-sync`]: https://github.com/dominictarr/level-couch-sync

[`level-iterator-stream`]: https://github.com/level/iterator-stream

[`level-js`]: https://github.com/level/level.js

[`level-master`]: https://github.com/dominictarr/level-master

[`level-mem`]: https://github.com/level/level-mem

[`level-merkle`]: https://github.com/dominictarr/level-merkle

[`level-packager`]: https://github.com/level/packager

[`level-replicate`]: https://github.com/dominictarr/level-replicate

[`level-replicator`]: https://github.com/hij1nx/level-replicator

[`level-rocksdb`]: https://github.com/level/level-rocksdb

[`level-test`]: https://github.com/level/level-test

[`level`]: https://github.com/level/level

[`leveldown-basho`]: https://www.npmjs.com/package/leveldown-basho

[`leveldown-hyper`]: https://github.com/level/leveldown-hyper

[`leveldown`]: https://github.com/level/leveldown

[`levelgraph`]: https://github.com/mcollina/node-levelgraph

[`levelup-async-iterator`]: https://github.com/MeirionHughes/levelup-async-iterator

[`levelup`]: https://github.com/level/levelup

[`linvodb3`]: https://github.com/Ivshti/linvodb3

[`localstorage-down`]: https://github.com/No9/localstorage-down

[`medeadown`]: https://github.com/kesla/medeadown

[`memdown`]: https://github.com/level/memdown

[`mongodown`]: https://github.com/watson/mongodown

[`mysqldown`]: https://github.com/kesla/mysqldown

[`nanosql`]: https://github.com/ClickSimply/Nano-SQL

[`plumbdb`]: https://github.com/maxogden/plumbdb

[`pouchdb`]: http://pouchdb.com/

[`pushdb`]: https://github.com/mikeal/pushdb

[`redisdown`]: https://github.com/hmalphettes/redisdown

[`riakdown`]: https://github.com/nlf/riakdown

[`rocksdb`]: https://github.com/level/rocksdb

[`rxdb`]: https://github.com/pubkey/rxdb

[`search-index`]: https://github.com/fergiemcdowall/search-index

[`sheet-down`]: https://github.com/jed/sheet-down

[`sqldown`]: https://github.com/calvinmetcalf/sqldown

[`subleveldown`]: https://github.com/mafintosh/subleveldown

[`tacodb`]: https://github.com/dominictarr/tacodb

[`timestreamdb`]: https://github.com/brycebaril/timestreamdb

[`vertical`]: https://github.com/zy445566/vertical

[level-badge]: http://leveldb.org/img/badge.svg

[level-org]: https://github.com/level

[leveldb.org]: http://leveldb.org
