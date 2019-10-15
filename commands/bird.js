const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`https://random.birb.pw/img/S2pqj.jpg`,`https://random.birb.pw/img/rvv5l.jpg`,`https://random.birb.pw/img/3q221.png`,`https://random.birb.pw/img/3Mkdf.jpg`,https://random.birb.pw/img/t89l7.jpg`,`https://random.birb.pw/img/z0oqr.jpg`,`https://random.birb.pw/img/OjseH.jpg`,`https://random.birb.pw/img/CeE9j.jpg`,`https://random.birb.pw/img/MT1Sm.jpg`,`https://random.birb.pw/img/badfa.jpg`,`https://random.birb.pw/img/18ttm.png`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setImage(doRandHT())
        .setFooter(`If you want your dog to be here send its image to Elite Gamer#6179, message failed to send then send friend request then send it.`)
        message.channel.send(rollembed);   
    }
        
    }
