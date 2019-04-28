const fetch = require('node-fetch')

const baseUrl = 'https://api.wynncraft.com/public_api.php?'
const categories = [
  'all',
  'helmet',
  'chestplate',
  'leggings',
  'boots',
  'ring',
  'necklace',
  'bracelet',
  'dagger',
  'spear',
  'bow',
  'wand'
]

async function getCategoryItems (category) {
  if (categories.includes(category)) {
    let res = await fetch(`${baseUrl}action=itemDB&category=${category}`)
    if (res.ok) {
      return res.json()
    } else {
      throw await res.json()
    }
  } else {
    throw new Error('Invalid item category')
  }
}

function getCategories () {
  return categories
}

async function search (item) {
  console.log(item)
  let res = await fetch(`${baseUrl}action=itemDB&search=${item}`)
  if (res.ok) {
    return res.json()
  } else {
    throw await res.json()
  }
}

module.exports = {
  getCategoryItems: getCategoryItems,
  getCategories: getCategories,
  search: search
}
