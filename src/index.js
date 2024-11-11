const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { Credentials } = require('./configs/Credentials.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);

    client.user.setPresence({
        activities: [{ name: `Provadis Stundenplan`, type: ActivityType.Watching }],
        status: 'online',
    });
});

client.login(Credentials.DISCORD);
