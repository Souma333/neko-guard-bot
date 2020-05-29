const Discord = require('discord.js')
const bot = new Discord.Client()
require("dotenv").config()
const BOT_VERSION = "1.0.0";
bot.login(process.env.KEY);
//prefix for all commands.
const commandPrefix = "_";
// This is a function which will be called when the bot is ready.
bot.on("ready", () => {
    console.log("Bot started! Version " + BOT_VERSION);
});

//welcome pesan
bot.on("guildMemberAdd", async (member) => {
    try {
        const channel = member.guild.channels.find(channel => channel.name === "welcome")
        if(!channel) return;
        channel.send("Selamat Datang Di Server Kami ${member}, Silahkan Baca Rules Server")
    } catch (error) {
        console.error(error)
    }   
})


//pesan
bot.on("message", async (message) => {
    
    try {
        function action (){
            message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
            message.delete()
          }
        //chat filter
    let filter = message.content.toLowerCase().split(" ")
    filter.forEach(e => { //menjalankan sejumlah kata yang masuk //filter chat  bermasalah
        switch (e) {
            case "ajg":
                message.channel.send("Hei "+message.author+" !, Kamu Mengucapkan Kata-Kata Kasar Yang Bukan 'Celetehan' ")
                message.delete()
                break;
            case "tai":
                action()
                break;
            case "babi":
                action()
                break;
            case "anjeng":
                action()
                break;
            case "anjing":
                action()
                break;
            case "jancok":
                action()
                break;
            case "kontol":
                action()
                break;
            case "memek":
                action()
                break;
            default:
                
            break;
        }
    })
    

//commands or interact with bot
        let command = message.content.toLowerCase().split(" ")[0];
        command = command.slice(commandPrefix.length);

        if(command === "hello"){
            message.channel.send("Hello " + message.author + "! Jangan Lupa Senyum Hari Ini :kissing_heart: :smiley: ");
        }
        if(command === "help"){
            let embed = new Discord.MessageEmbed() //buat set embed discord card message
                .addField("_hello", "=> Biar Nggk Merasa Bosen :kissing_heart: ")
                .addField("_help", "=> Biar Nggk Kesasar :kissing_heart:")
                .setTitle("Commands:")
                .setFooter("uWu")
                .setColor("ORANGE");
                message.channel.send("Hello " + message.author + " Elu Manggil Gw Buat Liat Semua Options Yang Tersedia,,,Nih Comot Aja Free Kok");
            // Send the embed with message.channel.send()
            message.channel.send({embed: embed});
        }

    } catch (error) {
        console.error(error)
    }
});

