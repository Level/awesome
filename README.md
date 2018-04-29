# Awesome Level ![level badge][level-badge]

> A curated list of amazingly awesome **[Level][level-org]** modules and resources. [Add yours!](#contributing)

## Table of Contents

-   [Bundles](#bundles)
-   [Core](#core)
-   [Stores](#stores)
-   [Layers](#layers)
-   [Plugins for levelup](#plugins-for-levelup)
-   [Utilities](#utilities)
-   [Resources](#resources)
-   [Contributing](#contributing)
-   [License](#license)

## Bundles

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level`]** | [![dependencies](https://img.shields.io/david/level/level.svg?label=%E2%99%A5)](https://david-dm.org/level/level) | Main entry point for beginners. A convenient bundle of [`levelup`], [`leveldown`] and [`encoding-down`].
**[`level-mem`]** | [![dependencies](https://img.shields.io/david/level/level-mem.svg?label=%E2%99%A5)](https://david-dm.org/level/level-mem) | A convenient bundle of [`levelup`], [`memdown`] and [`encoding-down`].
**[`level-rocksdb`]** | [![dependencies](https://img.shields.io/david/level/level-rocksdb.svg?label=%E2%99%A5)](https://david-dm.org/level/level-rocksdb) | A convenient bundle of [`levelup`], [`rocksdb`] and [`encoding-down`].

## Core

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup`]** | [![dependencies](https://img.shields.io/david/level/levelup.svg?label=%E2%99%A5)](https://david-dm.org/level/levelup) | The glue that holds everything together. Use this instead of [`level` or its variants](#bundles) when you need a [custom or swappable store](#stores).
**[`abstract-leveldown`]** | [![dependencies](https://img.shields.io/david/level/abstract-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/level/abstract-leveldown) | An abstract prototype matching the [`leveldown`] API. Use this to implement your own store.
**[`level-packager`]** | [![dependencies](https://img.shields.io/david/level/packager.svg?label=%E2%99%A5)](https://david-dm.org/level/packager) | Package helper to bundle a store with [`levelup`] and [`encoding-down`]. This powers [`level` and its variants](#bundles).

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
**[`encoding-down`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/encoding-down.svg?label=%E2%99%A5)](https://david-dm.org/level/encoding-down) | Provides key/value encoding
**[`deferred-leveldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-4.0-brightgreen.svg) | [![dependencies](https://img.shields.io/david/level/deferred-leveldown.svg?label=%E2%99%A5)](https://david-dm.org/level/deferred-leveldown) | Handles delayed-open. Built into [`levelup`].
**[`subleveldown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-orange.svg)<br>![levelup](https://img.shields.io/badge/levelup-1.2-orange.svg) | [![dependencies](https://img.shields.io/david/mafintosh/subleveldown.svg?label=%E2%99%A5)](https://david-dm.org/mafintosh/subleveldown) | Sublevels implemented using leveldowns
**[`cachedown`]** | ![abstract-leveldown](https://img.shields.io/badge/abstract--leveldown-2.4-orange.svg) | [![dependencies](https://img.shields.io/david/mvayngrib/cachedown.svg?label=%E2%99%A5)](https://david-dm.org/mvayngrib/cachedown) | LRU cache

## Plugins for levelup

Modules that add functionality to [`levelup`].

Name | Dependencies | Description
:--- | :----------- | :----------
**[`levelup-async-iterator`]** | [![dependencies](https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg?label=%E2%99%A5)](https://david-dm.org/MeirionHughes/levelup-async-iterator) | Expose `iterator()` with [`Symbol.asyncIterator`](https://github.com/tc39/proposal-async-iteration)
**[`cluster-levelup`]** | [![dependencies](https://img.shields.io/david/chiguireitor/cluster-levelup.svg?label=%E2%99%A5)](https://david-dm.org/chiguireitor/cluster-levelup) | Wrap any [`levelup`] instance for [`cluster`](https://nodejs.org/api/cluster.html) usage among multiple processes

## Utilities

Name | Dependencies | Description
:--- | :----------- | :----------
**[`level-iterator-stream`]** | [![dependencies](https://img.shields.io/david/level/iterator-stream.svg?label=%E2%99%A5)](https://david-dm.org/level/iterator-stream) | Turn an [`abstract-leveldown`] iterator into a readable stream

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

Copyright (c) 2012-2017 **Level** [contributors](https://github.com/level/community#contributors).

Level is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.

[`abstract-leveldown`]: https://github.com/level/abstract-leveldown

[`asyncstorage-down`]: https://github.com/tradle/asyncstorage-down

[`azureleveldown`]: https://github.com/richorama/azureleveldown

[`cachedown`]: https://github.com/mvayngrib/cachedown

[`cluster-levelup`]: https://github.com/chiguireitor/cluster-levelup

[`deferred-leveldown`]: https://github.com/level/deferred-leveldown

[`dynamo-down`]: https://github.com/jed/dynamo-down

[`encoding-down`]: https://github.com/level/encoding-down

[`fruitdown`]: https://github.com/nolanlawson/fruitdown

[`jsondown`]: https://github.com/toolness/jsondown

[`level-iterator-stream`]: https://github.com/level/iterator-stream

[`level-js`]: https://github.com/level/level.js

[`level-mem`]: https://github.com/level/level-mem

[`level-packager`]: https://github.com/level/packager

[`level-rocksdb`]: https://github.com/level/level-rocksdb

[`level`]: https://github.com/level/level

[`leveldown-basho`]: https://www.npmjs.com/package/leveldown-basho

[`leveldown-hyper`]: https://github.com/level/leveldown-hyper

[`leveldown`]: https://github.com/level/leveldown

[`levelup-async-iterator`]: https://github.com/MeirionHughes/levelup-async-iterator

[`levelup`]: https://github.com/level/levelup

[`localstorage-down`]: https://github.com/No9/localstorage-down

[`medeadown`]: https://github.com/kesla/medeadown

[`memdown`]: https://github.com/level/memdown

[`mongodown`]: https://github.com/watson/mongodown

[`mysqldown`]: https://github.com/kesla/mysqldown

[`redisdown`]: https://github.com/hmalphettes/redisdown

[`riakdown`]: https://github.com/nlf/riakdown

[`rocksdb`]: https://github.com/level/rocksdb

[`sheet-down`]: https://github.com/jed/sheet-down

[`sqldown`]: https://github.com/calvinmetcalf/sqldown

[`subleveldown`]: https://github.com/mafintosh/subleveldown

[level-badge]: http://leveldb.org/img/badge.svg

[level-org]: https://github.com/level

[leveldb.org]: http://leveldb.org
