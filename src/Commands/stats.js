const Command = require('../Structures/Command');

const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'stats',
    description: 'shows bots statistics.',
    type: 'BOTH',
    slashCommandOptions: [],
    async run(message, args, client) {
        let embed = new MessageEmbed()
        .setTitle('Statistics of the bot.')
        .addField('Servers', `${client.guilds.cache.size}`)
        .addField('Users', `${client.users.cache.size}`)
        message.channel.send({ embeds: [embed] })
    }
})