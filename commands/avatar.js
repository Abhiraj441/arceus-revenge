const { Client, RichEmbed } = require('discord.js');

function doRandHT() {

    var rand = ['HEADS!','TAILS!'];

    

    return rand[Math.floor(Math.random()*rand.length)];
}


    module.exports = {

        name:'avatar',

        run: (client, message, args) => {

        let rollembed = new RichEmbed()

        .setColor("#15f153")

        .setImage(message.author.avatarURL);

        message.channel.send(rollembed);

        }

    }
