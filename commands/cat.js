const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`https://purr.objects-us-east-1.dream.io/i/wgFuU.jpg`,`https://purr.objects-us-east-1.dream.io/i/capture.png`,`https://purr.objects-us-east-1.dream.io/i/20170114_124121.jpg`,`https://purr.objects-us-east-1.dream.io/i/aqhh2018.jpg`,`https://purr.objects-us-east-1.dream.io/i/IekT6.jpg`,`https://purr.objects-us-east-1.dream.io/i/Gg62H.jpg`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setImage(doRandHT())
        .setFooter(`If you want your cat to be here send its image to Elite Gamer#6179, message failed to send then send friend request then send it.`)
        message.channel.send(rollembed);   
    }
        
    }
