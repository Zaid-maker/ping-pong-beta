/**Discord Stuff */
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

/**Dotenv */
require("dotenv").config();

/**Collection */
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
});

/**Mongoose */
const mongoose = require("mongoose");

async () => {
  await mongoose.connect(`${process.env.MONGO_DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

/**Giveaway commands stuff! */

client.login(process.env.BOT_TOKEN);
