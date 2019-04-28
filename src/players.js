const fetch = require('node-fetch')

const baseUrl = 'https://api.wynncraft.com/'

// TODO: Deal with 4.7 factor player time issue

async function get (username) {
  let res = await fetch(`${baseUrl}v2/player/${username}/stats`)
  if (res.ok) {
    let data = await res.json()
    return data.data[0]
  } else {
    throw await res.json()
  }
}

async function search (username) {
  let res = await fetch(`${baseUrl}public_api.php?action=statsSearch&search=${username}`)
  if (res.ok) {
    let data = await res.json()
    return data.players
  } else {
    throw await res.json()
  }
}

module.exports = {
  get: get,
  search: search
}
