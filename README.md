# smash-streams
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][dep-image]][dep-url]

Smash your streams together and consume them as one stream.

## API
### smash-streams(...streams)
Returns a new instance of SmashStream

### SmashStream
Class that smashes all stream arguments into one.

## Usage

### CommonJS

```js
var smashStreams = require('smash-streams');

smashStreams(stream1, stream2)
  .pipe(watheverStream());
```

Or you can even do some extreme smashing:

```js
var smashStreams = require('smash-streams');

smashStreams(
  stream1,
  [stream2, stream3, [stream4]],
  stream5
).pipe(extremeStream());
```

### ES2015

```js
import { smashStreams } from 'smash-streams';

smashStreams(stream1).pipe(...)
```

## Contributing

Clone the repo via:
```shell
git clone https://github.com/nickvdyck/smash-streams.git
```

Then do:
- npm install
- npm run build

Before creating a pull request always run all the tests via
- npm run test

[npm-url]: https://www.npmjs.com/package/smash-streams
[npm-image]: https://badge.fury.io/js/smash-streams.svg

[travis-url]: https://travis-ci.org/nickvdyck/smash-streams
[travis-image]: https://travis-ci.org/nickvdyck/smash-streams.svg?branch=master

[dep-url]: https://david-dm.org/nickvdyck/smash-streams
[dep-image]: https://david-dm.org/nickvdyck/smash-streams.svg 

