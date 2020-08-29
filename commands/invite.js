const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "invite the bot in your server",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("First Take Permision From @TomarMamu")
  .setColor("RED")
  .setDescription(`[CLICK ME](${inviteURL}) OR **DIE**`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}