# Wynn.js
A wrapper library for the wynncraft api
Currently does not cover all api endpoints

# Example usage

## Players

Get a specific player by username:
```js
const wynn = require('wynn.js')

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

## Items

Listing items by category:
```js
wynn.items.getCategoryItems('all').then(items => {
  // returns all items that belong to a category
}).catch(err => console.error(err))

let categories = wynn.items.getCategories() // Returns an array of possible categories
console.log(categories)
```

Search for an item by name:
```js
wynn.items.search('harp').then(items => {
  // returns all items that have match the passed name
}).catch(err => console.error(err))
```
