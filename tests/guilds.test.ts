import wynn from '../src/index.js'

const guildName = process.argv[2] ?? 'Dragons Den'


const guild = await wynn.guilds.get(guildName)
console.log('Guild:')
console.log(guild)