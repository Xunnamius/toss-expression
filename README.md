<!-- prettier-ignore-start -->

<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![Maintenance status][badge-maintenance]][link-repo]
[![Last commit timestamp][badge-last-commit]][link-repo]
[![Open issues][badge-issues]][link-issues]
[![Pull requests][badge-pulls]][link-pulls]
[![codecov][badge-codecov]][link-codecov]
[![Source license][badge-license]][link-license]
[![NPM version][badge-npm]][link-npm]
[![semantic-release][badge-semantic-release]][link-semantic-release]

<!-- badges-end -->

<!-- prettier-ignore-end -->

# toss-expression

While
[Babel supports throw expressions via plugins](https://babeljs.io/docs/en/babel-plugin-proposal-throw-expressions),
[TypeScript and VS Code do not (yet)](https://github.com/microsoft/TypeScript/issues/18535).
Hence this five line ponyfill takes the place of the currently-unavailable
[`@babel/plugin-proposal-throw-expressions`](https://babeljs.io/docs/en/babel-plugin-proposal-throw-expressions)
syntax.

```typescript
// Though the following is supported by Babel, VS Code/TypeScript will complain
const userToken = secureRequest() || throw new SecureAccessError('badness occurred');

// No errors
const userToken = secureRequest() || toss(new SecureAccessError('badness occurred'));
```

## Installation and Usage

```bash
npm install toss-expression
```

```typescript
// ESM
import { toss } from 'toss-expression';
console.log(successMessage() || toss('log operation failed'));
```

```javascript
// CJS
const { toss } = require('toss-expression');
console.log(successMessage() || toss('log operation failed'));
```

## Documentation

Further documentation can be found under [`docs/`][docs].

## Contributing and Support

**[New issues][choose-new-issue] and [pull requests][pr-compare] are always
welcome and greatly appreciated! 🤩** Just as well, you can [star 🌟 this
project][link-repo] to let me know you found it useful! ✊🏿 Thank you!

See [CONTRIBUTING.md][contributing] and [SUPPORT.md][support] for more
information.

[badge-blm]: https://api.ergodark.com/badges/blm 'Join the movement!'
[link-blm]: https://secure.actblue.com/donate/ms_blm_homepage_2019
[badge-maintenance]:
  https://img.shields.io/maintenance/active/2021
  'Is this package maintained?'
[link-repo]: https://github.com/xunnamius/toss-expression
[badge-last-commit]:
  https://img.shields.io/github/last-commit/xunnamius/toss-expression
  'When was the last commit to the official repo?'
[badge-issues]:
  https://isitmaintained.com/badge/open/Xunnamius/toss-expression.svg
  'Number of known issues with this package'
[link-issues]: https://github.com/Xunnamius/toss-expression/issues?q=
[badge-pulls]:
  https://img.shields.io/github/issues-pr/xunnamius/toss-expression
  'Number of open pull requests'
[link-pulls]: https://github.com/xunnamius/toss-expression/pulls
[badge-codecov]:
  https://codecov.io/gh/Xunnamius/toss-expression/branch/main/graph/badge.svg?token=HWRIOBAAPW
  'Is this package well-tested?'
[link-codecov]: https://codecov.io/gh/Xunnamius/toss-expression
[package-json]: package.json
[badge-license]:
  https://img.shields.io/npm/l/toss-expression
  "This package's source license"
[link-license]: https://github.com/Xunnamius/toss-expression/blob/main/LICENSE
[badge-npm]:
  https://api.ergodark.com/badges/npm-pkg-version/toss-expression
  'Install this package using npm or yarn!'
[link-npm]: https://www.npmjs.com/package/toss-expression
[badge-semantic-release]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
  'This repo practices continuous integration and deployment!'
[link-semantic-release]: https://github.com/semantic-release/semantic-release
[docs]: docs
[choose-new-issue]:
  https://github.com/Xunnamius/toss-expression/issues/new/choose
[pr-compare]: https://github.com/Xunnamius/toss-expression/compare
[contributing]: CONTRIBUTING.md
[support]: .github/SUPPORT.md
