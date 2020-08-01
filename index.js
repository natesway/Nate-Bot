const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function (){
     console.log('S[bot.user.username] Is Online!');
     bot.user.setActivity("Discord The Best! Play My Game Skate World Enter Command ;Skate. Sub To Me Enter Command ;youtube, {type: "PLAYING" url:"https://youtu.be/KqpQoIZl3Og"})
});

bot.login(process.env.token);
