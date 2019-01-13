# Awesome Level ![level badge][level-badge]

> An open list of awesome **[Level][level-org]** modules and resources. [Add yours!](#contributing)

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
-   [Tools](#tools)
-   [Resources](#resources)
-   [Contributing](#contributing)
-   [Donate](#donate)
-   [License](#license)

</details>

## Bundles

Convenience modules that bundle [a store](#stores) with [`levelup`][levelup] and [`encoding-down`][encoding-down].

Name | Compatibility | Dependencies | Description
:--- | :------------ | :----------- | :----------
**[`level`][level]** | ![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/level.svg?label=%E2%99%A5)](https://david-dm.org/Level/level) | Bundle for [`leveldown`][leveldown].<br>Main entry point for beginners.
**[`level-mem`][level-mem]** | ![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/level-mem.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-mem) | Bundle for [`memdown`][memdown].
**[`level-rocksdb`][level-rocksdb]** | ![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/level-rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-rocksdb) | Bundle for [`rocksdb`][rocksdb].
**[`level-browserify`][level-browserify]** | ![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/level-browserify.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-browserify) | Bundle for [`level-js`][level-js] and [`leveldown`][leveldown].<br>Will soon be superseded by the [`level`][level] bundle.
**[`level-hyper`][level-hyper]** | ![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/level-hyper.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-hyper) | Bundle for [`leveldown-hyper`][leveldown-hyper].

## Core

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup`][levelup]** | [![dependencies](https://img.shields.io/david/Level/levelup.svg?label=%E2%99%A5)](https://david-dm.org/Level/levelup) | The glue that holds everything together.<br>Use this when you need a [custom or swappable store](#stores).
**[`abstract-leveldown`][abstract-leveldown]** | [![dependencies](https://img.shields.io/david/Level/abstract-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/Level/abstract-leveldown) | An abstract prototype matching the [`leveldown`][leveldown] API.<br>Use this to implement your own store.
**[`level-packager`][level-packager]** | [![dependencies](https://img.shields.io/david/Level/packager.svg?label=%E2%99%A5)](https://david-dm.org/Level/packager) | Package helper to export [a bundle](#bundles).<br>Use this to create a new `level-*` bundle.

## Stores

Modules that implement [`abstract-leveldown`][abstract-leveldown] as storage for [`levelup`][levelup].

Name | Compatibility | Dependencies | Type
:--- | :------------ | :----------- | :---
**[`leveldown`][leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/leveldown.svg?label=%E2%99%A5)](https://david-dm.org/Level/leveldown) | [LevelDB](https://github.com/google/leveldb)
**[`memdown`][memdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/memdown.svg?label=%E2%99%A5)](https://david-dm.org/Level/memdown) | [In-memory RBTree](https://www.npmjs.com/package/functional-red-black-tree)
**[`level-js`][level-js]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/level.js.svg?label=%E2%99%A5)](https://david-dm.org/Level/level.js) | [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB)
**[`rocksdb`][rocksdb]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/Level/rocksdb) | [RocksDB](https://github.com/facebook/rocksdb/)
**[`leveldown-hyper`][leveldown-hyper]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/leveldown-hyper.svg?label=%E2%99%A5)](https://david-dm.org/Level/leveldown-hyper) | [HyperLevelDB](https://github.com/rescrv/HyperLevelDB)
**[`medeadown`][medeadown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-3.0-red.svg) | [![dependencies](https://img.shields.io/david/kesla/medeadown.svg?label=%E2%99%A5)](https://david-dm.org/kesla/medeadown) | [medea](https://github.com/argo/medea)
**[`jsondown`][jsondown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-red.svg) | [![dependencies](https://img.shields.io/david/toolness/jsondown.svg?label=%E2%99%A5)](https://david-dm.org/toolness/jsondown) | JSON on disk
**[`asyncstorage-down`][asyncstorage-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-red.svg) | [![dependencies](https://img.shields.io/david/tradle/asyncstorage-down.svg?label=%E2%99%A5)](https://david-dm.org/tradle/asyncstorage-down) | [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) (React Native)
**[`mongodown`][mongodown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-red.svg) | [![dependencies](https://img.shields.io/david/watson/mongodown.svg?label=%E2%99%A5)](https://david-dm.org/watson/mongodown) | [MongoDB](https://www.mongodb.com/)
**[`sqldown`][sqldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-red.svg) | [![dependencies](https://img.shields.io/david/calvinmetcalf/sqldown.svg?label=%E2%99%A5)](https://david-dm.org/calvinmetcalf/sqldown) | [`sqlite3`](https://www.npmjs.com/package/sqlite3), [`pg`](https://www.npmjs.com/package/pg), [`mysql`](https://www.npmjs.com/package/mysql), WebSQL
**[`dynamo-down`][dynamo-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-red.svg) | [![dependencies](https://img.shields.io/david/jed/dynamo-down.svg?label=%E2%99%A5)](https://david-dm.org/jed/dynamo-down) | [AWS DynamoDB](http://aws.amazon.com/dynamodb)
**[`azureleveldown`][azureleveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.11-red.svg) | [![dependencies](https://img.shields.io/david/richorama/azureleveldown.svg?label=%E2%99%A5)](https://david-dm.org/richorama/azureleveldown) | Windows Azure Table Storage
**[`fruitdown`][fruitdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/nolanlawson/fruitdown.svg?label=%E2%99%A5)](https://david-dm.org/nolanlawson/fruitdown) | IndexedDB (Apple)
**[`localstorage-down`][localstorage-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/No9/localstorage-down.svg?label=%E2%99%A5)](https://david-dm.org/No9/localstorage-down) | [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
**[`riakdown`][riakdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) | [![dependencies](https://img.shields.io/david/nlf/riakdown.svg?label=%E2%99%A5)](https://david-dm.org/nlf/riakdown) | [riakpbc](https://github.com/nlf/riakpbc)
**[`mysqldown`][mysqldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.7-red.svg) | [![dependencies](https://img.shields.io/david/kesla/mysqldown.svg?label=%E2%99%A5)](https://david-dm.org/kesla/mysqldown) | [MySQL](https://www.mysql.com/)
**[`redisdown`][redisdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-*-red.svg) | [![dependencies](https://img.shields.io/david/hmalphettes/redisdown.svg?label=%E2%99%A5)](https://david-dm.org/hmalphettes/redisdown) | [Redis](https://redis.io/)
**[`leveldown-basho`][leveldown-basho]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) | ![dependencies](https://img.shields.io/badge/dependencies-unknown-lightgrey.svg?label=%E2%99%A5) | [Basho's LevelDB fork](https://github.com/basho/leveldb)
**[`sheet-down`][sheet-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) | [![dependencies](https://img.shields.io/david/jed/sheet-down.svg?label=%E2%99%A5)](https://david-dm.org/jed/sheet-down) | [Google Sheets](https://docs.google.com/spreadsheets)

## Layers

Modules that implement [`abstract-leveldown`][abstract-leveldown] to wrap another [`abstract-leveldown`][abstract-leveldown]. This is the preferred extension point.

Name | Compatibility | Dependencies | Description
:--- | :------------ | :----------- | :----------
**[`encoding-down`][encoding-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/encoding-down.svg?label=%E2%99%A5)](https://david-dm.org/Level/encoding-down) | Provides key/value encoding.
**[`@adorsys/encrypt-down`][@adorsys/encrypt-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/adorsys/encrypt-down.svg?label=%E2%99%A5)](https://david-dm.org/adorsys/encrypt-down) | Provides encryption for values.
**[`deferred-leveldown`][deferred-leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/deferred-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/Level/deferred-leveldown) | Handles delayed-open. Built into [`levelup`][levelup].
**[`subleveldown`][subleveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-orange.svg)<br>![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/mafintosh/subleveldown.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/subleveldown) | Sublevels implemented using leveldowns.
**[`cachedown`][cachedown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-red.svg) | [![dependencies](https://img.shields.io/david/mvayngrib/cachedown.svg?label=%E2%99%A5)](https://david-dm.org/mvayngrib/cachedown) | LRU cache.

## Databases

Complete Node.js databases built with Level.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`dat`][dat]** | [![dependencies](https://img.shields.io/david/maxogden/dat.svg?label=%E2%99%A5)](https://david-dm.org/maxogden/dat) | Lets you build streaming data pipelines that can be shared and replicated by others.
**[`pouchdb`][pouchdb]** | ![dependencies](https://img.shields.io/badge/dependencies-unknown-lightgrey.svg?label=%E2%99%A5) | PouchDB allows you to store and query data offline and then sync with CouchDB when online. For Node, browser and mobile.
**[`couchup`][couchup]** | [![dependencies](https://img.shields.io/david/mikeal/couchup.svg?label=%E2%99%A5)](https://david-dm.org/mikeal/couchup) | A CouchDB implementation on top of [`levelup`][levelup].
**[`firedup`][firedup]** | [![dependencies](https://img.shields.io/david/eugeneware/firedup.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/firedup) | A node.js implementation of firebase based on [`levelup`][levelup].
**[`len`][len]** | [![dependencies](https://img.shields.io/david/binocarlos/len.svg?label=%E2%99%A5)](https://david-dm.org/binocarlos/len) | Len is a resource booking database using LevelDB for storage. Useful for calendar and gantt chart apps and for questions like 'can a customer book this resource starting X and ending Y'.
**[`lem`][lem]** | [![dependencies](https://img.shields.io/david/binocarlos/lem.svg?label=%E2%99%A5)](https://david-dm.org/binocarlos/lem) | Lem is a telemetry storage database using LevelDB. Keys are indexed by timestamp and you can read values in-between 2 points in time.
**[`levelgraph`][levelgraph]** | [![dependencies](https://img.shields.io/david/mcollina/node-levelgraph.svg?label=%E2%99%A5)](https://david-dm.org/mcollina/node-levelgraph) | A Graph database built on top of [`levelup`][levelup] with pattern-matching and join support.
**[`linvodb3`][linvodb3]** | [![dependencies](https://img.shields.io/david/Ivshti/linvodb3.svg?label=%E2%99%A5)](https://david-dm.org/Ivshti/linvodb3) | Persistent database on top of [`levelup`][levelup] for Node.js/NW.js with MongoDB-style queries, Mongoose-like models and a map/reduce system.
**[`plumbdb`][plumbdb]** | [![dependencies](https://img.shields.io/david/maxogden/plumbdb.svg?label=%E2%99%A5)](https://david-dm.org/maxogden/plumbdb) | HTTP request handlers for building web services on top of LevelDB. Not in active development.
**[`rxdb`][rxdb]** | [![dependencies](https://img.shields.io/david/pubkey/rxdb.svg?label=%E2%99%A5)](https://david-dm.org/pubkey/rxdb) | Event-driven database based on [`pouchdb`][pouchdb]. Optimized for reactive programming with observables. Events and state is automatically shared between multiple browser tabs. Queries are defined by the mongoDB mango-standard.
**[`pushdb`][pushdb]** | [![dependencies](https://img.shields.io/david/mikeal/pushdb.svg?label=%E2%99%A5)](https://david-dm.org/mikeal/pushdb) | A programmable database with document storage and unique indexing capabilities.
**[`search-index`][search-index]** | [![dependencies](https://img.shields.io/david/fergiemcdowall/search-index.svg?label=%E2%99%A5)](https://david-dm.org/fergiemcdowall/search-index) | A persistent full text search engine for browser and Node.js.
**[`tacodb`][tacodb]** | [![dependencies](https://img.shields.io/david/dominictarr/tacodb.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/tacodb) | A responsive, Node.js-style database ideal for realtime data. Highly modular and adaptable, allowing extension with the [Level][level-org] ecosystem.
**[`timestreamdb`][timestreamdb]** | [![dependencies](https://img.shields.io/david/brycebaril/timestreamdb.svg?label=%E2%99%A5)](https://david-dm.org/brycebaril/timestreamdb) | A full-featured timeseries database on top of LevelDB. Includes a library for streaming statistical operations on timeseries data including joins, aggregates, filters, and map-like operations.
**[`nanosql`][nanosql]** | [![dependencies](https://img.shields.io/david/ClickSimply/Nano-SQL.svg?label=%E2%99%A5)](https://david-dm.org/ClickSimply/Nano-SQL) | A small (10Kb) RDBMS abstraction on top of [`levelup`][levelup] that also runs in the browser with undo/redo support, immutable objects and IndexedDB persistence.
**[`vertical`][vertical]** | [![dependencies](https://img.shields.io/david/zy445566/vertical.svg?label=%E2%99%A5)](https://david-dm.org/zy445566/vertical) | LevelDB distributed, Server and Client!
**[`flash-store`][flash-store]** | [![dependencies](https://img.shields.io/david/zixia/flash-store.svg?label=%E2%99%A5)](https://david-dm.org/zixia/flash-store) | FlashStore is a Key-Value persistent storage with easy to use ES6 Map-like API(both Async and Sync support), powered by LevelDB and TypeScript.
**[`level-fact-base`][level-fact-base]** | [![dependencies](https://img.shields.io/david/smallhelm/level-fact-base.svg?label=%E2%99%A5)](https://david-dm.org/smallhelm/level-fact-base) | Store immutable facts and query them with datalog.

## Replication

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-2pc`][level-2pc]** | [![dependencies](https://img.shields.io/david/hij1nx/level-2pc.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-2pc) | A two-phase commit protocol.
**[`level-couch-sync`][level-couch-sync]** | [![dependencies](https://img.shields.io/david/dominictarr/level-couch-sync.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-couch-sync) | Replicate from CouchDB to LevelDB.
**[`level-master`][level-master]** | [![dependencies](https://img.shields.io/david/dominictarr/level-master.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-master) | Master-Slave replication for [`levelup`][levelup].
**[`level-merkle`][level-merkle]** | [![dependencies](https://img.shields.io/david/dominictarr/level-merkle.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-merkle) | Uses [merkle-trees](http://en.wikipedia.org/wiki/Merkle_tree) to replicate data sets. Data must be sets and currently, deletes are not supported.
**[`level-replicate`][level-replicate]** | [![dependencies](https://img.shields.io/david/dominictarr/level-replicate.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-replicate) | Master-master replication with [`levelup`][levelup]. Implements scuttlebutt style handshake, syncs data, then replicates real time changes.
**[`level-replicator`][level-replicator]** | [![dependencies](https://img.shields.io/david/hij1nx/level-replicator.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-replicator) | Master-master replication. Same goal as [`level-replicate`][level-replicate] but different approach.

## Plugins for levelup

Modules that add functionality to [`levelup`][levelup].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup-async-iterator`][levelup-async-iterator]** | [![dependencies](https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg?label=%E2%99%A5)](https://david-dm.org/MeirionHughes/levelup-async-iterator) | Expose `iterator()` with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration).
**[`cluster-levelup`][cluster-levelup]** | [![dependencies](https://img.shields.io/david/chiguireitor/cluster-levelup.svg?label=%E2%99%A5)](https://david-dm.org/chiguireitor/cluster-levelup) | Wrap any [`levelup`][levelup] instance for [`cluster`](https://nodejs.org/api/cluster.html) usage among multiple processes.
**[`level-ttl`][level-ttl]** | [![dependencies](https://img.shields.io/david/Level/level-ttl.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-ttl) | Add a `ttl` (time-to-live) option to [`levelup`][levelup] for `put()` and `batch()`.<br>Note: suffers from race issues.

## Utilities

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-iterator-stream`][level-iterator-stream]** | [![dependencies](https://img.shields.io/david/Level/iterator-stream.svg?label=%E2%99%A5)](https://david-dm.org/Level/iterator-stream) | Turn an [`abstract-leveldown`][abstract-leveldown] iterator into a readable stream.<br>Included in [`levelup`][levelup].
**[`level-concat-iterator`][level-concat-iterator]** | [![dependencies](https://img.shields.io/david/Level/concat-iterator.svg?label=%E2%99%A5)](https://david-dm.org/Level/concat-iterator) | Concatenate items from an iterator into an array.
**[`level-codec`][level-codec]** | [![dependencies](https://img.shields.io/david/Level/codec.svg?label=%E2%99%A5)](https://david-dm.org/Level/codec) | Encode keys, values and ltgte options. Used in [`encoding-down`][encoding-down].
**[`level-errors`][level-errors]** | [![dependencies](https://img.shields.io/david/Level/errors.svg?label=%E2%99%A5)](https://david-dm.org/Level/errors) | Error types for [`levelup`][levelup].
**[`level-test`][level-test]** | [![dependencies](https://img.shields.io/david/Level/level-test.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-test) | Easily run your `level-*` tests against [all stores](#stores).
**[`level-ws`][level-ws]** | [![dependencies](https://img.shields.io/david/Level/level-ws.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-ws) | A basic WriteStream implementation for [`levelup`][levelup].
**[`level-lazy-open`][level-lazy-open]** | [![dependencies](https://img.shields.io/david/Level/lazy-open.svg?label=%E2%99%A5)](https://david-dm.org/Level/lazy-open) | Lazily open a leveldown compatible backend.
**[`level-benchmarks`][level-benchmarks]** | [![dependencies](https://img.shields.io/david/kesla/level-benchmarks.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-benchmarks) | Run benchmarks against levelup-compatible engines

## Tools

CLI, GUI and web interfaces for exploring data.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`lev2`][lev2]** | [![dependencies](https://img.shields.io/david/maxlath/lev2.svg?label=%E2%99%A5)](https://david-dm.org/maxlath/lev2) | A complete REPL & CLI for managing LevelDB instances
**[`lev`][lev]** | [![dependencies](https://img.shields.io/david/hij1nx/lev.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/lev) | A CLI REPL interface for LevelDB.
**[`leveldb-repl`][leveldb-repl]** | [![dependencies](https://img.shields.io/david/lapwinglabs/leveldb-repl.svg?label=%E2%99%A5)](https://david-dm.org/lapwinglabs/leveldb-repl) | Super simple REPL for LevelDB. Supports filter globbing.
**[`levelhud`][levelhud]** | [![dependencies](https://img.shields.io/david/ricardobeat/levelhud.svg?label=%E2%99%A5)](https://david-dm.org/ricardobeat/levelhud) | LevelDB GUI with an interactive console.
**[`levelweb`][levelweb]** | [![dependencies](https://img.shields.io/david/hij1nx/levelui.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/levelui) | A LevelDB GUI. Includes simple data visualization tools.

## Resources

Name | Description
:--- | :----------
**[`leveldb.org`][leveldb.org]** | Website for LevelDB
**[`level-community`][level-community]** | General discussion, cross-repo efforts and common information for projects in the community
**[`level-awesome`][level-awesome]** | An open list of awesome [Level][level-org] libraries and resources.

## Contributing

Module and resource authors are welcome and encouraged to add an entry for their work via a pull request. To add a module, edit `modules/*.json` and run `npm run awesome` to update `README.md`.

[`Level/awesome`](https://github.com/Level/awesome) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

To sustain [`Level`](https://github.com/Level) and its activities, become a backer or sponsor on [Open Collective](https://opencollective.com/level). Your logo or avatar will be displayed on our 28+ [GitHub repositories](https://github.com/Level), [npm](https://www.npmjs.com/) packages and (soon) [our website](http://leveldb.org). 💖

### Backers

[![Open Collective backers](https://opencollective.com/level/backers.svg?width=890)](https://opencollective.com/level)

### Sponsors

[![Open Collective sponsors](https://opencollective.com/level/sponsors.svg?width=890)](https://opencollective.com/level)

## License

[MIT](LICENSE.md) © 2017-present [Contributors](CONTRIBUTORS.md).

[@adorsys/encrypt-down]: https://github.com/adorsys/encrypt-down

[abstract-leveldown]: https://github.com/Level/abstract-leveldown

[asyncstorage-down]: https://github.com/tradle/asyncstorage-down

[azureleveldown]: https://github.com/richorama/azureleveldown

[cachedown]: https://github.com/mvayngrib/cachedown

[cluster-levelup]: https://github.com/chiguireitor/cluster-levelup

[couchup]: https://github.com/mikeal/couchup

[dat]: https://github.com/maxogden/dat

[deferred-leveldown]: https://github.com/Level/deferred-leveldown

[dynamo-down]: https://github.com/jed/dynamo-down

[encoding-down]: https://github.com/Level/encoding-down

[firedup]: https://github.com/eugeneware/firedup

[flash-store]: https://github.com/zixia/flash-store

[fruitdown]: https://github.com/nolanlawson/fruitdown

[jsondown]: https://github.com/toolness/jsondown

[lem]: https://github.com/binocarlos/lem

[len]: https://github.com/binocarlos/len

[lev]: https://github.com/hij1nx/lev

[lev2]: https://github.com/maxlath/lev2

[level]: https://github.com/Level/level

[level-2pc]: https://github.com/hij1nx/level-2pc

[level-awesome]: https://github.com/Level/awesome

[level-badge]: http://leveldb.org/img/badge.svg

[level-benchmarks]: https://github.com/kesla/level-benchmarks

[level-browserify]: https://github.com/Level/level-browserify

[level-codec]: https://github.com/Level/codec

[level-community]: https://github.com/Level/community

[level-concat-iterator]: https://github.com/Level/concat-iterator

[level-couch-sync]: https://github.com/dominictarr/level-couch-sync

[level-errors]: https://github.com/Level/errors

[level-fact-base]: https://github.com/smallhelm/level-fact-base

[level-hyper]: https://github.com/Level/level-hyper

[level-iterator-stream]: https://github.com/Level/iterator-stream

[level-js]: https://github.com/Level/level.js

[level-lazy-open]: https://github.com/Level/lazy-open

[level-master]: https://github.com/dominictarr/level-master

[level-mem]: https://github.com/Level/level-mem

[level-merkle]: https://github.com/dominictarr/level-merkle

[level-org]: https://github.com/level

[level-packager]: https://github.com/Level/packager

[level-replicate]: https://github.com/dominictarr/level-replicate

[level-replicator]: https://github.com/hij1nx/level-replicator

[level-rocksdb]: https://github.com/Level/level-rocksdb

[level-test]: https://github.com/Level/level-test

[level-ttl]: https://github.com/Level/level-ttl

[level-ws]: https://github.com/Level/level-ws

[leveldb-repl]: https://github.com/lapwinglabs/leveldb-repl

[leveldb.org]: http://leveldb.org

[leveldown]: https://github.com/Level/leveldown

[leveldown-basho]: https://www.npmjs.com/package/leveldown-basho

[leveldown-hyper]: https://github.com/Level/leveldown-hyper

[levelgraph]: https://github.com/mcollina/node-levelgraph

[levelhud]: https://github.com/ricardobeat/levelhud

[levelup]: https://github.com/Level/levelup

[levelup-async-iterator]: https://github.com/MeirionHughes/levelup-async-iterator

[levelweb]: https://github.com/hij1nx/levelui

[linvodb3]: https://github.com/Ivshti/linvodb3

[localstorage-down]: https://github.com/No9/localstorage-down

[medeadown]: https://github.com/kesla/medeadown

[memdown]: https://github.com/Level/memdown

[mongodown]: https://github.com/watson/mongodown

[mysqldown]: https://github.com/kesla/mysqldown

[nanosql]: https://github.com/ClickSimply/Nano-SQL

[plumbdb]: https://github.com/maxogden/plumbdb

[pouchdb]: http://pouchdb.com/

[pushdb]: https://github.com/mikeal/pushdb

[redisdown]: https://github.com/hmalphettes/redisdown

[riakdown]: https://github.com/nlf/riakdown

[rocksdb]: https://github.com/Level/rocksdb

[rxdb]: https://github.com/pubkey/rxdb

[search-index]: https://github.com/fergiemcdowall/search-index

[sheet-down]: https://github.com/jed/sheet-down

[sqldown]: https://github.com/calvinmetcalf/sqldown

[subleveldown]: https://github.com/mafintosh/subleveldown

[tacodb]: https://github.com/dominictarr/tacodb

[timestreamdb]: https://github.com/brycebaril/timestreamdb

[vertical]: https://github.com/zy445566/vertical
