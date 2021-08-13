const Command = require("../Structures/Command.js");

const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: "ping",
	description: "Shows the ping of the bot!",
	async run(message, args, client) {
		const pingembed = new MessageEmbed()
		.setTitle('PONG!')
		.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
		.setColor('YELLOW')
		.setThumbnail(message.guild.iconURL())
		.addField('Client Ping', `${client.ws.ping}ms`)
		.setTimestamp()
		message.reply({ embeds: [pingembed] })
	}
});
