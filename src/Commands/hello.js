const Command = require("../Structures/Command.js");

const { MessageEmbed } = require('discord.js')

module.exports = new Command({
	name: "hello",
	description: "Replies with Hello There!",
	type: 'BOTH',
	slashCommandOptions: [],
	async run(message, args, client) {
		const helloembed = new MessageEmbed()
		.setTitle('Hello There!')
		.setDescription('This is a beta testing of pingpongbot')

		message.reply({ embeds: [helloembed] })
	}
});
