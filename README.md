# Awesome Level ![level badge][level-badge]

> An open list of awesome **[Level][level-org]** modules and resources. [Add yours!](#contributing)

## Table of Contents

<details><summary>Click to expand</summary>

-   [Bundles](#bundles)
-   [Core](#core)
-   [Stores](#stores)
-   [Layers](#layers)
-   [Sublevels](#sublevels)
-   [Encodings](#encodings)
-   [Processing](#processing)
-   [Databases](#databases)
-   [Replication](#replication)
-   [Plugins for levelup](#plugins-for-levelup)
-   [Utilities](#utilities)
-   [Streams](#streams)
-   [Tools](#tools)
-   [Resources](#resources)
-   [Legacy](#legacy)
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
**[`cachedown`][cachedown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-red.svg) | [![dependencies](https://img.shields.io/david/mvayngrib/cachedown.svg?label=%E2%99%A5)](https://david-dm.org/mvayngrib/cachedown) | LRU cache.

## Sublevels

Modules related to splitting a database into sections a.k.a. sublevels.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`subleveldown`][subleveldown]** | [![dependencies](https://img.shields.io/david/mafintosh/subleveldown.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/subleveldown) | Sublevels implemented using leveldowns.
**[`bytespace`][bytespace]** | [![dependencies](https://img.shields.io/david/deanlandolt/bytespace.svg?label=%E2%99%A5)](https://david-dm.org/deanlandolt/bytespace) | Keypath subspaces prefixed with [`bytewise`][bytewise] tuples. Similar to [`level-sublevel`][level-sublevel].<br>NB. [`bytewise`][bytewise] - and thus [`bytespace`][bytespace] - can be slow. Consider using [`subleveldown`][subleveldown] paired with the [`charwise`][charwise] encoding instead.
**[`level-sublevel`][level-sublevel]** | [![dependencies](https://img.shields.io/david/dominictarr/level-sublevel.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-sublevel) | Adds the ability to create subsections with the same API as [`levelup`][levelup], but only write/read to a prefixed section, or bucket, of the key-space. Each section also has [`level-hooks`][level-hooks] installed.<br>NB. No longer maintained. We recommend [`subleveldown`][subleveldown] instead.
**[`level-sublevel-stream`][level-sublevel-stream]** | [![dependencies](https://img.shields.io/david/juliangruber/level-sublevel-stream.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-sublevel-stream) | Find [`level-sublevel`][level-sublevel] sublevels, not requiring them to be in memory already.
**[`level-subtree`][level-subtree]** | [![dependencies](https://img.shields.io/david/hij1nx/level-subtree.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-subtree) | Generate a tree from [`level-sublevel`][level-sublevel] sublevels, useful when there is no manifest.
**[`level-superlevel`][level-superlevel]** | [![dependencies](https://img.shields.io/david/randymized/level-superlevel.svg?label=%E2%99%A5)](https://david-dm.org/randymized/level-superlevel) | Superlevel adds a "super" level that allows accessing the entire database, discovering [`level-sublevel`][level-sublevel] sublevels and browsing the database without knowledge of the sublevel structure.
**[`level-subkey`][level-subkey]** | [![dependencies](https://img.shields.io/david/snowyu/level-subkey.svg?label=%E2%99%A5)](https://david-dm.org/snowyu/level-subkey) | Use path-like keys to separate sections of [`levelup`][levelup], with hooks. Adapted from [`level-sublevel`][level-sublevel].

## Encodings

Custom [`level-codec`][level-codec] compatible encodings for use with [`encoding-down`][encoding-down].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`charwise`][charwise]** | [![dependencies](https://img.shields.io/david/dominictarr/charwise.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/charwise) | Encode/decode with same encoded sort order as [`bytewise`][bytewise].
**[`bytewise`][bytewise]** | [![dependencies](https://img.shields.io/david/deanlandolt/bytewise.svg?label=%E2%99%A5)](https://david-dm.org/deanlandolt/bytewise) | Binary serialization which sorts bytewise for arbitrarily complex data structures.<br>NB. Use [`charwise`][charwise] if possible. Gives you almost everything `bytewise` does but much faster.
**[`protocol-buffers`][protocol-buffers]** | [![dependencies](https://img.shields.io/david/mafintosh/protocol-buffers.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/protocol-buffers) | [Protocol Buffers](https://developers.google.com/protocol-buffers/) for Node.js. Compiled messages are [`level-codec`][level-codec] compatible encodings.
**[`lexicographic-integer-encoding`][lexicographic-integer-encoding]** | [![dependencies](https://img.shields.io/david/vweevers/lexicographic-integer-encoding.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/lexicographic-integer-encoding) | Wraps [`lexicographic-integer`](https://github.com/substack/lexicographic-integer).

## Processing

Modules for indexing, alternative forms of querying data, for hooks, MapReduce models and other forms of data processing.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`jsonquery`][jsonquery]** | [![dependencies](https://img.shields.io/david/eugeneware/jsonquery.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/jsonquery) | Query [`levelup`][levelup] with a MongoDB-like query API that returns streams.
**[`jsonquery-engine`][jsonquery-engine]** | [![dependencies](https://img.shields.io/david/eugeneware/jsonquery-engine.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/jsonquery-engine) | A full MongoDB query language implementation with indexes for querying [`levelup`][levelup].
**[`level-hooks`][level-hooks]** | [![dependencies](https://img.shields.io/david/dominictarr/level-hooks.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-hooks) | Implements a hook mechanism that allows you to intercept `put`, `delete` and `batch` operations. You can then turn those operations into batches. Useful if you want to turn a `put` into an atomic batch for say an automatic map operation.<br><br>NB. Author recommends using [`level-sublevel`][level-sublevel] instead of `level-hooks` directly. Note that [`level-sublevel`][level-sublevel] is not maintained.
**[`level-indico`][level-indico]** | [![dependencies](https://img.shields.io/david/mariocasciaro/level-indico.svg?label=%E2%99%A5)](https://david-dm.org/mariocasciaro/level-indico) | Yet another indexing plugin for [`levelup`][levelup]. By providing only a low-level querying mechanism it gives you the power to build more complicated and optimized queries on top of it.<br><br>NB. Relies on [`bytewise`][bytewise] and [`level-sublevel`][level-sublevel], both of which have caveats.
**[`level-inverted-index`][level-inverted-index]** | [![dependencies](https://img.shields.io/david/dominictarr/level-inverted-index.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-inverted-index) | Create an inverted index for full-text search.
**[`map-reduce`][map-reduce]** | [![dependencies](https://img.shields.io/david/dominictarr/map-reduce.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/map-reduce) | A MapReduce implementation on top of [`levelup`][levelup]. Allows you to define a map reduce query that will run on top of your db. The map reduces are incremental, and you can query the results in real-time.
**[`level-map-merge`][level-map-merge]** | [![dependencies](https://img.shields.io/david/dominictarr/level-map-merge.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-map-merge) | Like [`map-reduce`][map-reduce] but simpler. Has a batch component that runs periodically, and a real-time component that fills in the gaps. Good for generating inverted indexes.
**[`level-queryengine`][level-queryengine]** | [![dependencies](https://img.shields.io/david/eugeneware/level-queryengine.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/level-queryengine) | A generic pluggable query-engine system (that supports indexes) for [`levelup`][levelup].
**[`level-trigger`][level-trigger]** | [![dependencies](https://img.shields.io/david/dominictarr/level-trigger.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-trigger) | Triggers for [`levelup`][levelup]. Runs an async job when a key changes. All jobs will eventually run, even across restarts!
**[`levels`][levels]** | [![dependencies](https://img.shields.io/david/eugeneware/levels.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/levels) | A light-weight full text search engine for [`levelup`][levelup] (Port of TJ's [reds](https://github.com/visionmedia/reds) redis search engine).
**[`map-reduce-chained`][map-reduce-chained]** | [![dependencies](https://img.shields.io/david/ryanramage/map-reduce-chained.svg?label=%E2%99%A5)](https://david-dm.org/ryanramage/map-reduce-chained) | Extends [`map-reduce`][map-reduce] and [`level-mapped-index`][level-mapped-index] to provide easy to setup chained MapReduce. An example use case is to find the top 10 values after a reduce.
**[`path-engine`][path-engine]** | [![dependencies](https://img.shields.io/david/eugeneware/path-engine.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/path-engine) | Query [`levelup`][levelup] using a JavaScript property path array syntax with indexes.
**[`subindex`][subindex]** | [![dependencies](https://img.shields.io/david/eugeneware/subindex.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/subindex) | Generic pluggable indexing system for [`levelup`][levelup].
**[`level-sec`][level-sec]** | [![dependencies](https://img.shields.io/david/juliangruber/level-sec.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-sec) | High-level API for creating secondary indexes.
**[`level-secondary`][level-secondary]** | [![dependencies](https://img.shields.io/david/juliangruber/level-secondary.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-secondary) | Create and query secondary indexes.
**[`inverted-index`][inverted-index]** | [![dependencies](https://img.shields.io/david/kordon/inverted.svg?label=%E2%99%A5)](https://david-dm.org/kordon/inverted) | Inverted index built upon [`levelup`][levelup].
**[`level-index-update`][level-index-update]** | [![dependencies](https://img.shields.io/david/binocarlos/level-index-update.svg?label=%E2%99%A5)](https://david-dm.org/binocarlos/level-index-update) | Remove the old indexes in the same batch as the new ones are inserted.
**[`range-index`][range-index]** | [![dependencies](https://img.shields.io/david/kordon/range.svg?label=%E2%99%A5)](https://david-dm.org/kordon/range) | Range indexes for [`levelup`][levelup].

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
**[`dulcimer`][dulcimer]** | [![dependencies](https://img.shields.io/david/fritzy/dulcimer.svg?label=%E2%99%A5)](https://david-dm.org/fritzy/dulcimer) | Define JSON models and manage indexes, children, foreign keys and much more.

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

Modules that add functionality to [`levelup`][levelup]. They qualify as such if they monkey-patch a [`levelup`][levelup] instance or return an API matching [`levelup`][levelup].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup-async-iterator`][levelup-async-iterator]** | [![dependencies](https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg?label=%E2%99%A5)](https://david-dm.org/MeirionHughes/levelup-async-iterator) | Expose `iterator()` with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration).<br>NB. Conflicts with [`iterator()`](https://github.com/Level/levelup/#iterator) added in `levelup@3.1.0`.
**[`cluster-levelup`][cluster-levelup]** | [![dependencies](https://img.shields.io/david/chiguireitor/cluster-levelup.svg?label=%E2%99%A5)](https://david-dm.org/chiguireitor/cluster-levelup) | Wrap any [`levelup`][levelup] instance for [`cluster`](https://nodejs.org/api/cluster.html) usage among multiple processes.
**[`level-ttl`][level-ttl]** | [![dependencies](https://img.shields.io/david/Level/level-ttl.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-ttl) | Add a `ttl` (time-to-live) option to [`levelup`][levelup] for `put()` and `batch()`.<br>NB. Suffers from race issues.
**[`level-atomics`][level-atomics]** | [![dependencies](https://img.shields.io/david/IndigoUnited/node-level-atomics.svg?label=%E2%99%A5)](https://david-dm.org/IndigoUnited/node-level-atomics) | Add (parallel) atomic operations like `insert`, `replace`, `increment` and `decrement`.
**[`level-autotable`][level-autotable]** | [![dependencies](https://img.shields.io/david/santoshrajan/levelup-autotable.svg?label=%E2%99%A5)](https://david-dm.org/santoshrajan/levelup-autotable) | Auto incrementing keys with "fields" and "records".
**[`level-cache`][level-cache]** | [![dependencies](https://img.shields.io/david/Raynos/level-cache.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-cache) | A caching module you can place in front of a [`levelup`][levelup] database. It will cache a subset of the database in an in-memory LRU cache based on configuration. It has an optional synchronous API which will return from the cache only.
**[`level-capped`][level-capped]** | [![dependencies](https://img.shields.io/david/juliangruber/level-capped.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-capped) | Capped collections.
**[`level-set`][level-set]** | [![dependencies](https://img.shields.io/david/maiah/level-set.svg?label=%E2%99%A5)](https://david-dm.org/maiah/level-set) | Add a `set` method for saving objects in a tree-like structure.
**[`level-push`][level-push]** | [![dependencies](https://img.shields.io/david/maiah/level-push.svg?label=%E2%99%A5)](https://david-dm.org/maiah/level-push) | Add a `push` method for saving objects using [`level-set`][level-set] with auto-generated UUID.
**[`level-scuttlebutt`][level-scuttlebutt]** | [![dependencies](https://img.shields.io/david/dominictarr/level-scuttlebutt.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-scuttlebutt) | Persist and query scuttlebutt documents (requires [`level-sublevel`][level-sublevel]).

## Utilities

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-iterator-stream`][level-iterator-stream]** | [![dependencies](https://img.shields.io/david/Level/iterator-stream.svg?label=%E2%99%A5)](https://david-dm.org/Level/iterator-stream) | Turn an [`abstract-leveldown`][abstract-leveldown] iterator into a readable stream.<br>Included in [`levelup`][levelup].
**[`level-concat-iterator`][level-concat-iterator]** | [![dependencies](https://img.shields.io/david/Level/concat-iterator.svg?label=%E2%99%A5)](https://david-dm.org/Level/concat-iterator) | Concatenate items from an iterator into an array.
**[`level-codec`][level-codec]** | [![dependencies](https://img.shields.io/david/Level/codec.svg?label=%E2%99%A5)](https://david-dm.org/Level/codec) | Encode keys, values and ltgte options. Used in [`encoding-down`][encoding-down].
**[`level-errors`][level-errors]** | [![dependencies](https://img.shields.io/david/Level/errors.svg?label=%E2%99%A5)](https://david-dm.org/Level/errors) | Error types for [`levelup`][levelup].
**[`level-test`][level-test]** | [![dependencies](https://img.shields.io/david/Level/level-test.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-test) | Easily run your `level-*` tests against [all stores](#stores).
**[`level-lazy-open`][level-lazy-open]** | [![dependencies](https://img.shields.io/david/Level/lazy-open.svg?label=%E2%99%A5)](https://david-dm.org/Level/lazy-open) | Lazily open a leveldown compatible backend.
**[`level-benchmarks`][level-benchmarks]** | [![dependencies](https://img.shields.io/david/kesla/level-benchmarks.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-benchmarks) | Run benchmarks against levelup-compatible engines
**[`changeset`][changeset]** | [![dependencies](https://img.shields.io/david/eugeneware/changeset.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/changeset) | Generate diff changesets for javascript objects, decomposing diffs into a series of puts and delete operations. The format is compatible with [`levelup`][levelup] batch operations. Useful to synchronize objects.
**[`level-delete-range`][level-delete-range]** | [![dependencies](https://img.shields.io/david/Raynos/level-delete-range.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-delete-range) | Delete a range of keys from [`levelup`][levelup].

## Streams

[Node.js stream](https://nodejs.org/api/stream.html) or [`pull-stream`](https://github.com/pull-stream/pull-stream) implementations for reading and writing data from/to [`levelup`][levelup].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-ws`][level-ws]** | [![dependencies](https://img.shields.io/david/Level/level-ws.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-ws) | General-case, streams3-compliant writable stream for [`levelup`][levelup].
**[`level-batch-stream`][level-batch-stream]** | [![dependencies](https://img.shields.io/david/jcrugzz/level-batch-stream.svg?label=%E2%99%A5)](https://david-dm.org/jcrugzz/level-batch-stream) | Streams2-compliant writable stream for [`levelup`][levelup].
**[`level-writestream`][level-writestream]** | [![dependencies](https://img.shields.io/david/pgte/level-writestream.svg?label=%E2%99%A5)](https://david-dm.org/pgte/level-writestream) | Streams2-compliant writable stream for [`levelup`][levelup].
**[`level-write-stream`][level-write-stream]** | [![dependencies](https://img.shields.io/david/Raynos/level-write-stream.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-write-stream) | Streams1-compliant writable stream for [`levelup`][levelup] or [`abstract-leveldown`][abstract-leveldown].
**[`level-delete-stream`][level-delete-stream]** | [![dependencies](https://img.shields.io/david/juliangruber/level-delete-stream.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-delete-stream) | A streams1 deleteStream for [`levelup`][levelup].
**[`pull-level`][pull-level]** | [![dependencies](https://img.shields.io/david/dominictarr/pull-level.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/pull-level) | [`pull-stream`](https://github.com/pull-stream/pull-stream) interface to [`levelup`][levelup] with read streams, write streams and realtime (tail/live) reads.
**[`level-live-stream`][level-live-stream]** | [![dependencies](https://img.shields.io/david/dominictarr/level-live-stream.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-live-stream) | Like `db.createReadStream()` except it's live / tailable. i.e. instead of ending, it will stay open and stream changes to the database as they are inserted.
**[`level-livefeed`][level-livefeed]** | [![dependencies](https://img.shields.io/david/Raynos/level-livefeed.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-livefeed) | A live query of a range in [`levelup`][levelup]. Similar to [`level-live-stream`][level-live-stream] but with a streams2 interface.
**[`level-range`][level-range]** | [![dependencies](https://img.shields.io/david/juliangruber/level-range.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-range) | Find all K/V-pairs prefixed by a certain key. Streams1.
**[`level-cursor`][level-cursor]** | [![dependencies](https://img.shields.io/david/kordon/cursor.svg?label=%E2%99%A5)](https://david-dm.org/kordon/cursor) | A stream "cursor" to iterate through a ReadStream / KeyStream / ValueStream.

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

## Legacy

Modules that are deprecated, archived or superseded. Listed here for the historical record.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-mapped-index`][level-mapped-index]** | [![dependencies](https://img.shields.io/david/rvagg/node-level-mapped-index.svg?label=%E2%99%A5)](https://david-dm.org/rvagg/node-level-mapped-index) | Indexes for [`levelup`][levelup] built on [`map-reduce`][map-reduce]. Uses a custom indexing function for each index to parse and record index values for each entry. Archived.
**[`level-encoding`][level-encoding]** | [![dependencies](https://img.shields.io/david/Raynos/level-encoding.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-encoding) | Implements the encoding logic of a [`levelup`][levelup]-like database. This functionality lives on in [`level-codec`][level-codec].
**[`byteup`][byteup]** | [![dependencies](https://img.shields.io/david/eugeneware/byteup.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/byteup) | Adds the [`bytewise`][bytewise] encoding as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: bytewise }`.
**[`level-cbatch`][level-cbatch]** | [![dependencies](https://img.shields.io/david/kesla/level-cbatch.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-cbatch) | Provides a chainable API for `db.batch()`. This functionality is now provided by [`levelup`][levelup].
**[`memdb`][memdb]** | [![dependencies](https://img.shields.io/david/juliangruber/memdb.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/memdb) | [`levelup`][levelup] + [`memdown`][memdown]. Superseded by [`level-mem`][level-mem].
**[`levelup-iterator`][levelup-iterator]** | [![dependencies](https://img.shields.io/david/mirkokiefer/levelup-iterator.svg?label=%E2%99%A5)](https://david-dm.org/mirkokiefer/levelup-iterator) | Use [`abstract-leveldown`][abstract-leveldown] iterators instead of readable streams to traverse the database. Iterators are exposed by [`levelup`][levelup] since `levelup@3.1.0`.
**[`levelidb`][levelidb]** | [![dependencies](https://img.shields.io/david/Raynos/levelidb.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/levelidb) | A [`levelup`][levelup] interface on top of IndexedDB. Superseded by [`level-js`][level-js] and [`level`][level].
**[`level-multiply`][level-multiply]** | [![dependencies](https://img.shields.io/david/rvagg/node-level-multiply.svg?label=%E2%99%A5)](https://david-dm.org/rvagg/node-level-multiply) | Make [`levelup`][levelup] `get()`, `put()` and `del()` methods accept multiples keys & values. Archived.
**[`level-namespace`][level-namespace]** | [![dependencies](https://img.shields.io/david/kesla/level-namespace.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-namespace) | Split your db up into multiple namespaces. Deprecated.

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

[bytespace]: https://github.com/deanlandolt/bytespace

[byteup]: https://github.com/eugeneware/byteup

[bytewise]: https://github.com/deanlandolt/bytewise

[cachedown]: https://github.com/mvayngrib/cachedown

[changeset]: https://github.com/eugeneware/changeset

[charwise]: https://github.com/dominictarr/charwise

[cluster-levelup]: https://github.com/chiguireitor/cluster-levelup

[couchup]: https://github.com/mikeal/couchup

[dat]: https://github.com/maxogden/dat

[deferred-leveldown]: https://github.com/Level/deferred-leveldown

[dulcimer]: https://github.com/fritzy/dulcimer

[dynamo-down]: https://github.com/jed/dynamo-down

[encoding-down]: https://github.com/Level/encoding-down

[firedup]: https://github.com/eugeneware/firedup

[flash-store]: https://github.com/zixia/flash-store

[fruitdown]: https://github.com/nolanlawson/fruitdown

[inverted-index]: https://github.com/kordon/inverted

[jsondown]: https://github.com/toolness/jsondown

[jsonquery]: https://github.com/eugeneware/jsonquery

[jsonquery-engine]: https://github.com/eugeneware/jsonquery-engine

[lem]: https://github.com/binocarlos/lem

[len]: https://github.com/binocarlos/len

[lev]: https://github.com/hij1nx/lev

[lev2]: https://github.com/maxlath/lev2

[level]: https://github.com/Level/level

[level-2pc]: https://github.com/hij1nx/level-2pc

[level-atomics]: https://github.com/IndigoUnited/node-level-atomics

[level-autotable]: https://github.com/santoshrajan/levelup-autotable

[level-awesome]: https://github.com/Level/awesome

[level-badge]: http://leveldb.org/img/badge.svg

[level-batch-stream]: https://github.com/jcrugzz/level-batch-stream

[level-benchmarks]: https://github.com/kesla/level-benchmarks

[level-browserify]: https://github.com/Level/level-browserify

[level-cache]: https://github.com/Raynos/level-cache

[level-capped]: https://github.com/juliangruber/level-capped

[level-cbatch]: https://github.com/kesla/level-cbatch

[level-codec]: https://github.com/Level/codec

[level-community]: https://github.com/Level/community

[level-concat-iterator]: https://github.com/Level/concat-iterator

[level-couch-sync]: https://github.com/dominictarr/level-couch-sync

[level-cursor]: https://github.com/kordon/cursor

[level-delete-range]: https://github.com/Raynos/level-delete-range

[level-delete-stream]: https://github.com/juliangruber/level-delete-stream

[level-encoding]: https://github.com/Raynos/level-encoding

[level-errors]: https://github.com/Level/errors

[level-fact-base]: https://github.com/smallhelm/level-fact-base

[level-hooks]: https://github.com/dominictarr/level-hooks

[level-hyper]: https://github.com/Level/level-hyper

[level-index-update]: https://github.com/binocarlos/level-index-update

[level-indico]: https://github.com/mariocasciaro/level-indico

[level-inverted-index]: https://github.com/dominictarr/level-inverted-index

[level-iterator-stream]: https://github.com/Level/iterator-stream

[level-js]: https://github.com/Level/level.js

[level-lazy-open]: https://github.com/Level/lazy-open

[level-live-stream]: https://github.com/dominictarr/level-live-stream

[level-livefeed]: https://github.com/Raynos/level-livefeed

[level-map-merge]: https://github.com/dominictarr/level-map-merge

[level-mapped-index]: https://github.com/rvagg/node-level-mapped-index

[level-master]: https://github.com/dominictarr/level-master

[level-mem]: https://github.com/Level/level-mem

[level-merkle]: https://github.com/dominictarr/level-merkle

[level-multiply]: https://github.com/rvagg/node-level-multiply

[level-namespace]: https://github.com/kesla/level-namespace

[level-org]: https://github.com/level

[level-packager]: https://github.com/Level/packager

[level-push]: https://github.com/maiah/level-push

[level-queryengine]: https://github.com/eugeneware/level-queryengine

[level-range]: https://github.com/juliangruber/level-range

[level-replicate]: https://github.com/dominictarr/level-replicate

[level-replicator]: https://github.com/hij1nx/level-replicator

[level-rocksdb]: https://github.com/Level/level-rocksdb

[level-scuttlebutt]: https://github.com/dominictarr/level-scuttlebutt

[level-sec]: https://github.com/juliangruber/level-sec

[level-secondary]: https://github.com/juliangruber/level-secondary

[level-set]: https://github.com/maiah/level-set

[level-subkey]: https://github.com/snowyu/level-subkey

[level-sublevel]: https://github.com/dominictarr/level-sublevel

[level-sublevel-stream]: https://github.com/juliangruber/level-sublevel-stream

[level-subtree]: https://github.com/hij1nx/level-subtree

[level-superlevel]: https://github.com/randymized/level-superlevel

[level-test]: https://github.com/Level/level-test

[level-trigger]: https://github.com/dominictarr/level-trigger

[level-ttl]: https://github.com/Level/level-ttl

[level-write-stream]: https://github.com/Raynos/level-write-stream

[level-writestream]: https://github.com/pgte/level-writestream

[level-ws]: https://github.com/Level/level-ws

[leveldb-repl]: https://github.com/lapwinglabs/leveldb-repl

[leveldb.org]: http://leveldb.org

[leveldown]: https://github.com/Level/leveldown

[leveldown-basho]: https://www.npmjs.com/package/leveldown-basho

[leveldown-hyper]: https://github.com/Level/leveldown-hyper

[levelgraph]: https://github.com/mcollina/node-levelgraph

[levelhud]: https://github.com/ricardobeat/levelhud

[levelidb]: https://github.com/Raynos/levelidb

[levels]: https://github.com/eugeneware/levels

[levelup]: https://github.com/Level/levelup

[levelup-async-iterator]: https://github.com/MeirionHughes/levelup-async-iterator

[levelup-iterator]: https://github.com/mirkokiefer/levelup-iterator

[levelweb]: https://github.com/hij1nx/levelui

[lexicographic-integer-encoding]: https://github.com/vweevers/lexicographic-integer-encoding

[linvodb3]: https://github.com/Ivshti/linvodb3

[localstorage-down]: https://github.com/No9/localstorage-down

[map-reduce]: https://github.com/dominictarr/map-reduce

[map-reduce-chained]: https://github.com/ryanramage/map-reduce-chained

[medeadown]: https://github.com/kesla/medeadown

[memdb]: https://github.com/juliangruber/memdb

[memdown]: https://github.com/Level/memdown

[mongodown]: https://github.com/watson/mongodown

[mysqldown]: https://github.com/kesla/mysqldown

[nanosql]: https://github.com/ClickSimply/Nano-SQL

[path-engine]: https://github.com/eugeneware/path-engine

[plumbdb]: https://github.com/maxogden/plumbdb

[pouchdb]: http://pouchdb.com/

[protocol-buffers]: https://github.com/mafintosh/protocol-buffers

[pull-level]: https://github.com/dominictarr/pull-level

[pushdb]: https://github.com/mikeal/pushdb

[range-index]: https://github.com/kordon/range

[redisdown]: https://github.com/hmalphettes/redisdown

[riakdown]: https://github.com/nlf/riakdown

[rocksdb]: https://github.com/Level/rocksdb

[rxdb]: https://github.com/pubkey/rxdb

[search-index]: https://github.com/fergiemcdowall/search-index

[sheet-down]: https://github.com/jed/sheet-down

[sqldown]: https://github.com/calvinmetcalf/sqldown

[subindex]: https://github.com/eugeneware/subindex

[subleveldown]: https://github.com/mafintosh/subleveldown

[tacodb]: https://github.com/dominictarr/tacodb

[timestreamdb]: https://github.com/brycebaril/timestreamdb

[vertical]: https://github.com/zy445566/vertical
