const Event = require('../Structures/Event');

module.exports = new Event('ready', client => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Hey Wassup!');
});