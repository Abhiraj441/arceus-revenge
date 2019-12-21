const config = require("./config.json");
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)
const prefix = config.prefix

client.commands = new Discord.Collection();
client.cmdhelp = new Discord.Collection();

//Prefix 

client.on("message", async message => {
    
  if(message.author.bot) return;
  
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  //commands
if(command === "p"){
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send("You are not in a voice channel!");
 
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
 
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
        }
        else {
            try {
 
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    const sembed = new RichEmbed()
                        .setColor("GREEN")
                        .setFooter(msg.member.displayName, msg.author.avatarURL)
                        .setDescription(`
                    __**Song selection:**__\n
                    ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
                    \nPlease provide a value to select one of the search results ranging from 1-10.
                                    `)
                        .setTimestamp();        
                    msg.channel.send(sembed).then(msg2 => msg2.delete(10000))
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.log(err);
                        return msg.channel.send('❌ **Timeout!**')
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send('🆘 I could not obtain any search results.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
 
        }
    }
    //p ends
  if(command === "announce") {
    if (!message.member.hasPermissions("KICK")) {

     message.reply("You need kick permission to use this command")

}

;
  let announcement = args.slice(0).join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(announcement)
}

if(command === "role_add") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let rolename = args.slice(1).join(' '); 
  let role = message.guild.roles.find(r => r.name === `${rolename}`);

member.addRole(role).catch(console.error);

message.channel.send(`<@${member.user.id}> has been given **${rolename}** role`);
}

if(command === "mute") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let Muted = message.guild.roles.find(r => r.name === `Muted`);
member.addRole(Muted).catch(console.error);

message.channel.send(`<@${member.user.id}> is muted now`);
}

if(command === "unmute") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let Muted = message.guild.roles.find(r => r.name === `Muted`);
member.removeRole(Muted).catch(console.error);

message.channel.send(`<@${member.user.id}> has been unmuted`);
}

if(command === "warn") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";
  message.channel.send(`Alright <@${member.user.id}> has been warned, ${reason}`)
}

if(command === "role_remove") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let rolename = args.slice(1).join(' '); 
  let role = message.guild.roles.find(r => r.name === `${rolename}`);

member.removeRole(role).catch(console.error);

message.channel.send(`**${rolename}** role has been taken from <@${member.user.id}>`);
}

if(command === "purge") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");

const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

const fetched = await message.channel.fetchMessages({limit: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

if(command === "kick") {
  if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
 
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply(`Mention a valid user`);
  if(!member.kickable) 
    return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
  
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  
  await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      message.channel.send(`${member.user.tag} has been kicked, **${reason}**`);
      
      
      }

if(command === "ban") {
if(!message.member.roles.some(r=>["Bot Commander"].includes(r.name)) )
return message.reply("Sorry, you don't have permissions to use this! Make sure u have `Bot Commander` role.");
            
let member = message.mentions.members.first();
if(!member)
return message.reply(`Mention a valid`);
if(!member.bannable) 
return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        
let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";
            
await member.ban(reason)
.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

message.channel.send(`${member.user.tag} has been banned, **${reason}**`);
};
});
client.on('message', async message => {
  if (message.isMentioned(client.user))
    {
      const embed = {
        "description": `My prefix in this server is **${config.prefix}**. To learn how to use the bot, use the **${config.prefix}help** command`,
        "color": 7584788,
        };
        message.channel.send({ embed });
}
});
//Prefix End
client.loadCommands = () => {
  fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);

    let jsFiles = files.filter(f => f.split('.').pop() === 'js');

    console.log(`LOG Loading a total of ${jsFiles.length} commands.`);

    jsFiles.forEach((f, i) => {
      delete require.cache[require.resolve(`./commands/${ f }`)];
      let props = require(`./commands/${ f }`);
      //console.log("LOG Loading command: " + f);
      client.commands.set(f, props);
    });
  });
};

client.loadCommands();

client.on('message', async message => {
  if(!message.content.toLowerCase().startsWith(prefix)) return
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return
  
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();

    let cmd = client.commands.get(command + ".js");
    
    if (cmd) {
      cmd.run(client, message, args, prefix);
    }
})

client.on("ready", ready => {
  var timer;
  var i = 0;
    timer = client.setInterval(function () {
      var gamePresence = [
        `${config.prefix}help`,
        `Members of Arceus's Revenge`,
        `with ${client.users.size} users!`,
      ];
      client.user.setPresence({ 
       game: { name: gamePresence[i%gamePresence.length],
        type: 3} });
      i++;
    },7500);
})
