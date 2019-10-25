const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'help',
        run: (client, message, args) => {
        let rollembed = new RichEmbed()
        .setColor("#15f153")
        .addField("Manager Commands",
`announce
role_add
role_remove
purge
        `)
        .addField("Moderation Commands", 
`kick
ban
mute
unmute
        `)
        .addField("Fun Commands", 
`joke
dogfact/df
dog
roll
rps
cat
flip
catfact/cf
bird`)
        .addField("Misc Commands", 
`membercount
serverinfo`)
        message.channel.send(rollembed);   
    }
        
    }
