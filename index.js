/**Discord Stuff */
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

/**Dotenv */
require("dotenv").config();

/**Collection */
const commands = new Discord.Collection();

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

/**Load Events */
fs.readdir("/events/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Event loaded: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

/**Load commands */
const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter((file) => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    client.Command(command);
  }
}

/**Giveaway command Stuff! */

client.login(process.env.BOT_TOKEN);
