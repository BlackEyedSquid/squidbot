const Discord = require("discord.js");
const squid = new Discord.Client();
// Settings contains configuration data for Squid Bot
const settings = require("../settings.json");

squid.on("ready", () => {
    console.log("Maintenance Mode");
    squid.user.setStatus('dnd');
    squid.user.setPresence({
        game: {
            name: ('Under Maintenance | Next version ' + (settings.nextversion)),
            type: "PLAYING",
        }
    })
});

// Squid Bot will send this message if a user tries to call the bot.
squid.on("message", (message) => {
    if (message.content.startsWith(settings.prefix)) {
        message.channel.send("Currently Under Maintenance");
    }
});

squid.login(settings.token);