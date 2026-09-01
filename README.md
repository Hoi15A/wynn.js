# Wynn.js

A wrapper library for the wynncraft api
Currently does not cover all api endpoints

Last Updated to the Api Version: v3.7.2

# Example usage

## Players

Get a specific player by username:

```js
import wynn from 'wynn.js'

wynn.players.get('Hoi_A').then(player => {
  // returns object containing all player information as defined in the API Docs
}).catch(err => console.error(err))
```

Search for all players on wynncraft:

```js
wynn.players.search('salte').then(results => {
  // returns array of usernames
}).catch(err => console.error(err))
```

## Guilds

Search for a Guild by name:

```js
wynn.guilds.get('Dragons Den').then(guilds => {
  // returns object containing all Guild information as defined in the API Docs
}).catch(err => console.error(err))
```

## Items

Search for an item by name:

```js
wynn.items.search('harp').then(items => {
  // returns all items that match the passed name
}).catch(err => console.error(err))
```

## Error handling

HTTP errors are thrown as `WynnApiError` with a numeric `status` field.

```js
import wynn, { WynnApiError } from 'wynn.js'

try {
  await wynn.players.get('missing-user')
} catch (err) {
  if (err instanceof WynnApiError) {
    if (err.status === 404) {
      console.log('Not found')
    } else if (err.status === 429) {
      console.log('Rate limited')
    }
  }
}
```
