# AT&T Office Hub — Phase 1 starter

This is the first foundation for a custom Discord bot. It currently provides:
- `/ping` — confirms the bot is online.
- `/officehelp` — displays a private command guide.

The project is intentionally structured so sales, production, and competition features can be added as separate modules.

## Before you begin

You need:
- A Discord server where you have permission to manage the server.
- Access to the [Discord Developer Portal](https://discord.com/developers/applications).
- Node.js 22.12+ installed.
- A computer to run the bot during initial testing.

## 1. Create the Discord application

1. Open https://discord.com/developers/applications
2. Select **New Application** and name it `AT&T Office Hub` (or your preferred name).
3. Open **Bot** and create/reset the bot token.
4. Copy the token and keep it private. Anyone with this token can control your bot.
5. Under **Installation**, configure Guild Install with the `bot` and `applications.commands` scopes.
6. Grant only the permissions needed initially: **View Channels**, **Send Messages**, and **Embed Links**.
7. Use the generated install link to add the bot to your existing server.

For this first phase, do not enable privileged Gateway Intents such as Message Content, Server Members, or Presence. The starter only needs the Guilds intent for slash commands.

## 2. Get the IDs

In Discord, enable **User Settings → Advanced → Developer Mode**.

- Copy the application ID from the Developer Portal's General Information page. This is `CLIENT_ID`.
- Right-click your server icon and choose **Copy Server ID**. This is `GUILD_ID`.

## 3. Configure the project

Open a terminal in this project folder and run:

```bash
npm install
```

Copy `.env.example` to a new file named `.env`, then fill in:
- `DISCORD_TOKEN`
- `CLIENT_ID`
- `GUILD_ID`

Do not paste the token into Discord, ChatGPT, GitHub, or a public message. Do not upload `.env` to GitHub.

## 4. Register commands and start the bot

Run these in the project folder:

```bash
npm run deploy
npm start
```

The bot should appear online. In your server, try `/ping` and `/officehelp`.

Guild-scoped commands are used during development so changes appear in your server without waiting for global command propagation.

## 5. Keep it online

During development, the bot is online only while `npm start` is running. Later, deploy the project to a secure always-on host. Add the three environment variables through the host's secret/environment-variable settings; do not upload `.env`.

## Planned next modules

1. Agent registration and manager roles.
2. `/sale` submission modal with manager approval.
3. Verified production records and `/mysales` / `/salesboard`.
4. Automatic announcements to a designated sales channel.
5. Individual, team, and office-wide challenges.

## Important production-data safeguards

- Do not collect customer names, phone numbers, account numbers, addresses, or other customer-identifying information in Discord.
- Use an internal sale reference or approved non-identifying identifier if reconciliation is needed.
- Make manager approval, edits, reversals, and audit history part of the sales workflow.
- Keep bot permissions limited to the channels it needs.
- Before integrating with AT&T systems, confirm that the integration method and data fields are approved by your organization.
