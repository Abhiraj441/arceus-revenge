const { Client, RichEmbed } = require('discord.js');
const guild = bot.guilds.get('627839622197805056');
const userCount = guild.memberCount;
const humanCount = guild.members.filter(member => !member.user.bot).size;
const botCount = guild.members.filter(member => !member.user.human).size;
    module.exports = {
        name:'membrcount',
        run: (client, message, args) => {
        let rollembed = new RichEmbed()
        .setColor("#15f153")
        .addField("Members", userCount)
        .addField("Humans", humanCount)
        .addField("Bots", botCount);
        message.channel.send(rollembed);
        }
    }
