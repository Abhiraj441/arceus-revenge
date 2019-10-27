const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'staffapp',
        run: (client, message, args) => {
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .addField("Q. I am Interested in being a staff here.", 
        `
        A. type **/register** in # and answer all questions truthfully

        **__Staff Application__**

        1. Type your User-name with your tag, For Example: Wampus#1313
        2. What's your age?
        3. In which country do you live and which language do you prefer?
        4. What's your gender?
        5. What's your level in MEE6 and Level Pony?
        6. What are the qualities you have for a Moderator?
        7. What will you do if a Member Breals the rules of the server?
        8. What will you do if a Senior Punish you?
        9. What will you do if we ask for help?
        10. What suggestions will you give us to make Arceus's Revenge more and more better?
        11. Will you be active and keep the server alive?
        12. Do you accept all the rules and terms of our server and never forger it?`)
        message.channel.send(rollembed);   
    }
        
    }
