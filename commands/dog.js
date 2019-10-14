const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`https://cdn.discordapp.com/attachments/602830046176215050/632745284786585610/Chinook-On-White-03.png`,`https://images.dog.ceo/breeds/poodle-toy/n02113624_764.jpg`,`https://images.dog.ceo/breeds/poodle-miniature/n02113712_3196.jpg`,`https://images.dog.ceo/breeds/spaniel-japanese/n02085782_1855.jpg`,`https://images.dog.ceo/breeds/terrier-norwich/n02094258_355.jpg`,`https://images.dog.ceo/breeds/pomeranian/n02112018_692.jpg`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setImage(doRandHT())
        .setFooter(`If you want your dog to be here send its image to Elite Gamer#6179, message failed to send then send friend request then send it.`)
        message.channel.send(rollembed);   
    }
        
    }
