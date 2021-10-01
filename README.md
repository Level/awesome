# Awesome Level

> An open list of awesome **[Level][level-org]** modules and resources. [Add yours!](#contributing)

[![level badge][level-badge]](https://github.com/level/awesome)
[![Test](https://github.com/Level/awesome/actions/workflows/test.yml/badge.svg)](https://github.com/Level/awesome/actions/workflows/test.yml)
[![Funding](https://opencollective.com/level/tiers/badge.svg?color=orange)](#donate)

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

**Convenience modules that bundle [a store](#stores) with [`levelup`][levelup] and [`encoding-down`][encoding-down].**

### [`level`][level]

![levelup](https://img.shields.io/badge/levelup-5.0-yellow.svg) [![dependencies](https://img.shields.io/david/Level/level.svg)](https://david-dm.org/Level/level) [![Last commit](https://img.shields.io/github/last-commit/Level/level)](https://github.com/Level/level) [![Contributors](https://img.shields.io/github/contributors/Level/level?color=brightgreen)](https://github.com/Level/level/graphs/contributors)

Bundle for [`leveldown`][leveldown] and [`level-js`][level-js]. Main entry point for beginners.

### [`level-mem`][level-mem]

![levelup](https://img.shields.io/badge/levelup-5.0-yellow.svg) [![dependencies](https://img.shields.io/david/Level/level-mem.svg)](https://david-dm.org/Level/level-mem) [![Last commit](https://img.shields.io/github/last-commit/Level/level-mem)](https://github.com/Level/level-mem) [![Contributors](https://img.shields.io/github/contributors/Level/level-mem?color=brightgreen)](https://github.com/Level/level-mem/graphs/contributors)

Bundle for [`memdown`][memdown].

### [`level-rocksdb`][level-rocksdb]

![levelup](https://img.shields.io/badge/levelup-5.0-yellow.svg) [![dependencies](https://img.shields.io/david/Level/level-rocksdb.svg)](https://david-dm.org/Level/level-rocksdb) [![Last commit](https://img.shields.io/github/last-commit/Level/level-rocksdb)](https://github.com/Level/level-rocksdb) [![Contributors](https://img.shields.io/github/contributors/Level/level-rocksdb?color=brightgreen)](https://github.com/Level/level-rocksdb/graphs/contributors)

Bundle for [`rocksdb`][rocksdb].

### [`level-hyper`][level-hyper]

![levelup](https://img.shields.io/badge/levelup-3.0-orange.svg) [![dependencies](https://img.shields.io/david/Level/level-hyper.svg)](https://david-dm.org/Level/level-hyper) [![Last commit](https://img.shields.io/github/last-commit/Level/level-hyper)](https://github.com/Level/level-hyper) [![Contributors](https://img.shields.io/github/contributors/Level/level-hyper?color=brightgreen)](https://github.com/Level/level-hyper/graphs/contributors)

Bundle for [`leveldown-hyper`][leveldown-hyper].

### [`level-indexed`][level-indexed]

![levelup](https://img.shields.io/badge/levelup-2.0-red.svg) [![dependencies](https://img.shields.io/david/kapetan/level-indexed.svg)](https://david-dm.org/kapetan/level-indexed) [![Last commit](https://img.shields.io/github/last-commit/kapetan/level-indexed)](https://github.com/kapetan/level-indexed) [![Contributors](https://img.shields.io/github/contributors/kapetan/level-indexed?color=brightgreen)](https://github.com/kapetan/level-indexed/graphs/contributors)

Bundle for [`indexeddown`][indexeddown]. Alternative to [`level`][level].

## Core

### [`levelup`][levelup]

[![dependencies](https://img.shields.io/david/Level/levelup.svg)](https://david-dm.org/Level/levelup) [![Last commit](https://img.shields.io/github/last-commit/Level/levelup)](https://github.com/Level/levelup) [![Contributors](https://img.shields.io/github/contributors/Level/levelup?color=brightgreen)](https://github.com/Level/levelup/graphs/contributors)

The glue that holds everything together. Use this when you need a [custom or swappable store](#stores).

### [`abstract-leveldown`][abstract-leveldown]

[![dependencies](https://img.shields.io/david/Level/abstract-leveldown.svg)](https://david-dm.org/Level/abstract-leveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/abstract-leveldown)](https://github.com/Level/abstract-leveldown) [![Contributors](https://img.shields.io/github/contributors/Level/abstract-leveldown?color=brightgreen)](https://github.com/Level/abstract-leveldown/graphs/contributors)

An abstract prototype matching the [`leveldown`][leveldown] API. Use this to implement your own store.

### [`level-packager`][level-packager]

[![dependencies](https://img.shields.io/david/Level/packager.svg)](https://david-dm.org/Level/packager) [![Last commit](https://img.shields.io/github/last-commit/Level/packager)](https://github.com/Level/packager) [![Contributors](https://img.shields.io/github/contributors/Level/packager?color=brightgreen)](https://github.com/Level/packager/graphs/contributors)

Package helper to export [a bundle](#bundles). Use this to create a new `level-*` bundle.

## Stores

**Modules that implement [`abstract-leveldown`][abstract-leveldown] as storage for [`levelup`][levelup].**

### [`leveldown`][leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-brightgreen.svg) [![dependencies](https://img.shields.io/david/Level/leveldown.svg)](https://david-dm.org/Level/leveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/leveldown)](https://github.com/Level/leveldown) [![Contributors](https://img.shields.io/github/contributors/Level/leveldown?color=brightgreen)](https://github.com/Level/leveldown/graphs/contributors)

Backed by [LevelDB](https://github.com/google/leveldb).

### [`memdown`][memdown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-brightgreen.svg) [![dependencies](https://img.shields.io/david/Level/memdown.svg)](https://david-dm.org/Level/memdown) [![Last commit](https://img.shields.io/github/last-commit/Level/memdown)](https://github.com/Level/memdown) [![Contributors](https://img.shields.io/github/contributors/Level/memdown?color=brightgreen)](https://github.com/Level/memdown/graphs/contributors)

Backed by [in-memory RBTree](https://www.npmjs.com/package/functional-red-black-tree).

### [`level-js`][level-js]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-brightgreen.svg) [![dependencies](https://img.shields.io/david/Level/level.js.svg)](https://david-dm.org/Level/level.js) [![Last commit](https://img.shields.io/github/last-commit/Level/level.js)](https://github.com/Level/level.js) [![Contributors](https://img.shields.io/github/contributors/Level/level.js?color=brightgreen)](https://github.com/Level/level.js/graphs/contributors)

Backed by [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB).

### [`rocksdb`][rocksdb]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.0-yellow.svg) [![dependencies](https://img.shields.io/david/Level/rocksdb.svg)](https://david-dm.org/Level/rocksdb) [![Last commit](https://img.shields.io/github/last-commit/Level/rocksdb)](https://github.com/Level/rocksdb) [![Contributors](https://img.shields.io/github/contributors/Level/rocksdb?color=brightgreen)](https://github.com/Level/rocksdb/graphs/contributors)

Backed by [RocksDB](https://github.com/facebook/rocksdb/).

### [`leveldown-hyper`][leveldown-hyper]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-5.0-orange.svg) [![dependencies](https://img.shields.io/david/Level/leveldown-hyper.svg)](https://david-dm.org/Level/leveldown-hyper) [![Last commit](https://img.shields.io/github/last-commit/Level/leveldown-hyper)](https://github.com/Level/leveldown-hyper) [![Contributors](https://img.shields.io/github/contributors/Level/leveldown-hyper?color=brightgreen)](https://github.com/Level/leveldown-hyper/graphs/contributors)

Backed by [HyperLevelDB](https://github.com/rescrv/HyperLevelDB).

### [`medeadown`][medeadown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-3.0-red.svg) [![dependencies](https://img.shields.io/david/kesla/medeadown.svg)](https://david-dm.org/kesla/medeadown) [![Last commit](https://img.shields.io/github/last-commit/kesla/medeadown)](https://github.com/kesla/medeadown) [![Contributors](https://img.shields.io/github/contributors/kesla/medeadown?color=brightgreen)](https://github.com/kesla/medeadown/graphs/contributors)

Backed by [medea](https://github.com/argo/medea).

### [`jsondown`][jsondown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-red.svg) [![dependencies](https://img.shields.io/david/toolness/jsondown.svg)](https://david-dm.org/toolness/jsondown) [![Last commit](https://img.shields.io/github/last-commit/toolness/jsondown)](https://github.com/toolness/jsondown) [![Contributors](https://img.shields.io/github/contributors/toolness/jsondown?color=brightgreen)](https://github.com/toolness/jsondown/graphs/contributors)

Backed by JSON on disk

### [`asyncstorage-down`][asyncstorage-down]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-red.svg) [![dependencies](https://img.shields.io/david/tradle/asyncstorage-down.svg)](https://david-dm.org/tradle/asyncstorage-down) [![Last commit](https://img.shields.io/github/last-commit/tradle/asyncstorage-down)](https://github.com/tradle/asyncstorage-down) [![Contributors](https://img.shields.io/github/contributors/tradle/asyncstorage-down?color=brightgreen)](https://github.com/tradle/asyncstorage-down/graphs/contributors)

Backed by [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) (React Native).

### [`mongodown`][mongodown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.6-red.svg) [![dependencies](https://img.shields.io/david/watson/mongodown.svg)](https://david-dm.org/watson/mongodown) [![Last commit](https://img.shields.io/github/last-commit/watson/mongodown)](https://github.com/watson/mongodown) [![Contributors](https://img.shields.io/github/contributors/watson/mongodown?color=brightgreen)](https://github.com/watson/mongodown/graphs/contributors)

Backed by [MongoDB](https://www.mongodb.com/).

### [`sqldown`][sqldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-red.svg) [![dependencies](https://img.shields.io/david/calvinmetcalf/sqldown.svg)](https://david-dm.org/calvinmetcalf/sqldown) [![Last commit](https://img.shields.io/github/last-commit/calvinmetcalf/sqldown)](https://github.com/calvinmetcalf/sqldown) [![Contributors](https://img.shields.io/github/contributors/calvinmetcalf/sqldown?color=brightgreen)](https://github.com/calvinmetcalf/sqldown/graphs/contributors)

Backed by [`sqlite3`](https://www.npmjs.com/package/sqlite3), [`pg`](https://www.npmjs.com/package/pg), [`mysql`](https://www.npmjs.com/package/mysql) or WebSQL.

### [`dynamo-down`][dynamo-down]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-red.svg) [![dependencies](https://img.shields.io/david/jed/dynamo-down.svg)](https://david-dm.org/jed/dynamo-down) [![Last commit](https://img.shields.io/github/last-commit/jed/dynamo-down)](https://github.com/jed/dynamo-down) [![Contributors](https://img.shields.io/github/contributors/jed/dynamo-down?color=brightgreen)](https://github.com/jed/dynamo-down/graphs/contributors)

Backed by [AWS DynamoDB](http://aws.amazon.com/dynamodb).

### [`azureleveldown`][azureleveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.11-red.svg) [![dependencies](https://img.shields.io/david/richorama/azureleveldown.svg)](https://david-dm.org/richorama/azureleveldown) [![Last commit](https://img.shields.io/github/last-commit/richorama/azureleveldown)](https://github.com/richorama/azureleveldown) [![Contributors](https://img.shields.io/github/contributors/richorama/azureleveldown?color=brightgreen)](https://github.com/richorama/azureleveldown/graphs/contributors)

Backed by Windows Azure Table Storage.

### [`fruitdown`][fruitdown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) [![dependencies](https://img.shields.io/david/nolanlawson/fruitdown.svg)](https://david-dm.org/nolanlawson/fruitdown) [![Last commit](https://img.shields.io/github/last-commit/nolanlawson/fruitdown)](https://github.com/nolanlawson/fruitdown) [![Contributors](https://img.shields.io/github/contributors/nolanlawson/fruitdown?color=brightgreen)](https://github.com/nolanlawson/fruitdown/graphs/contributors)

Backed by IndexedDB (Apple).

### [`localstorage-down`][localstorage-down]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) [![dependencies](https://img.shields.io/david/No9/localstorage-down.svg)](https://david-dm.org/No9/localstorage-down) [![Last commit](https://img.shields.io/github/last-commit/No9/localstorage-down)](https://github.com/No9/localstorage-down) [![Contributors](https://img.shields.io/github/contributors/No9/localstorage-down?color=brightgreen)](https://github.com/No9/localstorage-down/graphs/contributors)

Backed by [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### [`riakdown`][riakdown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.12-red.svg) [![dependencies](https://img.shields.io/david/nlf/riakdown.svg)](https://david-dm.org/nlf/riakdown) [![Last commit](https://img.shields.io/github/last-commit/nlf/riakdown)](https://github.com/nlf/riakdown) [![Contributors](https://img.shields.io/github/contributors/nlf/riakdown?color=brightgreen)](https://github.com/nlf/riakdown/graphs/contributors)

Backed by [riakpbc](https://github.com/nlf/riakpbc).

### [`mysqldown`][mysqldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-0.7-red.svg) [![dependencies](https://img.shields.io/david/kesla/mysqldown.svg)](https://david-dm.org/kesla/mysqldown) [![Last commit](https://img.shields.io/github/last-commit/kesla/mysqldown)](https://github.com/kesla/mysqldown) [![Contributors](https://img.shields.io/github/contributors/kesla/mysqldown?color=brightgreen)](https://github.com/kesla/mysqldown/graphs/contributors)

Backed by [MySQL](https://www.mysql.com/).

### [`redisdown`][redisdown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-*-red.svg) [![dependencies](https://img.shields.io/david/hmalphettes/redisdown.svg)](https://david-dm.org/hmalphettes/redisdown) [![Last commit](https://img.shields.io/github/last-commit/hmalphettes/redisdown)](https://github.com/hmalphettes/redisdown) [![Contributors](https://img.shields.io/github/contributors/hmalphettes/redisdown?color=brightgreen)](https://github.com/hmalphettes/redisdown/graphs/contributors)

Backed by [Redis](https://redis.io/).

### [`leveldown-basho`][leveldown-basho]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) ![dependencies](https://img.shields.io/badge/dependencies-unknown-lightgrey.svg)

Backed by [Basho's LevelDB fork](https://github.com/basho/leveldb).

### [`sheet-down`][sheet-down]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) [![dependencies](https://img.shields.io/david/jed/sheet-down.svg)](https://david-dm.org/jed/sheet-down) [![Last commit](https://img.shields.io/github/last-commit/jed/sheet-down)](https://github.com/jed/sheet-down) [![Contributors](https://img.shields.io/github/contributors/jed/sheet-down?color=brightgreen)](https://github.com/jed/sheet-down/graphs/contributors)

Backed by [Google Sheets](https://docs.google.com/spreadsheets).

### [`indexeddown`][indexeddown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-red.svg) [![dependencies](https://img.shields.io/david/kapetan/indexeddown.svg)](https://david-dm.org/kapetan/indexeddown) [![Last commit](https://img.shields.io/github/last-commit/kapetan/indexeddown)](https://github.com/kapetan/indexeddown) [![Contributors](https://img.shields.io/github/contributors/kapetan/indexeddown?color=brightgreen)](https://github.com/kapetan/indexeddown/graphs/contributors)

Backed by IndexedDB.

### [`lmdb-leveldown`][lmdb-leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-red.svg) [![dependencies](https://img.shields.io/david/chrbala/lmdb-leveldown.svg)](https://david-dm.org/chrbala/lmdb-leveldown) [![Last commit](https://img.shields.io/github/last-commit/chrbala/lmdb-leveldown)](https://github.com/chrbala/lmdb-leveldown) [![Contributors](https://img.shields.io/github/contributors/chrbala/lmdb-leveldown?color=brightgreen)](https://github.com/chrbala/lmdb-leveldown/graphs/contributors)

Backed by LMDB.

### [`localdown`][localdown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-red.svg) [![dependencies](https://img.shields.io/david/bhoriuchi/localdown.svg)](https://david-dm.org/bhoriuchi/localdown) [![Last commit](https://img.shields.io/github/last-commit/bhoriuchi/localdown)](https://github.com/bhoriuchi/localdown) [![Contributors](https://img.shields.io/github/contributors/bhoriuchi/localdown?color=brightgreen)](https://github.com/bhoriuchi/localdown/graphs/contributors)

Backed by localStorage in Node.js.

### [`aerospike-leveldown`][aerospike-leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.7-red.svg) [![dependencies](https://img.shields.io/david/ProjectThor/aerospikedown.svg)](https://david-dm.org/ProjectThor/aerospikedown) [![Last commit](https://img.shields.io/github/last-commit/ProjectThor/aerospikedown)](https://github.com/ProjectThor/aerospikedown) [![Contributors](https://img.shields.io/github/contributors/ProjectThor/aerospikedown?color=brightgreen)](https://github.com/ProjectThor/aerospikedown/graphs/contributors)

Backed by Aerospike.

### [`s3leveldown`][s3leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-orange.svg) [![dependencies](https://img.shields.io/david/loune/s3leveldown.svg)](https://david-dm.org/loune/s3leveldown) [![Last commit](https://img.shields.io/github/last-commit/loune/s3leveldown)](https://github.com/loune/s3leveldown) [![Contributors](https://img.shields.io/github/contributors/loune/s3leveldown?color=brightgreen)](https://github.com/loune/s3leveldown/graphs/contributors)

Backed by [AWS S3](https://aws.amazon.com/s3/).

### [`gaiadown-ts`][gaiadown-ts]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.0-orange.svg) [![dependencies](https://img.shields.io/david/acidleroy/gaiadown-ts.svg)](https://david-dm.org/acidleroy/gaiadown-ts) [![Last commit](https://img.shields.io/github/last-commit/acidleroy/gaiadown-ts)](https://github.com/acidleroy/gaiadown-ts) [![Contributors](https://img.shields.io/github/contributors/acidleroy/gaiadown-ts?color=brightgreen)](https://github.com/acidleroy/gaiadown-ts/graphs/contributors)

Backed by [Gaia](https://github.com/blockstack/gaia).

### [`dynamodb-leveldown`][dynamodb-leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-orange.svg) [![dependencies](https://img.shields.io/david/GioCirque/DynamoDb-LevelDown.svg)](https://david-dm.org/GioCirque/DynamoDb-LevelDown) [![Last commit](https://img.shields.io/github/last-commit/GioCirque/DynamoDb-LevelDown)](https://github.com/GioCirque/DynamoDb-LevelDown) [![Contributors](https://img.shields.io/github/contributors/GioCirque/DynamoDb-LevelDown?color=brightgreen)](https://github.com/GioCirque/DynamoDb-LevelDown/graphs/contributors)

Backed by [AWS DynamoDB](http://aws.amazon.com/dynamodb/).

### [`localforagedown`][localforagedown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.2-orange.svg) [![dependencies](https://img.shields.io/david/KsRyY/localforagedown.svg)](https://david-dm.org/KsRyY/localforagedown) [![Last commit](https://img.shields.io/github/last-commit/KsRyY/localforagedown)](https://github.com/KsRyY/localforagedown) [![Contributors](https://img.shields.io/github/contributors/KsRyY/localforagedown?color=brightgreen)](https://github.com/KsRyY/localforagedown/graphs/contributors)

Backed by [localForage](https://github.com/localForage/localForage/).

### [`react-native-leveldown`][react-native-leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-orange.svg) [![dependencies](https://img.shields.io/david/andymatuschak/react-native-leveldown.svg)](https://david-dm.org/andymatuschak/react-native-leveldown) [![Last commit](https://img.shields.io/github/last-commit/andymatuschak/react-native-leveldown)](https://github.com/andymatuschak/react-native-leveldown) [![Contributors](https://img.shields.io/github/contributors/andymatuschak/react-native-leveldown?color=brightgreen)](https://github.com/andymatuschak/react-native-leveldown/graphs/contributors)

Backed by [LevelDB](https://github.com/google/leveldb) (React Native).

### [`networked-hyperbeedown`][networked-hyperbeedown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-missing-lightgrey.svg) [![dependencies](https://img.shields.io/david/RangerMauve/networked-hyperbeedown.svg)](https://david-dm.org/RangerMauve/networked-hyperbeedown) [![Last commit](https://img.shields.io/github/last-commit/RangerMauve/networked-hyperbeedown)](https://github.com/RangerMauve/networked-hyperbeedown) [![Contributors](https://img.shields.io/github/contributors/RangerMauve/networked-hyperbeedown?color=brightgreen)](https://github.com/RangerMauve/networked-hyperbeedown/graphs/contributors)

Backed by [Hyperbee](https://github.com/hypercore-protocol/hyperbee/).

## Layers

**Modules that implement [`abstract-leveldown`][abstract-leveldown] to wrap another [`abstract-leveldown`][abstract-leveldown]. This is the preferred extension point.**

### [`encoding-down`][encoding-down]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-brightgreen.svg) [![dependencies](https://img.shields.io/david/Level/encoding-down.svg)](https://david-dm.org/Level/encoding-down) [![Last commit](https://img.shields.io/github/last-commit/Level/encoding-down)](https://github.com/Level/encoding-down) [![Contributors](https://img.shields.io/github/contributors/Level/encoding-down?color=brightgreen)](https://github.com/Level/encoding-down/graphs/contributors)

Provides key/value encoding.

### [`@adorsys/encrypt-down`][@adorsys/encrypt-down]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-6.3-orange.svg) [![dependencies](https://img.shields.io/david/adorsys/encrypt-down.svg)](https://david-dm.org/adorsys/encrypt-down) [![Last commit](https://img.shields.io/github/last-commit/adorsys/encrypt-down)](https://github.com/adorsys/encrypt-down) [![Contributors](https://img.shields.io/github/contributors/adorsys/encrypt-down?color=brightgreen)](https://github.com/adorsys/encrypt-down/graphs/contributors)

Provides encryption for values.

### [`deferred-leveldown`][deferred-leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-7.2-brightgreen.svg) [![dependencies](https://img.shields.io/david/Level/deferred-leveldown.svg)](https://david-dm.org/Level/deferred-leveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/deferred-leveldown)](https://github.com/Level/deferred-leveldown) [![Contributors](https://img.shields.io/github/contributors/Level/deferred-leveldown?color=brightgreen)](https://github.com/Level/deferred-leveldown/graphs/contributors)

Handles delayed-open. Built into [`levelup`][levelup].

### [`level-cowdown`][level-cowdown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-red.svg) [![dependencies](https://img.shields.io/david/substack/level-cowdown.svg)](https://david-dm.org/substack/level-cowdown) [![Last commit](https://img.shields.io/github/last-commit/substack/level-cowdown)](https://github.com/substack/level-cowdown) [![Contributors](https://img.shields.io/github/contributors/substack/level-cowdown?color=brightgreen)](https://github.com/substack/level-cowdown/graphs/contributors)

Copy-on-write [`abstract-leveldown`][abstract-leveldown] layer.

### [`abstract-stream-leveldown`][abstract-stream-leveldown]

![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.1-red.svg) [![dependencies](https://img.shields.io/david/jed/abstract-stream-leveldown.svg)](https://david-dm.org/jed/abstract-stream-leveldown) [![Last commit](https://img.shields.io/github/last-commit/jed/abstract-stream-leveldown)](https://github.com/jed/abstract-stream-leveldown) [![Contributors](https://img.shields.io/github/contributors/jed/abstract-stream-leveldown?color=brightgreen)](https://github.com/jed/abstract-stream-leveldown/graphs/contributors)

A stream-based abstract prototype.

## Encodings

**Custom [`level-codec`][level-codec] compatible encodings for use with [`encoding-down`][encoding-down].**

### [`charwise`][charwise]

[![dependencies](https://img.shields.io/david/dominictarr/charwise.svg)](https://david-dm.org/dominictarr/charwise) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/charwise)](https://github.com/dominictarr/charwise) [![Contributors](https://img.shields.io/github/contributors/dominictarr/charwise?color=brightgreen)](https://github.com/dominictarr/charwise/graphs/contributors)

Encode/decode with same encoded sort order as [`bytewise`][bytewise].

### [`bytewise`][bytewise]

[![dependencies](https://img.shields.io/david/deanlandolt/bytewise.svg)](https://david-dm.org/deanlandolt/bytewise) [![Last commit](https://img.shields.io/github/last-commit/deanlandolt/bytewise)](https://github.com/deanlandolt/bytewise) [![Contributors](https://img.shields.io/github/contributors/deanlandolt/bytewise?color=brightgreen)](https://github.com/deanlandolt/bytewise/graphs/contributors)

Binary serialization which sorts bytewise for arbitrarily complex data structures.  NB. Use [`charwise`][charwise] if possible. Gives you almost everything `bytewise` does but much faster.

### [`protocol-buffers`][protocol-buffers]

[![dependencies](https://img.shields.io/david/mafintosh/protocol-buffers.svg)](https://david-dm.org/mafintosh/protocol-buffers) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/protocol-buffers)](https://github.com/mafintosh/protocol-buffers) [![Contributors](https://img.shields.io/github/contributors/mafintosh/protocol-buffers?color=brightgreen)](https://github.com/mafintosh/protocol-buffers/graphs/contributors)

[Protocol Buffers](https://developers.google.com/protocol-buffers/) for Node.js. Compiled messages are [`level-codec`][level-codec] compatible encodings.

### [`lexicographic-integer-encoding`][lexicographic-integer-encoding]

[![dependencies](https://img.shields.io/david/vweevers/lexicographic-integer-encoding.svg)](https://david-dm.org/vweevers/lexicographic-integer-encoding) [![Last commit](https://img.shields.io/github/last-commit/vweevers/lexicographic-integer-encoding)](https://github.com/vweevers/lexicographic-integer-encoding) [![Contributors](https://img.shields.io/github/contributors/vweevers/lexicographic-integer-encoding?color=brightgreen)](https://github.com/vweevers/lexicographic-integer-encoding/graphs/contributors)

Wraps [`lexicographic-integer`](https://github.com/substack/lexicographic-integer).

## Sublevels

**Modules related to splitting a database into sections a.k.a. sublevels.**

### [`subleveldown`][subleveldown]

[![dependencies](https://img.shields.io/david/Level/subleveldown.svg)](https://david-dm.org/Level/subleveldown) [![Last commit](https://img.shields.io/github/last-commit/Level/subleveldown)](https://github.com/Level/subleveldown) [![Contributors](https://img.shields.io/github/contributors/Level/subleveldown?color=brightgreen)](https://github.com/Level/subleveldown/graphs/contributors)

Split a [`levelup`][levelup] database into sublevels with their own keyspace, encoding and events.

### [`level-temp`][level-temp]

[![dependencies](https://img.shields.io/david/mafintosh/level-temp.svg)](https://david-dm.org/mafintosh/level-temp) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-temp)](https://github.com/mafintosh/level-temp) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-temp?color=brightgreen)](https://github.com/mafintosh/level-temp/graphs/contributors)

Create a temporary [`subleveldown`][subleveldown] sublevel that is guaranteed to be empty.

### [`level-mount`][level-mount]

[![dependencies](https://img.shields.io/david/u8sand/level-mount.svg)](https://david-dm.org/u8sand/level-mount) [![Last commit](https://img.shields.io/github/last-commit/u8sand/level-mount)](https://github.com/u8sand/level-mount) [![Contributors](https://img.shields.io/github/contributors/u8sand/level-mount?color=brightgreen)](https://github.com/u8sand/level-mount/graphs/contributors)

Mount multiple [`abstract-leveldown`][abstract-leveldown] stores by key prefix onto a single store. Can be used with [`subleveldown`][subleveldown].

### [`bytespace`][bytespace]

[![dependencies](https://img.shields.io/david/deanlandolt/bytespace.svg)](https://david-dm.org/deanlandolt/bytespace) [![Last commit](https://img.shields.io/github/last-commit/deanlandolt/bytespace)](https://github.com/deanlandolt/bytespace) [![Contributors](https://img.shields.io/github/contributors/deanlandolt/bytespace?color=brightgreen)](https://github.com/deanlandolt/bytespace/graphs/contributors)

Keypath subspaces prefixed with [`bytewise`][bytewise] tuples. Similar to [`level-sublevel`][level-sublevel].  NB. [`bytewise`][bytewise] - and thus [`bytespace`][bytespace] - can be slow. Consider using [`subleveldown`][subleveldown] paired with the [`charwise`][charwise] encoding instead.

### [`level-sublevel`][level-sublevel]

[![dependencies](https://img.shields.io/david/dominictarr/level-sublevel.svg)](https://david-dm.org/dominictarr/level-sublevel) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-sublevel)](https://github.com/dominictarr/level-sublevel) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-sublevel?color=brightgreen)](https://github.com/dominictarr/level-sublevel/graphs/contributors)

Adds the ability to create subsections with the same API as [`levelup`][levelup], but only write/read to a prefixed section, or bucket, of the key-space. Each section also has [`level-hooks`][level-hooks] installed.  NB. No longer maintained. We recommend [`subleveldown`][subleveldown] instead.

### [`sublevel-prefixer`][sublevel-prefixer]

[![dependencies](https://img.shields.io/david/mafintosh/sublevel-prefixer.svg)](https://david-dm.org/mafintosh/sublevel-prefixer) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/sublevel-prefixer)](https://github.com/mafintosh/sublevel-prefixer) [![Contributors](https://img.shields.io/github/contributors/mafintosh/sublevel-prefixer?color=brightgreen)](https://github.com/mafintosh/sublevel-prefixer/graphs/contributors)

Utility to prefix a key with a sublevel prefix.

### [`level-sublevel-stream`][level-sublevel-stream]

[![dependencies](https://img.shields.io/david/juliangruber/level-sublevel-stream.svg)](https://david-dm.org/juliangruber/level-sublevel-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sublevel-stream)](https://github.com/juliangruber/level-sublevel-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sublevel-stream?color=brightgreen)](https://github.com/juliangruber/level-sublevel-stream/graphs/contributors)

Find [`level-sublevel`][level-sublevel] sublevels, not requiring them to be in memory already.

### [`level-subtree`][level-subtree]

[![dependencies](https://img.shields.io/david/hij1nx/level-subtree.svg)](https://david-dm.org/hij1nx/level-subtree) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-subtree)](https://github.com/hij1nx/level-subtree) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-subtree?color=brightgreen)](https://github.com/hij1nx/level-subtree/graphs/contributors)

Generate a tree from [`level-sublevel`][level-sublevel] sublevels, useful when there is no manifest.

### [`level-superlevel`][level-superlevel]

[![dependencies](https://img.shields.io/david/randymized/level-superlevel.svg)](https://david-dm.org/randymized/level-superlevel) [![Last commit](https://img.shields.io/github/last-commit/randymized/level-superlevel)](https://github.com/randymized/level-superlevel) [![Contributors](https://img.shields.io/github/contributors/randymized/level-superlevel?color=brightgreen)](https://github.com/randymized/level-superlevel/graphs/contributors)

Superlevel adds a "super" level that allows accessing the entire database, discovering [`level-sublevel`][level-sublevel] sublevels and browsing the database without knowledge of the sublevel structure.

### [`level-subkey`][level-subkey]

[![dependencies](https://img.shields.io/david/snowyu/level-subkey.svg)](https://david-dm.org/snowyu/level-subkey) [![Last commit](https://img.shields.io/github/last-commit/snowyu/level-subkey)](https://github.com/snowyu/level-subkey) [![Contributors](https://img.shields.io/github/contributors/snowyu/level-subkey?color=brightgreen)](https://github.com/snowyu/level-subkey/graphs/contributors)

Use path-like keys to separate sections of [`levelup`][levelup], with hooks. Adapted from [`level-sublevel`][level-sublevel].

### [`level-mirror`][level-mirror]

[![dependencies](https://img.shields.io/david/juliangruber/level-mirror.svg)](https://david-dm.org/juliangruber/level-mirror) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-mirror)](https://github.com/juliangruber/level-mirror) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-mirror?color=brightgreen)](https://github.com/juliangruber/level-mirror/graphs/contributors)

Mirror and optionally transform data from one [`level-sublevel`][level-sublevel] sublevel into another.

## Processing

**Modules for indexing, alternative forms of querying data, MapReduce models and other forms of data processing.**

### [`level-auto-index`][level-auto-index]

[![dependencies](https://img.shields.io/david/hypermodules/level-auto-index.svg)](https://david-dm.org/hypermodules/level-auto-index) [![Last commit](https://img.shields.io/github/last-commit/hypermodules/level-auto-index)](https://github.com/hypermodules/level-auto-index) [![Contributors](https://img.shields.io/github/contributors/hypermodules/level-auto-index?color=brightgreen)](https://github.com/hypermodules/level-auto-index/graphs/contributors)

Automatic secondary indexing for [`levelup`][levelup] and [`subleveldown`][subleveldown].

### [`jsonquery`][jsonquery]

[![dependencies](https://img.shields.io/david/eugeneware/jsonquery.svg)](https://david-dm.org/eugeneware/jsonquery) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/jsonquery)](https://github.com/eugeneware/jsonquery) [![Contributors](https://img.shields.io/github/contributors/eugeneware/jsonquery?color=brightgreen)](https://github.com/eugeneware/jsonquery/graphs/contributors)

Query [`levelup`][levelup] with a MongoDB-like query API that returns streams.

### [`jsonquery-engine`][jsonquery-engine]

[![dependencies](https://img.shields.io/david/eugeneware/jsonquery-engine.svg)](https://david-dm.org/eugeneware/jsonquery-engine) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/jsonquery-engine)](https://github.com/eugeneware/jsonquery-engine) [![Contributors](https://img.shields.io/github/contributors/eugeneware/jsonquery-engine?color=brightgreen)](https://github.com/eugeneware/jsonquery-engine/graphs/contributors)

A full MongoDB query language implementation with indexes for querying [`levelup`][levelup].

### [`level-indico`][level-indico]

[![dependencies](https://img.shields.io/david/mariocasciaro/level-indico.svg)](https://david-dm.org/mariocasciaro/level-indico) [![Last commit](https://img.shields.io/github/last-commit/mariocasciaro/level-indico)](https://github.com/mariocasciaro/level-indico) [![Contributors](https://img.shields.io/github/contributors/mariocasciaro/level-indico?color=brightgreen)](https://github.com/mariocasciaro/level-indico/graphs/contributors)

Yet another indexing plugin for [`levelup`][levelup]. By providing only a low-level querying mechanism it gives you the power to build more complicated and optimized queries on top of it.<br><br>NB. Relies on [`bytewise`][bytewise] and [`level-sublevel`][level-sublevel], both of which have caveats.

### [`level-inverted-index`][level-inverted-index]

[![dependencies](https://img.shields.io/david/dominictarr/level-inverted-index.svg)](https://david-dm.org/dominictarr/level-inverted-index) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-inverted-index)](https://github.com/dominictarr/level-inverted-index) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-inverted-index?color=brightgreen)](https://github.com/dominictarr/level-inverted-index/graphs/contributors)

Create an inverted index for full-text search.

### [`map-reduce`][map-reduce]

[![dependencies](https://img.shields.io/david/dominictarr/map-reduce.svg)](https://david-dm.org/dominictarr/map-reduce) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/map-reduce)](https://github.com/dominictarr/map-reduce) [![Contributors](https://img.shields.io/github/contributors/dominictarr/map-reduce?color=brightgreen)](https://github.com/dominictarr/map-reduce/graphs/contributors)

A MapReduce implementation on top of [`levelup`][levelup]. Allows you to define a map reduce query that will run on top of your db. The map reduces are incremental, and you can query the results in real-time.

### [`level-map-merge`][level-map-merge]

[![dependencies](https://img.shields.io/david/dominictarr/level-map-merge.svg)](https://david-dm.org/dominictarr/level-map-merge) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-map-merge)](https://github.com/dominictarr/level-map-merge) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-map-merge?color=brightgreen)](https://github.com/dominictarr/level-map-merge/graphs/contributors)

Like [`map-reduce`][map-reduce] but simpler. Has a batch component that runs periodically, and a real-time component that fills in the gaps. Good for generating inverted indexes.

### [`level-queryengine`][level-queryengine]

[![dependencies](https://img.shields.io/david/eugeneware/level-queryengine.svg)](https://david-dm.org/eugeneware/level-queryengine) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-queryengine)](https://github.com/eugeneware/level-queryengine) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-queryengine?color=brightgreen)](https://github.com/eugeneware/level-queryengine/graphs/contributors)

A generic pluggable query-engine system (that supports indexes) for [`levelup`][levelup].

### [`level-trigger`][level-trigger]

[![dependencies](https://img.shields.io/david/dominictarr/level-trigger.svg)](https://david-dm.org/dominictarr/level-trigger) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-trigger)](https://github.com/dominictarr/level-trigger) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-trigger?color=brightgreen)](https://github.com/dominictarr/level-trigger/graphs/contributors)

Triggers for [`levelup`][levelup]. Runs an async job when a key changes. All jobs will eventually run, even across restarts!

### [`levels`][levels]

[![dependencies](https://img.shields.io/david/eugeneware/levels.svg)](https://david-dm.org/eugeneware/levels) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/levels)](https://github.com/eugeneware/levels) [![Contributors](https://img.shields.io/github/contributors/eugeneware/levels?color=brightgreen)](https://github.com/eugeneware/levels/graphs/contributors)

A light-weight full text search engine for [`levelup`][levelup] (Port of TJ's [reds](https://github.com/visionmedia/reds) redis search engine).

### [`map-reduce-chained`][map-reduce-chained]

[![dependencies](https://img.shields.io/david/ryanramage/map-reduce-chained.svg)](https://david-dm.org/ryanramage/map-reduce-chained) [![Last commit](https://img.shields.io/github/last-commit/ryanramage/map-reduce-chained)](https://github.com/ryanramage/map-reduce-chained) [![Contributors](https://img.shields.io/github/contributors/ryanramage/map-reduce-chained?color=brightgreen)](https://github.com/ryanramage/map-reduce-chained/graphs/contributors)

Extends [`map-reduce`][map-reduce] and [`level-mapped-index`][level-mapped-index] to provide easy to setup chained MapReduce. An example use case is to find the top 10 values after a reduce.

### [`path-engine`][path-engine]

[![dependencies](https://img.shields.io/david/eugeneware/path-engine.svg)](https://david-dm.org/eugeneware/path-engine) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/path-engine)](https://github.com/eugeneware/path-engine) [![Contributors](https://img.shields.io/github/contributors/eugeneware/path-engine?color=brightgreen)](https://github.com/eugeneware/path-engine/graphs/contributors)

Query [`levelup`][levelup] using a JavaScript property path array syntax with indexes.

### [`subindex`][subindex]

[![dependencies](https://img.shields.io/david/eugeneware/subindex.svg)](https://david-dm.org/eugeneware/subindex) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/subindex)](https://github.com/eugeneware/subindex) [![Contributors](https://img.shields.io/github/contributors/eugeneware/subindex?color=brightgreen)](https://github.com/eugeneware/subindex/graphs/contributors)

Generic pluggable indexing system for [`levelup`][levelup].

### [`level-sec`][level-sec]

[![dependencies](https://img.shields.io/david/juliangruber/level-sec.svg)](https://david-dm.org/juliangruber/level-sec) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sec)](https://github.com/juliangruber/level-sec) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sec?color=brightgreen)](https://github.com/juliangruber/level-sec/graphs/contributors)

High-level API for creating secondary indexes.

### [`level-secondary`][level-secondary]

[![dependencies](https://img.shields.io/david/juliangruber/level-secondary.svg)](https://david-dm.org/juliangruber/level-secondary) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-secondary)](https://github.com/juliangruber/level-secondary) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-secondary?color=brightgreen)](https://github.com/juliangruber/level-secondary/graphs/contributors)

Create and query secondary indexes.

### [`inverted-index`][inverted-index]

[![dependencies](https://img.shields.io/david/kordon/inverted.svg)](https://david-dm.org/kordon/inverted) [![Last commit](https://img.shields.io/github/last-commit/kordon/inverted)](https://github.com/kordon/inverted) [![Contributors](https://img.shields.io/github/contributors/kordon/inverted?color=brightgreen)](https://github.com/kordon/inverted/graphs/contributors)

Inverted index built upon [`levelup`][levelup].

### [`level-index-update`][level-index-update]

[![dependencies](https://img.shields.io/david/binocarlos/level-index-update.svg)](https://david-dm.org/binocarlos/level-index-update) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/level-index-update)](https://github.com/binocarlos/level-index-update) [![Contributors](https://img.shields.io/github/contributors/binocarlos/level-index-update?color=brightgreen)](https://github.com/binocarlos/level-index-update/graphs/contributors)

Remove the old indexes in the same batch as the new ones are inserted.

### [`range-index`][range-index]

[![dependencies](https://img.shields.io/david/kordon/range.svg)](https://david-dm.org/kordon/range) [![Last commit](https://img.shields.io/github/last-commit/kordon/range)](https://github.com/kordon/range) [![Contributors](https://img.shields.io/github/contributors/kordon/range?color=brightgreen)](https://github.com/kordon/range/graphs/contributors)

Range indexes for [`levelup`][levelup].

### [`level-path-index`][level-path-index]

[![dependencies](https://img.shields.io/david/binocarlos/level-path-index.svg)](https://david-dm.org/binocarlos/level-path-index) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/level-path-index)](https://github.com/binocarlos/level-path-index) [![Contributors](https://img.shields.io/github/contributors/binocarlos/level-path-index?color=brightgreen)](https://github.com/binocarlos/level-path-index/graphs/contributors)

Index properties of items that live in a tree of materialized paths.

### [`level-sql`][level-sql]

[![dependencies](https://img.shields.io/david/hij1nx/level-sql.svg)](https://david-dm.org/hij1nx/level-sql) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-sql)](https://github.com/hij1nx/level-sql) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-sql?color=brightgreen)](https://github.com/hij1nx/level-sql/graphs/contributors)

SQL queries for [`levelup`][levelup].

### [`level-hash-index`][level-hash-index]

[![dependencies](https://img.shields.io/david/smallhelm/level-hash-index.svg)](https://david-dm.org/smallhelm/level-hash-index) [![Last commit](https://img.shields.io/github/last-commit/smallhelm/level-hash-index)](https://github.com/smallhelm/level-hash-index) [![Contributors](https://img.shields.io/github/contributors/smallhelm/level-hash-index?color=brightgreen)](https://github.com/smallhelm/level-hash-index/graphs/contributors)

Store any string into [`levelup`][levelup], and get a collision free hash of that value that you can use in an index (or similar).

### [`level-idx`][level-idx]

[![dependencies](https://img.shields.io/david/hypermodules/level-idx.svg)](https://david-dm.org/hypermodules/level-idx) [![Last commit](https://img.shields.io/github/last-commit/hypermodules/level-idx)](https://github.com/hypermodules/level-idx) [![Contributors](https://img.shields.io/github/contributors/hypermodules/level-idx?color=brightgreen)](https://github.com/hypermodules/level-idx/graphs/contributors)

Another high-level API for creating secondary indexes, using [`level-auto-index`][level-auto-index].

### [`level-indexer`][level-indexer]

[![dependencies](https://img.shields.io/david/mafintosh/level-indexer.svg)](https://david-dm.org/mafintosh/level-indexer) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-indexer)](https://github.com/mafintosh/level-indexer) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-indexer?color=brightgreen)](https://github.com/mafintosh/level-indexer/graphs/contributors)

Generic indexer for [`levelup`][levelup]. Only stores document keys for space efficiency.

### [`level-librarian`][level-librarian]

[![dependencies](https://img.shields.io/david/microstar-db/level-librarian.svg)](https://david-dm.org/microstar-db/level-librarian) [![Last commit](https://img.shields.io/github/last-commit/microstar-db/level-librarian)](https://github.com/microstar-db/level-librarian) [![Contributors](https://img.shields.io/github/contributors/microstar-db/level-librarian?color=brightgreen)](https://github.com/microstar-db/level-librarian/graphs/contributors)

Lightweight indexing and querying with the LLCJ query language.

### [`level-match-index`][level-match-index]

[![dependencies](https://img.shields.io/david/mmckegg/level-match-index.svg)](https://david-dm.org/mmckegg/level-match-index) [![Last commit](https://img.shields.io/github/last-commit/mmckegg/level-match-index)](https://github.com/mmckegg/level-match-index) [![Contributors](https://img.shields.io/github/contributors/mmckegg/level-match-index?color=brightgreen)](https://github.com/mmckegg/level-match-index/graphs/contributors)

Index and filter [`level-sublevel`][level-sublevel] databases and watch for future changes.

### [`level-assoc`][level-assoc]

[![dependencies](https://img.shields.io/david/substack/level-assoc.svg)](https://david-dm.org/substack/level-assoc) [![Last commit](https://img.shields.io/github/last-commit/substack/level-assoc)](https://github.com/substack/level-assoc) [![Contributors](https://img.shields.io/github/contributors/substack/level-assoc?color=brightgreen)](https://github.com/substack/level-assoc/graphs/contributors)

Relational foreign key associations (`hasMany`, `belongsTo`) for [`levelup`][levelup].

### [`level-tree-index`][level-tree-index]

[![dependencies](https://img.shields.io/david/biobricks/level-tree-index.svg)](https://david-dm.org/biobricks/level-tree-index) [![Last commit](https://img.shields.io/github/last-commit/biobricks/level-tree-index)](https://github.com/biobricks/level-tree-index) [![Contributors](https://img.shields.io/github/contributors/biobricks/level-tree-index?color=brightgreen)](https://github.com/biobricks/level-tree-index/graphs/contributors)

Tree indexer for [`levelup`][levelup].

### [`changes-index`][changes-index]

[![dependencies](https://img.shields.io/david/substack/changes-index.svg)](https://david-dm.org/substack/changes-index) [![Last commit](https://img.shields.io/github/last-commit/substack/changes-index)](https://github.com/substack/changes-index) [![Contributors](https://img.shields.io/github/contributors/substack/changes-index?color=brightgreen)](https://github.com/substack/changes-index/graphs/contributors)

Create indexes from a [changes-feed](https://github.com/mafintosh/changes-feed). Provides a way to create a materialized view on top of an append-only log.

### [`changesdown`][changesdown]

[![dependencies](https://img.shields.io/david/mafintosh/changesdown.svg)](https://david-dm.org/mafintosh/changesdown) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/changesdown)](https://github.com/mafintosh/changesdown) [![Contributors](https://img.shields.io/github/contributors/mafintosh/changesdown?color=brightgreen)](https://github.com/mafintosh/changesdown/graphs/contributors)

[`levelup`][levelup] interface that uses an [`abstract-leveldown`][abstract-leveldown] store that writes to a [changes-feed](https://github.com/mafintosh/changes-feed) to store its state.

### [`level-ordered`][level-ordered]

[![dependencies](https://img.shields.io/david/eranbnn/level-ordered.svg)](https://david-dm.org/eranbnn/level-ordered) [![Last commit](https://img.shields.io/github/last-commit/eranbnn/level-ordered)](https://github.com/eranbnn/level-ordered) [![Contributors](https://img.shields.io/github/contributors/eranbnn/level-ordered?color=brightgreen)](https://github.com/eranbnn/level-ordered/graphs/contributors)

A wrapper for [`level`][level] that keeps inserted items ordered.

## Databases

**Complete Node.js databases built with Level.**

### [`dat`][dat]

[![dependencies](https://img.shields.io/david/maxogden/dat.svg)](https://david-dm.org/maxogden/dat) [![Last commit](https://img.shields.io/github/last-commit/maxogden/dat)](https://github.com/maxogden/dat) [![Contributors](https://img.shields.io/github/contributors/maxogden/dat?color=brightgreen)](https://github.com/maxogden/dat/graphs/contributors)

Lets you build streaming data pipelines that can be shared and replicated by others.

### [`pouchdb`][pouchdb]

![dependencies](https://img.shields.io/badge/dependencies-unknown-lightgrey.svg)

PouchDB allows you to store and query data offline and then sync with CouchDB when online. For Node, browser and mobile.

### [`couchup`][couchup]

[![dependencies](https://img.shields.io/david/mikeal/couchup.svg)](https://david-dm.org/mikeal/couchup) [![Last commit](https://img.shields.io/github/last-commit/mikeal/couchup)](https://github.com/mikeal/couchup) [![Contributors](https://img.shields.io/github/contributors/mikeal/couchup?color=brightgreen)](https://github.com/mikeal/couchup/graphs/contributors)

A CouchDB implementation on top of [`levelup`][levelup].

### [`firedup`][firedup]

[![dependencies](https://img.shields.io/david/eugeneware/firedup.svg)](https://david-dm.org/eugeneware/firedup) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/firedup)](https://github.com/eugeneware/firedup) [![Contributors](https://img.shields.io/github/contributors/eugeneware/firedup?color=brightgreen)](https://github.com/eugeneware/firedup/graphs/contributors)

A node.js implementation of firebase based on [`levelup`][levelup].

### [`len`][len]

[![dependencies](https://img.shields.io/david/binocarlos/len.svg)](https://david-dm.org/binocarlos/len) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/len)](https://github.com/binocarlos/len) [![Contributors](https://img.shields.io/github/contributors/binocarlos/len?color=brightgreen)](https://github.com/binocarlos/len/graphs/contributors)

Len is a resource booking database using LevelDB for storage. Useful for calendar and gantt chart apps and for questions like 'can a customer book this resource starting X and ending Y'.

### [`lem`][lem]

[![dependencies](https://img.shields.io/david/binocarlos/lem.svg)](https://david-dm.org/binocarlos/lem) [![Last commit](https://img.shields.io/github/last-commit/binocarlos/lem)](https://github.com/binocarlos/lem) [![Contributors](https://img.shields.io/github/contributors/binocarlos/lem?color=brightgreen)](https://github.com/binocarlos/lem/graphs/contributors)

Lem is a telemetry storage database using LevelDB. Keys are indexed by timestamp and you can read values in-between 2 points in time.

### [`levelgraph`][levelgraph]

[![dependencies](https://img.shields.io/david/mcollina/node-levelgraph.svg)](https://david-dm.org/mcollina/node-levelgraph) [![Last commit](https://img.shields.io/github/last-commit/mcollina/node-levelgraph)](https://github.com/mcollina/node-levelgraph) [![Contributors](https://img.shields.io/github/contributors/mcollina/node-levelgraph?color=brightgreen)](https://github.com/mcollina/node-levelgraph/graphs/contributors)

A Graph database built on top of [`levelup`][levelup] with pattern-matching and join support.

### [`linvodb3`][linvodb3]

[![dependencies](https://img.shields.io/david/Ivshti/linvodb3.svg)](https://david-dm.org/Ivshti/linvodb3) [![Last commit](https://img.shields.io/github/last-commit/Ivshti/linvodb3)](https://github.com/Ivshti/linvodb3) [![Contributors](https://img.shields.io/github/contributors/Ivshti/linvodb3?color=brightgreen)](https://github.com/Ivshti/linvodb3/graphs/contributors)

Persistent database on top of [`levelup`][levelup] for Node.js/NW.js with MongoDB-style queries, Mongoose-like models and a map/reduce system.

### [`rxdb`][rxdb]

[![dependencies](https://img.shields.io/david/pubkey/rxdb.svg)](https://david-dm.org/pubkey/rxdb) [![Last commit](https://img.shields.io/github/last-commit/pubkey/rxdb)](https://github.com/pubkey/rxdb) [![Contributors](https://img.shields.io/github/contributors/pubkey/rxdb?color=brightgreen)](https://github.com/pubkey/rxdb/graphs/contributors)

Event-driven database based on [`pouchdb`][pouchdb]. Optimized for reactive programming with observables. Events and state is automatically shared between multiple browser tabs. Queries are defined by the mongoDB mango-standard.

### [`pushdb`][pushdb]

[![dependencies](https://img.shields.io/david/mikeal/pushdb.svg)](https://david-dm.org/mikeal/pushdb) [![Last commit](https://img.shields.io/github/last-commit/mikeal/pushdb)](https://github.com/mikeal/pushdb) [![Contributors](https://img.shields.io/github/contributors/mikeal/pushdb?color=brightgreen)](https://github.com/mikeal/pushdb/graphs/contributors)

A programmable database with document storage and unique indexing capabilities.

### [`search-index`][search-index]

[![dependencies](https://img.shields.io/david/fergiemcdowall/search-index.svg)](https://david-dm.org/fergiemcdowall/search-index) [![Last commit](https://img.shields.io/github/last-commit/fergiemcdowall/search-index)](https://github.com/fergiemcdowall/search-index) [![Contributors](https://img.shields.io/github/contributors/fergiemcdowall/search-index?color=brightgreen)](https://github.com/fergiemcdowall/search-index/graphs/contributors)

A persistent full text search engine for browser and Node.js.

### [`tacodb`][tacodb]

[![dependencies](https://img.shields.io/david/dominictarr/tacodb.svg)](https://david-dm.org/dominictarr/tacodb) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/tacodb)](https://github.com/dominictarr/tacodb) [![Contributors](https://img.shields.io/github/contributors/dominictarr/tacodb?color=brightgreen)](https://github.com/dominictarr/tacodb/graphs/contributors)

A responsive, Node.js-style database ideal for realtime data. Highly modular and adaptable, allowing extension with the [Level][level-org] ecosystem.

### [`timestreamdb`][timestreamdb]

[![dependencies](https://img.shields.io/david/brycebaril/timestreamdb.svg)](https://david-dm.org/brycebaril/timestreamdb) [![Last commit](https://img.shields.io/github/last-commit/brycebaril/timestreamdb)](https://github.com/brycebaril/timestreamdb) [![Contributors](https://img.shields.io/github/contributors/brycebaril/timestreamdb?color=brightgreen)](https://github.com/brycebaril/timestreamdb/graphs/contributors)

A full-featured timeseries database on top of LevelDB. Includes a library for streaming statistical operations on timeseries data including joins, aggregates, filters, and map-like operations.

### [`@nano-sql/core`][@nano-sql/core]

[![dependencies](https://img.shields.io/david/ClickSimply/Nano-SQL.svg)](https://david-dm.org/ClickSimply/Nano-SQL) [![Last commit](https://img.shields.io/github/last-commit/ClickSimply/Nano-SQL)](https://github.com/ClickSimply/Nano-SQL) [![Contributors](https://img.shields.io/github/contributors/ClickSimply/Nano-SQL?color=brightgreen)](https://github.com/ClickSimply/Nano-SQL/graphs/contributors)

A small (10Kb) RDBMS abstraction on top of [`levelup`][levelup] that also runs in the browser with undo/redo support, immutable objects and IndexedDB persistence.

### [`vertical`][vertical]

[![dependencies](https://img.shields.io/david/zy445566/vertical.svg)](https://david-dm.org/zy445566/vertical) [![Last commit](https://img.shields.io/github/last-commit/zy445566/vertical)](https://github.com/zy445566/vertical) [![Contributors](https://img.shields.io/github/contributors/zy445566/vertical?color=brightgreen)](https://github.com/zy445566/vertical/graphs/contributors)

LevelDB distributed, Server and Client!

### [`flash-store`][flash-store]

[![dependencies](https://img.shields.io/david/zixia/flash-store.svg)](https://david-dm.org/zixia/flash-store) [![Last commit](https://img.shields.io/github/last-commit/zixia/flash-store)](https://github.com/zixia/flash-store) [![Contributors](https://img.shields.io/github/contributors/zixia/flash-store?color=brightgreen)](https://github.com/zixia/flash-store/graphs/contributors)

FlashStore is a Key-Value persistent storage with easy to use ES6 Map-like API(both Async and Sync support), powered by LevelDB and TypeScript.

### [`level-fact-base`][level-fact-base]

[![dependencies](https://img.shields.io/david/smallhelm/level-fact-base.svg)](https://david-dm.org/smallhelm/level-fact-base) [![Last commit](https://img.shields.io/github/last-commit/smallhelm/level-fact-base)](https://github.com/smallhelm/level-fact-base) [![Contributors](https://img.shields.io/github/contributors/smallhelm/level-fact-base?color=brightgreen)](https://github.com/smallhelm/level-fact-base/graphs/contributors)

Store immutable facts and query them with datalog.

### [`dulcimer`][dulcimer]

[![dependencies](https://img.shields.io/david/fritzy/dulcimer.svg)](https://david-dm.org/fritzy/dulcimer) [![Last commit](https://img.shields.io/github/last-commit/fritzy/dulcimer)](https://github.com/fritzy/dulcimer) [![Contributors](https://img.shields.io/github/contributors/fritzy/dulcimer?color=brightgreen)](https://github.com/fritzy/dulcimer/graphs/contributors)

Define JSON models and manage indexes, children, foreign keys and much more.

### [`levi`][levi]

[![dependencies](https://img.shields.io/david/cshum/levi.svg)](https://david-dm.org/cshum/levi) [![Last commit](https://img.shields.io/github/last-commit/cshum/levi)](https://github.com/cshum/levi) [![Contributors](https://img.shields.io/github/contributors/cshum/levi?color=brightgreen)](https://github.com/cshum/levi/graphs/contributors)

Stream based full-text search for Node.js and browser using [`levelup`][levelup].

### [`level-mongo`][level-mongo]

[![dependencies](https://img.shields.io/david/simon-p-r/level-mongo.svg)](https://david-dm.org/simon-p-r/level-mongo) [![Last commit](https://img.shields.io/github/last-commit/simon-p-r/level-mongo)](https://github.com/simon-p-r/level-mongo) [![Contributors](https://img.shields.io/github/contributors/simon-p-r/level-mongo?color=brightgreen)](https://github.com/simon-p-r/level-mongo/graphs/contributors)

MongoDB-like database backed by LevelDB.

### [`level-orm`][level-orm]

[![dependencies](https://img.shields.io/david/eugeneware/level-orm.svg)](https://david-dm.org/eugeneware/level-orm) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-orm)](https://github.com/eugeneware/level-orm) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-orm?color=brightgreen)](https://github.com/eugeneware/level-orm/graphs/contributors)

Simple ORM built on [`levelup`][levelup].

### [`level-lively`][level-lively]

[![dependencies](https://img.shields.io/david/eugeneware/level-lively.svg)](https://david-dm.org/eugeneware/level-lively) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-lively)](https://github.com/eugeneware/level-lively) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-lively?color=brightgreen)](https://github.com/eugeneware/level-lively/graphs/contributors)

[`levelup`][levelup] implementation of [LivelyDb](https://github.com/eugeneware/livelydb) for doing real-time data binding of a database with local javascript objects.

### [`kwdb`][kwdb]

[![dependencies](https://img.shields.io/david/KsRyY/kwdb.svg)](https://david-dm.org/KsRyY/kwdb) [![Last commit](https://img.shields.io/github/last-commit/KsRyY/kwdb)](https://github.com/KsRyY/kwdb) [![Contributors](https://img.shields.io/github/contributors/KsRyY/kwdb?color=brightgreen)](https://github.com/KsRyY/kwdb/graphs/contributors)

REST wrapper for [`levelup`][levelup].

### [`level-restful`][level-restful]

[![dependencies](https://img.shields.io/david/karissa/level-restful.svg)](https://david-dm.org/karissa/level-restful) [![Last commit](https://img.shields.io/github/last-commit/karissa/level-restful)](https://github.com/karissa/level-restful) [![Contributors](https://img.shields.io/github/contributors/karissa/level-restful?color=brightgreen)](https://github.com/karissa/level-restful/graphs/contributors)

REST wrapper for [`levelup`][levelup], as an extension to [`level-orm`][level-orm].

### [`level-rest`][level-rest]

[![dependencies](https://img.shields.io/david/shama/level-rest.svg)](https://david-dm.org/shama/level-rest) [![Last commit](https://img.shields.io/github/last-commit/shama/level-rest)](https://github.com/shama/level-rest) [![Contributors](https://img.shields.io/github/contributors/shama/level-rest?color=brightgreen)](https://github.com/shama/level-rest/graphs/contributors)

REST wrapper for [`levelup`][levelup]. NB. Not compatible with latest [`levelup`][levelup].

## Shared Access

### [`multileveldown`][multileveldown]

[![dependencies](https://img.shields.io/david/mafintosh/multileveldown.svg)](https://david-dm.org/mafintosh/multileveldown) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/multileveldown)](https://github.com/mafintosh/multileveldown) [![Contributors](https://img.shields.io/github/contributors/mafintosh/multileveldown?color=brightgreen)](https://github.com/mafintosh/multileveldown/graphs/contributors)

Share a [`levelup`][levelup] instance across multiple processes or over the network. An alternative to [`multilevel`][multilevel], implemented as [`abstract-leveldown`][abstract-leveldown] stores with seamless retry support.

### [`level-party`][level-party]

[![dependencies](https://img.shields.io/david/substack/level-party.svg)](https://david-dm.org/substack/level-party) [![Last commit](https://img.shields.io/github/last-commit/substack/level-party)](https://github.com/substack/level-party) [![Contributors](https://img.shields.io/github/contributors/substack/level-party?color=brightgreen)](https://github.com/substack/level-party/graphs/contributors)

Open a LevelDB ([`leveldown`][leveldown]) handle multiple times, transparently upgrading to [`multileveldown`][multileveldown] when more than 1 process try to use the same LevelDB data directory at once and re-electing a new master when the primary unix socket (or named pipe) goes down.

### [`cluster-levelup`][cluster-levelup]

[![dependencies](https://img.shields.io/david/chiguireitor/cluster-levelup.svg)](https://david-dm.org/chiguireitor/cluster-levelup) [![Last commit](https://img.shields.io/github/last-commit/chiguireitor/cluster-levelup)](https://github.com/chiguireitor/cluster-levelup) [![Contributors](https://img.shields.io/github/contributors/chiguireitor/cluster-levelup?color=brightgreen)](https://github.com/chiguireitor/cluster-levelup/graphs/contributors)

Wrap a [`levelup`][levelup] instance for [`cluster`](https://nodejs.org/api/cluster.html) usage among multiple processes.

### [`multilevel`][multilevel]

[![dependencies](https://img.shields.io/david/juliangruber/multilevel.svg)](https://david-dm.org/juliangruber/multilevel) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/multilevel)](https://github.com/juliangruber/multilevel) [![Contributors](https://img.shields.io/github/contributors/juliangruber/multilevel?color=brightgreen)](https://github.com/juliangruber/multilevel/graphs/contributors)

Share a [`levelup`][levelup] instance over the network.

### [`multilevel-http`][multilevel-http]

[![dependencies](https://img.shields.io/david/juliangruber/multilevel-http.svg)](https://david-dm.org/juliangruber/multilevel-http) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/multilevel-http)](https://github.com/juliangruber/multilevel-http) [![Contributors](https://img.shields.io/github/contributors/juliangruber/multilevel-http?color=brightgreen)](https://github.com/juliangruber/multilevel-http/graphs/contributors)

Expose a [`levelup`][levelup] instance via HTTP.

### [`level-range-emitter`][level-range-emitter]

[![dependencies](https://img.shields.io/david/jameskyburz/level-range-emitter.svg)](https://david-dm.org/jameskyburz/level-range-emitter) [![Last commit](https://img.shields.io/github/last-commit/jameskyburz/level-range-emitter)](https://github.com/jameskyburz/level-range-emitter) [![Contributors](https://img.shields.io/github/contributors/jameskyburz/level-range-emitter?color=brightgreen)](https://github.com/jameskyburz/level-range-emitter/graphs/contributors)

Client and server using [`multileveldown`][multileveldown], [`range-emitter`][range-emitter] and [`ltgt`][ltgt].

### [`level-manifest`][level-manifest]

[![dependencies](https://img.shields.io/david/dominictarr/level-manifest.svg)](https://david-dm.org/dominictarr/level-manifest) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-manifest)](https://github.com/dominictarr/level-manifest) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-manifest?color=brightgreen)](https://github.com/dominictarr/level-manifest/graphs/contributors)

Describe the functions that [`multilevel`][multilevel] should provide access to on the client.

### [`level-cluster-get`][level-cluster-get]

[![dependencies](https://img.shields.io/david/kesla/level-cluster-get.svg)](https://david-dm.org/kesla/level-cluster-get) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-cluster-get)](https://github.com/kesla/level-cluster-get) [![Contributors](https://img.shields.io/github/contributors/kesla/level-cluster-get?color=brightgreen)](https://github.com/kesla/level-cluster-get/graphs/contributors)

Given a key, get all values from a cluster of [`multilevel`][multilevel] servers.

### [`level-connect`][level-connect]

[![dependencies](https://img.shields.io/david/mattstyles/level-connect.svg)](https://david-dm.org/mattstyles/level-connect) [![Last commit](https://img.shields.io/github/last-commit/mattstyles/level-connect)](https://github.com/mattstyles/level-connect) [![Contributors](https://img.shields.io/github/contributors/mattstyles/level-connect?color=brightgreen)](https://github.com/mattstyles/level-connect/graphs/contributors)

Connect to a [`level-party`][level-party] and [`level-sublevel`][level-sublevel] enabled LevelDB over HTTP.

### [`level-sandbox`][level-sandbox]

[![dependencies](https://img.shields.io/david/juliangruber/level-sandbox.svg)](https://david-dm.org/juliangruber/level-sandbox) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sandbox)](https://github.com/juliangruber/level-sandbox) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sandbox?color=brightgreen)](https://github.com/juliangruber/level-sandbox/graphs/contributors)

A sandbox for hosting [`multilevel`][multilevel] enabled databases.

### [`level2riak`][level2riak]

[![dependencies](https://img.shields.io/david/fritzy/level2git.svg)](https://david-dm.org/fritzy/level2git) [![Last commit](https://img.shields.io/github/last-commit/fritzy/level2git)](https://github.com/fritzy/level2git) [![Contributors](https://img.shields.io/github/contributors/fritzy/level2git?color=brightgreen)](https://github.com/fritzy/level2git/graphs/contributors)

A network service that allows you to connect to a Riak database over HTTP.

### [`leveldb-mount`][leveldb-mount]

[![dependencies](https://img.shields.io/david/jameskyburz/leveldb-mount.svg)](https://david-dm.org/jameskyburz/leveldb-mount) [![Last commit](https://img.shields.io/github/last-commit/jameskyburz/leveldb-mount)](https://github.com/jameskyburz/leveldb-mount) [![Contributors](https://img.shields.io/github/contributors/jameskyburz/leveldb-mount?color=brightgreen)](https://github.com/jameskyburz/leveldb-mount/graphs/contributors)

LevelDB server and client with optional client-side REPL. Built with [`subleveldown`][subleveldown] and [`multileveldown`][multileveldown].

### [`level-pubsub`][level-pubsub]

[![dependencies](https://img.shields.io/david/hij1nx/level-pubsub.svg)](https://david-dm.org/hij1nx/level-pubsub) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-pubsub)](https://github.com/hij1nx/level-pubsub) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-pubsub?color=brightgreen)](https://github.com/hij1nx/level-pubsub/graphs/contributors)

PubSub with server and client on top of [`levelup`][levelup].

### [`level-query`][level-query]

[![dependencies](https://img.shields.io/david/substack/level-query.svg)](https://david-dm.org/substack/level-query) [![Last commit](https://img.shields.io/github/last-commit/substack/level-query)](https://github.com/substack/level-query) [![Contributors](https://img.shields.io/github/contributors/substack/level-query?color=brightgreen)](https://github.com/substack/level-query/graphs/contributors)

Expose a [`level-sublevel`][level-sublevel] database over HTTP, searchable with query strings.

### [`level-over-http`][level-over-http]

[![dependencies](https://img.shields.io/david/lakowske/level-over-http.svg)](https://david-dm.org/lakowske/level-over-http) [![Last commit](https://img.shields.io/github/last-commit/lakowske/level-over-http)](https://github.com/lakowske/level-over-http) [![Contributors](https://img.shields.io/github/contributors/lakowske/level-over-http?color=brightgreen)](https://github.com/lakowske/level-over-http/graphs/contributors)

Another solution to expose [`levelup`][levelup] over HTTP.

### [`level-rpc`][level-rpc]

[![dependencies](https://img.shields.io/david/juliangruber/level-rpc.svg)](https://david-dm.org/juliangruber/level-rpc) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-rpc)](https://github.com/juliangruber/level-rpc) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-rpc?color=brightgreen)](https://github.com/juliangruber/level-rpc/graphs/contributors)

Fast RPC mechanism for [`levelup`][levelup]. Intended as binary-compatible alternative to [`multilevel`][multilevel].

## Streams

**[Node.js stream](https://nodejs.org/api/stream.html) or [`pull-stream`](https://github.com/pull-stream/pull-stream) implementations for reading and writing data from/to [`levelup`][levelup].**

### [`level-ws`][level-ws]

[![dependencies](https://img.shields.io/david/Level/level-ws.svg)](https://david-dm.org/Level/level-ws) [![Last commit](https://img.shields.io/github/last-commit/Level/level-ws)](https://github.com/Level/level-ws) [![Contributors](https://img.shields.io/github/contributors/Level/level-ws?color=brightgreen)](https://github.com/Level/level-ws/graphs/contributors)

General-case, streams3 writable stream for [`levelup`][levelup].

### [`level-batch-stream`][level-batch-stream]

[![dependencies](https://img.shields.io/david/jcrugzz/level-batch-stream.svg)](https://david-dm.org/jcrugzz/level-batch-stream) [![Last commit](https://img.shields.io/github/last-commit/jcrugzz/level-batch-stream)](https://github.com/jcrugzz/level-batch-stream) [![Contributors](https://img.shields.io/github/contributors/jcrugzz/level-batch-stream?color=brightgreen)](https://github.com/jcrugzz/level-batch-stream/graphs/contributors)

Streams2 writable stream for [`levelup`][levelup].

### [`level-writestream`][level-writestream]

[![dependencies](https://img.shields.io/david/pgte/level-writestream.svg)](https://david-dm.org/pgte/level-writestream) [![Last commit](https://img.shields.io/github/last-commit/pgte/level-writestream)](https://github.com/pgte/level-writestream) [![Contributors](https://img.shields.io/github/contributors/pgte/level-writestream?color=brightgreen)](https://github.com/pgte/level-writestream/graphs/contributors)

Streams2 writable stream for [`levelup`][levelup].

### [`level-write-stream`][level-write-stream]

[![dependencies](https://img.shields.io/david/Raynos/level-write-stream.svg)](https://david-dm.org/Raynos/level-write-stream) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-write-stream)](https://github.com/Raynos/level-write-stream) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-write-stream?color=brightgreen)](https://github.com/Raynos/level-write-stream/graphs/contributors)

Streams1 writable stream for [`levelup`][levelup] or [`abstract-leveldown`][abstract-leveldown].

### [`level-delete-stream`][level-delete-stream]

[![dependencies](https://img.shields.io/david/juliangruber/level-delete-stream.svg)](https://david-dm.org/juliangruber/level-delete-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-delete-stream)](https://github.com/juliangruber/level-delete-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-delete-stream?color=brightgreen)](https://github.com/juliangruber/level-delete-stream/graphs/contributors)

A streams1 deleteStream for [`levelup`][levelup].

### [`pull-level`][pull-level]

[![dependencies](https://img.shields.io/david/dominictarr/pull-level.svg)](https://david-dm.org/dominictarr/pull-level) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/pull-level)](https://github.com/dominictarr/pull-level) [![Contributors](https://img.shields.io/github/contributors/dominictarr/pull-level?color=brightgreen)](https://github.com/dominictarr/pull-level/graphs/contributors)

[`pull-stream`](https://github.com/pull-stream/pull-stream) interface to [`levelup`][levelup] with read streams, write streams and realtime (tail/live) reads.

### [`level-live-stream`][level-live-stream]

[![dependencies](https://img.shields.io/david/dominictarr/level-live-stream.svg)](https://david-dm.org/dominictarr/level-live-stream) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-live-stream)](https://github.com/dominictarr/level-live-stream) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-live-stream?color=brightgreen)](https://github.com/dominictarr/level-live-stream/graphs/contributors)

Like `db.createReadStream()` except it's live / tailable. i.e. instead of ending, it will stay open and stream changes to the database as they are inserted.

### [`level-live`][level-live]

[![dependencies](https://img.shields.io/david/voltraco/level-live.svg)](https://david-dm.org/voltraco/level-live) [![Last commit](https://img.shields.io/github/last-commit/voltraco/level-live)](https://github.com/voltraco/level-live) [![Contributors](https://img.shields.io/github/contributors/voltraco/level-live?color=brightgreen)](https://github.com/voltraco/level-live/graphs/contributors)

Simple, light and correct live read stream implementation.  NB. Uses an undefined streams version.

### [`level-livefeed`][level-livefeed]

[![dependencies](https://img.shields.io/david/Raynos/level-livefeed.svg)](https://david-dm.org/Raynos/level-livefeed) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-livefeed)](https://github.com/Raynos/level-livefeed) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-livefeed?color=brightgreen)](https://github.com/Raynos/level-livefeed/graphs/contributors)

A live query of a range in [`levelup`][levelup]. Similar to [`level-live-stream`][level-live-stream] but with a streams2 interface.

### [`level-range`][level-range]

[![dependencies](https://img.shields.io/david/juliangruber/level-range.svg)](https://david-dm.org/juliangruber/level-range) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-range)](https://github.com/juliangruber/level-range) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-range?color=brightgreen)](https://github.com/juliangruber/level-range/graphs/contributors)

Find all K/V-pairs prefixed by a certain key. Streams1.

### [`level-cursor`][level-cursor]

[![dependencies](https://img.shields.io/david/kordon/cursor.svg)](https://david-dm.org/kordon/cursor) [![Last commit](https://img.shields.io/github/last-commit/kordon/cursor)](https://github.com/kordon/cursor) [![Contributors](https://img.shields.io/github/contributors/kordon/cursor?color=brightgreen)](https://github.com/kordon/cursor/graphs/contributors)

A stream "cursor" to iterate through a ReadStream / KeyStream / ValueStream.

### [`level-glob`][level-glob]

[![dependencies](https://img.shields.io/david/vweevers/level-glob.svg)](https://david-dm.org/vweevers/level-glob) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-glob)](https://github.com/vweevers/level-glob) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-glob?color=brightgreen)](https://github.com/vweevers/level-glob/graphs/contributors)

A streams2 read stream filtered and ordered by glob patterns. Keys in the database should be unix-like paths.

## Iterators

**Modules that operate on [`abstract-leveldown`][abstract-leveldown] iterators.**

### [`level-concat-iterator`][level-concat-iterator]

[![dependencies](https://img.shields.io/david/Level/concat-iterator.svg)](https://david-dm.org/Level/concat-iterator) [![Last commit](https://img.shields.io/github/last-commit/Level/concat-iterator)](https://github.com/Level/concat-iterator) [![Contributors](https://img.shields.io/github/contributors/Level/concat-iterator?color=brightgreen)](https://github.com/Level/concat-iterator/graphs/contributors)

Concatenate items from an iterator into an array.

### [`level-iterator-stream`][level-iterator-stream]

[![dependencies](https://img.shields.io/david/Level/iterator-stream.svg)](https://david-dm.org/Level/iterator-stream) [![Last commit](https://img.shields.io/github/last-commit/Level/iterator-stream)](https://github.com/Level/iterator-stream) [![Contributors](https://img.shields.io/github/contributors/Level/iterator-stream?color=brightgreen)](https://github.com/Level/iterator-stream/graphs/contributors)

Turn an [`abstract-leveldown`][abstract-leveldown] iterator into a readable stream. Included in [`levelup`][levelup].

### [`levelup-async-iterator`][levelup-async-iterator]

[![dependencies](https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg)](https://david-dm.org/MeirionHughes/levelup-async-iterator) [![Last commit](https://img.shields.io/github/last-commit/MeirionHughes/levelup-async-iterator)](https://github.com/MeirionHughes/levelup-async-iterator) [![Contributors](https://img.shields.io/github/contributors/MeirionHughes/levelup-async-iterator?color=brightgreen)](https://github.com/MeirionHughes/levelup-async-iterator/graphs/contributors)

Add an `iterator()` method to [`levelup`][levelup] with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration).  NB. Conflicts with [`iterator()`](https://github.com/Level/levelup/#iterator) added in `levelup@3.1.0`.

### [`level-iterator`][level-iterator]

[![dependencies](https://img.shields.io/david/vweevers/level-iterator.svg)](https://david-dm.org/vweevers/level-iterator) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-iterator)](https://github.com/vweevers/level-iterator) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-iterator?color=brightgreen)](https://github.com/vweevers/level-iterator/graphs/contributors)

Decoding iterator for [`levelup`][levelup] instances. Wraps iterators like [`level-iterator-stream`][level-iterator-stream] does.  NB. Not compatible with `levelup` >= 2 due to encodings having moved out to [`encoding-down`][encoding-down]. PR welcome.

## Hooks

**Low-level utilities for hooking into a [`levelup`][levelup] instance.**

### [`level-events`][level-events]

[![dependencies](https://img.shields.io/david/mafintosh/level-events.svg)](https://david-dm.org/mafintosh/level-events) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-events)](https://github.com/mafintosh/level-events) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-events?color=brightgreen)](https://github.com/mafintosh/level-events/graphs/contributors)

Get an event everytime something is written / read / deleted using [`levelup`][levelup].

### [`level-hookdown`][level-hookdown]

[![dependencies](https://img.shields.io/david/hypermodules/level-hookdown.svg)](https://david-dm.org/hypermodules/level-hookdown) [![Last commit](https://img.shields.io/github/last-commit/hypermodules/level-hookdown)](https://github.com/hypermodules/level-hookdown) [![Contributors](https://img.shields.io/github/contributors/hypermodules/level-hookdown?color=brightgreen)](https://github.com/hypermodules/level-hookdown/graphs/contributors)

Simple [`levelup`][levelup] hooks.

### [`level-post`][level-post]

[![dependencies](https://img.shields.io/david/dominictarr/level-post.svg)](https://david-dm.org/dominictarr/level-post) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-post)](https://github.com/dominictarr/level-post) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-post?color=brightgreen)](https://github.com/dominictarr/level-post/graphs/contributors)

Consistent post hooks for [`levelup`][levelup].

### [`level-condition`][level-condition]

[![dependencies](https://img.shields.io/david/juliangruber/level-condition.svg)](https://david-dm.org/juliangruber/level-condition) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-condition)](https://github.com/juliangruber/level-condition) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-condition?color=brightgreen)](https://github.com/juliangruber/level-condition/graphs/contributors)

Get notified when a condition is triggered inside a [`levelup`][levelup] instance.

### [`level-hooks`][level-hooks]

[![dependencies](https://img.shields.io/david/dominictarr/level-hooks.svg)](https://david-dm.org/dominictarr/level-hooks) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-hooks)](https://github.com/dominictarr/level-hooks) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-hooks?color=brightgreen)](https://github.com/dominictarr/level-hooks/graphs/contributors)

Implements a hook mechanism that allows you to intercept `put`, `delete` and `batch` operations. You can then turn those operations into batches. Useful if you want to turn a `put` into an atomic batch for say an automatic map operation.<br><br>NB. Author recommends using [`level-sublevel`][level-sublevel] instead of `level-hooks` directly. Note that [`level-sublevel`][level-sublevel] is not maintained.

## Range Options

**Utilities for working with range options, known as ltgt(e), common to [`levelup`][levelup] streams and [`abstract-leveldown`][abstract-leveldown] iterators.**

### [`ltgt`][ltgt]

[![dependencies](https://img.shields.io/david/dominictarr/ltgt.svg)](https://david-dm.org/dominictarr/ltgt) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/ltgt)](https://github.com/dominictarr/ltgt) [![Contributors](https://img.shields.io/github/contributors/dominictarr/ltgt?color=brightgreen)](https://github.com/dominictarr/ltgt/graphs/contributors)

Tool belt to find lower or upper bounds, compare and filter keys and more.

### [`level-option-wrap`][level-option-wrap]

[![dependencies](https://img.shields.io/david/substack/level-option-wrap.svg)](https://david-dm.org/substack/level-option-wrap) [![Last commit](https://img.shields.io/github/last-commit/substack/level-option-wrap)](https://github.com/substack/level-option-wrap) [![Contributors](https://img.shields.io/github/contributors/substack/level-option-wrap?color=brightgreen)](https://github.com/substack/level-option-wrap/graphs/contributors)

Wrap `ltgt` options with functions. Expose range options without leaking information about your internal key representations.

### [`interval-to-ltgt`][interval-to-ltgt]

[![dependencies](https://img.shields.io/david/nowsecure/interval-to-ltgt.svg)](https://david-dm.org/nowsecure/interval-to-ltgt) [![Last commit](https://img.shields.io/github/last-commit/nowsecure/interval-to-ltgt)](https://github.com/nowsecure/interval-to-ltgt) [![Contributors](https://img.shields.io/github/contributors/nowsecure/interval-to-ltgt?color=brightgreen)](https://github.com/nowsecure/interval-to-ltgt/graphs/contributors)

Convert an interval string to an `ltgt` object. This is the counterpart to [`ltgt-to-interval`][ltgt-to-interval].

### [`ltgt-to-interval`][ltgt-to-interval]

[![dependencies](https://img.shields.io/david/juliangruber/ltgt-to-interval.svg)](https://david-dm.org/juliangruber/ltgt-to-interval) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/ltgt-to-interval)](https://github.com/juliangruber/ltgt-to-interval) [![Contributors](https://img.shields.io/github/contributors/juliangruber/ltgt-to-interval?color=brightgreen)](https://github.com/juliangruber/ltgt-to-interval/graphs/contributors)

Convert an `ltgt` object to an interval string. This is the counterpart to [`interval-to-ltgt`][interval-to-ltgt].

### [`range-emitter`][range-emitter]

[![dependencies](https://img.shields.io/david/jameskyburz/range-emitter.svg)](https://david-dm.org/jameskyburz/range-emitter) [![Last commit](https://img.shields.io/github/last-commit/jameskyburz/range-emitter)](https://github.com/jameskyburz/range-emitter) [![Contributors](https://img.shields.io/github/contributors/jameskyburz/range-emitter?color=brightgreen)](https://github.com/jameskyburz/range-emitter/graphs/contributors)

Range emitter. Publish keys and subscribe to ranges.

## Data Structures

**Modules that utilize a specific key/value scheme to provide a higher-level data structure.**

### [`merkle-dag`][merkle-dag]

[![dependencies](https://img.shields.io/david/mafintosh/merkle-dag.svg)](https://david-dm.org/mafintosh/merkle-dag) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/merkle-dag)](https://github.com/mafintosh/merkle-dag) [![Contributors](https://img.shields.io/github/contributors/mafintosh/merkle-dag?color=brightgreen)](https://github.com/mafintosh/merkle-dag/graphs/contributors)

Merkle DAG on top of LevelDB

### [`merkle-patricia-tree`][merkle-patricia-tree]

[![dependencies](https://img.shields.io/david/ethereumjs/merkle-patricia-tree.svg)](https://david-dm.org/ethereumjs/merkle-patricia-tree) [![Last commit](https://img.shields.io/github/last-commit/ethereumjs/merkle-patricia-tree)](https://github.com/ethereumjs/merkle-patricia-tree) [![Contributors](https://img.shields.io/github/contributors/ethereumjs/merkle-patricia-tree?color=brightgreen)](https://github.com/ethereumjs/merkle-patricia-tree/graphs/contributors)

Implementation of the modified merkle patricia tree as specified in [Ethereum's yellow paper](http://gavwood.com/Paper.pdf).

### [`level-array`][level-array]

[![dependencies](https://img.shields.io/david/juliangruber/level-array.svg)](https://david-dm.org/juliangruber/level-array) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-array)](https://github.com/juliangruber/level-array) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-array?color=brightgreen)](https://github.com/juliangruber/level-array/graphs/contributors)

The array datatype inside [`levelup`][levelup].

### [`level-set`][level-set]

[![dependencies](https://img.shields.io/david/maiah/level-set.svg)](https://david-dm.org/maiah/level-set) [![Last commit](https://img.shields.io/github/last-commit/maiah/level-set)](https://github.com/maiah/level-set) [![Contributors](https://img.shields.io/github/contributors/maiah/level-set?color=brightgreen)](https://github.com/maiah/level-set/graphs/contributors)

Add a `set` method to [`levelup`][levelup] for saving objects in a tree-like structure.

### [`level-push`][level-push]

[![dependencies](https://img.shields.io/david/maiah/level-push.svg)](https://david-dm.org/maiah/level-push) [![Last commit](https://img.shields.io/github/last-commit/maiah/level-push)](https://github.com/maiah/level-push) [![Contributors](https://img.shields.io/github/contributors/maiah/level-push?color=brightgreen)](https://github.com/maiah/level-push/graphs/contributors)

Add a `push` method to [`levelup`][levelup] for saving objects using [`level-set`][level-set] with auto-generated UUID.

### [`level-version`][level-version]

[![dependencies](https://img.shields.io/david/brycebaril/level-version.svg)](https://david-dm.org/brycebaril/level-version) [![Last commit](https://img.shields.io/github/last-commit/brycebaril/level-version)](https://github.com/brycebaril/level-version) [![Contributors](https://img.shields.io/github/contributors/brycebaril/level-version?color=brightgreen)](https://github.com/brycebaril/level-version/graphs/contributors)

Store and retrieve versioned data in [`levelup`][levelup].

### [`level-queue-type`][level-queue-type]

[![dependencies](https://img.shields.io/david/mcollina/level-queue-type.svg)](https://david-dm.org/mcollina/level-queue-type) [![Last commit](https://img.shields.io/github/last-commit/mcollina/level-queue-type)](https://github.com/mcollina/level-queue-type) [![Contributors](https://img.shields.io/github/contributors/mcollina/level-queue-type?color=brightgreen)](https://github.com/mcollina/level-queue-type/graphs/contributors)

The queue datatype inside [`levelup`][levelup].

### [`level-q`][level-q]

[![dependencies](https://img.shields.io/david/eugeneware/level-q.svg)](https://david-dm.org/eugeneware/level-q) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-q)](https://github.com/eugeneware/level-q) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-q?color=brightgreen)](https://github.com/eugeneware/level-q/graphs/contributors)

Priority queuing for [`levelup`][levelup].

### [`qool`][qool]

[![dependencies](https://img.shields.io/david/kessler/qool.svg)](https://david-dm.org/kessler/qool) [![Last commit](https://img.shields.io/github/last-commit/kessler/qool)](https://github.com/kessler/qool) [![Contributors](https://img.shields.io/github/contributors/kessler/qool?color=brightgreen)](https://github.com/kessler/qool/graphs/contributors)

A queue backed by [`levelup`][levelup], durable and FIFO.

### [`level-trie`][level-trie]

[![dependencies](https://img.shields.io/david/juliangruber/level-trie.svg)](https://david-dm.org/juliangruber/level-trie) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-trie)](https://github.com/juliangruber/level-trie) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-trie?color=brightgreen)](https://github.com/juliangruber/level-trie/graphs/contributors)

The TRIE data structure and search algorithm, on top of [`levelup`][levelup].

### [`level-geospatial`][level-geospatial]

[![dependencies](https://img.shields.io/david/richorama/level-geospatial.svg)](https://david-dm.org/richorama/level-geospatial) [![Last commit](https://img.shields.io/github/last-commit/richorama/level-geospatial)](https://github.com/richorama/level-geospatial) [![Contributors](https://img.shields.io/github/contributors/richorama/level-geospatial?color=brightgreen)](https://github.com/richorama/level-geospatial/graphs/contributors)

Store key values pairs with lat/lon coordinates, and query using a radius.

### [`level-pathwise`][level-pathwise]

[![dependencies](https://img.shields.io/david/juliangruber/level-pathwise.svg)](https://david-dm.org/juliangruber/level-pathwise) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-pathwise)](https://github.com/juliangruber/level-pathwise) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-pathwise?color=brightgreen)](https://github.com/juliangruber/level-pathwise/graphs/contributors)

Turn [`levelup`][levelup] into one huge object of arbitrary size! Efficiently and atomically update and read parts of it.

### [`level-places`][level-places]

[![dependencies](https://img.shields.io/david/Wayla/level-places.svg)](https://david-dm.org/Wayla/level-places) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-places)](https://github.com/Wayla/level-places) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-places?color=brightgreen)](https://github.com/Wayla/level-places/graphs/contributors)

Store and retrieve places near a lat/long pair.

### [`level-nearby-stream`][level-nearby-stream]

[![dependencies](https://img.shields.io/david/juliangruber/level-nearby-stream.svg)](https://david-dm.org/juliangruber/level-nearby-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-nearby-stream)](https://github.com/juliangruber/level-nearby-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-nearby-stream?color=brightgreen)](https://github.com/juliangruber/level-nearby-stream/graphs/contributors)

Stream in nearby places using the browser's geolocation and [`level-places`][level-places].

### [`level-tree`][level-tree]

[![dependencies](https://img.shields.io/david/calvinmetcalf/level-tree.svg)](https://david-dm.org/calvinmetcalf/level-tree) [![Last commit](https://img.shields.io/github/last-commit/calvinmetcalf/level-tree)](https://github.com/calvinmetcalf/level-tree) [![Contributors](https://img.shields.io/github/contributors/calvinmetcalf/level-tree?color=brightgreen)](https://github.com/calvinmetcalf/level-tree/graphs/contributors)

Geospatial indexing for GeoJSON in [`levelup`][levelup]

### [`level-list`][level-list]

[![dependencies](https://img.shields.io/david/juliangruber/level-list.svg)](https://david-dm.org/juliangruber/level-list) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-list)](https://github.com/juliangruber/level-list) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-list?color=brightgreen)](https://github.com/juliangruber/level-list/graphs/contributors)

Map lists of data stored in [`levelup`][levelup] to DOM elements.

### [`level-reactive`][level-reactive]

[![dependencies](https://img.shields.io/david/juliangruber/level-reactive.svg)](https://david-dm.org/juliangruber/level-reactive) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-reactive)](https://github.com/juliangruber/level-reactive) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-reactive?color=brightgreen)](https://github.com/juliangruber/level-reactive/graphs/contributors)

Reactive templating for data stored in [`levelup`][levelup].

### [`level-paginate`][level-paginate]

[![dependencies](https://img.shields.io/david/juliangruber/level-paginate.svg)](https://david-dm.org/juliangruber/level-paginate) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-paginate)](https://github.com/juliangruber/level-paginate) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-paginate?color=brightgreen)](https://github.com/juliangruber/level-paginate/graphs/contributors)

Streaming pagination for [`levelup`][levelup].

### [`level-average`][level-average]

[![dependencies](https://img.shields.io/david/juliangruber/level-average.svg)](https://david-dm.org/juliangruber/level-average) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-average)](https://github.com/juliangruber/level-average) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-average?color=brightgreen)](https://github.com/juliangruber/level-average/graphs/contributors)

Calculate rolling averages in [`levelup`][levelup].

### [`level-sum`][level-sum]

[![dependencies](https://img.shields.io/david/juliangruber/level-sum.svg)](https://david-dm.org/juliangruber/level-sum) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-sum)](https://github.com/juliangruber/level-sum) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-sum?color=brightgreen)](https://github.com/juliangruber/level-sum/graphs/contributors)

Calculate sums in [`levelup`][levelup] and get live updates.

### [`level-historical-json`][level-historical-json]

[![dependencies](https://img.shields.io/david/ellell/level-historical-json.svg)](https://david-dm.org/ellell/level-historical-json) [![Last commit](https://img.shields.io/github/last-commit/ellell/level-historical-json)](https://github.com/ellell/level-historical-json) [![Contributors](https://img.shields.io/github/contributors/ellell/level-historical-json?color=brightgreen)](https://github.com/ellell/level-historical-json/graphs/contributors)

Keep a history of all the changes of a JSON document.

### [`level-immutable`][level-immutable]

[![dependencies](https://img.shields.io/david/eugeneware/level-immutable.svg)](https://david-dm.org/eugeneware/level-immutable) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/level-immutable)](https://github.com/eugeneware/level-immutable) [![Contributors](https://img.shields.io/github/contributors/eugeneware/level-immutable?color=brightgreen)](https://github.com/eugeneware/level-immutable/graphs/contributors)

[`levelup`][levelup] immutable history and database snapshotting based on ideas in `datomic`.

### [`level-model`][level-model]

[![dependencies](https://img.shields.io/david/sethvincent/level-model.svg)](https://david-dm.org/sethvincent/level-model) [![Last commit](https://img.shields.io/github/last-commit/sethvincent/level-model)](https://github.com/sethvincent/level-model) [![Contributors](https://img.shields.io/github/contributors/sethvincent/level-model?color=brightgreen)](https://github.com/sethvincent/level-model/graphs/contributors)

A higher-level module for creating content models using [`levelup`][levelup] and JSON Schema validation.

### [`level-stream`][level-stream]

[![dependencies](https://img.shields.io/david/juliangruber/level-stream.svg)](https://david-dm.org/juliangruber/level-stream) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-stream)](https://github.com/juliangruber/level-stream) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-stream?color=brightgreen)](https://github.com/juliangruber/level-stream/graphs/contributors)

Persist streams in [`levelup`][levelup].

### [`level-stay`][level-stay]

[![dependencies](https://img.shields.io/david/juliangruber/level-stay.svg)](https://david-dm.org/juliangruber/level-stay) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-stay)](https://github.com/juliangruber/level-stay) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-stay?color=brightgreen)](https://github.com/juliangruber/level-stay/graphs/contributors)

An alternative approach to storing scuttlebutts in [`levelup`][levelup].

### [`skeyma`][skeyma]

[![dependencies](https://img.shields.io/david/jed/skeyma.svg)](https://david-dm.org/jed/skeyma) [![Last commit](https://img.shields.io/github/last-commit/jed/skeyma)](https://github.com/jed/skeyma) [![Contributors](https://img.shields.io/github/contributors/jed/skeyma?color=brightgreen)](https://github.com/jed/skeyma/graphs/contributors)

Turns a template string (like `${forumId}/${postId}`) into parse/serialize streams that transform objects like `{forumId, postId, text}` into key-value pairs and back.

### [`level-autotable`][level-autotable]

[![dependencies](https://img.shields.io/david/santoshrajan/levelup-autotable.svg)](https://david-dm.org/santoshrajan/levelup-autotable) [![Last commit](https://img.shields.io/github/last-commit/santoshrajan/levelup-autotable)](https://github.com/santoshrajan/levelup-autotable) [![Contributors](https://img.shields.io/github/contributors/santoshrajan/levelup-autotable?color=brightgreen)](https://github.com/santoshrajan/levelup-autotable/graphs/contributors)

Auto incrementing keys with "fields" and "records".

### [`level-forks`][level-forks]

[![dependencies](https://img.shields.io/david/substack/level-forks.svg)](https://david-dm.org/substack/level-forks) [![Last commit](https://img.shields.io/github/last-commit/substack/level-forks)](https://github.com/substack/level-forks) [![Contributors](https://img.shields.io/github/contributors/substack/level-forks?color=brightgreen)](https://github.com/substack/level-forks/graphs/contributors)

Forking graph of cascading namespaces.

### [`level-geo`][level-geo]

[![dependencies](https://img.shields.io/david/julianduque/level-geo.svg)](https://david-dm.org/julianduque/level-geo) [![Last commit](https://img.shields.io/github/last-commit/julianduque/level-geo)](https://github.com/julianduque/level-geo) [![Contributors](https://img.shields.io/github/contributors/julianduque/level-geo?color=brightgreen)](https://github.com/julianduque/level-geo/graphs/contributors)

A geospatial index for [`levelup`][levelup].

### [`level-geography`][level-geography]

[![dependencies](https://img.shields.io/david/morganherlocker/level-geography.svg)](https://david-dm.org/morganherlocker/level-geography) [![Last commit](https://img.shields.io/github/last-commit/morganherlocker/level-geography)](https://github.com/morganherlocker/level-geography) [![Contributors](https://img.shields.io/github/contributors/morganherlocker/level-geography?color=brightgreen)](https://github.com/morganherlocker/level-geography/graphs/contributors)

Indexed geography storage in [`levelup`][levelup].

### [`accountdown`][accountdown]

[![dependencies](https://img.shields.io/david/substack/accountdown.svg)](https://david-dm.org/substack/accountdown) [![Last commit](https://img.shields.io/github/last-commit/substack/accountdown)](https://github.com/substack/accountdown) [![Contributors](https://img.shields.io/github/contributors/substack/accountdown?color=brightgreen)](https://github.com/substack/accountdown/graphs/contributors)

Persistent user accounts.

### [`accountdown-model`][accountdown-model]

[![dependencies](https://img.shields.io/david/sethvincent/accountdown-model.svg)](https://david-dm.org/sethvincent/accountdown-model) [![Last commit](https://img.shields.io/github/last-commit/sethvincent/accountdown-model)](https://github.com/sethvincent/accountdown-model) [![Contributors](https://img.shields.io/github/contributors/sethvincent/accountdown-model?color=brightgreen)](https://github.com/sethvincent/accountdown-model/graphs/contributors)

A wrapper around [`accountdown`][accountdown] that provides a few additional features

## Transience

### [`cachedown`][cachedown]

[![dependencies](https://img.shields.io/david/mvayngrib/cachedown.svg)](https://david-dm.org/mvayngrib/cachedown) [![Last commit](https://img.shields.io/github/last-commit/mvayngrib/cachedown)](https://github.com/mvayngrib/cachedown) [![Contributors](https://img.shields.io/github/contributors/mvayngrib/cachedown?color=brightgreen)](https://github.com/mvayngrib/cachedown/graphs/contributors)

LRU cache implemented as an [`abstract-leveldown`][abstract-leveldown] layer.

### [`level-ttl`][level-ttl]

[![dependencies](https://img.shields.io/david/Level/level-ttl.svg)](https://david-dm.org/Level/level-ttl) [![Last commit](https://img.shields.io/github/last-commit/Level/level-ttl)](https://github.com/Level/level-ttl) [![Contributors](https://img.shields.io/github/contributors/Level/level-ttl?color=brightgreen)](https://github.com/Level/level-ttl/graphs/contributors)

Add a `ttl` (time-to-live) option to [`levelup`][levelup]. NB. Suffers from race issues. See also [`tiny-level-ttl`][tiny-level-ttl].

### [`tiny-level-ttl`][tiny-level-ttl]

[![dependencies](https://img.shields.io/david/ArtskydJ/tiny-level-ttl.svg)](https://david-dm.org/ArtskydJ/tiny-level-ttl) [![Last commit](https://img.shields.io/github/last-commit/ArtskydJ/tiny-level-ttl)](https://github.com/ArtskydJ/tiny-level-ttl) [![Contributors](https://img.shields.io/github/contributors/ArtskydJ/tiny-level-ttl?color=brightgreen)](https://github.com/ArtskydJ/tiny-level-ttl/graphs/contributors)

Add a `ttl` (time-to-live) option to [`levelup`][levelup], [`level-sublevel`][level-sublevel] or [`level-spaces`][level-spaces]. Also respects [`level-lock`][level-lock].

### [`level-live-cache`][level-live-cache]

[![dependencies](https://img.shields.io/david/juliangruber/level-live-cache.svg)](https://david-dm.org/juliangruber/level-live-cache) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-live-cache)](https://github.com/juliangruber/level-live-cache) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-live-cache?color=brightgreen)](https://github.com/juliangruber/level-live-cache/graphs/contributors)

An in-memory cache that keeps up to date with its source.

### [`level-lru-cache`][level-lru-cache]

[![dependencies](https://img.shields.io/david/kemitchell/level-lru-cache.js.svg)](https://david-dm.org/kemitchell/level-lru-cache.js) [![Last commit](https://img.shields.io/github/last-commit/kemitchell/level-lru-cache.js)](https://github.com/kemitchell/level-lru-cache.js) [![Contributors](https://img.shields.io/github/contributors/kemitchell/level-lru-cache.js?color=brightgreen)](https://github.com/kemitchell/level-lru-cache.js/graphs/contributors)

Simple LRU cache.

### [`level-ttl-cache`][level-ttl-cache]

[![dependencies](https://img.shields.io/david/rvagg/level-ttl-cache.svg)](https://david-dm.org/rvagg/level-ttl-cache) [![Last commit](https://img.shields.io/github/last-commit/rvagg/level-ttl-cache)](https://github.com/rvagg/level-ttl-cache) [![Contributors](https://img.shields.io/github/contributors/rvagg/level-ttl-cache?color=brightgreen)](https://github.com/rvagg/level-ttl-cache/graphs/contributors)

A pass-through cache for arbitrary objects or binary data using LevelDB, expired by a TTL.

### [`level-cache`][level-cache]

[![dependencies](https://img.shields.io/david/Raynos/level-cache.svg)](https://david-dm.org/Raynos/level-cache) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-cache)](https://github.com/Raynos/level-cache) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-cache?color=brightgreen)](https://github.com/Raynos/level-cache/graphs/contributors)

A caching module you can place in front of a [`levelup`][levelup] database. It will cache a subset of the database in an in-memory LRU cache based on configuration. It has an optional synchronous API which will return from the cache only.

### [`levelup-cache`][levelup-cache]

[![dependencies](https://img.shields.io/david/TehShrike/levelup-cache.svg)](https://david-dm.org/TehShrike/levelup-cache) [![Last commit](https://img.shields.io/github/last-commit/TehShrike/levelup-cache)](https://github.com/TehShrike/levelup-cache) [![Contributors](https://img.shields.io/github/contributors/TehShrike/levelup-cache?color=brightgreen)](https://github.com/TehShrike/levelup-cache/graphs/contributors)

Use [`levelup`][levelup] to cache remote data.

## Atomicity

### [`level-lock`][level-lock]

[![dependencies](https://img.shields.io/david/substack/level-lock.svg)](https://david-dm.org/substack/level-lock) [![Last commit](https://img.shields.io/github/last-commit/substack/level-lock)](https://github.com/substack/level-lock) [![Contributors](https://img.shields.io/github/contributors/substack/level-lock?color=brightgreen)](https://github.com/substack/level-lock/graphs/contributors)

In-memory advisory read/write locks for [`levelup`][levelup] keys.

### [`level-mutex`][level-mutex]

[![dependencies](https://img.shields.io/david/mikeal/level-mutex.svg)](https://david-dm.org/mikeal/level-mutex) [![Last commit](https://img.shields.io/github/last-commit/mikeal/level-mutex)](https://github.com/mikeal/level-mutex) [![Contributors](https://img.shields.io/github/contributors/mikeal/level-mutex?color=brightgreen)](https://github.com/mikeal/level-mutex/graphs/contributors)

Mutex read/write lock for [`levelup`][levelup].

### [`level-updater`][level-updater]

[![dependencies](https://img.shields.io/david/hughsk/level-updater.svg)](https://david-dm.org/hughsk/level-updater) [![Last commit](https://img.shields.io/github/last-commit/hughsk/level-updater)](https://github.com/hughsk/level-updater) [![Contributors](https://img.shields.io/github/contributors/hughsk/level-updater?color=brightgreen)](https://github.com/hughsk/level-updater/graphs/contributors)

Update keys without overlapping changes - makes it possible to implement an atomic incrementer, JSON merger, etc.

### [`levelplus`][levelplus]

[![dependencies](https://img.shields.io/david/https://github.com/eugeneware/levelplus.svg)](https://david-dm.org/https://github.com/eugeneware/levelplus) [![Last commit](https://img.shields.io/github/last-commit/https://github.com/eugeneware/levelplus)](https://github.com/https://github.com/eugeneware/levelplus) [![Contributors](https://img.shields.io/github/contributors/https://github.com/eugeneware/levelplus?color=brightgreen)](https://github.com/https://github.com/eugeneware/levelplus/graphs/contributors)

Adds atomic updates, increments, array pushes, set additions and user-defined atomic operations to [`levelup`][levelup].

### [`level-atomics`][level-atomics]

[![dependencies](https://img.shields.io/david/IndigoUnited/node-level-atomics.svg)](https://david-dm.org/IndigoUnited/node-level-atomics) [![Last commit](https://img.shields.io/github/last-commit/IndigoUnited/node-level-atomics)](https://github.com/IndigoUnited/node-level-atomics) [![Contributors](https://img.shields.io/github/contributors/IndigoUnited/node-level-atomics?color=brightgreen)](https://github.com/IndigoUnited/node-level-atomics/graphs/contributors)

Add (parallel) atomic operations like `insert`, `replace`, `increment` and `decrement` to [`levelup`][levelup].

### [`level-transactions`][level-transactions]

[![dependencies](https://img.shields.io/david/cshum/level-transactions.svg)](https://david-dm.org/cshum/level-transactions) [![Last commit](https://img.shields.io/github/last-commit/cshum/level-transactions)](https://github.com/cshum/level-transactions) [![Contributors](https://img.shields.io/github/contributors/cshum/level-transactions?color=brightgreen)](https://github.com/cshum/level-transactions/graphs/contributors)

Transaction layer for [`levelup`][levelup].

## Jobs

### [`level-schedule`][level-schedule]

[![dependencies](https://img.shields.io/david/juliangruber/level-schedule.svg)](https://david-dm.org/juliangruber/level-schedule) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-schedule)](https://github.com/juliangruber/level-schedule) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-schedule?color=brightgreen)](https://github.com/juliangruber/level-schedule/graphs/contributors)

A durable job scheduler.

### [`level-jobs`][level-jobs]

[![dependencies](https://img.shields.io/david/pgte/level-jobs.svg)](https://david-dm.org/pgte/level-jobs) [![Last commit](https://img.shields.io/github/last-commit/pgte/level-jobs)](https://github.com/pgte/level-jobs) [![Contributors](https://img.shields.io/github/contributors/pgte/level-jobs?color=brightgreen)](https://github.com/pgte/level-jobs/graphs/contributors)

Job Queue in [`levelup`][levelup].

### [`batchdb`][batchdb]

[![dependencies](https://img.shields.io/david/substack/batchdb.svg)](https://david-dm.org/substack/batchdb) [![Last commit](https://img.shields.io/github/last-commit/substack/batchdb)](https://github.com/substack/batchdb) [![Contributors](https://img.shields.io/github/contributors/substack/batchdb?color=brightgreen)](https://github.com/substack/batchdb/graphs/contributors)

[`levelup`][levelup] and disk storage for queued batch jobs.

## File System

### [`level-filesystem`][level-filesystem]

[![dependencies](https://img.shields.io/david/mafintosh/level-filesystem.svg)](https://david-dm.org/mafintosh/level-filesystem) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/level-filesystem)](https://github.com/mafintosh/level-filesystem) [![Contributors](https://img.shields.io/github/contributors/mafintosh/level-filesystem?color=brightgreen)](https://github.com/mafintosh/level-filesystem/graphs/contributors)

Full implementation of the Node.js `fs` module on top of [`levelup`][levelup].

### [`browserify-fs`][browserify-fs]

[![dependencies](https://img.shields.io/david/mafintosh/browserify-fs.svg)](https://david-dm.org/mafintosh/browserify-fs) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/browserify-fs)](https://github.com/mafintosh/browserify-fs) [![Contributors](https://img.shields.io/github/contributors/mafintosh/browserify-fs?color=brightgreen)](https://github.com/mafintosh/browserify-fs/graphs/contributors)

[`level-filesystem`][level-filesystem] as drop-in `fs` replacement for the browser, to be used with `browserify`.

### [`level-fs`][level-fs]

[![dependencies](https://img.shields.io/david/juliangruber/level-fs.svg)](https://david-dm.org/juliangruber/level-fs) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-fs)](https://github.com/juliangruber/level-fs) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-fs?color=brightgreen)](https://github.com/juliangruber/level-fs/graphs/contributors)

Node's `fs` module with [`levelup`][levelup] as backend.

### [`level-fs-browser`][level-fs-browser]

[![dependencies](https://img.shields.io/david/juliangruber/level-fs-browser.svg)](https://david-dm.org/juliangruber/level-fs-browser) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-fs-browser)](https://github.com/juliangruber/level-fs-browser) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-fs-browser?color=brightgreen)](https://github.com/juliangruber/level-fs-browser/graphs/contributors)

[`level-fs`][level-fs] as drop-in `fs` replacement for the browser, to be used with `browserify`.

### [`level-store`][level-store]

[![dependencies](https://img.shields.io/david/juliangruber/level-store.svg)](https://david-dm.org/juliangruber/level-store) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-store)](https://github.com/juliangruber/level-store) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-store?color=brightgreen)](https://github.com/juliangruber/level-store/graphs/contributors)

A streaming storage engine based on [`levelup`][levelup].

### [`level-serve`][level-serve]

[![dependencies](https://img.shields.io/david/Wayla/level-serve.svg)](https://david-dm.org/Wayla/level-serve) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-serve)](https://github.com/Wayla/level-serve) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-serve?color=brightgreen)](https://github.com/Wayla/level-serve/graphs/contributors)

Streaming static file server based on [`levelup`][levelup].

### [`suckit`][suckit]

[![dependencies](https://img.shields.io/david/deoxxa/suckit.svg)](https://david-dm.org/deoxxa/suckit) [![Last commit](https://img.shields.io/github/last-commit/deoxxa/suckit)](https://github.com/deoxxa/suckit) [![Contributors](https://img.shields.io/github/contributors/deoxxa/suckit?color=brightgreen)](https://github.com/deoxxa/suckit/graphs/contributors)

Expose a [`level-store`][level-store] over HTTP.

### [`level-vinyl`][level-vinyl]

[![dependencies](https://img.shields.io/david/vweevers/level-vinyl.svg)](https://david-dm.org/vweevers/level-vinyl) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-vinyl)](https://github.com/vweevers/level-vinyl) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-vinyl?color=brightgreen)](https://github.com/vweevers/level-vinyl/graphs/contributors)

[Vinyl](https://github.com/gulpjs/vinyl-fs) adapter and blob store. Saves file contents in a content addressable blob store, file metadata in [`levelup`][levelup].

### [`level-blob`][level-blob]

[![dependencies](https://img.shields.io/david/crodas/level-blob.svg)](https://david-dm.org/crodas/level-blob) [![Last commit](https://img.shields.io/github/last-commit/crodas/level-blob)](https://github.com/crodas/level-blob) [![Contributors](https://img.shields.io/github/contributors/crodas/level-blob?color=brightgreen)](https://github.com/crodas/level-blob/graphs/contributors)

Store blobs in [`levelup`][levelup]

### [`level-blob-store`][level-blob-store]

[![dependencies](https://img.shields.io/david/diasdavid/level-blob-store.svg)](https://david-dm.org/diasdavid/level-blob-store) [![Last commit](https://img.shields.io/github/last-commit/diasdavid/level-blob-store)](https://github.com/diasdavid/level-blob-store) [![Contributors](https://img.shields.io/github/contributors/diasdavid/level-blob-store?color=brightgreen)](https://github.com/diasdavid/level-blob-store/graphs/contributors)

An [`abstract-blob-store`](https://github.com/maxogden/abstract-blob-store) using LevelDB as the storage backend

### [`level-pull-blob-store`][level-pull-blob-store]

[![dependencies](https://img.shields.io/david/ipfs/js-level-pull-blob-store.svg)](https://david-dm.org/ipfs/js-level-pull-blob-store) [![Last commit](https://img.shields.io/github/last-commit/ipfs/js-level-pull-blob-store)](https://github.com/ipfs/js-level-pull-blob-store) [![Contributors](https://img.shields.io/github/contributors/ipfs/js-level-pull-blob-store?color=brightgreen)](https://github.com/ipfs/js-level-pull-blob-store/graphs/contributors)

A [`pull-blob-store`](https://github.com/ipfs/interface-pull-blob-store) implementation backed by LevelDB.

### [`level-server`][level-server]

[![dependencies](https://img.shields.io/david/Wayla/level-server.svg)](https://david-dm.org/Wayla/level-server) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-server)](https://github.com/Wayla/level-server) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-server?color=brightgreen)](https://github.com/Wayla/level-server/graphs/contributors)

Standalone LevelDB file server based on [`level-serve`][level-serve], [`multilevel`][multilevel] and [`level-sublevel`][level-sublevel].

## Utilities

### [`level-codec`][level-codec]

[![dependencies](https://img.shields.io/david/Level/codec.svg)](https://david-dm.org/Level/codec) [![Last commit](https://img.shields.io/github/last-commit/Level/codec)](https://github.com/Level/codec) [![Contributors](https://img.shields.io/github/contributors/Level/codec?color=brightgreen)](https://github.com/Level/codec/graphs/contributors)

Encode keys, values and ltgte options. Used in [`encoding-down`][encoding-down].

### [`level-errors`][level-errors]

[![dependencies](https://img.shields.io/david/Level/errors.svg)](https://david-dm.org/Level/errors) [![Last commit](https://img.shields.io/github/last-commit/Level/errors)](https://github.com/Level/errors) [![Contributors](https://img.shields.io/github/contributors/Level/errors?color=brightgreen)](https://github.com/Level/errors/graphs/contributors)

Error types for [`levelup`][levelup].

### [`level-test`][level-test]

[![dependencies](https://img.shields.io/david/Level/level-test.svg)](https://david-dm.org/Level/level-test) [![Last commit](https://img.shields.io/github/last-commit/Level/level-test)](https://github.com/Level/level-test) [![Contributors](https://img.shields.io/github/contributors/Level/level-test?color=brightgreen)](https://github.com/Level/level-test/graphs/contributors)

Easily run your `level-*` tests against [all stores](#stores).

### [`level-compose`][level-compose]

[![dependencies](https://img.shields.io/david/Level/compose.svg)](https://david-dm.org/Level/compose) [![Last commit](https://img.shields.io/github/last-commit/Level/compose)](https://github.com/Level/compose) [![Contributors](https://img.shields.io/github/contributors/Level/compose?color=brightgreen)](https://github.com/Level/compose/graphs/contributors)

Compose a database factory from [`abstract-leveldown`][abstract-leveldown] and [`levelup`][levelup] layers.

### [`level-exists`][level-exists]

[![dependencies](https://img.shields.io/david/juliangruber/level-exists.svg)](https://david-dm.org/juliangruber/level-exists) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-exists)](https://github.com/juliangruber/level-exists) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-exists?color=brightgreen)](https://github.com/juliangruber/level-exists/graphs/contributors)

Check if a datum exists without reading its value.

### [`level-move`][level-move]

[![dependencies](https://img.shields.io/david/juliangruber/level-move.svg)](https://david-dm.org/juliangruber/level-move) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-move)](https://github.com/juliangruber/level-move) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-move?color=brightgreen)](https://github.com/juliangruber/level-move/graphs/contributors)

Move a value to another key.

### [`level-capped`][level-capped]

[![dependencies](https://img.shields.io/david/juliangruber/level-capped.svg)](https://david-dm.org/juliangruber/level-capped) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-capped)](https://github.com/juliangruber/level-capped) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-capped?color=brightgreen)](https://github.com/juliangruber/level-capped/graphs/contributors)

Capped collections.

### [`level-create`][level-create]

[![dependencies](https://img.shields.io/david/substack/level-create.svg)](https://david-dm.org/substack/level-create) [![Last commit](https://img.shields.io/github/last-commit/substack/level-create)](https://github.com/substack/level-create) [![Contributors](https://img.shields.io/github/contributors/substack/level-create?color=brightgreen)](https://github.com/substack/level-create/graphs/contributors)

Insert a key if and only if it doesn't already exist

### [`level-create-batch`][level-create-batch]

[![dependencies](https://img.shields.io/david/substack/level-create-batch.svg)](https://david-dm.org/substack/level-create-batch) [![Last commit](https://img.shields.io/github/last-commit/substack/level-create-batch)](https://github.com/substack/level-create-batch) [![Contributors](https://img.shields.io/github/contributors/substack/level-create-batch?color=brightgreen)](https://github.com/substack/level-create-batch/graphs/contributors)

Insert a batch of keys if and only if none of the keys already exist

### [`level-modify`][level-modify]

[![dependencies](https://img.shields.io/david/dskrepps/level-modify.svg)](https://david-dm.org/dskrepps/level-modify) [![Last commit](https://img.shields.io/github/last-commit/dskrepps/level-modify)](https://github.com/dskrepps/level-modify) [![Contributors](https://img.shields.io/github/contributors/dskrepps/level-modify?color=brightgreen)](https://github.com/dskrepps/level-modify/graphs/contributors)

Modify an existing key in [`levelup`][levelup]. Uses [`level-lock`][level-lock]. See also [`level-create`][level-create] and [`level-move`][level-move].

### [`level-random`][level-random]

[![dependencies](https://img.shields.io/david/michaelnisi/level-random.svg)](https://david-dm.org/michaelnisi/level-random) [![Last commit](https://img.shields.io/github/last-commit/michaelnisi/level-random)](https://github.com/michaelnisi/level-random) [![Contributors](https://img.shields.io/github/contributors/michaelnisi/level-random?color=brightgreen)](https://github.com/michaelnisi/level-random/graphs/contributors)

Read values of random [`levelup`][levelup] keys.

### [`level-shared-batch`][level-shared-batch]

[![dependencies](https://img.shields.io/david/juliangruber/level-shared-batch.svg)](https://david-dm.org/juliangruber/level-shared-batch) [![Last commit](https://img.shields.io/github/last-commit/juliangruber/level-shared-batch)](https://github.com/juliangruber/level-shared-batch) [![Contributors](https://img.shields.io/github/contributors/juliangruber/level-shared-batch?color=brightgreen)](https://github.com/juliangruber/level-shared-batch/graphs/contributors)

Share batches and commit collectively

### [`batchlevel`][batchlevel]

[![dependencies](https://img.shields.io/david/biobricks/batchlevel.svg)](https://david-dm.org/biobricks/batchlevel) [![Last commit](https://img.shields.io/github/last-commit/biobricks/batchlevel)](https://github.com/biobricks/batchlevel) [![Contributors](https://img.shields.io/github/contributors/biobricks/batchlevel?color=brightgreen)](https://github.com/biobricks/batchlevel/graphs/contributors)

Batch all operations made on a [`levelup`][levelup] instance. Compatible with [`subleveldown`][subleveldown].

### [`ltest`][ltest]

[![dependencies](https://img.shields.io/david/ralphtheninja/ltest.svg)](https://david-dm.org/ralphtheninja/ltest) [![Last commit](https://img.shields.io/github/last-commit/ralphtheninja/ltest)](https://github.com/ralphtheninja/ltest) [![Contributors](https://img.shields.io/github/contributors/ralphtheninja/ltest?color=brightgreen)](https://github.com/ralphtheninja/ltest/graphs/contributors)

Test function for [`levelup`][levelup] testing, based on [`level-test`][level-test].

### [`level-probe`][level-probe]

[![dependencies](https://img.shields.io/david/vweevers/level-probe.svg)](https://david-dm.org/vweevers/level-probe) [![Last commit](https://img.shields.io/github/last-commit/vweevers/level-probe)](https://github.com/vweevers/level-probe) [![Contributors](https://img.shields.io/github/contributors/vweevers/level-probe?color=brightgreen)](https://github.com/vweevers/level-probe/graphs/contributors)

Get the first record in a range, using an iterator or stream. NB. Not compatible with latest [`levelup`][levelup].

### [`autolevel`][autolevel]

[![dependencies](https://img.shields.io/david/finwo/autolevel.svg)](https://david-dm.org/finwo/autolevel) [![Last commit](https://img.shields.io/github/last-commit/finwo/autolevel)](https://github.com/finwo/autolevel) [![Contributors](https://img.shields.io/github/contributors/finwo/autolevel?color=brightgreen)](https://github.com/finwo/autolevel/graphs/contributors)

Automatically combine [`levelup`][levelup] with the right [`abstract-leveldown`][abstract-leveldown] store for your configuration.

### [`level-lazy-open`][level-lazy-open]

[![dependencies](https://img.shields.io/david/Level/lazy-open.svg)](https://david-dm.org/Level/lazy-open) [![Last commit](https://img.shields.io/github/last-commit/Level/lazy-open)](https://github.com/Level/lazy-open) [![Contributors](https://img.shields.io/github/contributors/Level/lazy-open?color=brightgreen)](https://github.com/Level/lazy-open/graphs/contributors)

Lazily open a leveldown compatible backend.

### [`changeset`][changeset]

[![dependencies](https://img.shields.io/david/eugeneware/changeset.svg)](https://david-dm.org/eugeneware/changeset) [![Last commit](https://img.shields.io/github/last-commit/eugeneware/changeset)](https://github.com/eugeneware/changeset) [![Contributors](https://img.shields.io/github/contributors/eugeneware/changeset?color=brightgreen)](https://github.com/eugeneware/changeset/graphs/contributors)

Generate diff changesets for javascript objects, decomposing diffs into a series of puts and delete operations. The format is compatible with [`levelup`][levelup] batch operations. Useful to synchronize objects.

### [`level-delete-range`][level-delete-range]

[![dependencies](https://img.shields.io/david/Raynos/level-delete-range.svg)](https://david-dm.org/Raynos/level-delete-range) [![Last commit](https://img.shields.io/github/last-commit/Raynos/level-delete-range)](https://github.com/Raynos/level-delete-range) [![Contributors](https://img.shields.io/github/contributors/Raynos/level-delete-range?color=brightgreen)](https://github.com/Raynos/level-delete-range/graphs/contributors)

Delete a range of keys from [`levelup`][levelup].

### [`levelup-defaults`][levelup-defaults]

[![dependencies](https://img.shields.io/david/mafintosh/levelup-defaults.svg)](https://david-dm.org/mafintosh/levelup-defaults) [![Last commit](https://img.shields.io/github/last-commit/mafintosh/levelup-defaults)](https://github.com/mafintosh/levelup-defaults) [![Contributors](https://img.shields.io/github/contributors/mafintosh/levelup-defaults?color=brightgreen)](https://github.com/mafintosh/levelup-defaults/graphs/contributors)

Change the defaults settings on a [`levelup`][levelup] instance by returning a new [`levelup`][levelup] instance that uses the same [`abstract-leveldown`][abstract-leveldown] but different options.

### [`level-methods`][level-methods]

[![dependencies](https://img.shields.io/david/Wayla/level-methods.svg)](https://david-dm.org/Wayla/level-methods) [![Last commit](https://img.shields.io/github/last-commit/Wayla/level-methods)](https://github.com/Wayla/level-methods) [![Contributors](https://img.shields.io/github/contributors/Wayla/level-methods?color=brightgreen)](https://github.com/Wayla/level-methods/graphs/contributors)

Useful meta information about [`levelup`][levelup] methods.

## Replication

### [`level-2pc`][level-2pc]

[![dependencies](https://img.shields.io/david/hij1nx/level-2pc.svg)](https://david-dm.org/hij1nx/level-2pc) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-2pc)](https://github.com/hij1nx/level-2pc) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-2pc?color=brightgreen)](https://github.com/hij1nx/level-2pc/graphs/contributors)

A two-phase commit protocol.

### [`level-couch-sync`][level-couch-sync]

[![dependencies](https://img.shields.io/david/dominictarr/level-couch-sync.svg)](https://david-dm.org/dominictarr/level-couch-sync) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-couch-sync)](https://github.com/dominictarr/level-couch-sync) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-couch-sync?color=brightgreen)](https://github.com/dominictarr/level-couch-sync/graphs/contributors)

Replicate from CouchDB to LevelDB.

### [`level-master`][level-master]

[![dependencies](https://img.shields.io/david/dominictarr/level-master.svg)](https://david-dm.org/dominictarr/level-master) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-master)](https://github.com/dominictarr/level-master) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-master?color=brightgreen)](https://github.com/dominictarr/level-master/graphs/contributors)

Master-Slave replication for [`levelup`][levelup].

### [`level-merkle`][level-merkle]

[![dependencies](https://img.shields.io/david/dominictarr/level-merkle.svg)](https://david-dm.org/dominictarr/level-merkle) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-merkle)](https://github.com/dominictarr/level-merkle) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-merkle?color=brightgreen)](https://github.com/dominictarr/level-merkle/graphs/contributors)

Uses [merkle-trees](http://en.wikipedia.org/wiki/Merkle_tree) to replicate data sets. Data must be sets and currently, deletes are not supported.

### [`level-replicate`][level-replicate]

[![dependencies](https://img.shields.io/david/dominictarr/level-replicate.svg)](https://david-dm.org/dominictarr/level-replicate) [![Last commit](https://img.shields.io/github/last-commit/dominictarr/level-replicate)](https://github.com/dominictarr/level-replicate) [![Contributors](https://img.shields.io/github/contributors/dominictarr/level-replicate?color=brightgreen)](https://github.com/dominictarr/level-replicate/graphs/contributors)

Master-master replication with [`levelup`][levelup]. Implements scuttlebutt style handshake, syncs data, then replicates real time changes.

### [`level-replicator`][level-replicator]

[![dependencies](https://img.shields.io/david/hij1nx/level-replicator.svg)](https://david-dm.org/hij1nx/level-replicator) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/level-replicator)](https://github.com/hij1nx/level-replicator) [![Contributors](https://img.shields.io/github/contributors/hij1nx/level-replicator?color=brightgreen)](https://github.com/hij1nx/level-replicator/graphs/contributors)

Master-master replication. Same goal as [`level-replicate`][level-replicate] but different approach.

## Tools

**CLI, GUI and web interfaces for exploring data.**

### [`lev2`][lev2]

[![dependencies](https://img.shields.io/david/maxlath/lev2.svg)](https://david-dm.org/maxlath/lev2) [![Last commit](https://img.shields.io/github/last-commit/maxlath/lev2)](https://github.com/maxlath/lev2) [![Contributors](https://img.shields.io/github/contributors/maxlath/lev2?color=brightgreen)](https://github.com/maxlath/lev2/graphs/contributors)

A complete REPL & CLI for managing LevelDB instances

### [`level-in`][level-in]

[![dependencies](https://img.shields.io/david/fergiemcdowall/level-in.svg)](https://david-dm.org/fergiemcdowall/level-in) [![Last commit](https://img.shields.io/github/last-commit/fergiemcdowall/level-in)](https://github.com/fergiemcdowall/level-in) [![Contributors](https://img.shields.io/github/contributors/fergiemcdowall/level-in?color=brightgreen)](https://github.com/fergiemcdowall/level-in/graphs/contributors)

A simple command-line utility for writing data to LevelDB via [`levelup`][levelup].

### [`level-out`][level-out]

[![dependencies](https://img.shields.io/david/fergiemcdowall/level-out.svg)](https://david-dm.org/fergiemcdowall/level-out) [![Last commit](https://img.shields.io/github/last-commit/fergiemcdowall/level-out)](https://github.com/fergiemcdowall/level-out) [![Contributors](https://img.shields.io/github/contributors/fergiemcdowall/level-out?color=brightgreen)](https://github.com/fergiemcdowall/level-out/graphs/contributors)

A simple command-line utility for reading LevelDB data via [`levelup`][levelup].

### [`level-key-list`][level-key-list]

[![dependencies](https://img.shields.io/david/hughsk/level-key-list.svg)](https://david-dm.org/hughsk/level-key-list) [![Last commit](https://img.shields.io/github/last-commit/hughsk/level-key-list)](https://github.com/hughsk/level-key-list) [![Contributors](https://img.shields.io/github/contributors/hughsk/level-key-list?color=brightgreen)](https://github.com/hughsk/level-key-list/graphs/contributors)

Command-line tool for quickly printing a list of keys in a LevelDB database.

### [`lev`][lev]

[![dependencies](https://img.shields.io/david/hij1nx/lev.svg)](https://david-dm.org/hij1nx/lev) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/lev)](https://github.com/hij1nx/lev) [![Contributors](https://img.shields.io/github/contributors/hij1nx/lev?color=brightgreen)](https://github.com/hij1nx/lev/graphs/contributors)

A CLI REPL interface for LevelDB.

### [`leveldb-repl`][leveldb-repl]

[![dependencies](https://img.shields.io/david/lapwinglabs/leveldb-repl.svg)](https://david-dm.org/lapwinglabs/leveldb-repl) [![Last commit](https://img.shields.io/github/last-commit/lapwinglabs/leveldb-repl)](https://github.com/lapwinglabs/leveldb-repl) [![Contributors](https://img.shields.io/github/contributors/lapwinglabs/leveldb-repl?color=brightgreen)](https://github.com/lapwinglabs/leveldb-repl/graphs/contributors)

Super simple REPL for LevelDB. Supports filter globbing.

### [`levelhud`][levelhud]

[![dependencies](https://img.shields.io/david/ricardobeat/levelhud.svg)](https://david-dm.org/ricardobeat/levelhud) [![Last commit](https://img.shields.io/github/last-commit/ricardobeat/levelhud)](https://github.com/ricardobeat/levelhud) [![Contributors](https://img.shields.io/github/contributors/ricardobeat/levelhud?color=brightgreen)](https://github.com/ricardobeat/levelhud/graphs/contributors)

LevelDB GUI with an interactive console.

### [`levelweb`][levelweb]

[![dependencies](https://img.shields.io/david/hij1nx/levelui.svg)](https://david-dm.org/hij1nx/levelui) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/levelui)](https://github.com/hij1nx/levelui) [![Contributors](https://img.shields.io/github/contributors/hij1nx/levelui?color=brightgreen)](https://github.com/hij1nx/levelui/graphs/contributors)

A LevelDB GUI. Includes simple data visualization tools.

### [`level-cli`][level-cli]

[![dependencies](https://img.shields.io/david/mablay/level-cli.svg)](https://david-dm.org/mablay/level-cli) [![Last commit](https://img.shields.io/github/last-commit/mablay/level-cli)](https://github.com/mablay/level-cli) [![Contributors](https://img.shields.io/github/contributors/mablay/level-cli?color=brightgreen)](https://github.com/mablay/level-cli/graphs/contributors)

Interact with LevelDB on the command line.

### [`level-explore`][level-explore]

[![dependencies](https://img.shields.io/david/jcblw/level-explore.svg)](https://david-dm.org/jcblw/level-explore) [![Last commit](https://img.shields.io/github/last-commit/jcblw/level-explore)](https://github.com/jcblw/level-explore) [![Contributors](https://img.shields.io/github/contributors/jcblw/level-explore?color=brightgreen)](https://github.com/jcblw/level-explore/graphs/contributors)

A terminal program to visualize LevelDB data. Early stages.

### [`level-repair`][level-repair]

[![dependencies](https://img.shields.io/david/kesla/level-repair.svg)](https://david-dm.org/kesla/level-repair) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-repair)](https://github.com/kesla/level-repair) [![Contributors](https://img.shields.io/github/contributors/kesla/level-repair?color=brightgreen)](https://github.com/kesla/level-repair/graphs/contributors)

CLI tool to repair a LevelDB.

### [`leveldb-editor`][leveldb-editor]

[![dependencies](https://img.shields.io/david/derhuerst/leveldb-editor.svg)](https://david-dm.org/derhuerst/leveldb-editor) [![Last commit](https://img.shields.io/github/last-commit/derhuerst/leveldb-editor)](https://github.com/derhuerst/leveldb-editor) [![Contributors](https://img.shields.io/github/contributors/derhuerst/leveldb-editor?color=brightgreen)](https://github.com/derhuerst/leveldb-editor/graphs/contributors)

Edit a LevelDB from the command line.

### [`levelscan`][levelscan]

[![dependencies](https://img.shields.io/david/joeledwards/node-levelscan.svg)](https://david-dm.org/joeledwards/node-levelscan) [![Last commit](https://img.shields.io/github/last-commit/joeledwards/node-levelscan)](https://github.com/joeledwards/node-levelscan) [![Contributors](https://img.shields.io/github/contributors/joeledwards/node-levelscan?color=brightgreen)](https://github.com/joeledwards/node-levelscan/graphs/contributors)

LevelDB command line scanning utility

### [`levelui`][levelui]

[![dependencies](https://img.shields.io/david/hij1nx/levelui.svg)](https://david-dm.org/hij1nx/levelui) [![Last commit](https://img.shields.io/github/last-commit/hij1nx/levelui)](https://github.com/hij1nx/levelui) [![Contributors](https://img.shields.io/github/contributors/hij1nx/levelui?color=brightgreen)](https://github.com/hij1nx/levelui/graphs/contributors)

A LevelDB GUI based on [`atom-shell`](https://github.com/atom/atom-shell) (now called Electron).

## Benchmarking & Debugging

### [`level-bench`][level-bench]

[![dependencies](https://img.shields.io/david/Level/bench.svg)](https://david-dm.org/Level/bench) [![Last commit](https://img.shields.io/github/last-commit/Level/bench)](https://github.com/Level/bench) [![Contributors](https://img.shields.io/github/contributors/Level/bench?color=brightgreen)](https://github.com/Level/bench/graphs/contributors)

Benchmark [`abstract-leveldown`][abstract-leveldown] and [`levelup`][levelup] stores.

### [`level-compare-forks`][level-compare-forks]

[![dependencies](https://img.shields.io/david/kesla/level-compare-forks.svg)](https://david-dm.org/kesla/level-compare-forks) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-compare-forks)](https://github.com/kesla/level-compare-forks) [![Contributors](https://img.shields.io/github/contributors/kesla/level-compare-forks?color=brightgreen)](https://github.com/kesla/level-compare-forks/graphs/contributors)

Run benchmarks on different level-forks and see how they compare.

### [`level-log`][level-log]

[![dependencies](https://img.shields.io/david/micnews/level-log.svg)](https://david-dm.org/micnews/level-log) [![Last commit](https://img.shields.io/github/last-commit/micnews/level-log)](https://github.com/micnews/level-log) [![Contributors](https://img.shields.io/github/contributors/micnews/level-log?color=brightgreen)](https://github.com/micnews/level-log/graphs/contributors)

Log all [`levelup`][levelup] operations, including method calls.

### [`debugdown`][debugdown]

[![dependencies](https://img.shields.io/david/vweevers/debugdown.svg)](https://david-dm.org/vweevers/debugdown) [![Last commit](https://img.shields.io/github/last-commit/vweevers/debugdown)](https://github.com/vweevers/debugdown) [![Contributors](https://img.shields.io/github/contributors/vweevers/debugdown?color=brightgreen)](https://github.com/vweevers/debugdown/graphs/contributors)

Log all operations made on an [`abstract-leveldown`][abstract-leveldown] compliant store. For node and browsers.

### [`level-time`][level-time]

[![dependencies](https://img.shields.io/david/micnews/level-time.svg)](https://david-dm.org/micnews/level-time) [![Last commit](https://img.shields.io/github/last-commit/micnews/level-time)](https://github.com/micnews/level-time) [![Contributors](https://img.shields.io/github/contributors/micnews/level-time?color=brightgreen)](https://github.com/micnews/level-time/graphs/contributors)

Log [`levelup`][levelup] operations and their duration.

### [`level-dump`][level-dump]

[![dependencies](https://img.shields.io/david/thlorenz/level-dump.svg)](https://david-dm.org/thlorenz/level-dump) [![Last commit](https://img.shields.io/github/last-commit/thlorenz/level-dump)](https://github.com/thlorenz/level-dump) [![Contributors](https://img.shields.io/github/contributors/thlorenz/level-dump?color=brightgreen)](https://github.com/thlorenz/level-dump/graphs/contributors)

Dumps all values and/or keys of a [`levelup`][levelup] or [`level-sublevel`][level-sublevel] instance to the console.

### [`level-benchmarks`][level-benchmarks]

[![dependencies](https://img.shields.io/david/kesla/level-benchmarks.svg)](https://david-dm.org/kesla/level-benchmarks) [![Last commit](https://img.shields.io/github/last-commit/kesla/level-benchmarks)](https://github.com/kesla/level-benchmarks) [![Contributors](https://img.shields.io/github/contributors/kesla/level-benchmarks?color=brightgreen)](https://github.com/kesla/level-benchmarks/graphs/contributors)

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

### [`level-browserify`][level-browserify]

Bundle for [`level-js`][level-js] and [`leveldown`][leveldown]. No longer maintained: superseded by [`level`][level] v5.0.0.

### [`level-mapped-index`][level-mapped-index]

Indexes for [`levelup`][levelup] built on [`map-reduce`][map-reduce]. Uses a custom indexing function for each index to parse and record index values for each entry. Archived.

### [`level-encoding`][level-encoding]

Implements the encoding logic of a [`levelup`][levelup]-like database. This functionality lives on in [`level-codec`][level-codec].

### [`byteup`][byteup]

Adds [`bytewise`][bytewise] as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: bytewise }`.

### [`msgpackup`][msgpackup]

Adds [msgpack](https://github.com/msgpack/msgpack) as a native encoding for [`levelup`][levelup]. This can now be achieved with [`encoding-down`][encoding-down] and `{ keyEncoding: msgpack }`.

### [`level-cbatch`][level-cbatch]

Provides a chainable API for `db.batch()`. This functionality is now provided by [`levelup`][levelup].

### [`memdb`][memdb]

[`levelup`][levelup] + [`memdown`][memdown]. Superseded by [`level-mem`][level-mem].

### [`levelup-iterator`][levelup-iterator]

Use [`abstract-leveldown`][abstract-leveldown] iterators instead of readable streams to traverse the database. Iterators are exposed by [`levelup`][levelup] since `levelup@3.1.0`.

### [`levelidb`][levelidb]

A [`levelup`][levelup] interface on top of IndexedDB. Superseded by [`level-js`][level-js] and [`level`][level].

### [`level-multiply`][level-multiply]

Make [`levelup`][levelup] `get()`, `put()` and `del()` methods accept multiples keys & values. Archived.

### [`level-namespace`][level-namespace]

Split your db up into multiple namespaces. Deprecated.

### [`q-level`][q-level]

[`levelup`][levelup] with Q promises. [`levelup`][levelup] has native Promise support now.

### [`level-static`][level-static]

Use [`levelup`][levelup] as a static file server. Abandoned.

### [`level-spaces`][level-spaces]

A simple namespacing solution for [`levelup`][levelup]. Deprecated.

### [`level-object`][level-object]

Store objects in [`levelup`][levelup]. Author recommends [`level-pathwise`][level-pathwise] instead.

### [`level-scuttlebutt`][level-scuttlebutt]

Persist and query scuttlebutt documents (requires [`level-sublevel`][level-sublevel]). Abandoned.

### [`gun-level`][gun-level]

Sync graph-style data real-time between browsers and servers. Discontinued.

### [`level-co`][level-co]

[`levelup`][levelup] wrappers for [co](https://github.com/tj/co). Instead use native ES6 features.

### [`level-session`][level-session]

Framework-agnostic, LevelDB-backed web server session manager. Archived.

### [`level-socket`][level-socket]

Backend server that exposes [`levelup`][levelup] over authenticated cross domain websockets.

### [`level-user`][level-user]

Client side library for authenticating with and moving data over [`level-socket`][level-socket].

### [`string-range`][string-range]

Manipulate string ranges for `db.createReadStream()`. Abandoned.

### [`range-bucket`][range-bucket]

Generate string ranges that group into ranges, suitable for use as database keys. Abandoned.

### [`level-partition-check`][level-partition-check]

Extend [`levelup`][levelup] to error if you write outside of a specified range of keys. Stalled work in progress.

### [`level-binomial-replication`][level-binomial-replication]

Biniomial replication for [`levelup`][levelup]. Abandoned.

### [`level-bytewise`][level-bytewise]

[`levelup`][levelup] with [`bytewise`][bytewise] key encoding and bytewise-friendly sublevels.

### [`level-peek`][level-peek]

Get the first or last record in a range. Abandoned.

### [`level-party-hyper`][level-party-hyper]

Defunct fork of [`level-party`][level-party].

### [`level-prebuilt`][level-prebuilt]

Same as [`level`][level] but with prebuilt binaries. This is now provided by [`level`][level] too.

### [`level-promise`][level-promise]

[`levelup`][levelup] with Promises. This is now provided by [`levelup`][levelup] out of the box.

### [`level-search`][level-search]

Index and search every property in [`levelup`][levelup] containing object values. Abandoned.

### [`level-scout`][level-scout]

Range search with a query planner. Development stalled.

### [`leveldown-android-prebuilt`][leveldown-android-prebuilt]

Defunct fork of [`leveldown`][leveldown] to add Android support. Merged into `leveldown`.

### [`leveldown-prebuilt`][leveldown-prebuilt]

Defunct fork of [`leveldown`][leveldown] to add prebuilt binaries. Now provided by `leveldown`.

### [`level-map-index`][level-map-index]

Another indexing module. Adapted from [`map-reduce`][map-reduce]. Author recommends other solutions.

### [`level-memview`][level-memview]

In memory view on top of [`levelup`][levelup]. Abandoned.

### [`plumbdb`][plumbdb]

HTTP request handlers for building web services on top of LevelDB. Not in active development.

## Contributing

Module and resource authors are welcome and encouraged to add an entry for their work via a pull request. To add a module, edit `modules/*.json` and run `npm run awesome` to update `README.md`.

[`Level/awesome`](https://github.com/Level/awesome) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

Support us with a monthly donation on [Open Collective](https://opencollective.com/level) and help us continue our work. Your logo or avatar will be displayed on our 28+ [GitHub repositories](https://github.com/Level) and [npm](https://www.npmjs.com/) packages. 💖

**Active financial contributors**

[![Open Collective backers](https://opencollective.com/level/tiers/backer.svg?button=false)](https://opencollective.com/level) [![Open Collective sponsors](https://opencollective.com/level/tiers/sponsor.svg?button=false)](https://opencollective.com/level)

**Past financial contributors**

[![Open Collective sponsors](https://opencollective.com/level/sponsors.svg?button=false&avatarHeight=36)](https://opencollective.com/level) [![Open Collective backers](https://opencollective.com/level/backers.svg?button=false&avatarHeight=36)](https://opencollective.com/level)

## License

[MIT](LICENSE)

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

[vertical]: https://github.com/zy445566/vertical

[webpack-starter]: https://github.com/Level/webpack-starter
