---
title: Quickstart
subtitle: Get started using Unstoppable Domains Tooling
date: 2019-03-24T19:04
navGroup: Overview
navTitle: Quickstart
navIndex: 0
---

Unstoppable has three ways of integrating name lookup into a website.

1. Via the Javascript Library `namicorn`
2. Via an API hosted at
   [`api.unstoppabledomains.com`](https://api.unstoppabledomains.com/v1/openapi.json)
3. Via a search bar.

The search bar is a great way to get started. It comes with a react library and
vanilla javasript library.

Create a react app.

```bash
yarn create react-app namicorn-search
cd namicorn-search
```

Add dependencies.

```bash
yarn add '@namicorn/react-searchbar'
```

Delete default create react app content.

```bash
rm -rf src
```

Create a simple app.

```javascript
// src/index.js

import NamicornSearch from '@namicorn/react-searchbar'
import React, {useState, useCallback} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [data, setData] = useState()

  return (
    <>
      <NamicornSearch onChange={useCallback(setData)} />
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}

ReactDOM.render(<App />)
```

Test it out!

```bash
yarn start
```

Full Namicorn Search Documentation Coming soon!
