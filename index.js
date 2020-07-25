const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function (){
     console.log('S[bot.user.username] Is Online!');
     bot.user.setActivity("John Cena Play Gacha Life While Sitting On The Toilet And Listening To His Theme Song And Farting Alot", {type: "WATCHING", url:"https://youtu.be/KqpQoIZl3Og"})
});

bot.login(process.env.token);
