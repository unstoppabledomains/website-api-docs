---
title: Installation
subtitle: Namicorn is available on the npm registry or by CDN.
date: 2019-03-24T19:04
navGroup: Namicorn
navTitle: Installation
navIndex: 1
---

# Requirements

- The [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  is required to send requests in `namicorn` and `@namicorn/zns`. This means a
  package like
  [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) should be
  used in a `nodejs` environment.

# Package

Namicorn is hosted on the [NPM Registry](https://www.npmjs.com/) as package
`namicorn`. Namicorn also owns the npm org `@namicorn`.

Other packages listed:

- [`@namicorn/core`](https://www.npmjs.com/package/@namicorn/ens) – Namicorn
  Core module
- [`@namicorn/ens`](https://www.npmjs.com/package/@namicorn/ens) –
  [ENS](https://ens.domains) resolution middleware
- [`@namicorn/zns`](https://www.npmjs.com/package/@namicorn/zns) –
  [ZNS](https://testnet.unstoppabledomains.com) resolution middleware
- [`@namicorn/ens`](https://www.npmjs.com/package/@namicorn/rns) –
  [RNS](https://docs.rns.rsk.co/) resolution middleware

Most of the time installation looks like:

```bash
npm install namicorn
```

```bash
# It's also available via yarn
yarn add namicorn
```

```bash
# Or a via a more specific installation
npm install @namicorn/core @namicorn/ens
```

# CDN

Namicorn can also be used as a [UMD Module](https://github.com/umdjs/umd) via a
CDN like [UNPKG](https://unpkg.com/).

```html
<script src="https://unpkg.com/namicorn/build/index.umd.js"></script>
<script>
  Namicorn.resolve('resolver.eth')
    .then(console.log)
    .catch(console.error)
</script>
```
