const Discord = require('discord.js');
const bot = new Discord.Client();
const console = new Discord.WebhookClient(process.env.consoleid, process.env.consoletoken);
const PREFIX = "?";

//instance
bot.on('ready', function () {
	bot.user.setGame('/help').catch(console.error);
});

bot.on('message', message => {
	if(message.content[0] === PREFIX) {
		
		/*var author chaine= message.author()
		console.send(author)*/
		let splitMessage = message.content.split(" ");
		let auteur = message.author.username();
		
		if (splitMessage[0] === '?create') {
			if (splitMessage.length === 3) {
				console.send(splitMessage[1]);
				console.send(auteur);
			} else {
				message.channel.send("Utilisation: ?create <name> <description>");
			}
		}
	}

	/*if (message.content === '?grades-bourgeois') {
		Help_BOOK.send("Liste des commandes du serveur discord")
		let gradesEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("Grade Joueur :", "Affiche la liste des commandes du serveur discord")
		Help_BOOK.send(gradesEmbed)
	}*/

	/*if (message.content === '?grades-infos') {
		channel.message.send("Liste des grades en jeu")
		let gradesEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("Bourgeois", "V.I.P")
			.addField("V.I.P+", "Youtuber")
		channel.message.send(gradesEmbed)
	}*/
})

bot.login(process.env.TOKEN);
