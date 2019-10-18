const config = require("./config.json");
if(!config.token)throw new Error("You forgot to add a token")
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)
const prefix = config.prefix

client.commands = new Discord.Collection();
client.cmdhelp = new Discord.Collection();
client.logging = new discord.Collection();

//Prefix 

client.on("message", async message => {
    
  if(message.author.bot) return;
  
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  //commands

  if(command === "announce") {
    if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
  let announcement = args.slice(0).join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(announcement)
}

if(command === "role_add") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let rolename = args.slice(1).join(' '); 
  let role = message.guild.roles.find(r => r.name === `${rolename}`);

member.addRole(role).catch(console.error);

message.channel.send(`<@${member.user.id}> has been given **${rolename}** role`);
}

if(command === "mute") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let Muted = message.guild.roles.find(r => r.name === `Muted`);
member.addRole(Muted).catch(console.error);

message.channel.send(`<@${member.user.id}> is muted now`);
}

if(command === "unmute") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let Muted = message.guild.roles.find(r => r.name === `Muted`);
member.removeRole(Muted).catch(console.error);

message.channel.send(`<@${member.user.id}> has been unmuted`);
}

if(command === "warn") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";
  message.channel.send(`Alright <@${member.user.id}> has been warned, ${reason}`)
}

if(command === "role_remove") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply(`**Mention a valid member**`);
  let rolename = args.slice(1).join(' '); 
  let role = message.guild.roles.find(r => r.name === `${rolename}`);

member.removeRole(role).catch(console.error);

message.channel.send(`**${rolename}** role has been taken from <@${member.user.id}>`);
}

if(command === "purge") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");

const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

const fetched = await message.channel.fetchMessages({limit: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

if(command === "kick") {
  if(!message.member.roles.some(r=>["◆━━━◇Trial Mod◇━━━◆"].includes(r.name)) )
  return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Trial Mod◇━━━◆` role.");
 
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
if(!message.member.roles.some(r=>["◆━━━◇Moderator◇━━━◆"].includes(r.name)) )
return message.reply("Sorry, you don't have permissions to use this! Make sure u have `◆━━━◇Moderator◇━━━◆` role.");
            
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
            client.commands.set(f, props);
            client.cmdhelp.set(props.help.name, props.help);
        });
    });
    fs.readdirSync('./logging/').forEach(f => {
        delete require.cache[require.resolve(`./logging/${ f }`)];
        let props = require(`./logging/${ f }`);
        client.logging.set(f, props);
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
        `${client.users.size} users!`,
        `Made with ❤ ️by BotSpark`
      ];
      client.user.setPresence({ 
       game: { name: gamePresence[i%gamePresence.length],
        type: 3} });
      i++;
    },7500);
})
// Logging //
client.on('messageDelete', async message => {
    let log = client.logging.get('messageDelete' + ".js");
    log(message, client);
});
client.on("messageDeleteBulk", async function(messages){
    let log = client.logging.get('messageDeleteBulk' + ".js");
    log(messages, client);
});
  client.on("emojiCreate", async function(emoji){
    let log = client.logging.get('emojiCreate' + ".js");
    log(emoji, client);
});
client.on("emojiDelete", async function(emoji){
    let log = client.logging.get('emojiDelete' + ".js");
    log(emoji, client);
}); 

client.on("guildBanAdd", async function(guild, user){
    let log = client.logging.get('guildBanAdd' + ".js");
    log(guild, user, client);
});
client.on("guildBanRemove", async function(guild, user){
    let log = client.logging.get('guildBanRemove' + ".js");
    log(guild, user, client);
});
