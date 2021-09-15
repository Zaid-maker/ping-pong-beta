const Command = require('../Structures/Command');

const moment = require('moment');

const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'userinfo',
    description: 'Fecth user information.',
    type: 'TEXT',
    slashCommandOptions: [],
    async run(message, client, args) {
        const target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed()
        .setTitle('User Information')
        .setAuthor(`${target.username}`, target.displayAvatarURL({ dynamic: true }))
        .setThumbnail(target.displayAvatarURL({ dynamic: true }))
        .setColor('NOT_QUITE_BLACK')
        .addField("User ID", `${target.id}`)
        .addField("Roles", `${member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
        .addField("Server Member Since", `${moment(member.joinedAt).format('MMMM Do YYYY', 's:mm:ss a')}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`)
        .addField("Discord User Since", `${moment(target.joinedAt).format('MMMM Do YYYY', 's:mm:ss a')}\n**-** ${moment(target.createdAt).startOf('day').fromNow()}`)
        .setTimestamp()
        message.reply({ embeds: [embed] })
    }
})