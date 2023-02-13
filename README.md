# 🧀 Paneer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

Modify code like a cheese! Powered by [recast](https://github.com/benjamn/recast) and [babel](https://babeljs.io/).

## Usage

Install npm package:

```sh
# using yarn
yarn add --dev paneer

# using npm
npm install -D paneer

# using pnpm
pnpm add -D paneer
```

Import utilities:

```js
// ESM / Bundler
import { parseCode, generateCode } from "paneer";
import * as p from "paneer";

// CommonJS
const { parseCode, generateCode } = require("panner");
const p = require("panner");
```

**Example:** Modify a file:

`config.js`:

```js
export default {
  foo: ["a"],
};
```

Code to modify and append `b` to `foo` prop of defaultExport:

```js
import { loadFile, writeFile } from "paneer";

const _module = await loadFile("config.js");

_module.exports.default.props.foo.push("b");

await writeFile(_module);
```

Updated `config.js`:

```js
export default {
  foo: ["a", "b"],
};
```

**Example:** Directly use AST utils:

```js
import { parseCode, generateCode } from "paneer";

// Parse to AST
const _module = parseCode(`export default { foo: ['a'] }`);

// Add a new array member
_module.exports.default.props.foo.push("b");

// Generate code
const { code, map } = generateCode(_module);
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/packageName?style=flat-square
[npm-version-href]: https://npmjs.com/package/packageName
[npm-downloads-src]: https://img.shields.io/npm/dm/packageName?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/packageName
[github-actions-src]: https://img.shields.io/github/workflow/status/unjs/packageName/ci/main?style=flat-square
[github-actions-href]: https://github.com/unjs/packageName/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/packageName/main?style=flat-square
[codecov-href]: https://codecov.io/gh/unjs/packageName
