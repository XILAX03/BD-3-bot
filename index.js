
const aoijs = require ("aoi.js")
const bot = new aoijs.Bot({
    token: "OTA0Njk1MjU5MDM5MTUwMDkw.YX_RHg.so6bi_CiqfgZDO9YLHXGXP6HHVg",
    prefix: "~",
    })

    bot.status({
        text: "💠Infinity Republic💠",
        type: "PLAYING",
        status: "online",
        time: 12
    });

    bot.variables({
        "mute": " "

    })
bot.onMessage();

bot.loadCommands(`./command/`)

client.login(process.env.TOKEN)