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

Most of the time installation looks like:

```bash
npm install namicorn
```

```bash
# It's also available via yarn
yarn add namicorn
```


# CDN

Namicorn can also be used as a [UMD Module](https://github.com/umdjs/umd) via a
CDN like [UNPKG](https://unpkg.com/).

```html
<script src="https://unpkg.com/namicorn/build/index.umd.js"></script>
<script>
var namicorn = new Namicorn();
namicorn.address('resolver.eth', 'ETH');
    .then(console.log)
    .catch(console.error);
</script>
```
