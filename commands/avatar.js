const { Client, RichEmbed } = require('discord.js');

    module.exports = {

        name:'avatar',

        run: (client, message, args) => {

        let rollembed = new RichEmbed()
const user = message.mentions.users.first() || message.author;
        .setColor(RANDOM)

        .setImage(message.user.avatarURL);

        message.channel.send(rollembed);

        }

    }
