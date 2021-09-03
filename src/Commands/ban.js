const Command = require('../Structures/Command');

module.exports = new Command({
    name: 'Ban',
    description: 'Ban members i think.',
    type: 'TEXT',
    permission: 'BAN_MEMBERS',
    slashCommandOptions: [],
    async run(message, client, args) {
        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        if (!reason) return message.channel.send('Tell me a reason!');

        if (user) {

            await user.ban({
                reason: reason,
            }).then(() => {
                message.channel.send('banned!')
            })

        } else {
            message.channel.send('cant find the user!')
        }
    }
})