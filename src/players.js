const fetch = require('node-fetch')

const baseUrl = 'https://api.wynncraft.com/'
const playtimeMultipler = 4.7

async function get (username) {
  let res = await fetch(`${baseUrl}v2/player/${username}/stats`)
  if (res.ok) {
    let data = await res.json()

    // Alteration to data so that returned values are the same as displayed on the website
    data.data[0].meta.playtime = data.data[0].meta.playtime * playtimeMultipler
    for (var i = 0; i < data.data[0].classes.length; i++) {
      data.data[0].classes[i].playtime = data.data[0].classes[i].playtime * playtimeMultipler
    }

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
