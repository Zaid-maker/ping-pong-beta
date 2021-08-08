const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require('./Event');

const config = require('../Data/config.json');

const intents = new Discord.Intents(32767);

const fs = require('fs');

class Client extends Discord.Client {
	constructor() {
		super({ intents });

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(bot_token) {
		fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js')).forEach(file => {
			/**
			 * @type {Event}
			 */
			const command = require(`../Commands/${file}`);
			console.log(`Command ${command.name} Loaded`);
			this.commands.set(command.name, command);
		});

		fs.readdirSync('./src/Events').filter(file => file.endsWith('.js')).forEach(file => {
			/**
			 * @type {Event}
			 */
			const event = require(`../Events/${file}`);
			console.log(`Event ${event.event} Loaded`);
			this.on(event.event, event.run.bind(null, this));
		})
		this.login(bot_token);
	}
}

module.exports = Client;
