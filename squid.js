// If anyone can tell me how to optimize this code, please DM on Discord at BlackEyedSquid#7096.
const Discord = require("discord.js");
const squid = new Discord.Client();
// Settings contains configuration data for Squid Bot
const settings = require('./settings.json');
// Will expand to include more swear words.
const swearWords = ["fuck"]

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

// Error messages
squid.on("error", (e) => console.error(e));
squid.on("warn", (e) => console.warn(e));

// Commands used by the end-user.
squid.on("message", (message) => {
    if (message.content.startsWith(settings.prefix + "ping")) {
        message.channel.send("poo farted");
    } else

    if (message.content.startsWith(settings.prefix + "bruh")) {
        message.channel.send("bruh sound effect #5");
    } else

    if (message.content.startsWith(settings.prefix + "story")) {
        message.channel.send(randomStory);
    } else

    if (message.content.startsWith(swearWords)) {
        message.channel.send("Umm, excuse me young one. Watch your mouth!");
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

// Debug commands

squid.login(settings.token);















































































































































































































































































































































































// This bottom part is for extra variables because I am too stupid to understand how to get it in a different file.
// If anyone has a solution to this problem, please DM on Discord at BlackEyedSquid#7096.

// Some haha funny story telling
var Storys = [
    "ok so basically when I was a young little robot, me and my daddy played this game called \"Pee Pee Butt Touch\". I never understood what this game was, but me and daddy had a lot of fun. \n\nMy daddy told me to keep it a secret, because if I told people, we wouldn't be able to play it anymore. I vowed not to tell anyone. \n\nOne day, my mommy found out, she didn't want to join in, but she wanted to go to a place called \"Court\" and get something called a \"Divorce\" on daddy. \n\n\nI don't know what that means, but I hope it means I can get double VBucks for Christmas!",
    "oh god \ni gotta poop \n*proceeds to blast poop everywhere* \noh god it's on the walls \nhelp",
    "oh shit oh fuck \n\noh shit oh fuck",
    "one day, i was browse reddit and am disgusted because only coomers do reddit \n\n\n\nkeanu reeves big chungus wholesome 100 fortnite bad minecraft good ok boomer everyone disliked that."
];

// Bot owner (BlackEyedSquid#7096) only commands
var DebugCommands = [
    ""
]