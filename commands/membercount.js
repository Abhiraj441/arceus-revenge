const { Client, RichEmbed } = require('discord.js');
var userCount = guild.memberCount;
var humanCount = guild.members.filter(member => !member.user.bot).size;
var botCount = guild.members.filter(member => !member.user.human).size;
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
