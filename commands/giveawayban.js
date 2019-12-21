const { Client, RichEmbed } = require('discord.js');


    module.exports = {
        name:'eventban',
        run: (client, message, args) => {
        let author = message.author.username
        let User = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!User)
        return message.reply(`Correct Usage: **a!eventban <@user> <time> <reason>**`);
        let TimePeriod = args[1]
        if(!TimePeriod)
        return message.reply(`Mention Time Period like **1D | 1W | Permanent***`)
        let reason = args.slice(2).join(' ');
        if(!reason) return message.reply(`Mention Valid Reason`);
        const banchannel = client.channels.get("656680667945631764");
  if (!banchannel) return console.error("Channel does not exist!");
        let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setAuthor("Giveaway Ban Registered")
        .addField("Author:", `${author}`, true)
        .addField('User:', `${User}`, true)
        .addField('Time Period:', `${TimePeriod}`)
        .addField('Reason', reason, true)
        banchannel.send(rollembed);
        }
    }
