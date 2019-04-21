const fetch = require('node-fetch')

const baseUrl = 'https://api.wynncraft.com/'

async function get (username) {
  let res = await fetch(`${baseUrl}v2/player/${username}/stats`)
  return res.json()
}

async function search (username) {
  let res = await fetch(`${baseUrl}public_api.php?action=statsSearch&search=${username}`)
  let data = await res.json()
  return data.players
}

module.exports = {
  get: get,
  search: search
}
