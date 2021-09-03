const Command = require('../Structures/Command');

const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'kick',
    description: 'allows to kick a member from the server.',
    permission: 'KICK_MEMBERS',
    type: 'TEXT',
    slashCommandOptions: [],
    async run(message, client, args) {
        const user = message.mentions.members.first();

        if (user) {
            user.kick("No reason has been given.").then(() => {
                const embed1 = new MessageEmbed()
                .setColor('YELLOW')
                .setDescription(`Successfully kicked ${user.tag} from the server.`)
                .setTimestamp()
                message.reply({ embeds: [embed1] }) 
        }).catch(err => {
                const embed2 = new MessageEmbed()
                .setColor('YELLOW')
                .setDescription('Unable to kick that member. make sure my role is higher from the user.')
                .setTimestamp()
                message.reply({ embeds: [embed2] })
                console.log(err);
            });
        }
    }
})