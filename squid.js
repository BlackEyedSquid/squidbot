const Discord = require("discord.js");
const squid = new Discord.Client();
// Settings contains configuration data for Squid Bot
const settings = require('./settings.json');
// Will expand to include more swear words.
const swearWords = ["fuck"]
// Tells a cool and good story. :sunglasses:
const Storys = require('./CommandFiles/sb!story/stories.json');

squid.on("ready", () => {
    console.log("Ready to kick ass.");
    squid.user.setStatus('idle');
    squid.user.setPresence({
        game: {
            name: ('with your mom | ' + (settings.version)),
            type: "PLAYING",
        }
    })
});

squid.on("message", (message) => {
    if (message.content.startsWith(settings.prefix + "ping")) {
        message.channel.send("poo farted");
    } else

    if (message.content.startsWith(settings.prefix + "bruh")) {
        message.channel.send("bruh sound effect #5");
    } else

    if (message.content.startsWith(settings.prefix + "story")) {
        message.channel.send(Storys.story1);
    }
});

squid.on("guildCreate", guild => {
    console.log(`I was invited to ${guild.name}, but I'm too lazy to go. ${guild.memberCount} users.`)
});

squid.on("guildDelete", guild => {
    console.log(`Ohhhh yeah that birthday party at ${guild.name} sucked. Now I'm back home. Party was a child's party. ${guild.memberCount} users.`)
});

// Please ignore this
squid.on("message", (message) => {
    if (message.content.startsWith(settings.prefix + "spam")) {
        message.channel.send(settings.prefix + "spam");
        message.channel.send({files: [
            "./images/sb!spam/spam.png"
        ]});
    }
});

squid.login(settings.token);