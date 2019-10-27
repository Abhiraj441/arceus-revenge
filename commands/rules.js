const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'rules',
        run: (client, message, args) => {
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setAuthor("Server Rules")
        .addField("__General Rules__", `
        1. Treat all members with respect.
 2. Any kind of toxic behaviour will not be tolerated.
 3. Posting any content related to piracy, cheats, cracks or any kind of copyright materials will result in ban.
 4. Use Every Channel for Their Purpose they Made For.
 5. Tagging any member without reason will result in a warning.
 6. Do not spam in channels to level up in the ranking system. 
 7. Fake Id is strictly Prohibited in this server
 8. Any form of advertising is not allowed in any chats/channels or in Dms, this includes things such as dm advertisement.
 9. Dont't troll any member.
 10. Anyone found with multiple accounts will get all the alternative, as well as the original account, banned.
 11. Do not cause arguments
 12. Breaking the rules as a joke will still result in a punishment.`)
     .addField("__Staff Rules__", `
     1. All staff have to warn users only, other actions will be taken by @┋!┋MEE6 
     2. All staff has to use @┋!┋MEE6 as moderation bot.`)
     .addField("__Have you ready this channel?__", `React with :white_check_mark:, if yes`)
     .setFooter("Rules will update in future so keep checking this channel for it")
        message.channel.send(rollembed);   
    }
        
    }
