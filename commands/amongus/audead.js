const { MessageEmbed, Message } = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Marks a player as **dead** and mute them from the discord call',
  category: 'AmongUs',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
    //--------------------------------------------------------------------------------------------------------
    if (!role) return message.channel.send(`Among Us has not been setup, please run \`${prefix}setup\` to set it up.`)
    if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
        .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
    )
    const target = message.mentions.members.first();

    if (!target) return message.channel.send("user not found");

    await target.voice.setMute(true);
    message.channel.send(
      `. 　　　。　　　　•　 　ﾟ　　。 　　.\n\n　　　.　　　 　　.　　　　　。　　 。　. 　\n\n.　　 。　　　ﾟ　　<:cyan:760091234882027520>。 . 　　 • 　　　　•\n\n'　　ﾟ　　           **${target.displayName}** was ejected 　 。　•\n\n　.　　　'　　　。　　ﾟ。　　ﾟ。　　ﾟ。　　ﾟ\n\n　　。　　ﾟ　　　•　　　. 　ﾟ　　　　'　 .`
    )

  }
}