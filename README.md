# Awesome Level

> An open list of awesome **[Level][level-org]** modules and resources. [Add yours!](#contributing)

[![level badge][level-badge]](https://github.com/level/awesome)
[![Backers on Open Collective](https://opencollective.com/level/backers/badge.svg?color=orange)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/level/sponsors/badge.svg?color=orange)](#sponsors)

## Table of Contents

<details><summary>Click to expand</summary>

-   [Bundles](#bundles)
-   [Core](#core)
-   [Stores](#stores)
-   [Layers](#layers)
-   [Encodings](#encodings)
-   [Sublevels](#sublevels)
-   [Processing](#processing)
-   [Databases](#databases)
-   [Shared Access](#shared-access)
-   [Streams](#streams)
-   [Iterators](#iterators)
-   [Hooks](#hooks)
-   [Range Options](#range-options)
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
-   [Donate](#donate)
-   [License](#license)

</details>

## Bundles

Convenience modules that bundle [a store](#stores) with [`levelup`][levelup] and [`encoding-down`][encoding-down].

Name | Compatibility | Dependencies | Description
:--- | :------------ | :----------- | :----------
**[`level`][level]** | ![levelup](https://img.shields.io/badge/levelup-4.3-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/level.svg?label=%E2%99%A5)](https://david-dm.org/Level/level) | Bundle for [`leveldown`][leveldown] and [`level-js`][level-js].<br>Main entry point for beginners.
**[`level-mem`][level-mem]** | ![levelup](https://img.shields.io/badge/levelup-4.3-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/level-mem.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-mem) | Bundle for [`memdown`][memdown].
**[`level-rocksdb`][level-rocksdb]** | ![levelup](https://img.shields.io/badge/levelup-4.3-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/level-rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-rocksdb) | Bundle for [`rocksdb`][rocksdb].
**[`level-hyper`][level-hyper]** | ![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) | [![dependencies](https://img.shields.io/david/Level/level-hyper.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-hyper) | Bundle for [`leveldown-hyper`][leveldown-hyper].
**[`level-indexed`][level-indexed]** | ![levelup](https://img.shields.io/badge/levelup-2.0-orange.svg) | [![dependencies](https://img.shields.io/david/kapetan/level-indexed.svg?label=%E2%99%A5)](https://david-dm.org/kapetan/level-indexed) | Bundle for [`indexeddown`][indexeddown].<br>Alternative to [`level`][level].

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
**[`leveldown`][leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/leveldown.svg?label=%E2%99%A5)](https://david-dm.org/Level/leveldown) | [LevelDB](https://github.com/google/leveldb)
**[`memdown`][memdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/memdown.svg?label=%E2%99%A5)](https://david-dm.org/Level/memdown) | [In-memory RBTree](https://www.npmjs.com/package/functional-red-black-tree)
**[`level-js`][level-js]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/level.js.svg?label=%E2%99%A5)](https://david-dm.org/Level/level.js) | [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB)
**[`rocksdb`][rocksdb]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.1-yellow.svg) | [![dependencies](https://img.shields.io/david/Level/rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/Level/rocksdb) | [RocksDB](https://github.com/facebook/rocksdb/)
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
**[`indexeddown`][indexeddown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-orange.svg) | [![dependencies](https://img.shields.io/david/kapetan/indexeddown.svg?label=%E2%99%A5)](https://david-dm.org/kapetan/indexeddown) | IndexedDB
**[`lmdb-leveldown`][lmdb-leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-orange.svg) | [![dependencies](https://img.shields.io/david/chrbala/lmdb-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/chrbala/lmdb-leveldown) | LMDB
**[`localdown`][localdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-orange.svg) | [![dependencies](https://img.shields.io/david/bhoriuchi/localdown.svg?label=%E2%99%A5)](https://david-dm.org/bhoriuchi/localdown) | localStorage in Node.js
**[`aerospike-leveldown`][aerospike-leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-red.svg) | [![dependencies](https://img.shields.io/david/ProjectThor/aerospikedown.svg?label=%E2%99%A5)](https://david-dm.org/ProjectThor/aerospikedown) | Aerospike
**[`s3leveldown`][s3leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-yellow.svg) | [![dependencies](https://img.shields.io/david/loune/s3leveldown.svg?label=%E2%99%A5)](https://david-dm.org/loune/s3leveldown) | [AWS S3](https://aws.amazon.com/s3/)
**[`gaiadown-ts`][gaiadown-ts]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-yellow.svg) | [![dependencies](https://img.shields.io/david/acidleroy/gaiadown-ts.svg?label=%E2%99%A5)](https://david-dm.org/acidleroy/gaiadown-ts) | [Gaia](https://github.com/blockstack/gaia)
**[`dynamodb-leveldown`][dynamodb-leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/GioCirque/DynamoDb-LevelDown.svg?label=%E2%99%A5)](https://david-dm.org/GioCirque/DynamoDb-LevelDown) | [AWS DynamoDB](http://aws.amazon.com/dynamodb/)
**[`localforagedown`][localforagedown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/KsRyY/localforagedown.svg?label=%E2%99%A5)](https://david-dm.org/KsRyY/localforagedown) | [localForage](https://github.com/localForage/localForage/)

## Layers

Modules that implement [`abstract-leveldown`][abstract-leveldown] to wrap another [`abstract-leveldown`][abstract-leveldown]. This is the preferred extension point.

Name | Compatibility | Dependencies | Description
:--- | :------------ | :----------- | :----------
**[`encoding-down`][encoding-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/encoding-down.svg?label=%E2%99%A5)](https://david-dm.org/Level/encoding-down) | Provides key/value encoding.
**[`@adorsys/encrypt-down`][@adorsys/encrypt-down]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-yellow.svg) | [![dependencies](https://img.shields.io/david/adorsys/encrypt-down.svg?label=%E2%99%A5)](https://david-dm.org/adorsys/encrypt-down) | Provides encryption for values.
**[`deferred-leveldown`][deferred-leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-brightgreen.svg) | [![dependencies](https://img.shields.io/david/Level/deferred-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/Level/deferred-leveldown) | Handles delayed-open. Built into [`levelup`][levelup].
**[`level-cowdown`][level-cowdown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-red.svg) | [![dependencies](https://img.shields.io/david/substack/level-cowdown.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-cowdown) | Copy-on-write [`abstract-leveldown`][abstract-leveldown] layer.
**[`abstract-stream-leveldown`][abstract-stream-leveldown]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-red.svg) | [![dependencies](https://img.shields.io/david/jed/abstract-stream-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/jed/abstract-stream-leveldown) | A stream-based abstract prototype.

## Encodings

Custom [`level-codec`][level-codec] compatible encodings for use with [`encoding-down`][encoding-down].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`charwise`][charwise]** | [![dependencies](https://img.shields.io/david/dominictarr/charwise.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/charwise) | Encode/decode with same encoded sort order as [`bytewise`][bytewise].
**[`bytewise`][bytewise]** | [![dependencies](https://img.shields.io/david/deanlandolt/bytewise.svg?label=%E2%99%A5)](https://david-dm.org/deanlandolt/bytewise) | Binary serialization which sorts bytewise for arbitrarily complex data structures.<br><br>NB. Use [`charwise`][charwise] if possible. Gives you almost everything `bytewise` does but much faster.
**[`protocol-buffers`][protocol-buffers]** | [![dependencies](https://img.shields.io/david/mafintosh/protocol-buffers.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/protocol-buffers) | [Protocol Buffers](https://developers.google.com/protocol-buffers/) for Node.js. Compiled messages are [`level-codec`][level-codec] compatible encodings.
**[`lexicographic-integer-encoding`][lexicographic-integer-encoding]** | [![dependencies](https://img.shields.io/david/vweevers/lexicographic-integer-encoding.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/lexicographic-integer-encoding) | Wraps [`lexicographic-integer`](https://github.com/substack/lexicographic-integer).

## Sublevels

Modules related to splitting a database into sections a.k.a. sublevels.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`subleveldown`][subleveldown]** | [![dependencies](https://img.shields.io/david/Level/subleveldown.svg?label=%E2%99%A5)](https://david-dm.org/Level/subleveldown) | Split a [`levelup`][levelup] database into sublevels with their own keyspace, encoding and events.
**[`level-temp`][level-temp]** | [![dependencies](https://img.shields.io/david/mafintosh/level-temp.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/level-temp) | Create a temporary [`subleveldown`][subleveldown] sublevel that is guaranteed to be empty.
**[`level-mount`][level-mount]** | [![dependencies](https://img.shields.io/david/u8sand/level-mount.svg?label=%E2%99%A5)](https://david-dm.org/u8sand/level-mount) | Mount multiple [`abstract-leveldown`][abstract-leveldown] stores by key prefix onto a single store. Can be used with [`subleveldown`][subleveldown].
**[`bytespace`][bytespace]** | [![dependencies](https://img.shields.io/david/deanlandolt/bytespace.svg?label=%E2%99%A5)](https://david-dm.org/deanlandolt/bytespace) | Keypath subspaces prefixed with [`bytewise`][bytewise] tuples. Similar to [`level-sublevel`][level-sublevel].<br><br>NB. [`bytewise`][bytewise] - and thus [`bytespace`][bytespace] - can be slow. Consider using [`subleveldown`][subleveldown] paired with the [`charwise`][charwise] encoding instead.
**[`level-sublevel`][level-sublevel]** | [![dependencies](https://img.shields.io/david/dominictarr/level-sublevel.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-sublevel) | Adds the ability to create subsections with the same API as [`levelup`][levelup], but only write/read to a prefixed section, or bucket, of the key-space. Each section also has [`level-hooks`][level-hooks] installed.<br><br>NB. No longer maintained. We recommend [`subleveldown`][subleveldown] instead.
**[`sublevel-prefixer`][sublevel-prefixer]** | [![dependencies](https://img.shields.io/david/mafintosh/sublevel-prefixer.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/sublevel-prefixer) | Utility to prefix a key with a sublevel prefix.
**[`level-sublevel-stream`][level-sublevel-stream]** | [![dependencies](https://img.shields.io/david/juliangruber/level-sublevel-stream.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-sublevel-stream) | Find [`level-sublevel`][level-sublevel] sublevels, not requiring them to be in memory already.
**[`level-subtree`][level-subtree]** | [![dependencies](https://img.shields.io/david/hij1nx/level-subtree.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-subtree) | Generate a tree from [`level-sublevel`][level-sublevel] sublevels, useful when there is no manifest.
**[`level-superlevel`][level-superlevel]** | [![dependencies](https://img.shields.io/david/randymized/level-superlevel.svg?label=%E2%99%A5)](https://david-dm.org/randymized/level-superlevel) | Superlevel adds a "super" level that allows accessing the entire database, discovering [`level-sublevel`][level-sublevel] sublevels and browsing the database without knowledge of the sublevel structure.
**[`level-subkey`][level-subkey]** | [![dependencies](https://img.shields.io/david/snowyu/level-subkey.svg?label=%E2%99%A5)](https://david-dm.org/snowyu/level-subkey) | Use path-like keys to separate sections of [`levelup`][levelup], with hooks. Adapted from [`level-sublevel`][level-sublevel].
**[`level-mirror`][level-mirror]** | [![dependencies](https://img.shields.io/david/juliangruber/level-mirror.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-mirror) | Mirror and optionally transform data from one [`level-sublevel`][level-sublevel] sublevel into another.

## Processing

Modules for indexing, alternative forms of querying data, MapReduce models and other forms of data processing.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-auto-index`][level-auto-index]** | [![dependencies](https://img.shields.io/david/hypermodules/level-auto-index.svg?label=%E2%99%A5)](https://david-dm.org/hypermodules/level-auto-index) | Automatic secondary indexing for [`levelup`][levelup] and [`subleveldown`][subleveldown].
**[`jsonquery`][jsonquery]** | [![dependencies](https://img.shields.io/david/eugeneware/jsonquery.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/jsonquery) | Query [`levelup`][levelup] with a MongoDB-like query API that returns streams.
**[`jsonquery-engine`][jsonquery-engine]** | [![dependencies](https://img.shields.io/david/eugeneware/jsonquery-engine.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/jsonquery-engine) | A full MongoDB query language implementation with indexes for querying [`levelup`][levelup].
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
**[`level-path-index`][level-path-index]** | [![dependencies](https://img.shields.io/david/level-path-index.svg?label=%E2%99%A5)](https://david-dm.org/level-path-index) | Index properties of items that live in a tree of materialized paths.
**[`level-sql`][level-sql]** | [![dependencies](https://img.shields.io/david/hij1nx/level-sql.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-sql) | SQL queries for [`levelup`][levelup].
**[`level-hash-index`][level-hash-index]** | [![dependencies](https://img.shields.io/david/smallhelm/level-hash-index.svg?label=%E2%99%A5)](https://david-dm.org/smallhelm/level-hash-index) | Store any string into [`levelup`][levelup], and get a collision free hash of that value that you can use in an index (or similar).
**[`level-idx`][level-idx]** | [![dependencies](https://img.shields.io/david/hypermodules/level-idx.svg?label=%E2%99%A5)](https://david-dm.org/hypermodules/level-idx) | Another high-level API for creating secondary indexes, using [`level-auto-index`][level-auto-index].
**[`level-indexer`][level-indexer]** | [![dependencies](https://img.shields.io/david/mafintosh/level-indexer.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/level-indexer) | Generic indexer for [`levelup`][levelup]. Only stores document keys for space efficiency.
**[`level-librarian`][level-librarian]** | [![dependencies](https://img.shields.io/david/microstar-db/level-librarian.svg?label=%E2%99%A5)](https://david-dm.org/microstar-db/level-librarian) | Lightweight indexing and querying with the LLCJ query language.
**[`level-match-index`][level-match-index]** | [![dependencies](https://img.shields.io/david/mmckegg/level-match-index.svg?label=%E2%99%A5)](https://david-dm.org/mmckegg/level-match-index) | Index and filter [`level-sublevel`][level-sublevel] databases and watch for future changes.
**[`level-assoc`][level-assoc]** | [![dependencies](https://img.shields.io/david/substack/level-assoc.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-assoc) | Relational foreign key associations (`hasMany`, `belongsTo`) for [`levelup`][levelup].
**[`level-tree-index`][level-tree-index]** | [![dependencies](https://img.shields.io/david/biobricks/level-tree-index.svg?label=%E2%99%A5)](https://david-dm.org/biobricks/level-tree-index) | Tree indexer for [`levelup`][levelup].
**[`changes-index`][changes-index]** | [![dependencies](https://img.shields.io/david/substack/changes-index.svg?label=%E2%99%A5)](https://david-dm.org/substack/changes-index) | Create indexes from a [changes-feed](https://github.com/mafintosh/changes-feed). Provides a way to create a materialized view on top of an append-only log.
**[`changesdown`][changesdown]** | [![dependencies](https://img.shields.io/david/mafintosh/changesdown.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/changesdown) | [`levelup`][levelup] interface that uses an [`abstract-leveldown`][abstract-leveldown] store that writes to a [changes-feed](https://github.com/mafintosh/changes-feed) to store its state.

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
**[`rxdb`][rxdb]** | [![dependencies](https://img.shields.io/david/pubkey/rxdb.svg?label=%E2%99%A5)](https://david-dm.org/pubkey/rxdb) | Event-driven database based on [`pouchdb`][pouchdb]. Optimized for reactive programming with observables. Events and state is automatically shared between multiple browser tabs. Queries are defined by the mongoDB mango-standard.
**[`pushdb`][pushdb]** | [![dependencies](https://img.shields.io/david/mikeal/pushdb.svg?label=%E2%99%A5)](https://david-dm.org/mikeal/pushdb) | A programmable database with document storage and unique indexing capabilities.
**[`search-index`][search-index]** | [![dependencies](https://img.shields.io/david/fergiemcdowall/search-index.svg?label=%E2%99%A5)](https://david-dm.org/fergiemcdowall/search-index) | A persistent full text search engine for browser and Node.js.
**[`tacodb`][tacodb]** | [![dependencies](https://img.shields.io/david/dominictarr/tacodb.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/tacodb) | A responsive, Node.js-style database ideal for realtime data. Highly modular and adaptable, allowing extension with the [Level][level-org] ecosystem.
**[`timestreamdb`][timestreamdb]** | [![dependencies](https://img.shields.io/david/brycebaril/timestreamdb.svg?label=%E2%99%A5)](https://david-dm.org/brycebaril/timestreamdb) | A full-featured timeseries database on top of LevelDB. Includes a library for streaming statistical operations on timeseries data including joins, aggregates, filters, and map-like operations.
**[`@nano-sql/core`][@nano-sql/core]** | [![dependencies](https://img.shields.io/david/ClickSimply/Nano-SQL.svg?label=%E2%99%A5)](https://david-dm.org/ClickSimply/Nano-SQL) | A small (10Kb) RDBMS abstraction on top of [`levelup`][levelup] that also runs in the browser with undo/redo support, immutable objects and IndexedDB persistence.
**[`vertical`][vertical]** | [![dependencies](https://img.shields.io/david/zy445566/vertical.svg?label=%E2%99%A5)](https://david-dm.org/zy445566/vertical) | LevelDB distributed, Server and Client!
**[`flash-store`][flash-store]** | [![dependencies](https://img.shields.io/david/zixia/flash-store.svg?label=%E2%99%A5)](https://david-dm.org/zixia/flash-store) | FlashStore is a Key-Value persistent storage with easy to use ES6 Map-like API(both Async and Sync support), powered by LevelDB and TypeScript.
**[`level-fact-base`][level-fact-base]** | [![dependencies](https://img.shields.io/david/smallhelm/level-fact-base.svg?label=%E2%99%A5)](https://david-dm.org/smallhelm/level-fact-base) | Store immutable facts and query them with datalog.
**[`dulcimer`][dulcimer]** | [![dependencies](https://img.shields.io/david/fritzy/dulcimer.svg?label=%E2%99%A5)](https://david-dm.org/fritzy/dulcimer) | Define JSON models and manage indexes, children, foreign keys and much more.
**[`levi`][levi]** | [![dependencies](https://img.shields.io/david/cshum/levi.svg?label=%E2%99%A5)](https://david-dm.org/cshum/levi) | Stream based full-text search for Node.js and browser using [`levelup`][levelup].
**[`level-mongo`][level-mongo]** | [![dependencies](https://img.shields.io/david/simon-p-r/level-mongo.svg?label=%E2%99%A5)](https://david-dm.org/simon-p-r/level-mongo) | MongoDB-like database backed by LevelDB.
**[`level-orm`][level-orm]** | [![dependencies](https://img.shields.io/david/eugeneware/level-orm.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/level-orm) | Simple ORM built on [`levelup`][levelup].
**[`level-lively`][level-lively]** | [![dependencies](https://img.shields.io/david/eugeneware/level-lively.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/level-lively) | [`levelup`][levelup] implementation of [LivelyDb](https://github.com/eugeneware/livelydb) for doing real-time data binding of a database with local javascript objects.
**[`kwdb`][kwdb]** | [![dependencies](https://img.shields.io/david/KsRyY/kwdb.svg?label=%E2%99%A5)](https://david-dm.org/KsRyY/kwdb) | REST wrapper for [`levelup`][levelup].
**[`level-restful`][level-restful]** | [![dependencies](https://img.shields.io/david/karissa/level-restful.svg?label=%E2%99%A5)](https://david-dm.org/karissa/level-restful) | REST wrapper for [`levelup`][levelup], as an extension to [`level-orm`][level-orm].
**[`level-rest`][level-rest]** | [![dependencies](https://img.shields.io/david/shama/level-rest.svg?label=%E2%99%A5)](https://david-dm.org/shama/level-rest) | REST wrapper for [`levelup`][levelup].<br>NB. Not compatible with latest [`levelup`][levelup].

## Shared Access

Name | Dependencies | Description
:--- | :----------- | :----------
**[`multileveldown`][multileveldown]** | [![dependencies](https://img.shields.io/david/mafintosh/multileveldown.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/multileveldown) | Share a [`levelup`][levelup] instance across multiple processes or over the network. An alternative to [`multilevel`][multilevel], implemented as [`abstract-leveldown`][abstract-leveldown] stores with seamless retry support.
**[`level-party`][level-party]** | [![dependencies](https://img.shields.io/david/substack/level-party.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-party) | Open a LevelDB ([`leveldown`][leveldown]) handle multiple times, transparently upgrading to [`multileveldown`][multileveldown] when more than 1 process try to use the same LevelDB data directory at once and re-electing a new master when the primary unix socket (or named pipe) goes down.
**[`cluster-levelup`][cluster-levelup]** | [![dependencies](https://img.shields.io/david/chiguireitor/cluster-levelup.svg?label=%E2%99%A5)](https://david-dm.org/chiguireitor/cluster-levelup) | Wrap a [`levelup`][levelup] instance for [`cluster`](https://nodejs.org/api/cluster.html) usage among multiple processes.
**[`multilevel`][multilevel]** | [![dependencies](https://img.shields.io/david/juliangruber/multilevel.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/multilevel) | Share a [`levelup`][levelup] instance over the network.
**[`multilevel-http`][multilevel-http]** | [![dependencies](https://img.shields.io/david/juliangruber/multilevel-http.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/multilevel-http) | Expose a [`levelup`][levelup] instance via HTTP.
**[`level-range-emitter`][level-range-emitter]** | [![dependencies](https://img.shields.io/david/jameskyburz/level-range-emitter.svg?label=%E2%99%A5)](https://david-dm.org/jameskyburz/level-range-emitter) | Client and server using [`multileveldown`][multileveldown], [`range-emitter`][range-emitter] and [`ltgt`][ltgt].
**[`level-manifest`][level-manifest]** | [![dependencies](https://img.shields.io/david/dominictarr/level-manifest.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-manifest) | Describe the functions that [`multilevel`][multilevel] should provide access to on the client.
**[`level-cluster-get`][level-cluster-get]** | [![dependencies](https://img.shields.io/david/kesla/level-cluster-get.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-cluster-get) | Given a key, get all values from a cluster of [`multilevel`][multilevel] servers.
**[`level-connect`][level-connect]** | [![dependencies](https://img.shields.io/david/mattstyles/level-connect.svg?label=%E2%99%A5)](https://david-dm.org/mattstyles/level-connect) | Connect to a [`level-party`][level-party] and [`level-sublevel`][level-sublevel] enabled LevelDB over HTTP.
**[`level-sandbox`][level-sandbox]** | [![dependencies](https://img.shields.io/david/juliangruber/level-sandbox.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-sandbox) | A sandbox for hosting [`multilevel`][multilevel] enabled databases.
**[`level2riak`][level2riak]** | [![dependencies](https://img.shields.io/david/fritzy/level2git.svg?label=%E2%99%A5)](https://david-dm.org/fritzy/level2git) | A network service that allows you to connect to a Riak database over HTTP.
**[`leveldb-mount`][leveldb-mount]** | [![dependencies](https://img.shields.io/david/jameskyburz/leveldb-mount.svg?label=%E2%99%A5)](https://david-dm.org/jameskyburz/leveldb-mount) | LevelDB server and client with optional client-side REPL. Built with [`subleveldown`][subleveldown] and [`multileveldown`][multileveldown].
**[`level-pubsub`][level-pubsub]** | [![dependencies](https://img.shields.io/david/hij1nx/level-pubsub.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-pubsub) | PubSub with server and client on top of [`levelup`][levelup].
**[`level-query`][level-query]** | [![dependencies](https://img.shields.io/david/substack/level-query.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-query) | Expose a [`level-sublevel`][level-sublevel] database over HTTP, searchable with query strings.
**[`level-over-http`][level-over-http]** | [![dependencies](https://img.shields.io/david/lakowske/level-over-http.svg?label=%E2%99%A5)](https://david-dm.org/lakowske/level-over-http) | Another solution to expose [`levelup`][levelup] over HTTP.
**[`level-rpc`][level-rpc]** | [![dependencies](https://img.shields.io/david/juliangruber/level-rpc.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-rpc) | Fast RPC mechanism for [`levelup`][levelup]. Intended as binary-compatible alternative to [`multilevel`][multilevel].

## Streams

[Node.js stream](https://nodejs.org/api/stream.html) or [`pull-stream`](https://github.com/pull-stream/pull-stream) implementations for reading and writing data from/to [`levelup`][levelup].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-ws`][level-ws]** | [![dependencies](https://img.shields.io/david/Level/level-ws.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-ws) | General-case, streams3 writable stream for [`levelup`][levelup].
**[`level-batch-stream`][level-batch-stream]** | [![dependencies](https://img.shields.io/david/jcrugzz/level-batch-stream.svg?label=%E2%99%A5)](https://david-dm.org/jcrugzz/level-batch-stream) | Streams2 writable stream for [`levelup`][levelup].
**[`level-writestream`][level-writestream]** | [![dependencies](https://img.shields.io/david/pgte/level-writestream.svg?label=%E2%99%A5)](https://david-dm.org/pgte/level-writestream) | Streams2 writable stream for [`levelup`][levelup].
**[`level-write-stream`][level-write-stream]** | [![dependencies](https://img.shields.io/david/Raynos/level-write-stream.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-write-stream) | Streams1 writable stream for [`levelup`][levelup] or [`abstract-leveldown`][abstract-leveldown].
**[`level-delete-stream`][level-delete-stream]** | [![dependencies](https://img.shields.io/david/juliangruber/level-delete-stream.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-delete-stream) | A streams1 deleteStream for [`levelup`][levelup].
**[`pull-level`][pull-level]** | [![dependencies](https://img.shields.io/david/dominictarr/pull-level.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/pull-level) | [`pull-stream`](https://github.com/pull-stream/pull-stream) interface to [`levelup`][levelup] with read streams, write streams and realtime (tail/live) reads.
**[`level-live-stream`][level-live-stream]** | [![dependencies](https://img.shields.io/david/dominictarr/level-live-stream.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-live-stream) | Like `db.createReadStream()` except it's live / tailable. i.e. instead of ending, it will stay open and stream changes to the database as they are inserted.
**[`level-live`][level-live]** | [![dependencies](https://img.shields.io/david/voltraco/level-live.svg?label=%E2%99%A5)](https://david-dm.org/voltraco/level-live) | Simple, light and correct live read stream implementation.<br><br>NB. Uses an undefined streams version.
**[`level-livefeed`][level-livefeed]** | [![dependencies](https://img.shields.io/david/Raynos/level-livefeed.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-livefeed) | A live query of a range in [`levelup`][levelup]. Similar to [`level-live-stream`][level-live-stream] but with a streams2 interface.
**[`level-range`][level-range]** | [![dependencies](https://img.shields.io/david/juliangruber/level-range.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-range) | Find all K/V-pairs prefixed by a certain key. Streams1.
**[`level-cursor`][level-cursor]** | [![dependencies](https://img.shields.io/david/kordon/cursor.svg?label=%E2%99%A5)](https://david-dm.org/kordon/cursor) | A stream "cursor" to iterate through a ReadStream / KeyStream / ValueStream.
**[`level-glob`][level-glob]** | [![dependencies](https://img.shields.io/david/vweevers/level-glob.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/level-glob) | A streams2 read stream filtered and ordered by glob patterns. Keys in the database should be unix-like paths.

## Iterators

Modules that operate on [`abstract-leveldown`][abstract-leveldown] iterators.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-concat-iterator`][level-concat-iterator]** | [![dependencies](https://img.shields.io/david/Level/concat-iterator.svg?label=%E2%99%A5)](https://david-dm.org/Level/concat-iterator) | Concatenate items from an iterator into an array.
**[`level-iterator-stream`][level-iterator-stream]** | [![dependencies](https://img.shields.io/david/Level/iterator-stream.svg?label=%E2%99%A5)](https://david-dm.org/Level/iterator-stream) | Turn an [`abstract-leveldown`][abstract-leveldown] iterator into a readable stream.<br>Included in [`levelup`][levelup].
**[`levelup-async-iterator`][levelup-async-iterator]** | [![dependencies](https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg?label=%E2%99%A5)](https://david-dm.org/MeirionHughes/levelup-async-iterator) | Add an `iterator()` method to [`levelup`][levelup] with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration).<br><br>NB. Conflicts with [`iterator()`](https://github.com/Level/levelup/#iterator) added in `levelup@3.1.0`.
**[`level-iterator`][level-iterator]** | [![dependencies](https://img.shields.io/david/vweevers/level-iterator.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/level-iterator) | Decoding iterator for [`levelup`][levelup] instances. Wraps iterators like [`level-iterator-stream`][level-iterator-stream] does.<br><br>NB. Not compatible with `levelup` >= 2 due to encodings having moved out to [`encoding-down`][encoding-down]. PR welcome.

## Hooks

Low-level utilities for hooking into a [`levelup`][levelup] instance.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-events`][level-events]** | [![dependencies](https://img.shields.io/david/mafintosh/level-events.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/level-events) | Get an event everytime something is written / read / deleted using [`levelup`][levelup].
**[`level-hookdown`][level-hookdown]** | [![dependencies](https://img.shields.io/david/hypermodules/level-hookdown.svg?label=%E2%99%A5)](https://david-dm.org/hypermodules/level-hookdown) | Simple [`levelup`][levelup] hooks.
**[`level-post`][level-post]** | [![dependencies](https://img.shields.io/david/dominictarr/level-post.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-post) | Consistent post hooks for [`levelup`][levelup].
**[`level-condition`][level-condition]** | [![dependencies](https://img.shields.io/david/juliangruber/level-condition.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-condition) | Get notified when a condition is triggered inside a [`levelup`][levelup] instance.
**[`level-hooks`][level-hooks]** | [![dependencies](https://img.shields.io/david/dominictarr/level-hooks.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-hooks) | Implements a hook mechanism that allows you to intercept `put`, `delete` and `batch` operations. You can then turn those operations into batches. Useful if you want to turn a `put` into an atomic batch for say an automatic map operation.<br><br>NB. Author recommends using [`level-sublevel`][level-sublevel] instead of `level-hooks` directly. Note that [`level-sublevel`][level-sublevel] is not maintained.

## Range Options

Utilities for working with range options, known as ltgt(e), common to [`levelup`][levelup] streams and [`abstract-leveldown`][abstract-leveldown] iterators.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`ltgt`][ltgt]** | [![dependencies](https://img.shields.io/david/dominictarr/ltgt.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/ltgt) | Tool belt to find lower or upper bounds, compare and filter keys and more.
**[`level-option-wrap`][level-option-wrap]** | [![dependencies](https://img.shields.io/david/substack/level-option-wrap.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-option-wrap) | Wrap `ltgt` options with functions. Expose range options without leaking information about your internal key representations.
**[`interval-to-ltgt`][interval-to-ltgt]** | [![dependencies](https://img.shields.io/david/nowsecure/interval-to-ltgt.svg?label=%E2%99%A5)](https://david-dm.org/nowsecure/interval-to-ltgt) | Convert an interval string to an `ltgt` object. This is the counterpart to [`ltgt-to-interval`][ltgt-to-interval].
**[`ltgt-to-interval`][ltgt-to-interval]** | [![dependencies](https://img.shields.io/david/juliangruber/ltgt-to-interval.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/ltgt-to-interval) | Convert an `ltgt` object to an interval string. This is the counterpart to [`interval-to-ltgt`][interval-to-ltgt].
**[`range-emitter`][range-emitter]** | [![dependencies](https://img.shields.io/david/jameskyburz/range-emitter.svg?label=%E2%99%A5)](https://david-dm.org/jameskyburz/range-emitter) | Range emitter. Publish keys and subscribe to ranges.

## Data Structures

Modules that utilize a specific key/value scheme to provide a higher-level data structure.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`merkle-dag`][merkle-dag]** | [![dependencies](https://img.shields.io/david/mafintosh/merkle-dag.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/merkle-dag) | Merkle DAG on top of LevelDB
**[`merkle-patricia-tree`][merkle-patricia-tree]** | [![dependencies](https://img.shields.io/david/ethereumjs/merkle-patricia-tree.svg?label=%E2%99%A5)](https://david-dm.org/ethereumjs/merkle-patricia-tree) | Implementation of the modified merkle patricia tree as specified in [Ethereum's yellow paper](http://gavwood.com/Paper.pdf).
**[`level-array`][level-array]** | [![dependencies](https://img.shields.io/david/juliangruber/level-array.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-array) | The array datatype inside [`levelup`][levelup].
**[`level-set`][level-set]** | [![dependencies](https://img.shields.io/david/maiah/level-set.svg?label=%E2%99%A5)](https://david-dm.org/maiah/level-set) | Add a `set` method to [`levelup`][levelup] for saving objects in a tree-like structure.
**[`level-push`][level-push]** | [![dependencies](https://img.shields.io/david/maiah/level-push.svg?label=%E2%99%A5)](https://david-dm.org/maiah/level-push) | Add a `push` method to [`levelup`][levelup] for saving objects using [`level-set`][level-set] with auto-generated UUID.
**[`level-version`][level-version]** | [![dependencies](https://img.shields.io/david/brycebaril/level-version.svg?label=%E2%99%A5)](https://david-dm.org/brycebaril/level-version) | Store and retrieve versioned data in [`levelup`][levelup].
**[`level-queue-type`][level-queue-type]** | [![dependencies](https://img.shields.io/david/mcollina/level-queue-type.svg?label=%E2%99%A5)](https://david-dm.org/mcollina/level-queue-type) | The queue datatype inside [`levelup`][levelup].
**[`level-q`][level-q]** | [![dependencies](https://img.shields.io/david/eugeneware/level-q.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/level-q) | Priority queuing for [`levelup`][levelup].
**[`qool`][qool]** | [![dependencies](https://img.shields.io/david/kessler/qool.svg?label=%E2%99%A5)](https://david-dm.org/kessler/qool) | A queue backed by [`levelup`][levelup], durable and FIFO.
**[`level-trie`][level-trie]** | [![dependencies](https://img.shields.io/david/juliangruber/level-trie.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-trie) | The TRIE data structure and search algorithm, on top of [`levelup`][levelup].
**[`level-geospatial`][level-geospatial]** | [![dependencies](https://img.shields.io/david/richorama/level-geospatial.svg?label=%E2%99%A5)](https://david-dm.org/richorama/level-geospatial) | Store key values pairs with lat/lon coordinates, and query using a radius.
**[`level-pathwise`][level-pathwise]** | [![dependencies](https://img.shields.io/david/juliangruber/level-pathwise.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-pathwise) | Turn [`levelup`][levelup] into one huge object of arbitrary size! Efficiently and atomically update and read parts of it.
**[`level-places`][level-places]** | [![dependencies](https://img.shields.io/david/Wayla/level-places.svg?label=%E2%99%A5)](https://david-dm.org/Wayla/level-places) | Store and retrieve places near a lat/long pair.
**[`level-nearby-stream`][level-nearby-stream]** | [![dependencies](https://img.shields.io/david/juliangruber/level-nearby-stream.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-nearby-stream) | Stream in nearby places using the browser's geolocation and [`level-places`][level-places].
**[`level-tree`][level-tree]** | [![dependencies](https://img.shields.io/david/calvinmetcalf/level-tree.svg?label=%E2%99%A5)](https://david-dm.org/calvinmetcalf/level-tree) | Geospatial indexing for GeoJSON in [`levelup`][levelup]
**[`level-list`][level-list]** | [![dependencies](https://img.shields.io/david/juliangruber/level-list.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-list) | Map lists of data stored in [`levelup`][levelup] to DOM elements.
**[`level-reactive`][level-reactive]** | [![dependencies](https://img.shields.io/david/juliangruber/level-reactive.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-reactive) | Reactive templating for data stored in [`levelup`][levelup].
**[`level-paginate`][level-paginate]** | [![dependencies](https://img.shields.io/david/juliangruber/level-paginate.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-paginate) | Streaming pagination for [`levelup`][levelup].
**[`level-average`][level-average]** | [![dependencies](https://img.shields.io/david/juliangruber/level-average.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-average) | Calculate rolling averages in [`levelup`][levelup].
**[`level-sum`][level-sum]** | [![dependencies](https://img.shields.io/david/juliangruber/level-sum.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-sum) | Calculate sums in [`levelup`][levelup] and get live updates.
**[`level-historical-json`][level-historical-json]** | [![dependencies](https://img.shields.io/david/ellell/level-historical-json.svg?label=%E2%99%A5)](https://david-dm.org/ellell/level-historical-json) | Keep a history of all the changes of a JSON document.
**[`level-immutable`][level-immutable]** | [![dependencies](https://img.shields.io/david/eugeneware/level-immutable.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/level-immutable) | [`levelup`][levelup] immutable history and database snapshotting based on ideas in `datomic`.
**[`level-model`][level-model]** | [![dependencies](https://img.shields.io/david/sethvincent/level-model.svg?label=%E2%99%A5)](https://david-dm.org/sethvincent/level-model) | A higher-level module for creating content models using [`levelup`][levelup] and JSON Schema validation.
**[`level-stream`][level-stream]** | [![dependencies](https://img.shields.io/david/juliangruber/level-stream.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-stream) | Persist streams in [`levelup`][levelup].
**[`level-stay`][level-stay]** | [![dependencies](https://img.shields.io/david/juliangruber/level-stay.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-stay) | An alternative approach to storing scuttlebutts in [`levelup`][levelup].
**[`skeyma`][skeyma]** | [![dependencies](https://img.shields.io/david/jed/skeyma.svg?label=%E2%99%A5)](https://david-dm.org/jed/skeyma) | Turns a template string (like `${forumId}/${postId}`) into parse/serialize streams that transform objects like `{forumId, postId, text}` into key-value pairs and back.
**[`level-autotable`][level-autotable]** | [![dependencies](https://img.shields.io/david/santoshrajan/levelup-autotable.svg?label=%E2%99%A5)](https://david-dm.org/santoshrajan/levelup-autotable) | Auto incrementing keys with "fields" and "records".
**[`level-forks`][level-forks]** | [![dependencies](https://img.shields.io/david/substack/level-forks.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-forks) | Forking graph of cascading namespaces.
**[`level-geo`][level-geo]** | [![dependencies](https://img.shields.io/david/julianduque/level-geo.svg?label=%E2%99%A5)](https://david-dm.org/julianduque/level-geo) | A geospatial index for [`levelup`][levelup].
**[`level-geography`][level-geography]** | [![dependencies](https://img.shields.io/david/morganherlocker/level-geography.svg?label=%E2%99%A5)](https://david-dm.org/morganherlocker/level-geography) | Indexed geography storage in [`levelup`][levelup].
**[`accountdown`][accountdown]** | [![dependencies](https://img.shields.io/david/substack/accountdown.svg?label=%E2%99%A5)](https://david-dm.org/substack/accountdown) | Persistent user accounts.
**[`accountdown-model`][accountdown-model]** | [![dependencies](https://img.shields.io/david/sethvincent/accountdown-model.svg?label=%E2%99%A5)](https://david-dm.org/sethvincent/accountdown-model) | A wrapper around [`accountdown`][accountdown] that provides a few additional features

## Transience

Name | Dependencies | Description
:--- | :----------- | :----------
**[`cachedown`][cachedown]** | [![dependencies](https://img.shields.io/david/mvayngrib/cachedown.svg?label=%E2%99%A5)](https://david-dm.org/mvayngrib/cachedown) | LRU cache implemented as an [`abstract-leveldown`][abstract-leveldown] layer.
**[`level-ttl`][level-ttl]** | [![dependencies](https://img.shields.io/david/Level/level-ttl.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-ttl) | Add a `ttl` (time-to-live) option to [`levelup`][levelup].<br>NB. Suffers from race issues. See also [`tiny-level-ttl`][tiny-level-ttl].
**[`tiny-level-ttl`][tiny-level-ttl]** | [![dependencies](https://img.shields.io/david/ArtskydJ/tiny-level-ttl.svg?label=%E2%99%A5)](https://david-dm.org/ArtskydJ/tiny-level-ttl) | Add a `ttl` (time-to-live) option to [`levelup`][levelup], [`level-sublevel`][level-sublevel] or [`level-spaces`][level-spaces]. Also respects [`level-lock`][level-lock].
**[`level-live-cache`][level-live-cache]** | [![dependencies](https://img.shields.io/david/juliangruber/level-live-cache.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-live-cache) | An in-memory cache that keeps up to date with its source.
**[`level-lru-cache`][level-lru-cache]** | [![dependencies](https://img.shields.io/david/kemitchell/level-lru-cache.js.svg?label=%E2%99%A5)](https://david-dm.org/kemitchell/level-lru-cache.js) | Simple LRU cache.
**[`level-ttl-cache`][level-ttl-cache]** | [![dependencies](https://img.shields.io/david/rvagg/level-ttl-cache.svg?label=%E2%99%A5)](https://david-dm.org/rvagg/level-ttl-cache) | A pass-through cache for arbitrary objects or binary data using LevelDB, expired by a TTL.
**[`level-cache`][level-cache]** | [![dependencies](https://img.shields.io/david/Raynos/level-cache.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-cache) | A caching module you can place in front of a [`levelup`][levelup] database. It will cache a subset of the database in an in-memory LRU cache based on configuration. It has an optional synchronous API which will return from the cache only.
**[`levelup-cache`][levelup-cache]** | [![dependencies](https://img.shields.io/david/TehShrike/levelup-cache.svg?label=%E2%99%A5)](https://david-dm.org/TehShrike/levelup-cache) | Use [`levelup`][levelup] to cache remote data.

## Atomicity

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-lock`][level-lock]** | [![dependencies](https://img.shields.io/david/substack/level-lock.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-lock) | In-memory advisory read/write locks for [`levelup`][levelup] keys.
**[`level-mutex`][level-mutex]** | [![dependencies](https://img.shields.io/david/mikeal/level-mutex.svg?label=%E2%99%A5)](https://david-dm.org/mikeal/level-mutex) | Mutex read/write lock for [`levelup`][levelup].
**[`level-updater`][level-updater]** | [![dependencies](https://img.shields.io/david/hughsk/level-updater.svg?label=%E2%99%A5)](https://david-dm.org/hughsk/level-updater) | Update keys without overlapping changes - makes it possible to implement an atomic incrementer, JSON merger, etc.
**[`levelplus`][levelplus]** | [![dependencies](https://img.shields.io/david/https://github.com/eugeneware/levelplus.svg?label=%E2%99%A5)](https://david-dm.org/https://github.com/eugeneware/levelplus) | Adds atomic updates, increments, array pushes, set additions and user-defined atomic operations to [`levelup`][levelup].
**[`level-atomics`][level-atomics]** | [![dependencies](https://img.shields.io/david/IndigoUnited/node-level-atomics.svg?label=%E2%99%A5)](https://david-dm.org/IndigoUnited/node-level-atomics) | Add (parallel) atomic operations like `insert`, `replace`, `increment` and `decrement` to [`levelup`][levelup].
**[`level-transactions`][level-transactions]** | [![dependencies](https://img.shields.io/david/cshum/level-transactions.svg?label=%E2%99%A5)](https://david-dm.org/cshum/level-transactions) | Transaction layer for [`levelup`][levelup].

## Jobs

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-schedule`][level-schedule]** | [![dependencies](https://img.shields.io/david/juliangruber/level-schedule.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-schedule) | A durable job scheduler.
**[`level-jobs`][level-jobs]** | [![dependencies](https://img.shields.io/david/pgte/level-jobs.svg?label=%E2%99%A5)](https://david-dm.org/pgte/level-jobs) | Job Queue in [`levelup`][levelup].
**[`batchdb`][batchdb]** | [![dependencies](https://img.shields.io/david/substack/batchdb.svg?label=%E2%99%A5)](https://david-dm.org/substack/batchdb) | [`levelup`][levelup] and disk storage for queued batch jobs.

## File System

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-filesystem`][level-filesystem]** | [![dependencies](https://img.shields.io/david/mafintosh/level-filesystem.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/level-filesystem) | Full implementation of the Node.js `fs` module on top of [`levelup`][levelup].
**[`browserify-fs`][browserify-fs]** | [![dependencies](https://img.shields.io/david/mafintosh/browserify-fs.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/browserify-fs) | [`level-filesystem`][level-filesystem] as drop-in `fs` replacement for the browser, to be used with `browserify`.
**[`level-fs`][level-fs]** | [![dependencies](https://img.shields.io/david/juliangruber/level-fs.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-fs) | Node's `fs` module with [`levelup`][levelup] as backend.
**[`level-fs-browser`][level-fs-browser]** | [![dependencies](https://img.shields.io/david/juliangruber/level-fs-browser.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-fs-browser) | [`level-fs`][level-fs] as drop-in `fs` replacement for the browser, to be used with `browserify`.
**[`level-store`][level-store]** | [![dependencies](https://img.shields.io/david/juliangruber/level-store.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-store) | A streaming storage engine based on [`levelup`][levelup].
**[`level-serve`][level-serve]** | [![dependencies](https://img.shields.io/david/Wayla/level-serve.svg?label=%E2%99%A5)](https://david-dm.org/Wayla/level-serve) | Streaming static file server based on [`levelup`][levelup].
**[`suckit`][suckit]** | [![dependencies](https://img.shields.io/david/deoxxa/suckit.svg?label=%E2%99%A5)](https://david-dm.org/deoxxa/suckit) | Expose a [`level-store`][level-store] over HTTP.
**[`level-vinyl`][level-vinyl]** | [![dependencies](https://img.shields.io/david/vweevers/level-vinyl.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/level-vinyl) | [Vinyl](https://github.com/gulpjs/vinyl-fs) adapter and blob store. Saves file contents in a content addressable blob store, file metadata in [`levelup`][levelup].
**[`level-blob`][level-blob]** | [![dependencies](https://img.shields.io/david/crodas/level-blob.svg?label=%E2%99%A5)](https://david-dm.org/crodas/level-blob) | Store blobs in [`levelup`][levelup]
**[`level-blob-store`][level-blob-store]** | [![dependencies](https://img.shields.io/david/diasdavid/level-blob-store.svg?label=%E2%99%A5)](https://david-dm.org/diasdavid/level-blob-store) | An [`abstract-blob-store`](https://github.com/maxogden/abstract-blob-store) using LevelDB as the storage backend
**[`level-pull-blob-store`][level-pull-blob-store]** | [![dependencies](https://img.shields.io/david/ipfs/js-level-pull-blob-store.svg?label=%E2%99%A5)](https://david-dm.org/ipfs/js-level-pull-blob-store) | A [`pull-blob-store`](https://github.com/ipfs/interface-pull-blob-store) implementation backed by LevelDB.
**[`level-server`][level-server]** | [![dependencies](https://img.shields.io/david/Wayla/level-server.svg?label=%E2%99%A5)](https://david-dm.org/Wayla/level-server) | Standalone LevelDB file server based on [`level-serve`][level-serve], [`multilevel`][multilevel] and [`level-sublevel`][level-sublevel].

## Utilities

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-codec`][level-codec]** | [![dependencies](https://img.shields.io/david/Level/codec.svg?label=%E2%99%A5)](https://david-dm.org/Level/codec) | Encode keys, values and ltgte options. Used in [`encoding-down`][encoding-down].
**[`level-errors`][level-errors]** | [![dependencies](https://img.shields.io/david/Level/errors.svg?label=%E2%99%A5)](https://david-dm.org/Level/errors) | Error types for [`levelup`][levelup].
**[`level-test`][level-test]** | [![dependencies](https://img.shields.io/david/Level/level-test.svg?label=%E2%99%A5)](https://david-dm.org/Level/level-test) | Easily run your `level-*` tests against [all stores](#stores).
**[`level-compose`][level-compose]** | [![dependencies](https://img.shields.io/david/Level/compose.svg?label=%E2%99%A5)](https://david-dm.org/Level/compose) | Compose a database factory from [`abstract-leveldown`][abstract-leveldown] and [`levelup`][levelup] layers.
**[`level-exists`][level-exists]** | [![dependencies](https://img.shields.io/david/juliangruber/level-exists.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-exists) | Check if a datum exists without reading its value.
**[`level-move`][level-move]** | [![dependencies](https://img.shields.io/david/juliangruber/level-move.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-move) | Move a value to another key.
**[`level-capped`][level-capped]** | [![dependencies](https://img.shields.io/david/juliangruber/level-capped.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-capped) | Capped collections.
**[`level-create`][level-create]** | [![dependencies](https://img.shields.io/david/substack/level-create.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-create) | Insert a key if and only if it doesn't already exist
**[`level-create-batch`][level-create-batch]** | [![dependencies](https://img.shields.io/david/substack/level-create-batch.svg?label=%E2%99%A5)](https://david-dm.org/substack/level-create-batch) | Insert a batch of keys if and only if none of the keys already exist
**[`level-modify`][level-modify]** | [![dependencies](https://img.shields.io/david/dskrepps/level-modify.svg?label=%E2%99%A5)](https://david-dm.org/dskrepps/level-modify) | Modify an existing key in [`levelup`][levelup]. Uses [`level-lock`][level-lock]. See also [`level-create`][level-create] and [`level-move`][level-move].
**[`level-random`][level-random]** | [![dependencies](https://img.shields.io/david/michaelnisi/level-random.svg?label=%E2%99%A5)](https://david-dm.org/michaelnisi/level-random) | Read values of random [`levelup`][levelup] keys.
**[`level-shared-batch`][level-shared-batch]** | [![dependencies](https://img.shields.io/david/juliangruber/level-shared-batch.svg?label=%E2%99%A5)](https://david-dm.org/juliangruber/level-shared-batch) | Share batches and commit collectively
**[`batchlevel`][batchlevel]** | [![dependencies](https://img.shields.io/david/biobricks/batchlevel.svg?label=%E2%99%A5)](https://david-dm.org/biobricks/batchlevel) | Batch all operations made on a [`levelup`][levelup] instance. Compatible with [`subleveldown`][subleveldown].
**[`ltest`][ltest]** | [![dependencies](https://img.shields.io/david/ralphtheninja/ltest.svg?label=%E2%99%A5)](https://david-dm.org/ralphtheninja/ltest) | Test function for [`levelup`][levelup] testing, based on [`level-test`][level-test].
**[`level-probe`][level-probe]** | [![dependencies](https://img.shields.io/david/vweevers/level-probe.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/level-probe) | Get the first record in a range, using an iterator or stream. NB. Not compatible with latest [`levelup`][levelup].
**[`autolevel`][autolevel]** | [![dependencies](https://img.shields.io/david/finwo/autolevel.svg?label=%E2%99%A5)](https://david-dm.org/finwo/autolevel) | Automatically combine [`levelup`][levelup] with the right [`abstract-leveldown`][abstract-leveldown] store for your configuration.
**[`level-lazy-open`][level-lazy-open]** | [![dependencies](https://img.shields.io/david/Level/lazy-open.svg?label=%E2%99%A5)](https://david-dm.org/Level/lazy-open) | Lazily open a leveldown compatible backend.
**[`changeset`][changeset]** | [![dependencies](https://img.shields.io/david/eugeneware/changeset.svg?label=%E2%99%A5)](https://david-dm.org/eugeneware/changeset) | Generate diff changesets for javascript objects, decomposing diffs into a series of puts and delete operations. The format is compatible with [`levelup`][levelup] batch operations. Useful to synchronize objects.
**[`level-delete-range`][level-delete-range]** | [![dependencies](https://img.shields.io/david/Raynos/level-delete-range.svg?label=%E2%99%A5)](https://david-dm.org/Raynos/level-delete-range) | Delete a range of keys from [`levelup`][levelup].
**[`levelup-defaults`][levelup-defaults]** | [![dependencies](https://img.shields.io/david/mafintosh/levelup-defaults.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/levelup-defaults) | Change the defaults settings on a [`levelup`][levelup] instance by returning a new [`levelup`][levelup] instance that uses the same [`abstract-leveldown`][abstract-leveldown] but different options.
**[`level-methods`][level-methods]** | [![dependencies](https://img.shields.io/david/Wayla/level-methods.svg?label=%E2%99%A5)](https://david-dm.org/Wayla/level-methods) | Useful meta information about [`levelup`][levelup] methods.

## Replication

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-2pc`][level-2pc]** | [![dependencies](https://img.shields.io/david/hij1nx/level-2pc.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-2pc) | A two-phase commit protocol.
**[`level-couch-sync`][level-couch-sync]** | [![dependencies](https://img.shields.io/david/dominictarr/level-couch-sync.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-couch-sync) | Replicate from CouchDB to LevelDB.
**[`level-master`][level-master]** | [![dependencies](https://img.shields.io/david/dominictarr/level-master.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-master) | Master-Slave replication for [`levelup`][levelup].
**[`level-merkle`][level-merkle]** | [![dependencies](https://img.shields.io/david/dominictarr/level-merkle.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-merkle) | Uses [merkle-trees](http://en.wikipedia.org/wiki/Merkle_tree) to replicate data sets. Data must be sets and currently, deletes are not supported.
**[`level-replicate`][level-replicate]** | [![dependencies](https://img.shields.io/david/dominictarr/level-replicate.svg?label=%E2%99%A5)](https://david-dm.org/dominictarr/level-replicate) | Master-master replication with [`levelup`][levelup]. Implements scuttlebutt style handshake, syncs data, then replicates real time changes.
**[`level-replicator`][level-replicator]** | [![dependencies](https://img.shields.io/david/hij1nx/level-replicator.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/level-replicator) | Master-master replication. Same goal as [`level-replicate`][level-replicate] but different approach.

## Tools

CLI, GUI and web interfaces for exploring data.

Name | Dependencies | Description
:--- | :----------- | :----------
**[`lev2`][lev2]** | [![dependencies](https://img.shields.io/david/maxlath/lev2.svg?label=%E2%99%A5)](https://david-dm.org/maxlath/lev2) | A complete REPL & CLI for managing LevelDB instances
**[`level-in`][level-in]** | [![dependencies](https://img.shields.io/david/fergiemcdowall/level-in.svg?label=%E2%99%A5)](https://david-dm.org/fergiemcdowall/level-in) | A simple command-line utility for writing data to LevelDB via [`levelup`][levelup].
**[`level-out`][level-out]** | [![dependencies](https://img.shields.io/david/fergiemcdowall/level-out.svg?label=%E2%99%A5)](https://david-dm.org/fergiemcdowall/level-out) | A simple command-line utility for reading LevelDB data via [`levelup`][levelup].
**[`level-key-list`][level-key-list]** | [![dependencies](https://img.shields.io/david/hughsk/level-key-list.svg?label=%E2%99%A5)](https://david-dm.org/hughsk/level-key-list) | Command-line tool for quickly printing a list of keys in a LevelDB database.
**[`lev`][lev]** | [![dependencies](https://img.shields.io/david/hij1nx/lev.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/lev) | A CLI REPL interface for LevelDB.
**[`leveldb-repl`][leveldb-repl]** | [![dependencies](https://img.shields.io/david/lapwinglabs/leveldb-repl.svg?label=%E2%99%A5)](https://david-dm.org/lapwinglabs/leveldb-repl) | Super simple REPL for LevelDB. Supports filter globbing.
**[`levelhud`][levelhud]** | [![dependencies](https://img.shields.io/david/ricardobeat/levelhud.svg?label=%E2%99%A5)](https://david-dm.org/ricardobeat/levelhud) | LevelDB GUI with an interactive console.
**[`levelweb`][levelweb]** | [![dependencies](https://img.shields.io/david/hij1nx/levelui.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/levelui) | A LevelDB GUI. Includes simple data visualization tools.
**[`level-cli`][level-cli]** | [![dependencies](https://img.shields.io/david/mablay/level-cli.svg?label=%E2%99%A5)](https://david-dm.org/mablay/level-cli) | Interact with LevelDB on the command line.
**[`level-explore`][level-explore]** | [![dependencies](https://img.shields.io/david/jcblw/level-explore.svg?label=%E2%99%A5)](https://david-dm.org/jcblw/level-explore) | A terminal program to visualize LevelDB data. Early stages.
**[`level-repair`][level-repair]** | [![dependencies](https://img.shields.io/david/kesla/level-repair.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-repair) | CLI tool to repair a LevelDB.
**[`leveldb-editor`][leveldb-editor]** | [![dependencies](https://img.shields.io/david/derhuerst/leveldb-editor.svg?label=%E2%99%A5)](https://david-dm.org/derhuerst/leveldb-editor) | Edit a LevelDB from the command line.
**[`levelscan`][levelscan]** | [![dependencies](https://img.shields.io/david/joeledwards/node-levelscan.svg?label=%E2%99%A5)](https://david-dm.org/joeledwards/node-levelscan) | LevelDB command line scanning utility
**[`levelui`][levelui]** | [![dependencies](https://img.shields.io/david/hij1nx/levelui.svg?label=%E2%99%A5)](https://david-dm.org/hij1nx/levelui) | A LevelDB GUI based on [`atom-shell`](https://github.com/atom/atom-shell) (now called Electron).

## Benchmarking & Debugging

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-bench`][level-bench]** | [![dependencies](https://img.shields.io/david/Level/bench.svg?label=%E2%99%A5)](https://david-dm.org/Level/bench) | Benchmark [`abstract-leveldown`][abstract-leveldown] and [`levelup`][levelup] stores.
**[`level-compare-forks`][level-compare-forks]** | [![dependencies](https://img.shields.io/david/kesla/level-compare-forks.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-compare-forks) | Run benchmarks on different level-forks and see how they compare.
**[`level-log`][level-log]** | [![dependencies](https://img.shields.io/david/micnews/level-log.svg?label=%E2%99%A5)](https://david-dm.org/micnews/level-log) | Log all [`levelup`][levelup] operations, including method calls.
**[`debugdown`][debugdown]** | [![dependencies](https://img.shields.io/david/vweevers/debugdown.svg?label=%E2%99%A5)](https://david-dm.org/vweevers/debugdown) | Log all operations made on an [`abstract-leveldown`][abstract-leveldown] compliant store. For node and browsers.
**[`level-time`][level-time]** | [![dependencies](https://img.shields.io/david/micnews/level-time.svg?label=%E2%99%A5)](https://david-dm.org/micnews/level-time) | Log [`levelup`][levelup] operations and their duration.
**[`level-dump`][level-dump]** | [![dependencies](https://img.shields.io/david/thlorenz/level-dump.svg?label=%E2%99%A5)](https://david-dm.org/thlorenz/level-dump) | Dumps all values and/or keys of a [`levelup`][levelup] or [`level-sublevel`][level-sublevel] instance to the console.
**[`level-benchmarks`][level-benchmarks]** | [![dependencies](https://img.shields.io/david/kesla/level-benchmarks.svg?label=%E2%99%A5)](https://david-dm.org/kesla/level-benchmarks) | Run benchmarks against levelup-compatible engines

## Resources

Name | Description
:--- | :----------
**[`leveljs.org`][leveljs.org]** | Website for [Level][level-org]
**[`level-community`][level-community]** | General discussion, cross-repo efforts and common information for projects in the community
**[`electron-demo`][electron-demo]** | Demo app loading LevelDB into an Electron context.
**[`browserify-starter`][browserify-starter]** | Demonstrates bundling [`level`][level] for browsers using [`browserify`](https://github.com/browserify/browserify).
**[`webpack-starter`][webpack-starter]** | Demonstrates bundling [`level`][level] for browsers using [`webpack`](https://webpack.js.org/).
**[`level-awesome`][level-awesome]** | An open list of awesome [Level][level-org] libraries and resources.
**[`levelmeup`][levelmeup]** | Level Me Up Scotty! An intro to Node.js databases via a set of self-guided workshops.

## Applications

Applications and libraries that use Level modules under the hood.

Name | Description
:--- | :----------
**[`ipfs`][ipfs]** | A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.
**[`clocker`][clocker]** | Track project hours
**[`copy-on-write`][copy-on-write]** | A copy-on-write FUSE implementation
**[`chrome-localstorage`][chrome-localstorage]** | CLI to manipulate Chrome and Chromium's localStorage on disk.
**[`cipherhub`][cipherhub]** | Encrypt messages based on GitHub SSH public keys
**[`code-music-studio`][code-music-studio]** | Design musical algorithms
**[`level-todo`][level-todo]** | A todo list using LevelDB.
**[`electron-crash-report-service`][electron-crash-report-service]** | Aggregate crash reports for Electron apps
**[`cross-street-indexer`][cross-street-indexer]** | Blazing fast tile based geocoder that matches cross street (road intersections) entirely sourced by OSM QA Tiles.
**[`lt-core`][lt-core]** | Time tracking library.
**[`npm-search`][npm-search]** | An index of npm using [`levelup`][levelup].
**[`connect-level`][connect-level]** | A `connect` / `express` session store backed by LevelDB via [`levelup`][levelup].
**[`hadron`][hadron]** | A hackable publishing platform using LevelDB as main database.
**[`groove basin`][groove basin]** | Music player server with a web-based user interface. Uses [`levelup`][levelup] for the music library database.
**[`prerender-level-cache`][prerender-level-cache]** | [Prerender](https://github.com/prerender/prerender) plugin to use level as a cache store.
**[`tsd`][tsd]** | Spin up a quick server to visualize time series data.
**[`appfeed`][appfeed]** | Version feed for trusted application delivery
**[`arrivals-osx`][arrivals-osx]** | Watch a folder for audio and video arrivals and convert them to Apple-friendly formats.
**[`bleach-log-server`][bleach-log-server]** | Keep track of bleach levels for a hot tub or a pool.
**[`browserify-cdn`][browserify-cdn]** | Browserify CDN. Caches browserify bundles in LevelDB.

## Legacy

Modules that are deprecated, archived or superseded. Listed here for the historical record.

Name | Description
:--- | :----------
**[`level-browserify`][level-browserify]** | Bundle for [`level-js`][level-js] and [`leveldown`][leveldown]. No longer maintained: superseded by [`level`][level] v5.0.0.
**[`level-mapped-index`][level-mapped-index]** | Indexes for [`levelup`][levelup] built on [`map-reduce`][map-reduce]. Uses a custom indexing function for each index to parse and record index values for each entry. Archived.
**[`level-encoding`][level-encoding]** | Implements the encoding logic of a [`levelup`][levelup]-like database. This functionality lives on in [`level-codec`][level-codec].
**[`byteup`][byteup]** | Adds [`bytewise`][bytewise] as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: bytewise }`.
**[`msgpackup`][msgpackup]** | Adds [msgpack](https://github.com/msgpack/msgpack) as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: msgpack }`.
**[`level-cbatch`][level-cbatch]** | Provides a chainable API for `db.batch()`. This functionality is now provided by [`levelup`][levelup].
**[`memdb`][memdb]** | [`levelup`][levelup] + [`memdown`][memdown]. Superseded by [`level-mem`][level-mem].
**[`levelup-iterator`][levelup-iterator]** | Use [`abstract-leveldown`][abstract-leveldown] iterators instead of readable streams to traverse the database. Iterators are exposed by [`levelup`][levelup] since `levelup@3.1.0`.
**[`levelidb`][levelidb]** | A [`levelup`][levelup] interface on top of IndexedDB. Superseded by [`level-js`][level-js] and [`level`][level].
**[`level-multiply`][level-multiply]** | Make [`levelup`][levelup] `get()`, `put()` and `del()` methods accept multiples keys & values. Archived.
**[`level-namespace`][level-namespace]** | Split your db up into multiple namespaces. Deprecated.
**[`q-level`][q-level]** | [`levelup`][levelup] with Q promises. [`levelup`][levelup] has native Promise support now.
**[`level-static`][level-static]** | Use [`levelup`][levelup] as a static file server. Abandoned.
**[`level-spaces`][level-spaces]** | A simple namespacing solution for [`levelup`][levelup]. Deprecated.
**[`level-object`][level-object]** | Store objects in [`levelup`][levelup]. Author recommends [`level-pathwise`][level-pathwise] instead.
**[`level-scuttlebutt`][level-scuttlebutt]** | Persist and query scuttlebutt documents (requires [`level-sublevel`][level-sublevel]). Abandoned.
**[`gun-level`][gun-level]** | Sync graph-style data real-time between browsers and servers. Discontinued.
**[`level-co`][level-co]** | [`levelup`][levelup] wrappers for [co](https://github.com/tj/co). Instead use native ES6 features.
**[`level-session`][level-session]** | Framework-agnostic, LevelDB-backed web server session manager. Archived.
**[`level-socket`][level-socket]** | Backend server that exposes [`levelup`][levelup] over authenticated cross domain websockets.
**[`level-user`][level-user]** | Client side library for authenticating with and moving data over [`level-socket`][level-socket].
**[`string-range`][string-range]** | Manipulate string ranges for `db.createReadStream()`. Abandoned.
**[`range-bucket`][range-bucket]** | Generate string ranges that group into ranges, suitable for use as database keys. Abandoned.
**[`level-partition-check`][level-partition-check]** | Extend [`levelup`][levelup] to error if you write outside of a specified range of keys. Stalled work in progress.
**[`level-binomial-replication`][level-binomial-replication]** | Biniomial replication for [`levelup`][levelup]. Abandoned.
**[`level-bytewise`][level-bytewise]** | [`levelup`][levelup] with [`bytewise`][bytewise] key encoding and bytewise-friendly sublevels.
**[`level-peek`][level-peek]** | Get the first or last record in a range. Abandoned.
**[`level-party-hyper`][level-party-hyper]** | Defunct fork of [`level-party`][level-party].
**[`level-prebuilt`][level-prebuilt]** | Same as [`level`][level] but with prebuilt binaries. This is now provided by [`level`][level] too.
**[`level-promise`][level-promise]** | [`levelup`][levelup] with Promises. This is now provided by [`levelup`][levelup] out of the box.
**[`level-search`][level-search]** | Index and search every property in [`levelup`][levelup] containing object values. Abandoned.
**[`level-scout`][level-scout]** | Range search with a query planner. Development stalled.
**[`leveldown-android-prebuilt`][leveldown-android-prebuilt]** | Defunct fork of [`leveldown`][leveldown] to add Android support. Merged into `leveldown`.
**[`leveldown-prebuilt`][leveldown-prebuilt]** | Defunct fork of [`leveldown`][leveldown] to add prebuilt binaries. Now provided by `leveldown`.
**[`level-map-index`][level-map-index]** | Another indexing module. Adapted from [`map-reduce`][map-reduce]. Author recommends other solutions.
**[`level-memview`][level-memview]** | In memory view on top of [`levelup`][levelup]. Abandoned.
**[`plumbdb`][plumbdb]** | HTTP request handlers for building web services on top of LevelDB. Not in active development.

## Contributing

Module and resource authors are welcome and encouraged to add an entry for their work via a pull request. To add a module, edit `modules/*.json` and run `npm run awesome` to update `README.md`.

[`Level/awesome`](https://github.com/Level/awesome) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

To sustain [`Level`](https://github.com/Level) and its activities, become a backer or sponsor on [Open Collective](https://opencollective.com/level). Your logo or avatar will be displayed on our 28+ [GitHub repositories](https://github.com/Level) and [npm](https://www.npmjs.com/) packages. 💖

### Backers

[![Open Collective backers](https://opencollective.com/level/backers.svg?width=890)](https://opencollective.com/level)

### Sponsors

[![Open Collective sponsors](https://opencollective.com/level/sponsors.svg?width=890)](https://opencollective.com/level)

## License

[MIT](LICENSE.md) © 2017-present [Contributors](CONTRIBUTORS.md).

[@adorsys/encrypt-down]: https://github.com/adorsys/encrypt-down

[@nano-sql/core]: https://github.com/ClickSimply/Nano-SQL

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

[clocker]: https://github.com/substack/clocker

[cluster-levelup]: https://github.com/chiguireitor/cluster-levelup

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

[flash-store]: https://github.com/zixia/flash-store

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

[kwdb]: https://github.com/KsRyY/kwdb

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

[level-org]: https://github.com/level

[level-orm]: https://github.com/eugeneware/level-orm

[level-out]: https://github.com/fergiemcdowall/level-out

[level-over-http]: https://github.com/lakowske/level-over-http

[level-packager]: https://github.com/Level/packager

[level-paginate]: https://github.com/juliangruber/level-paginate

[level-partition-check]: https://github.com/soldair/level-partition-check

[level-party]: https://github.com/substack/level-party

[level-party-hyper]: https://github.com/jcrugzz/level-party

[level-path-index]: https://github.com/level-path-index

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

[map-reduce]: https://github.com/dominictarr/map-reduce

[map-reduce-chained]: https://github.com/ryanramage/map-reduce-chained

[medeadown]: https://github.com/kesla/medeadown

[memdb]: https://github.com/juliangruber/memdb

[memdown]: https://github.com/Level/memdown

[merkle-dag]: https://github.com/mafintosh/merkle-dag

[merkle-patricia-tree]: https://github.com/ethereumjs/merkle-patricia-tree

[mongodown]: https://github.com/watson/mongodown

[msgpackup]: https://github.com/eugeneware/msgpackup

[multilevel]: https://github.com/juliangruber/multilevel

[multilevel-http]: https://github.com/juliangruber/multilevel-http

[multileveldown]: https://github.com/mafintosh/multileveldown

[mysqldown]: https://github.com/kesla/mysqldown

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

[vertical]: https://github.com/zy445566/vertical

[webpack-starter]: https://github.com/Level/webpack-starter
