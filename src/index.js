require('dotenv').config();
const { Client, Client } = require('discord.js');

const client = new Client();

client.on('ready', async () => {
    console.log(`Bot iniciado como: ${client.user.tag}`);
});

client.login(process.env.TOKEN);