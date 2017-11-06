# vue-permission

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


## Install

```bash
$ npm i vue-permission --save
```

## Usage

```js
import VuePermission 'vue-permission';

Vue.use(VuePermission);

Vue.permission.authorize({'create': true, 'del': false});

Vue.permission.hasPermission('del'); // console.log(false);

// if u don't has permission the button will not show. and style display none.
<button v-permission='create'></button>
````

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/ValueFE/vue-permission/issues).

## License

[MIT](LICENSE)