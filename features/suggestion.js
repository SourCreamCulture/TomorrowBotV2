const Discord = require('discord.js');

module.exports = (client, instance) => {
  client.on('message', (message) => {

    if (message.channel.type === 'dm') return

    const suggestionsChannel = message.guild.channels.cache.get('789860522957733929')
    
    if (message.channel === suggestionsChannel) {
            if (message.author.bot) return
            message.delete({ timeout: 1000 })
            
            const Embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`${message.content}\n\nš Use the reactions below to vote!`)
            .setFooter('Want to suggest something? Type it here!')
            .setColor(3426654)
            message.channel.send(Embed).then(message => {
                message.react('š')
                .then(() => message.react('š'))
            })
    }

  })
}