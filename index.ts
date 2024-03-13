import {config} from "dotenv";
import {Client, Intents} from 'discord.js';

config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const token = process.env.TOKEN;

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);
