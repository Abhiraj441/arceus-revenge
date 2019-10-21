const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            const user = message.mentions.users.first() || message.author;
            function doRandHT() {
                var rand = [user];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setImage(doRandHT())
        message.channel.send(rollembed);   
    }
        
    }
