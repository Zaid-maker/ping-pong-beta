const Command = require("../Structures/Command.js");

const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: "ping",
	description: "Shows the ping of the bot!",
	type: "BOTH",
	slashCommandOptions: [],
	async run(message, args, client) {
		const pingembed = new MessageEmbed()
		.setTitle('PONG!')
		.setColor('YELLOW')
		.setThumbnail(message.guild.iconURL())
		.addField('Client Ping', `${client.ws.ping}ms`)
		.setTimestamp()
		message.reply({ embeds: [pingembed] })
	}
});
