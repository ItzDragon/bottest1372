const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("command: *help");
    console.log('connectedç');
});

bot.login("NDE5NTQ5NTg2NjUxMjE3OTMw.DXxvhQ.cYO7z_7vKADBSBdYNN92Z31oP5c");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commande : \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectuée");
    }
});
