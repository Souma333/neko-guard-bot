const Discord = require('discord.js')
const bot = new Discord.Client()
require("dotenv").config()
const BOT_VERSION = "1.0.0";
bot.login(process.env.KEY);
//prefix for all commands.
const commandPrefix = "_";
// This is a function which will be called when the bot is ready.
bot.on("ready", (msg) => {
    console.log("Bot started! Version " + BOT_VERSION);
});

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

let data = ["anjeng", "kucing", "babi", "tai", "kontol", "ngentod", "memek"]
//pesan
bot.on("message", async (msg) => {
    try {
        // function action (){
        //     message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
        //     message.delete()
        //   }
        //chat filter
    if(msg.channel.id !== "708523418731151431"){
        let filtermsg = msg.content.toLowerCase().split(" ")
        //const myfilter = filtermsg.filter(f => console.log(f))
        await data.forEach(e => {
             filtermsg.filter(f => {
                if(e == f){
                    msg.delete()
                    msg.channel.send("Silahkan ke <#708523418731151431> Abang/Neng <@"+msg.author+">")
                    msg.channel.send("kalau mau toxic :amjing: ")
                    // msg.channel.send("Alasan Pesan Di hapus : ")
                    // msg.channel.send(new Discord.MessageEmbed()
                    // .addField("Karena Terdapat Kata Terlarang !!", msg.author)
                    // .setColor("RED"))
                    return
                 } 
            })
        })
    }
    
    

// //commands or interact with bot
//         let command = message.content.toLowerCase().split(" ")[0];
//         command = command.slice(commandPrefix.length);

//         if(command === "hello"){
//             message.channel.send("Hello " + message.author + "! Jangan Lupa Senyum Hari Ini :kissing_heart: :smiley: ");
//         }
//         if(command === "help"){
//             let embed = new Discord.MessageEmbed() //buat set embed discord card message
//                 .addField("_hello", "=> Biar Nggk Merasa Bosen :kissing_heart: ")
//                 .addField("_help", "=> Biar Nggk Kesasar :kissing_heart:")
//                 .setTitle("Commands:")
//                 .setFooter("uWu")
//                 .setColor("ORANGE");
//                 message.channel.send("Hello " + message.author + " Elu Manggil Gw Buat Liat Semua Options Yang Tersedia,,,Nih Comot Aja Free Kok");
//             // Send the embed with message.channel.send()
//             message.channel.send({embed: embed});
//         }

    } catch (error) {
        console.error(error)
    }
});





// const Dc = require('discord.js')
// const bot  = new Dc.Client()
// require('dotenv').config()
// const PREFIX = "_";
// //==============
// bot.on('ready', () => {
//     console.log("bot music started!!!")
// })
// bot.on('message', (msg) => {
//     let argument = msg.content.substring(PREFIX.length).split(" ")
//     console.log(argument)
//     switch(argument[0]){ //argument terbaru
//         case 'play':
//             if(!argument[1]) //cek ada argument link / gk
//         break;
        
//     }

// })
// //==============
// bot.login(process.env.KEY);
