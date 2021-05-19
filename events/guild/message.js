require('dotenv').config();

module.exports = (Discord, client, message) => {
    const prefix = process.env.BOT_PREFIX;
    if(!message.content.startsWith(prefix) || message.author.id) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord);
}