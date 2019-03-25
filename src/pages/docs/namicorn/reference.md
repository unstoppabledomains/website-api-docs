---
title: API Reference
subtitle: All Namicorn packages described in depth.
date: 2019-03-24T19:04
navGroup: Namicorn
navTitle: API Reference
navIndex: 4
---

# Table of Contents

### Top Level

#### [Base](#base)

- **`resolve()`**

#### [Core](#core)

- **`constructor()`**
- **`use()`**
- **`resolve()`**
- Instance Properties
  - `debug`

---

### Middleware

#### [Stucture](#middleware-structure)

- **`middlewareFn()`**

#### [ENS](#middleware-ens)

- **`constructor()`**
- Instance Properties
  - `url`
  - `network`
  - `UNSAFE_registryAddress`
- Resolution

#### [RNS](#middleware-rns)

- **`constructor()`**
- Instance Properties
  - `url`
  - `UNSAFE_registryAddress`
- Resolution

#### [ZNS](#middleware-zns)

- **`constructor()`**
- Instance Properties
  - `url`
  - `network`
  - `UNSAFE_registryAddress`
- Resolution

#### [Matcher](#middleware-matcher)

#### [Debug](#middleware-debug)

<br/>

# Base<a name="base"></a>

The `namicorn` package exports a pre-configured resolve function instance right
out of the box. If you want to configure Namicorn use `@namicorn/core`.

### `resolve()`

```javascript
resolve(name)
```

The `namicorn` package is only used for basic name-to-address resolution and
isn't configurable.

```javascript
import {resolve} from 'namicorn'

resolve('helloworld.zil')
  .then(address => console.log(address))
  .catch(error => console.error(error))
```

# Core<a name="core"></a>

The Namicorn Core is packaged at `@namicorn/core`.

```javascript
import Core from '@namicorn/core'
```

The Namicorn Core is accessible via UMD CDN.

```html
<script src="https://unpkg.com/@namicorn/core/build/index.umd.js">
  // 'NamicornEns' is in scope
</script>
```

### `constructor()`

```javascript
constructor(options)
```

The `constructor()` for the Core initializes a fresh namicorn instance to
configure.

```javascript
const core = new Core()

core.use(function middlware() {})
```

### `resolve()`

```javascript
resolve(name, context)
```

The `resolve` function is the lookup function.

```javascript
import namicorn from './configuredNamicorn'

namicorn
  .resolve('myname', {
    disableSomething: true,
  })
  .then(console.log)
  .catch(console.error)
```

### `use()`

```javascript
use(...middlewares)
```

The `use()` function pushes middleware onto the stack of Namicorn middleware
fired every time `resolve()` gets called. `use()` is also chainable.

```javascript
core
  .use(function middleware1() {})
  .use(function middleware2() {}, function middleware3() {})
```

### `useFirst()`

```javascript
useFirst(middleware)
```

The `useFirst()` function pushes middleware onto the bottom of the stack of
Namicorn middleware. `useFirst()` is also chainable.

```javascript
core
  .use(function middleware1() {})
  .use(function middleware2() {}, function middleware3() {})
```

### Instance Properties

#### `debug`

