const { Client, RichEmbed } = require('discord.js');

    module.exports = {

        name:'avatar',

        run: (client, message, args) => {

       const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setAuthor(user.username)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
}

        }
