const Command = require('../Structures/Command');

module.exports = new Command({
    name: 'prune',
    description: 'Let you delete message from 1 to 100.',
    async run(message, args, client) {
        const amount = args[1];

        if (!amount || isNaN(amount)) return message.reply(`${amount == undefined ? "Nothing" : amount} is not a valid number.`);

        const parsedAmount = parseInt(amount);

        if (parsedAmount > 100) return message.reply("Sorry, u cannot clear more than 100 messages!");

        message.channel.bulkDelete(parsedAmount);

        const msg = await message.channel.send(`Cleared ${parsedAmount} messages.`);

        setInterval(() => {
            msg.delete(),
            5000
        })
    }
})