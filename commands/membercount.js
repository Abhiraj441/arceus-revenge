const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'membrcount',
        run: (client, message, args) => {
        let rollembed = new RichEmbed()
        .setColor("#15f153")
        .addField("Members", message.guild.memberCount, true)
        .addField("Humans", message.guild.members.filter(member => !member.user.bot).size, true)
        .addField("Bots", message.guild.members.filter(member => member.user.bot).size, true)
        .addField("Online", message.guild.members.filter(m => m.presence.status === `idle`).size + message.guild.members.filter(m => m.presence.status === 'online').size + message.guild.members.filter(m => m.presence.status === 'invisible').size + message.guild.members.filter(m => m.presence.status === 'dnd').size);
        message.channel.send(rollembed);
        }
    }
