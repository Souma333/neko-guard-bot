const Discord = require('discord.js')
const bot = new Discord.Client()
require("dotenv").config()
const BOT_VERSION = "1.0.0";
bot.login(process.env.KEY);
//prefix for all commands.
const commandPrefix = ":";
// This is a function which will be called when the bot is ready.
bot.on("ready", () => {   
    console.log("Bot started! Version " + BOT_VERSION)
    bot.user.setStatus("Online")
    bot.user.setActivity('Cheerful Forest', { type:'WATCHING'})
});
let server = ["708523418731151431"]
/*
* Tambah kata terlarang di sini
*/
let data = [
    "anjeng", "ajg", "kntol", "jembot", "jembut", "jembod", "jmbd", "babi", "tai", "kontol", "asu", 
    "ngentod","bangsat","bajingan", "memek", "asw", "ngentod", "anjing", "pantek", "tek", "jancok", 
    "vantek", "anjir","anjer", "kambing"]
bot.on("message", async (msg) => {
    try {
        server.forEach(exceptserver => {
            if(msg.channel.id !== exceptserver){
                let filtermsg = msg.content.toLowerCase().split(" ")
                    data.forEach(e => {
                        filtermsg.filter(f => {
                            if(e == f){
                                msg.channel.send("Silahkan ke <#708523418731151431> Abang/Neng <@"+msg.author+">")
                                msg.channel.send("kalau mau toxic :kissing_heart: ")
                                msg.delete()
                                return
                            }
                        })
                    })                
            }
        })
        //commands or interact with bot
         let command = msg.content.toLowerCase().split(" ")[0];
         command = command.slice(commandPrefix.length);

         if(command === "beb"){
             msg.channel.send("Hai <@" + msg.author + "> ! Jangan Lupa Senyum Hari Ini :kissing_heart: :smiley: ");
         }
        
        if(command === "cook"){
             msg.channel.send("Here! Here! Here! <@" + msg.author + "> ! https://media1.tenor.com/images/a773a74e01833d40a38869659792e9b1/tenor.gif ");
         }
        
         if(command === "help"){
             let embed = new Discord.MessageEmbed() //buat set embed discord card message
                 .addField(":beb", "Biar Nggk Merasa Bosen :kissing_heart: ")
                 .addField(":help", "Biar Nggk Kesasar :kissing_heart:")
                 .addField(":Cook", "Kalo Mau Liat Gw Masak")
                 .setTitle("Commands:")
                 .setFooter("uWu")
                 .setColor("ORANGE");
                 msg.channel.send("Hello <@" + msg.author + "> Elu Manggil Gw Buat Liat Semua Options Yang Tersedia,,,Nih Comot Aja Free Kok");
             // Send the embed with message.channel.send()
             msg.channel.send({embed: embed});
         }
    } catch (error) {
        console.error(error)
    }
})




// //welcome pesan
// bot.on("guildMemberAdd", async (member) => {
//     try {
//         const channel = member.guild.channels.find(channel => channel.name === "welcome")
//         if(!channel) return;
//         channel.send("Selamat Datang Di Server Kami ${member}, Silahkan Baca Rules Server")
//     } catch (error) {
//         console.error(error)
//     }   
// })

// 












