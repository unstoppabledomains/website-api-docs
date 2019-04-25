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
npm install namicorn
```

Make a file, `script.js`.

```javascript
const {default: Namicorn} = require('namicorn')

const namicorn = new Namicorn()

function resolve(domain, currency) {
  namicorn.address(domain, currency)
    .then(address => console.log(domain, ' resolves to', address))
    .catch(console.error)
}
resolve('resolver.eth', "ETH")
resolve('ryan.zil', "ZIL")
```

Execute the script.

```javascript
node script.js
# ryan.zil  resolves to 0x177FFbD0366097C8A0DB7De1E81217dE3883a4B3
# resolver.eth resolves to 0xD3ddcCDD3b25A8a7423B5bEe360a42146eb4Baf3
```
