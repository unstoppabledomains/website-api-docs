---
title: Quickstart
subtitle: Get started using Unstoppable Domains Tooling
date: 2019-03-24T19:04
navGroup: Overview
navTitle: Quickstart
navIndex: 0
---

# Resolution

Resolution is the process of taking a name and finding a corresponding a record.
We say a name 'resolves' to a record.

For example, [www.google.com](www.google.com) **resolves** to an IP Address on
DNS.

Blockchain domain names can resolve to a wide variety of records. The most basic
is a crypto currency address.


The [Zilliqa Name Service (ZNS)](https://unstoppabledomains.com/) **resolves** names to Zilliqa Addresses.

# Configuration

Domain resolution information is stored on the blockchain of the related provider.
Namicorn can do the calls to related blockchain to resolve domain.
However, the blockchain call can take a long time (up to 2 seconds).


That is why `new Namicorn()` would resolve domains using [Unstoppable Domains API](https://docs.unstoppabledomains.com/docs/api/reference/) by default which stores the cached information of the blockchain and keeps it up to date by subscribing to blockchain events.

Namicorn supports the configuraiton to make blockchain calls directly instead using `{blockchain: true}` option:

```javascript
const namicorn = new Namicorn({blockchain: true})
```

You can go even deeper and configure individual providers data source:

``` javascript
new Namicorn({
  blockchain: {
    ens: 'wss://mainnet.infura.io/ws' // the default
  }
})
```

This is handy when you have your own blockchain copy.

<a href="https://unstoppabledomains.github.io/namicorn-searchbar/">Extended version</a>
<iframe src="https://unstoppabledomains.github.io/namicorn-searchbar/" width="1000" height="600"></iframe>


# Plug and play integration


Put this line of code anywhere in your web app to get access to our domain resolution search box.

```html
<iframe src="https://unstoppabledomains.github.io/namicorn-searchbar/"
  width="1000" height="600"></iframe>
```

If you would like to further customize the search box in your UI, here are some simple steps to help you launch the same demo app above locally on your machine. More complete documentation is coming soon!
