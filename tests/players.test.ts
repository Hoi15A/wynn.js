import wynn from '../src/index.js'

const [username = 'Sebiann', fullResultArg = 'false'] = process.argv.slice(2)
const fullResult = fullResultArg === 'true'

const player = await wynn.players.get(username, fullResult)
console.log('Player:')
console.log(player)

const playerChars = await wynn.players.getCharacters(username)
console.log('\nCharacters:')
console.log(playerChars)