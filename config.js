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
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
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

  sessionName:process.env.SESSION_ID || "SUHAIL_12_24_09_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjBRZVpaWjFsZGR0S2s4clpCYk9WZnlBVzNiTTdBdHZRVzRPU1FxeGgxZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSzBYYU10TENSdzZqbDE1RTlxenhVUVwiLFxuICBcInBob25lSWRcIjogXCI5OTE4MmUwNy00MDAzLTQwNWItOGQxNS03ODE1ODkyOGMzNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAyNTAsXG4gICAgICAyMSxcbiAgICAgIDM4LFxuICAgICAgMjQ0LFxuICAgICAgMjUsXG4gICAgICA4MixcbiAgICAgIDkzLFxuICAgICAgOTMsXG4gICAgICA0MSxcbiAgICAgIDE3MixcbiAgICAgIDE0MixcbiAgICAgIDI2LFxuICAgICAgMyxcbiAgICAgIDEwMixcbiAgICAgIDI1MSxcbiAgICAgIDIxNixcbiAgICAgIDE5MSxcbiAgICAgIDEwMyxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDM2LFxuICAgICAgNDYsXG4gICAgICAzMixcbiAgICAgIDEwOCxcbiAgICAgIDQ3LFxuICAgICAgOTYsXG4gICAgICAyMjcsXG4gICAgICA0MSxcbiAgICAgIDExNSxcbiAgICAgIDE1LFxuICAgICAgNzQsXG4gICAgICAyNDAsXG4gICAgICAwLFxuICAgICAgMTE3LFxuICAgICAgOTksXG4gICAgICA1MyxcbiAgICAgIDE5NyxcbiAgICAgIDYzLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjRONUtLNlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzQxNjkyNjk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk5NjM4NTc4NzUwMjk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUHNzcVlHRU55dTlyWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhhaHd4VzVxUVRsWUhIMlloUlVEaTN3M251NUszRjNUUHBqREhzV1FCVDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWFtNjRQMjdkeEIrRjNuWXRxQUZubWhqQjVZNkVQN2tiVC8vdGtjYStwSDhNckwyTEtsdVN3b0lLOUh0OWc2aExJdlE0ZWg1VG4zUXVPVUZJbksyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUFpQkYyL3hMeHJ2TzJyek9Ja3Q0QmtpVFlWZy9SWFBmU3pMR1JvT0Q3anVyU25HMFFWTEc1alduMDZvSEV5ZlFyMHN2aEQyWTFvZkFoODl0ZXJPZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNDE2OTI2OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU3OTgyMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFESFBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURIUC5qc29uIjogIntcImtleURhdGFcIjpcIlhoRGZCeXNMQU5yY3p6NGdRR2dtMGY0QjJ4VlFpKyt0d2UrVG0zaEpoLzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5MTEzNzYyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
