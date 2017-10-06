# Awesome Level ![level badge][level-badge]

> A curated list of amazingly awesome **[Level]** modules and resources. [Add yours!](#contributing)

## Core

| name | dependencies | description
|:---- |:------------ |:-----------
|**[`level`]** | [![david][120]][121] | Main entry point for beginners.<br> A convenient bundle of [`levelup`], [`leveldown`] and [`encoding-down`].
|**[`levelup`]** | [![david][122]][123] | The glue that holds everything together.<br> Use this instead of [`level`] when you need a [custom store](#stores).

<!-- Reserved for this section: 120-149 -->
[120]: https://img.shields.io/david/level/level.svg
[121]: https://david-dm.org/level/level
[122]: https://img.shields.io/david/level/levelup.svg
[123]: https://david-dm.org/level/levelup

## Stores

Modules that implement [`abstract-leveldown`] as storage for [`levelup`].

| Name                   | Compatibility    | Status            | Type
|:---------------------- |:---------------  |:----------------- |:----
|**[`leveldown`]**       | [![down2.7]][15] |[![david][01]][02] |[LevelDB]
|**[`leveldown-hyper`]** | [![down2.7]][15] |[![david][03]][04] |[HyperLevelDB]
|**[`level-js`]**        | [![down0.x]][15] |[![david][05]][06] |[IndexedDB]
|**[`memdown`]**         | [![down2.7]][15] |[![david][07]][08] |[In-memory RBTree]
|**[`redisdown`]**       | [![down2.7]][15] |[![david][09]][10] |[Redis]
|**[`rocksdb`]**         | [![down2.7]][15] |[![david][11]][12] |[RocksDB]
|**[`sqldown`]**         | [![down2.1]][15] |[![david][13]][14] |[`sqlite3`], [`pg`], [`mysql`]

<!-- Reserved for this section: 1-29 -->
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
[15]: https://github.com/level/abstract-leveldown

## Layers

Modules that implement [`abstract-leveldown`] to wrap another [`abstract-leveldown`]. This is the preferred extension point.

| Name                 |Compatibility    | Status             | Description
|:-------------------- |:--------------- |:-------------------|:-----------
|**[`encoding-down`]** |[![down2.7]][32] | [![david][30]][31] | Provides key/value encoding

<!-- Reserved for this section: 30-59 -->
[30]: https://img.shields.io/david/Level/encoding-down.svg
[31]: https://david-dm.org/level/encoding-down
[32]: https://github.com/level/abstract-leveldown

## Plugins for [`levelup`]

Modules that add functionality to [`levelup`].

| name | dependencies | description
|:---- |:------------ |:-----------
|**[`levelup-async-iterator`]** | [![david][60]][61] | Expose `iterator()` with `[Symbol.asyncIterator]`

<!-- Reserved for this section: 60-89 -->
[60]: https://img.shields.io/david/MeirionHughes/levelup-async-iterator.svg
[61]: https://david-dm.org/MeirionHughes/levelup-async-iterator

## Utilities

| name | dependencies | description
|:---- |:------------ |:-----------
|**[`level-iterator-stream`]** | [![david][92]][93] | Turn an [`abstract-leveldown`] iterator into a readable stream

<!-- Reserved for this section: 90-119 -->
[92]: https://david-dm.org/Level/iterator-stream.svg
[93]: https://david-dm.org/level/iterator-stream

## Other

| name | description |
|:---- |:----------- |
| **[leveldb.org]** | website for LevelDb

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
[down2.1]: https://img.shields.io/badge/abstract--leveldown-2.1-orange.svg
[down0.x]: https://img.shields.io/badge/abstract--leveldown-0.x-red.svg

[Level]: https://github.com/level
[`abstract-leveldown`]: https://github.com/level/abstract-leveldown
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
[`encoding-down`]: https://github.com/level/encoding-down
[`levelup-async-iterator`]: https://github.com/MeirionHughes/levelup-async-iterator
[`level`]: https://github.com/level/level
[`level-iterator-stream`]: https://github.com/level/iterator-stream
[leveldb.org]: http://leveldb.org
[level-badge]: https://img.shields.io/badge/-level-brightgreen.svg?colorA=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BPHN2ZyB3aWR0aD0iMTg4cHgiIGhlaWdodD0iMjQycHgiIHZpZXdCb3g9IjAgMCAxODggMjQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4gICAgPHRpdGxlPlVudGl0bGVkIDEzPC90aXRsZT4gICAgPGRlc2NyaXB0aW9uPkNyZWF0ZWQgd2l0aCBTa2V0Y2ggKGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCk8L2Rlc2NyaXB0aW9uPiAgICA8ZGVmcz48L2RlZnM%2BICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPiAgICAgICAgPHBhdGggZD0iTTk0LDU0IEwwLDEwMC40MTAwNDIgTDAsMTk0LjgwMzM0NyBMOTQsMjQyIEwxODgsMTk0LjgwMzM0NyBMMTg4LDEwMC40MTAwNDIgTDk0LDU0IFoiIGlkPSJSZWN0YW5nbGUtMSIgZmlsbD0iI0Q0RUI5NSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI%2BPC9wYXRoPiAgICAgICAgPHBhdGggZD0iTTk0LDM5IEwwLDg1LjQxMDA0MTggTDAsMTc5LjgwMzM0NyBMOTQsMjI3IEwxODgsMTc5LjgwMzM0NyBMMTg4LDg1LjQxMDA0MTggTDk0LDM5IFoiIGlkPSJSZWN0YW5nbGUtMSIgZmlsbD0iIzk2REM3NSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI%2BPC9wYXRoPiAgICAgICAgPHBhdGggZD0iTTk0LDEgTDAsNDcuNDEwMDQxOCBMMCwxNDEuODAzMzQ3IEw5NCwxODkgTDE4OCwxNDEuODAzMzQ3IEwxODgsNDcuNDEwMDQxOCBMOTQsMSBaIiBpZD0iUmVjdGFuZ2xlLTEiIG9wYWNpdHk9IjAuNTUyODQwOTA5IiBmaWxsPSIjMzE3MzQyIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg%2BICAgICAgICA8cGF0aCBkPSJNOTQsOTEuMTc3Nzc5MSBMMCw0NyBMMCwxNDEuNjY2NjY3IEw5NCwxODkgTDE4OCwxNDEuNjY2NjY3IEwxODgsNDcgTDk0LDkxLjE3Nzc3OTEgWiIgaWQ9IlJlY3RhbmdsZS0xIiBvcGFjaXR5PSIwLjU1Mjg0MDkwOSIgZmlsbD0iIzM0OTU0QyIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI%2BPC9wYXRoPiAgICA8L2c%2BPC9zdmc%2B
