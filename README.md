# egg-onefile

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-onefile.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-onefile
[travis-image]: https://img.shields.io/travis/eggjs/egg-onefile.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-onefile
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-onefile.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-onefile?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-onefile.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-onefile
[snyk-image]: https://snyk.io/test/npm/egg-onefile/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-onefile
[download-image]: https://img.shields.io/npm/dm/egg-onefile.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-onefile

This plugin will serve for dynamic file output.

## Install

```bash
$ npm i egg-onefile --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.onefile = {
  enable: true,
  package: 'egg-onefile',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.onefile = {
  match(ctx) {
    return ctx.url === '/';
  },
  headers: {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
  },
  replace: {
    '${hello}': 'hello',
  },
  * before() {
    // you can do something before
  }
  path: path.join(__dirname, '../app/public/index.html'),
};
```

see [config/config.default.js](https://github.com/ValueFE/egg-onefile/blob/master/config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/ValueFE/egg-onefile/issues).

## License

[MIT](LICENSE)