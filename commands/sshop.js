const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'sshop',
        run: (client, message, args) => {
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setAuthor("Pokecord Credits Shop")
        .addField("__Custom Roles__", 
        `
**╔━━━━━━━━━━✦❘༻༺❘✦━━━━━━━━━━╗
† Custom Role [name only]→3,200 Credits
        
† Custom Role [color only]→3,200 Credits
        
† Custom Role [color with name]→8,000 Credits**
        `)
     .addField("__Sponsor Req__", `
    ** __SPONSOR GIVEAWAY OF THIS SERVER ARE:-__

✅ @here PING : 5,000 CREDITS

✅ @everyone PING : 9,000 CREDITS

✅ <@&636899630369472515> : 8,000 Credits

✅ <@&631051989421260821> PING : 12,000 CREDITS [MOST RECOMENDED]

✅YOU GET 2 DAYS BY DEFAULT, IF YOU WANT TO INCREASE, PAY 3000 CREDITS FOR EACH DAY

✅YOU CAN DO SMART GIVEAWAY WITH SOME SPECIAL GIVEAWAY BOT WHICH REQUIRES 4000 CREDITS**`)
     .addField("🎉🎉__SPECIAL SPONSOR GIVEAWAY__🎉🎉", 
`**
✅PRICE: 20000 CREDITS

✅PING: MEMBER

✅TIME: 7 DAYS 

✅A CUSTOM CHANNEL WILL BE ADDED AND WILL BE DONE BY A SMART BOT

__DM OWNER FOR SPONSORING__**`)
    .addField("__Custom Rooms__", 
`** † Custom Rooms are provided with all permissions, U can use all Bots, You can Spam There in This Server . Which Cost :-

† One Day Room→150 Credits
    
† One Months Room→4,000 Credits
    
† Permanent Room→15,000 Credits
    
╚━━━━━━━━━━✦❘༻༺❘✦━━━━━━━━━━╝**`)
     .setFooter("If you want to buy with <@432616859263827988> or <@292953664492929025>, It will cost 1,000 Golds/Diamonds per Pokecord Credit")
        message.channel.send(rollembed);   
    }
        
    }
