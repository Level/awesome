# Awesome Level ![level badge][level-badge]

> A curated list of amazingly awesome **[Level]** modules and resources. [Add yours!](#contributing)

## Core

| name | dependencies | description
|:---- |:------------ |:-----------
|**[`level`]** | [![david][400]][401] | Main entry point for beginners.<br> A convenient bundle of [`levelup`], [`leveldown`] and [`encoding-down`].
|**[`levelup`]** | [![david][402]][403] | The glue that holds everything together.<br> Use this instead of [`level`] when you need a [custom store](#stores).

<!-- Reserved for this section: 400-499 -->
[400]: https://img.shields.io/david/level/level.svg
[401]: https://david-dm.org/level/level
[402]: https://img.shields.io/david/level/levelup.svg
[403]: https://david-dm.org/level/levelup

## Stores

Modules that implement [`abstract-leveldown`] as storage for [`levelup`].

| Name                   | Compatibility    | Status            | Type
|:---------------------- |:---------------  |:----------------- |:----
|**[`leveldown`]**       | [![down2.7]][ad] |[![david][01]][02] |[LevelDB]
|**[`leveldown-hyper`]** | [![down2.7]][ad] |[![david][03]][04] |[HyperLevelDB]
|**[`level-js`]**        | [![down0.x]][ad] |[![david][05]][06] |[IndexedDB]
|**[`memdown`]**         | [![down2.7]][ad] |[![david][07]][08] |[In-memory RBTree]
|**[`redisdown`]**       | [![down2.7]][ad] |[![david][09]][10] |[Redis]
|**[`rocksdb`]**         | [![down2.7]][ad] |[![david][11]][12] |[RocksDB]
|**[`sqldown`]**         | [![down2.1]][ad] |[![david][13]][14] |[`sqlite3`], [`pg`], [`mysql`], WebSQL
|**[`asyncstorage-down`]** | [![down2.6]][ad] |[![david][16]][17] | [AsyncStorage] (React Native)
|**[`azureleveldown`]** | [![down0.x]][ad] |[![david][18]][19] | Windows Azure Table Storage
|**[`dynamo-down`]** | [![down2.1]][ad] |[![david][20]][21] | [AWS DynamoDB]
|**[`fruitdown`]** | [![down0.x]][ad] |[![david][22]][23] |IndexedDB (Apple)
|**[`jsondown`]** | [![nondown]][ad] |[![david][24]][25] | JSON on disk
|**[`leveldown-basho`]** | [![down0.x]][ad] |[![david][26]][27] | [Basho's LevelDB fork]
|**[`localstorage-down`]** | [![down0.x]][ad] |[![david][28]][29] | [localStorage]
|**[`medeadown`]** | [![down1.0]][ad] |[![david][30]][31] | [medea]
|**[`mongodown`]** | [![down2.6]][ad] |[![david][32]][33] | MongoDB
|**[`mysqldown`]** | [![down0.x]][ad] |[![david][34]][35] | MySQL
|**[`riakdown`]** | [![down0.x]][ad] |[![david][36]][37] | [riakpbc]
|**[`sheet-down`]** | [![nondown]][ad] |[![david][38]][39] | [Google Sheets]

<!-- Reserved for this section: 1-99 -->
[01]: https://img.shields.io/david/level/leveldown.svg
[02]: https://david-dm.org/level/leveldown
[03]: https://img.shields.io/david/Level/leveldown-hyper.svg
[04]: https://david-dm.org/level/leveldown-hyper
[05]: https://img.shields.io/david/maxogden/level.js.svg
[06]: https://david-dm.org/maxogden/level.js
[07]: https://img.shields.io/david/Level/memdown.svg
[08]: https://david-dm.org/level/memdown
[09]: https://img.shields.io/david/hmalphettes/redisdown.svg
[10]: https://david-dm.org/hmalphettes/redisdown
[11]: https://img.shields.io/david/Level/rocksdb.svg
[12]: https://david-dm.org/level/rocksdb
[13]: https://img.shields.io/david/calvinmetcalf/sqldown.svg
[14]: https://david-dm.org/calvinmetcalf/sqldown
[16]: https://img.shields.io/david/tradle/asyncstorage-down.svg
[17]: https://david-dm.org/tradle/asyncstorage-down
[18]: https://img.shields.io/david/richorama/azureleveldown.svg
[19]: https://david-dm.org/richorama/azureleveldown
[20]: https://img.shields.io/david/jed/dynamo-down.svg
[21]: https://david-dm.org/jed/dynamo-down
[22]: https://img.shields.io/david/nolanlawson/fruitdown.svg
[23]: https://david-dm.org/nolanlawson/fruitdown
[24]: https://img.shields.io/david/toolness/jsondown.svg
[25]: https://david-dm.org/toolness/jsondown

<!-- not available (it's a branch of leveldown) -->
[26]: https://img.shields.io/david/level/leveldown-basho.svg
[27]: https://david-dm.org/level/leveldown-basho

[28]: https://img.shields.io/david/No9/localstorage-down.svg
[29]: https://david-dm.org/No9/localstorage-down
[30]: https://img.shields.io/david/kesla/medeadown.svg
[31]: https://david-dm.org/kesla/medeadown
[32]: https://img.shields.io/david/watson/mongodown.svg
[33]: https://david-dm.org/watson/mongodown
[34]: https://img.shields.io/david/kesla/mysqldown.svg
[35]: https://david-dm.org/kesla/mysqldown
[36]: https://img.shields.io/david/nlf/riakdown.svg
[37]: https://david-dm.org/nlf/riakdown
[38]: https://img.shields.io/david/jed/sheet-down.svg
[39]: https://david-dm.org/jed/sheet-down

## Layers

Modules that implement [`abstract-leveldown`] to wrap another [`abstract-leveldown`]. This is the preferred extension point.

| Name                 |Compatibility    | Status             | Description
|:-------------------- |:--------------- |:-------------------|:-----------
|**[`encoding-down`]** |[![down2.7]][ad] | [![david][100]][101] | Provides key/value encoding
|**[`deferred-leveldown`]** |[![down2.7]][ad] | [![david][102]][103] | Handles delayed-open. Built into [`levelup`].
|**[`cachedown`]** | [![down2.4]][ad] | [![david][104]][105] | LRU cache

<!-- Reserved for this section: 100-199 -->
[100]: https://img.shields.io/david/Level/encoding-down.svg
[101]: https://david-dm.org/level/encoding-down
[102]: https://img.shields.io/david/Level/deferred-leveldown.svg
[103]: https://david-dm.org/level/deferred-leveldown
[104]: https://img.shields.io/david/mvayngrib/cachedown.svg
[105]: https://david-dm.org/mvayngrib/cachedown

## Plugins for [`levelup`]

Modules that add functionality to [`levelup`].

| Name | Status       | Description
|:---- |:------------ |:-----------
|**[`levelup-async-iterator`]** | [![david][200]][201] | Expose `iterator()` with `[Symbol.asyncIterator]`

<!-- Reserved for this section: 200-299 -->
[200]: https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg
[201]: https://david-dm.org/MeirionHughes/levelup-async-iterator

## Utilities

| Name | Status       | Description
|:---- |:------------ |:-----------
|**[`level-iterator-stream`]** | [![david][300]][301] | Turn an [`abstract-leveldown`] iterator into a readable stream
| **[`cluster-leveldown`]** | [![david][302][303]] | Wrap any [`levelup instance`] for `cluster` usage among multiple processes

<!-- Reserved for this section: 300-399 -->
[300]: https://david-dm.org/Level/iterator-stream.svg
[301]: https://david-dm.org/level/iterator-stream
[302]: https://david-dm.org/chiguireitor/cluster-levelup.svg
[303]: https://david-dm.org/chiguireitor/cluster-levelup


## Other

| Name              | Description
|:----------------- |:-----------
| **[leveldb.org]** | Website for LevelDB

## Contributing

Resource authors are welcome and encouraged to add an entry for their work in README.md via a pull request.

Level is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See [`CONTRIBUTING.md`](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## License

Copyright (c) 2012-2017 **Level** [contributors](https://github.com/level/community#contributors).

Level is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.

<!-- Manual badges for now -->
[down2.7]: https://img.shields.io/badge/abstract--leveldown-2.7-brightgreen.svg
[down2.6]: https://img.shields.io/badge/abstract--leveldown-2.6-orange.svg
[down2.4]: https://img.shields.io/badge/abstract--leveldown-2.4-orange.svg
[down2.1]: https://img.shields.io/badge/abstract--leveldown-2.1-orange.svg
[down1.0]: https://img.shields.io/badge/abstract--leveldown-1.0-red.svg
[down0.x]: https://img.shields.io/badge/abstract--leveldown-0.x-red.svg
[nondown]: https://img.shields.io/badge/abstract--leveldown-invalid-lightgrey.svg

[Level]: https://github.com/level
[`abstract-leveldown`]: https://github.com/level/abstract-leveldown
[ad]: https://github.com/level/abstract-leveldown
[`levelup`]: https://github.com/level/levelup
[`leveldown`]: https://github.com/level/leveldown
[LevelDB]: https://github.com/google/leveldb
[`leveldown-hyper`]: https://github.com/level/leveldown-hyper
[HyperLevelDB]: https://github.com/rescrv/HyperLevelDB
[`level-js`]: https://github.com/maxogden/level.js
[IndexedDB]: https://developer.mozilla.org/en-US/docs/IndexedDB
[`memdown`]: https://github.com/level/memdown
[In-memory RBTree]: https://www.npmjs.com/package/functional-red-black-tree
[`redisdown`]: https://github.com/hmalphettes/redisdown
[Redis]: https://redis.io/
[`rocksdb`]: https://github.com/level/rocksdb
[RocksDB]: https://github.com/facebook/rocksdb/
[`sqldown`]: https://github.com/calvinmetcalf/sqldown
[`sqlite3`]: https://www.npmjs.com/package/sqlite3
[`pg`]: https://www.npmjs.com/package/pg
[`mysql`]: https://www.npmjs.com/package/mysql
[`asyncstorage-down`]: https://github.com/tradle/asyncstorage-down
[AsyncStorage]: https://facebook.github.io/react-native/docs/asyncstorage.html
[`azureleveldown`]: https://github.com/richorama/azureleveldown
[`dynamo-down`]: https://github.com/jed/dynamo-down
[`fruitdown`]: https://github.com/nolanlawson/fruitdown
[`jsondown`]: https://github.com/toolness/jsondown
[`leveldown-basho`]: https://www.npmjs.com/package/leveldown-basho
[`localstorage-down`]: https://github.com/No9/localstorage-down
[`medeadown`]: https://github.com/kesla/medeadown
[`mongodown`]: https://github.com/watson/mongodown
[`mysqldown`]: https://github.com/kesla/mysqldown
[`riakdown`]: https://github.com/nlf/riakdown
[`sheet-down`]: https://github.com/jed/sheet-down
[AWS DynamoDB]: http://aws.amazon.com/dynamodb
[Google Sheets]: https://docs.google.com/spreadsheets
[riakpbc]: https://github.com/nlf/riakpbc
[medea]: https://github.com/argo/medea
[Basho's LevelDB fork]: https://github.com/basho/leveldb
[localStorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[`encoding-down`]: https://github.com/level/encoding-down
[`deferred-leveldown`]: https://github.com/Level/deferred-leveldown
[`cachedown`]: https://github.com/mvayngrib/cachedown
[`levelup-async-iterator`]: https://github.com/MeirionHughes/levelup-async-iterator
[`level`]: https://github.com/level/level
[`level-iterator-stream`]: https://github.com/level/iterator-stream
[leveldb.org]: http://leveldb.org
[level-badge]: http://leveldb.org/img/badge.svg
