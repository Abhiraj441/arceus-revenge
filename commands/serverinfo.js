const discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (client, message, args, prefix) => {   
let sicon = message.guild.iconURL;
            var serverinfo = new discord.RichEmbed()
            .setTitle(`Displaying stats for ${message.guild.name}`)
            .addField("Owner", message.guild.owner, true)
            .addField("guild created", message.guild.createdAt)
            .addField("You joined at", message.member.joinedAt)
            .addField("Members", message.guild.memberCount, true)
            .addField("Humans", message.guild.members.filter(member => !member.user.bot).size, true)
            .addField("Bots", message.guild.members.filter(member => member.user.bot).size, true)
            .addField("Online", message.guild.members.filter(m => m.presence.status === `idle`).size + message.guild.members.filter(m => m.presence.status === 'online').size + message.guild.members.filter(m => m.presence.status === 'invisible').size + message.guild.members.filter(m => m.presence.status === 'dnd').size)
            .addField("Roles" ,message.guild.roles.size, true)
            .addField("Region", message.guild.region, true)
            .addField("Categories", message.guild.channels.filter(c => c.type === "category").size, true)
            .addField("Text Channels", message.guild.channels.filter(c => c.type === 'text').size, true)
            .addField("Voice Channels", message.guild.channels.filter(c => c.type === "voice").size, true)
            .setThumbnail(sicon)
            .setURL("https://rsgbot.ml/")
            .setColor("#15f153")
            message.channel.send(serverinfo);
};

exports.help = {
  name: "serverinfo",
  category: "Info",
  description: "Get info about the server",
  usage: "serverinfo"
};
