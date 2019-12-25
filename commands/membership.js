const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'membership',
        run: (client, message, args) => {
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setAuthor("Arceus's Revenge's Membership")
        .addField(":crown:__What is AR Membership?__:thinking:", 
        `
AR Membership is a Membership for this server which grants you some special features more than normal users for Monthly/Lifetime!:tada:`)
     .addField(`__**AR Monthly Membership**__ (25k Credits)

**Benefits:**`, `
> :arrow_right:Weekly Membership giveaways!
> :arrow_right:4x Giveaway Req and snipe bypass pass
> :arrow_right:Free 5 invites in each Contest!
> :arrow_right:Free Custom Role + Color
> :arrow_right:Free Private Channel (all bots,no rules there!)
> :arrow_right:Get 40% off in #❰🎊❱➤sponsor-req 
> (Can use 2 times)
     `)
     .addField(`__**AR Lifetime Membership**__ (75k Credits)

**Benefits:**`, 
`> :arrow_right:Access to!
> :arrow_right:4x Giveaway Req bypass pass per month
> :arrow_right:Free 7 invites in each Contest!
> :arrow_right:Free Custom Role + Color
> :arrow_right:Free Private Channel (all bots,no rules there!)
> :arrow_right:Get 50% off in #❰🎊❱➤sponsor-req 
> (Only Can Use 4 times)`)
            .addField("__**Note:**__", `> 1. Rewards are only valid till Membership lasts
> 2. DM only me to buy!`)
     .setFooter("If you want to buy DM Owner")
        message.channel.send(rollembed);   
    }
        
    }
