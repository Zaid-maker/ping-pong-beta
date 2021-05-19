module.exports = {
    name = 'ping',
    description: 'Tells the bots latency',
    async execute(client, message, args, Discord) {
        message.channel.send(`My ping: ${client.ws.ping}ms`);
    }
}