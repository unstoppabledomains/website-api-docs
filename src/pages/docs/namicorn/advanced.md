---
title: Advanced guide
subtitle: Some tricky patterns you can do using Namicorn
date: 2019-03-24T19:04
navGroup: Namicorn
navTitle: Advanced
navIndex: 3
---

### Listening

```javascript
// configuredNamicorn.js
export const ens = new ENS()

export function setENSSrc(newSrc) {
  ens.src = newSrc
}

core.use(ens)

export default core
```

You can then go and use `setENSSrc()` in a React hook.

```javascript
// hooks.js
import namicorn, {ens, setENSSrc} from 'configuredNamicorn'
import useForceUpdate from 'useForceUpdate'

function useNamicorn() {
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    forceUpdate()
  }, [ens.src])

  return [namicorn, {setENSSrc}]
}
```

### PubSub

```javascript
// Preconfigured Namicorn like Getting Started

let listeners = []

async function pubSubMiddleware(context, next) {
  try {
    const nextValue = await next()
    listeners.forEach(listener => listener(null, nextValue))
  } catch (error) {
    listeners.forEach(listener => listener(error))
  }
}

listeners.push((error, result) => {
  if (error) console.error(error)
  else console.log(result)
})

core.useFirst(pubSubMiddleware)

core.resolve('resolver.eth')
// should console.log
```
