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
    
     var msgauthor =  message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.value(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
    }
    if(message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Stat des XP de ${message.author.username}`)
            .setColor('#F4D03F')
            .setDescription("Affichage des XP")
            addField("XP", `${xpfinal[1]} xp`)
            .setFooter("Enjoy :p")
        message.channel.send({embed: xp_embed});

}});

