//Defines Bot
const Discord = require("discord.js");
const bot = new Discord.Client();
const d = "d.";

//These are all the messages it will send via command.
bot.on("message", (message) => {
    //To test how fast the bot is.
    if(message.content == d + "ping") {
        message.channel.send("pong");
    }
    //Sends User a set of it's commands.
    if(message.content == d + "help") {
        message.channel.send("My commands are as follows: d.help");
    }
    bot.on("guildMemberAdd", (member) => {
        member.guild.channels.find("name", "general").send(member.user + ", what's up?     https://cdn.discordapp.com/attachments/307975805357522944/378988068692164608/image.png");
     });
     bot.on("message", (message) => {
         ""
     });
    //Duskpin Guard will reply to you if you are lonely.
    if(message.content == "o/" || message.content == "Hi." || message.content == "What's up?" || message.content == "hi" || message.content == "hello" || message.content == "Hello" || message.content == "Hello." || message.content == "whats up" || message.content == "hey" || message.content == "Hey" || message.content == "Hey." || message.content == "Hey!") {
        //Figuring out how to make this less spammy...
        //message.channel.send("https://giphy.com/gifs/mrw-top-escalator-Nx0rz3jtxtEre");
    }
    //This command is secret...I guess you found it XD
    if(message.content == d + "secret") {
        message.channel.send("I am a Duskpin Guard. My duty is to help you with your server.");
    }
});

//Bot login Token.
bot.login("<TOKEN>");
