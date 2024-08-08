require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent ,
   
  ],  partials: [Discord.Partials.Message, Discord.Partials.Channel, Discord.Partials.Reaction]})

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.once('ready', () => {
    console.log("Our bot is ready to go")
})

client.on('messageDelete', msg => {
    msg.channel.send('Stop delting messages')
})

client.on('messageCreate', msg => {
    if (msg.content == 'I love WDS'){
        msg.react('❤️')
    }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("1271117124760502272")
}


client.login(process.env.BOT_TOKEN)