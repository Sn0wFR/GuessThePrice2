"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
(0, dotenv_1.config)();
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES, discord_js_1.Intents.FLAGS.GUILD_MEMBERS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const token = process.env.TOKEN;
const txtChannel = process.env.TXTCHANNEL;
console.log(token);
client.once('ready', () => {
    console.log('Ready!');
});
client.login(token).then(r => { });
client.on('messageCreate', (message) => {
    console.log(message.content);
    if (message.content === '?ping' && message.channel.id === txtChannel) {
        message.channel.send("pong !");
    }
});
//# sourceMappingURL=index.js.map