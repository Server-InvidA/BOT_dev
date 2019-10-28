const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setGame('/help').catch(console.error)
})

bot.on('message', function (message) {
	if (message.content === '/help') {
		channel.message.send("Liste des commandes du serveur discord")
		let cmdEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("!help :", "Affiche la liste des commandes du serveur discord")
			.addField("?grades :", "Affiche la liste des grades en jeu, ?grades-<nom du grade ou 'infos'>")
		channel.message.send(cmdEmbed)
	}

	/*if (message.content === '?grades-bourgeois') {
		Help_BOOK.send("Liste des commandes du serveur discord")
		let gradesEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("Grade Joueur :", "Affiche la liste des commandes du serveur discord")
		Help_BOOK.send(gradesEmbed)
	}*/

	if (message.content === '?grades-infos') {
		channel.message.send("Liste des grades en jeu")
		let gradesEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("Bourgeois", "V.I.P")
			.addField("V.I.P+", "Youtuber")
		channel.message.send(gradesEmbed)
	}
})

bot.login(process.env.TOKEN)