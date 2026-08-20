import wynn from '../src/index.js'

const [username = 'Seb'] = process.argv.slice(2)

const players = await wynn.players.search(username)
console.log('Players:')
console.log(players)