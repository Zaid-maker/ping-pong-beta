const Command = require('../Structures/Command');

module.exports = new Command({
    name: 'beep', 
    description: 'Replies with beep boop boop beep!',
    type: 'BOTH',
    slashCommandOptions: [],
    async run(message, args, client) {
        message.reply('BEEP BOOP BOOP BEEP!')
    }
})