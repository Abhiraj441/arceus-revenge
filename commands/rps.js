const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'rps',
        run: (client, message, args) => {
            let rps = ["scissors", "paper", "rock"];
            let i;
            if(!rps.includes(args[0])) return message.reply("Please choose rock, paper or scissor.");
            if(args[0].includes("rock")) {
            i = 2;
            }
            if(args[0].includes("paper")) {
            i = 1;
            }
            if(args[0].includes("scissors")) {
            i = 0;
            }
            if(rps[i]) {
            let comp = Math.floor((Math.random() * 3) + 1);
            let comp_res = parseInt(comp) - parseInt("1");
            let comp_val = rps[parseInt(comp_res)];
              if(i === comp_res) {
                return message.channel.send(`You chose **${args[0]}** and I chose **${comp_val}** and we tied, wanna try again?`); 
              }
              if(i > comp_res) {
                return message.channel.send(`You chose **${args[0]}** and I chose **${comp_val}** and I won! Well played.`);
              } 
              if(i < comp_res) {
                return message.channel.send(`You chose **${args[0]}** and I chose **${comp_val}** and I lost! Congrats on winning!`);
              }
            }  
    }
        
    }
