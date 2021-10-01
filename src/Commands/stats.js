const Command = require('../Structures/Command');

const { MessageEmbed } = require('discord.js');

const feroms = require('fero-ms');

module.exports = new Command({
    name: 'stats',
    description: 'shows bots statistics.',
    type: 'BOTH',
    slashCommandOptions: [],
    async run(message, args, client) {
        let uptime = client.uptime();
        const shortenedUptime = `\`\`\`${feroms.ms(uptime)}\`\`\``;
        let embed = new MessageEmbed()
        .setTitle(`${client.user.username} stats`)
        .addFields(
            { name: "Servers:", value: `\`\`\`${client.guilds.cache.size}\`\`\``, inline: true },
            { name: "Users:", value: `\`\`\`${client.users.cache.size}\`\`\``, inline: true },
            { name: "Channels:", value: `\`\`\`${client.channels.cache.size}\`\`\``, inline: true },
            { name: "Uptime:", value: shortenedUptime, inline: true },
            { name: "Ping:", value: `\`\`\`${Math.round(client.ws.ping)} ms\`\`\``, inline: true },
            { name: "RAM:", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true }
        )
        message.reply({ embeds: [embed] })
    }
})