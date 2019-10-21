const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [user];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        const avatar = message.mentions.users.first() || message.author;
        .setColor("#15f153")
        .setImage(avatar)
        message.channel.send(rollembed);   
    }
        
    }
