const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check whether AT&T Office Hub is online.'),
  async execute(interaction) {
    await interaction.reply({
      content: `Office Hub is online. Gateway latency: ${interaction.client.ws.ping} ms.`,
      flags: MessageFlags.Ephemeral
    });
  }
};
