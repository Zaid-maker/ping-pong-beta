const Command = require('../Structures/Command');
const { buttonsPagination } = require('djs-buttons-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'help',
    description: 'show help',
    permission: 'SEND_MESSAGES',
    type: 'TEXT',
    slashCommandOptions: [],
    async run(message, client, args) {
        //Section 1
        const helpEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('👑 Owner Commands')
        .setDescription(`*\`\`eval, exec\`\`*`)
        .setTimestamp()

        //Section 2
        const helpEmbed1 = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('🎮 Game Info Commands')
        .setDescription(`*\`\`mc [server IP]/nfortnite [username]\`\`*`)
        .setTimestamp()
        .setFooter('*Usage: >mc play.hypixel.net*')

        //Section 3
        const helpEmbed2 = new MessageEmbed()
        .setColor('BLURPLE')
        .setTitle(' Slash Commands')
        .setDescription(`Slash commands can be perform by typing **/** in your chat.`)
        .setTimestamp()

        // Section 4
        const helpEmbed3 = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Guild Configuration')
        .setDescription(`*\`\`setprefix [new-prefix for your guild.]\`\`*`)
        .setTimestamp()

        // Create an array of embeds
        const pages = [
            helpEmbed,
            helpEmbed1,
            helpEmbed2,
            helpEmbed3
        ];

        // Emojis for buttons.
        const emojisList = ["<a:Arrow_Left:765141402949517322>", "<a:Arrow_Right:764930189225361489>"];

        // Timeout
        const timeout = 30000;

        // Calling pagination
        buttonsPagination(message, pages, emojisList, timeout);
    }
})