---
title: Getting Started
subtitle: Start using Namicorn by using a few examples.
date: 2019-03-24T19:04
navGroup: Namicorn
navTitle: Getting Started
navIndex: 0
---

Create a new project.

```shell
mkdir test-out-namicorn && cd $_
npm init -y
```

Install Namicorn.

```shell
npm install namicorn isomorphic-fetch
```

Make a file, `script.js`.

```javascript
// what-is-resolver-dot-eth.js

const {default: resolve} = require('namicorn')

resolve('resolver.eth')
  .then(address => console.log('resolver.eth resolves to', address))
  .catch(console.error)
```

Execute the script.

```javascript
node what-is-resolver-dot-eth.js
# resolver.eth resolves to 0xD3ddcCDD3b25A8a7423B5bEe360a42146eb4Baf3
```
