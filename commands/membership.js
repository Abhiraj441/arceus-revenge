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
     .addField("<:down_arrow:637934706855378944>__Benefits:__<:down_arrow:637934706855378944>", `

     :bell: Custom Role! (Hoised/Seprated)

     :bell:629341447048396849> Private Channel! (Includes all Bots & Add Upto 50 People)
     
     :bell:629341447048396849> 3 Invites Per Invite Contest!
     
     :bell:629341447048396849> Sniping Pass! 
     
     :bell:629341447048396849> 50% Off in <#630721093463834624> Can use on 5 Items per month
     
     :bell:629341447048396849> Membership Special Weekly Giveaways!
     
     :bell:629341447048396849> Participate in Giveaways Without Meeting Req. (Except Giveaways Held By RAOG Not)
     `)
     .addField(":dollar:__Cost:__:dollar:", 
`<:approved:636130484019134464> 50k for Monthly Membership!
<:approved:636130484019134464> 200k for Lifetime Membership!
<:approved:636130484019134464> To Purchase DM <@474529598504304641> or <@602829045956083733> ONLY.`)
     .setFooter("If you want to buy with <@432616859263827988> or <@292953664492929025>, It will cost 1,000 Golds/Diamonds per Pokecord Credit")
        message.channel.send(rollembed);   
    }
        
    }
