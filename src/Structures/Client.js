const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require('./Event');

const config = require('../Data/config.json');

const intents = new Discord.Intents(32767);

const fs = require('fs');

class Client extends Discord.Client {
	constructor() {
		super({ intents, allowedMentions: { repliedUser: false } });

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(bot_token) {
		const commandFiles = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js'))
		/**
		 * @type {Command[]}
		 */
		const commands = commandFiles.map(file => require(`../Commands/${file}`));

		commands.forEach(cmd => {
			console.log(`Command ${cmd.name} was loaded.`);
			this.commands.set(cmd.name, cmd);
		});

		const slashCommands = commands.filter(cmd => ["BOTH", "SLASH"].includes(cmd.type)).map(cmd => ({
			name: cmd.name.toLowerCase(),
			description: cmd.description,
			permissions: [],
			options: cmd.slashCommandOptions,
			defaultPermissions: true
		}));




		//.forEach(file => {
			///**
			// * @type {Event}
			// */
			//const command = require(`../Commands/${file}`);
			//console.log(`Command ${command.name} Loaded`);
			//this.commands.set(command.name, command);
		//});

		// Event Handler
		this.removeAllListeners();

		this.on('ready', async () => {
			const cmds = await this.application.commands.set(slashCommands);

			cmds.forEach(cmd => console.log(`Slash Command ${cmd.name} registered.`));
		});

		fs.readdirSync('./src/Events').filter(file => file.endsWith('.js')).forEach(file => {
			/**
			 * @type {Event}
			 */
			const event = require(`../Events/${file}`);
			console.log(`Event ${event.event} Loaded`);
			this.on(event.event, event.run.bind(null, this));
		});
		
		this.login(bot_token);
	}
}

module.exports = Client;
