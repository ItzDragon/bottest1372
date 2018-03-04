const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("command: *help");
    console.log('connectedç');
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commande : \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectuée");
    }
    
       if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help","Page d'aide", true)
            .addField("Embed01","Embed 01 ! :) Suiver les tuto de [PHZ CODAGE](https://www.youtube.com/watch?v=K4npw9erw5c)", true)
            .setColor("0x#FF0000")
            .setFooter("Bon moment parmis nous ! :) ")
        message.channel.sendEmbed(embed);
    
    }
});
