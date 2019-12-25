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
     .addField("__**AR Monthly Membership**__ (25k Credits)", `
**Benefits:**
<:NeonR2:659196667395964959> Weekly Membership giveaways!
<:NeonR2:659196667395964959> 4x Giveaway Req and snipe bypass pass
<:NeonR2:659196667395964959> Free 5 invites in each Contest!
<:NeonR2:659196667395964959> Free Custom Role + Color
<:NeonR2:659196667395964959> Free Private Channel (all bots,no rules there!)
<:NeonR2:659196667395964959> Get 40% off in #❰🎊❱➤sponsor-req 
(Can use 2 times)
     `)
     .addField("__**AR Lifetime Membership**__ (75k Credits)", 
`**Benefits:**
<:NeonR2:659196667395964959> Access to!
<:NeonR2:659196667395964959> 4x Giveaway Req bypass pass per month
<:NeonR2:659196667395964959> Free 7 invites in each Contest!
<:NeonR2:659196667395964959> Free Custom Role + Color
<:NeonR2:659196667395964959> Free Private Channel (all bots,no rules there!)
<:NeonR2:659196667395964959> Get 50% off in #❰🎊❱➤sponsor-req 
(Only Can Use 4 times)`)
            .addField("__**Note:**__", ` <:NeonR2:659196667395964959> Rewards are only valid till Membership lasts
<:NeonR2:659196667395964959> DM only <@602829045956083733> to buy!`)
        message.channel.send(rollembed);   
    }
        
    }
