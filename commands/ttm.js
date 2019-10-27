const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'ttm',
        run: (client, message, args) => {
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setAuthor("Trainer Of The Month")
        .addField("What is the **Trainer of the Month**:question: ", 
        `The **Trainer of the Month** is award to Most Active Person within the server on the end of Every Month.`)
     .addField("How to become the **Trainer of the Month**:question: ", `
     Within the @MEE6#4876's Level up System, the person who manages to get 1st Place wins the **Trainer of the Month**. Avoid spamming as it will lead to permanent ban from trainer of the month. Also, to see how you are going, type !rank to check your level and rank in <#630719575641817098>`)
     .addField("__Prizes:__", 
`:small_orange_diamond: Seperate giveaway channel for sponsored giveaways by you
:small_orange_diamond: Custom role(can be given to max 25 users)
:small_orange_diamond: Custom channel(upto 25 users can be added with all bots and no rules in that channel)
:small_orange_diamond: Free sponsored giveaway with any ping`)
     .setFooter("Prizes will increase when we the server is active")
        message.channel.send(rollembed);   
    }
        
    }
