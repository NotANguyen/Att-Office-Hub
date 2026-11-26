const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('officehelp')
    .setDescription('Show the current Office Hub command guide.'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle('AT&T Office Hub')
      .setDescription('The custom office bot is being built in stages.')
      .addFields(
        { name: 'Available now', value: '`/ping` — check that the bot is online\\n`/officehelp` — show this guide' },
        { name: 'Coming next', value: '`/sale` — submit a sale\\n`/mysales` — view your production\\n`/salesboard` — view office production\\n`/challenge` — start a competition' },
        { name: 'Data handling', value: 'Do not enter customer names, phone numbers, account numbers, addresses, or other customer-identifying information into Discord.' }
      )
      .setFooter({ text: 'Office Hub • Phase 1 foundation' });

    await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  }
};
