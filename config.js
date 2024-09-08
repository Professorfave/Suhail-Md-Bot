const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347034169269";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "log", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347034169269";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2347034169269";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_38_09_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQSUx0b2NCdmFFQXV5VUsybHJNMjZKWlREdHc2TTlxWk1LZUVUU1lFMnFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6MHdOYXA4MlNGMk5uUk9vS1JpbGxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3NGQ0ZGNiLWY4NDktNGE5NC1hY2IzLWVjMzE2NmE0MDFiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDEyMCxcbiAgICAgIDQ1LFxuICAgICAgMTQxLFxuICAgICAgMyxcbiAgICAgIDE1LFxuICAgICAgNCxcbiAgICAgIDEwNyxcbiAgICAgIDU2LFxuICAgICAgMjgsXG4gICAgICAxNzMsXG4gICAgICAzOCxcbiAgICAgIDEyOCxcbiAgICAgIDgyLFxuICAgICAgMTUsXG4gICAgICAxOTAsXG4gICAgICAyMDIsXG4gICAgICAyMjMsXG4gICAgICAyMjIsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTUwLFxuICAgICAgMTIxLFxuICAgICAgMTAyLFxuICAgICAgMjEsXG4gICAgICAxNDMsXG4gICAgICAxNTIsXG4gICAgICAyNixcbiAgICAgIDQzLFxuICAgICAgNjEsXG4gICAgICAxMzUsXG4gICAgICAyMjgsXG4gICAgICAxNzgsXG4gICAgICAxNDYsXG4gICAgICA3NCxcbiAgICAgIDEwNSxcbiAgICAgIDE5NixcbiAgICAgIDE1NSxcbiAgICAgIDMzLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjgxU1E2S0taXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM0MTY5MjY5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5OTYzODU3ODc1MDI5OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hzc3FZR0VLbjk5YllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIYWh3eFc1cVFUbFlISDJZaFJVRGkzdzNudTVLM0YzVFBwakRIc1dRQlQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF0aWRxa2VOaWV6SVVhR2lYandOK1J0eWJXQVlUaVBLemFhRmtvL3dSZXlUYkwxMzRQUTNHanpUSCt6UE51bXJucTZiY0wxc1Y3bzR0SGlWNjFkUUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkptMXROYVM5ZmJqeGFpUU1nMks0STlzSXFPZ3RSOHArbHFKRGphQXRRSHZKTS9uZzgrK3hoSWVhR3EveHZRdFFSMHhQb01aK1BGM1NzVlpUbzUwN0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzQxNjkyNjk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NzkxOTE4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