`debug` is a boolean that puts a `debug` property into the context. Namicorn
also comes with a simple [Debugger](#middleware-debug) that works well with this
property, the ENS, RNS and ZNS packages also integrate this.

```javascript
core.debug = true

core.resolve('myname')
// Logs requests
```

# Middleware<a name="middleware"></a>

## Structure<a name="middleware-structure"></a>

Namicorn middleware comes in two flavors, Classes and Functions. Classes have a
`middlewareFn` method and Functions are a `middlewareFn`.

```javascript
function middlewareFn(context, next) {
  // DO STUFF
}

class MiddlewareClass {
  middlewareFn(context, next) {
    // DO STUFF
  }
}
```

### middlewareFn()

```javascript
middlewareFn(context, next)
```

The `context` is mutable object that gets passed from the last middleware.

```javascript
function loggingMiddleware(context, next) {
  console.log("I'm searching for", context.name)

  // The context that is passed into the next middlewareFn on the
  // stack will have the hasLogged property
  context.hasLogged = true

  return next()
}
```

The `next` function is similar to `express`'s `next` function, except that it
needs to be returned.

```javascript
function BAD_noopMiddleware(context, next) {
  // DO STUFF
  // ...

  // BAD!!! This will not work
  next()
}

function GOOD_noopMiddleware(context, next) {
  // DO STUFF
  // ...

  return next()
}
```

Middleware can `return` a value, directly or via `Promise`.

```javascript
function syncFnMiddleware(context, next) {
  return Math.random()
}

async function asyncFnMiddleware(context, next) {
  await Promise(r => setTimeout(r, 1000))

  return Math.random()
}
```

Middleware can throw in a variety of ways.

```javascript
// Express.js style
function nextFailureMiddleware(context, next) {
  return next(new Error('something went wrong'))
}

// Throwing style
function throwFailureMiddleware(context, next) {
  throw new Error('something went wrong')
}

// Promise style
function rejectionFailureMiddleware(context, next) {
  return Promise.reject(new Error('something went wrong'))
}
```

## ENS<a name="middleware-ens"></a>

The ENS middleware is packaged at `@namicorn/ens`.

```javascript
import ENS from '@namicorn/ens'
```

The ENS Middleware is accessible via UMD CDN.

```html
<script src="https://unpkg.com/@namicorn/ens/build/index.umd.js">
  // 'NamicornEns' is in scope
</script>
```

### `constructor()`

```javascript
constructor(options)
```

The ENS `constructor()`

```javascript
const ens = new ENS({
  src: 'http://localhost:1234',
  network: 'ETH',
})

core.use(ens)
```

#### `options.network`

The `network` option is a the simple way for you to specify which
UNSAFE_registryAddress to use. The `ETH`, `ROPSTEN`, `KOVEN` addresses are
available. Defaults to `ETH`.

#### `options.src`

See the instance property `src` below.

#### `options.UNSAFE_registryAddress`

See the instance property `UNSAFE_registryAddress` below. Overrides
`options.network`.

### Instance Properties

#### `src`

The `src` is the internal representation of the Ethereum node. `src` can be a
`string`, [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL),
[`web3` provider](https://web3js.readthedocs.io/en/1.0/web3.html#providers) or
an
[`ethersjs` provider](https://docs.ethers.io/ethers.js/html/api-providers.html).
The `wss://` protocol works as well.

#### `UNSAFE_registryAddress`

`UNSAFE_registryAddress` is the smart contract address used to preform lookups.

Unless you are testing, this probably should not be touched.

### Resolution

ENS resolution is simpler than it looks.

There are 5 different catagories of records to search for in the context of
namicorn.

- [Registry Fields](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md#registry-specification)
  - `owner` – Any truthy value will return the owner's address.
  - `resolver` – Any truthy value will return a resolver address.
  - `ttl` – Useless on ENS for now. The Registry doesn't use it.
- Resolver Fields<br/>NOTE: All resolver fields have a `resolver` lookup before.
  them

  - Simple Storage Fields

        - [`addr`](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md#contract-address-interface) – An Ethereum Address.
        - [`name`](https://github.com/ethereum/EIPs/blob/e6e67ce6f05bd7df22b610dc5de07a20b4551513/EIPS/eip-181.md) – Points to another ENS name. Used in reverse lookups.
        - [`pubkey`](https://github.com/ethereum/EIPs/pull/619) – Not standard yet.
        - [`contenthash`](https://github.com/ethereum/EIPs/blob/7dfe25eafd03ff56c58891a9b34689a5d5a35b1d/EIPS/eip-1577.md) – Stores a Swarm or IPFS hash. Note that `content` and `multihash` are both depreciated.

  - Mapped Storage Fields

        - [`text`](https://github.com/ethereum/EIPs/blob/2b8c3e46904d3e8c952c3ad2d034d4d464fa199a/EIPS/eip-634.md)

        - [`abi`](https://github.com/ethereum/EIPs/blob/e9f59fe9b934063ac92a84f4512091bf0f19eb6e/EIPS/eip-205.md)

- [`.reverse` TLD lookups](https://github.com/ethereum/EIPs/blob/e6e67ce6f05bd7df22b610dc5de07a20b4551513/EIPS/eip-181.md)
  - These domains require corroboration on the .eth extension.
- `.eth` TLD metadata

  - `auction` – information about the `HashRegistrar` auction Entry

        - `highestBid` – The Highest bid in wei.
        - `value` – How much the winning bid in wei.

  - `deed` – information about the ENS `HashRegistrar` Deed

        - `ttl` – The expiration date of the deed

        - `owner` – Current owner of deed. Has admin privileges over all ENS subnodes.

        - `previous_owner` – Previous owner of deed. Useful if escrowed inside another smart contract.

```typescript
const defaultENSContext = {
  data: {
    // Registry
    owner: false,
    ttl: false,
    resolver: {
      // Resolver
      addr: true,
      content: false,
      name: false,
      pubKey: false,
      multihash: false,

      // Mapped types
      text: [],
      abi: [],
    },

    // .reverse TLD corroboration
    reverse: false,

    // .eth TLD lookups
    auction: false,
    deed: false,
  },
}
```

## RNS<a name="middleware-rns"></a>

The RNS middleware is packaged at `@namicorn/rns`.

```javascript
import RNS from '@namicorn/rns'
```

The RNS Middleware is accessible via UMD CDN.

```html
<script src="https://unpkg.com/@namicorn/rns/build/index.umd.js">
  // 'NamicornRns' is in scope
</script>
```

### `constructor()`

```javascript
const rns = new RNS({
  src: 'http://localhost:1234',
})

core.use(rns)
```

#### `options.src`

See the instance property `src` below.

#### `options.UNSAFE_registryAddress`

See the instance property `UNSAFE_registryAddress` below. Overrides
`options.network`.

### Instance Properties

#### `src`

The `src` is the internal representation of the RSK node. `src` can be a
`string` or [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL).
Defaults to [`https://public-node.rsk.co`](https://public-node.rsk.co).

#### `UNSAFE_registryAddress`

`UNSAFE_registryAddress` is the smart contract address used to preform lookups.

Unless you are testing, this probably should not be touched.

### Resolution

RNS is very very similar to ENS. Which makes sense because RSK is an EVM Bridge.
RNS is based off of
[EIP 137](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md).

Effectivly RNS behaves just like ENS except only `addr` and `content` are
standard interfaces.

## ZNS<a name="middleware-zns"></a>

The ZNS middleware is packaged at `@namicorn/zns`.

```javascript
import ZNS from '@namicorn/zns'
```

The ZNS Middleware is accessible via UMD CDN.

```html
<script src="https://unpkg.com/@namicorn/zns/build/index.umd.js">
  // 'NamicornZns' is in scope
</script>
```

### `constructor()`

```javascript
const zns = new ZNS({
  src: 'http://localhost:1234',
  network: 'testnet',
})

core.use(zns)
```

#### `options.network`

The `network` option is a the simple way for you to specify which
UNSAFE_registryAddress to use. `testnet`, is the only address currently
available. Defaults to `testnet`.

#### `options.src`

See the instance property `src` below.

#### `options.UNSAFE_registryAddress`

See the instance property `UNSAFE_registryAddress` below. Overrides
`options.network`.

### Instance Properties

#### `src`

The `src` is the internal representation of the Zilliqa node. `src` can be a
`string` or [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL).
Defaults to [`https://dev-api.zilliqa.com`](https://dev-api.zilliqa.com).

#### `UNSAFE_registryAddress`

`UNSAFE_registryAddress` is the smart contract address used to preform lookups.

Unless you are testing, this probably should not be touched.

### Resolution

Because of the way ZNS currently works only one lookup is required. As a result
we always return all of the information about that name that we can.

- `owner` – Owner of name.
- `previous_owner` – Previous owner of name.
- `ttl` – Time to live in `&BLOCKNUMBER`s
- `resolver` – Resolver address

## Matcher<a name="middleware-matcher"></a>

### `matcherMiddleware()`

## Debug<a name="middleware-debug"></a>

### `debugMiddleware()`
