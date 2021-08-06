const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]
});

const config = require('./config.json');

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}, my id is ${client.user.id}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName: command } = interaction;

	if (command === 'ping') {
		await interaction.reply('Pong!');
	} else if (command === 'beep') {
		await interaction.reply('Boop!');
	}
});

client.login(config.bot_token);