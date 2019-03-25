---
title: Concepts
subtitle: Basics required for a deeper understanding of naming.
date: 2019-03-24T19:04
navGroup: Namicorn
navTitle: Concepts
navIndex: 2
---

# Resolution

### What is it good for?

Resolution is the process of taking a name and finding a corresponding a record.
We say a name 'resolves' to a record.

For example, [www.google.com](www.google.com) **resolves** to an IP Address on
DNS.

Blockchain domain names can resolve to a wide variety of records. The most basic
is a crypto currency address.

The Ethereum Name Service can **resolve** names to Ethereum addresses.

The Zilliqa Name Service can **resolve** names to Zilliqa Addresses.

### How does Namicorn fit in?

Namicorn is a javascript library for resolving blockchain names.

# How does Namicorn work?

Namicorn is a configured middleware stack.

First create a stack.

```javascript
import Core from '@namicorn/core'

const core = new Core()
```

Then add resolution middlware.

```javascript
import ENS from '@namicorn/ens'
import ZNS from '@namicorn/zns'

// previous stuff...

const ens = new ENS()
const zns = new ZNS()

core.use(ens, zns)
```

Then call the middleware stack.

```javascript
// previous stuff...

core.resolve('resolver.eth')
// Promise<pending>
```

You can even create custom middleware.

```javascript
function unicornMiddleware(context, next) {
  if (context.name === '🦄') return '🌈s'
  return next()
}

core.use(unicornMiddleware)
```
