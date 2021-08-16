const Event = require("../Structures/Event");

module.exports = new Event("interactionCreate", async (client, interaction) => {
  if (interaction.user.bot || !interaction.isCommand() || !interaction.guild)
    return;

  const args = [
    interaction.commandName,
    ...client.commands
      .find((cmd) => cmd.name.toLowerCase() == interaction.commandName)
      .slashCommandOptions.map(v => `${interaction.options.get(v.name).value}`),
  ];

  const command = client.commands.find(cmd => cmd.name.toLowerCase() == interaction.commandName);

  if (!command) return interaction.reply("This is not a valid interaction command.");

  command.run(interaction, args, client);
});
