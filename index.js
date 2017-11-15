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
    if(message.content == d + "pong") {
        message.channel.send("No you're supposed to say ''d.ping''! :rage:");
        message.react("💩")
    }
    //Sends User a set of it's commands.
        if(message.content == d + "help") {
            let embed = new Discord.RichEmbed();
            embed.setColor("#d58aff");
            embed.setTitle("My commands are as follows:\n\n");
            embed.setDescription("**General commands:**\nd.help *Gives you a list of all the commands I am capable of.*\nd.ping *Returns ''pong'' This will test my running speed.*\nd.pong *To test my running speed.*\n\n**Functionality commands:**\n*It's so lonely here.* LOL\n\n**Extra Commands:**\nd.subscribe *Type to find out what this one does.*\nd.code *Allows you to see how I'm coded.*\nd.token *Gives you my token you can hack me this way. ;)*\nd.secret *This one is a secret.*");
            message.channel.send({ embed });
    }
    //Subscribe to meh.
    if(message.content == d + "subscribe") {
        message.channel.send("https://www.youtube.com/channel/UCgyy1C8xrepQIaoNKW-Y_Xg?sub_confirmation=1");
    }
    //Message when user is banned.
    bot.on("guildBanAdd", (guild, user) => {
        if(guild.id === "222123485336567808") {
            bot.channels.get("222123485336567808").send("Why did you make Duskpin ban you? He really liked you here...Before you went rogue -_- https://cdn.discordapp.com/attachments/222123485336567808/379732150867722250/7CQfWUY.gif")
        }
        });
    //Welcome Message. Displays when member joins server.
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
    //Extra Commands
    if(message.content == d + "token") {
        message.channel.send("Mzc5MDc1NzMxMjQzNzk0NDQz.DOkxZA.kUfeP0-pIgvmW5LYQbXsSipgfRs");
    }
    if(message.content == d + "code") {
        message.channel.send("View the code for me right here: https://github.com/OctoAvenger/Duskpin-Guard");
    }
    //Secret Commands. I guess you know them know :think:
    if(message.content == d + "secret") {
        message.channel.send("You know my secret?! OH MY GOSH, NO!");
    }
    if(message.content == "Duskpin Guard, you are a genius!") {
        message.channel.send("I know I am. :smirk:");
        message.react("👍")
    }
});

//Bot login Token.
bot.login("<TOKEN>");
