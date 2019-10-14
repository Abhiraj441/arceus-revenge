const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`https://cdn.discordapp.com/attachments/602830046176215050/632745284786585610/Chinook-On-White-03.png`,`https://images.dog.ceo/breeds/poodle-toy/n02113624_764.jpg`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setImage(doRandHT())
        message.channel.send(rollembed);   
    }
        
    }
