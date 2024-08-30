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



global.devs = "2347034169269" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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

  sessionName:process.env.SESSION_ID || "SUHAIL_17_43_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICA5MixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDQjVsWUlZaUdOWUFzVzRkOHRyRldSMlJ0ZlBjZVJtcW9ZT3V5dzVZZldJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDZmZkVWoxdlNJeTRnU2l1RHpkTGV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY2ZDUzNjM2LTRiNzItNDUzMi05OWYyLTAxM2RhMjQ4YzczY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDI0NSxcbiAgICAgIDE2OSxcbiAgICAgIDE1MSxcbiAgICAgIDEyNixcbiAgICAgIDM4LFxuICAgICAgMTUyLFxuICAgICAgMjM0LFxuICAgICAgNjQsXG4gICAgICAxNCxcbiAgICAgIDE2MCxcbiAgICAgIDIzNyxcbiAgICAgIDI0NixcbiAgICAgIDEzNCxcbiAgICAgIDE3NCxcbiAgICAgIDY0LFxuICAgICAgMTc4LFxuICAgICAgMjEyLFxuICAgICAgMTksXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgODUsXG4gICAgICAxOTQsXG4gICAgICAxNTIsXG4gICAgICA5LFxuICAgICAgMTgsXG4gICAgICAyMjUsXG4gICAgICAyMDYsXG4gICAgICAzOCxcbiAgICAgIDIwOCxcbiAgICAgIDMxLFxuICAgICAgMjA2LFxuICAgICAgMjAxLFxuICAgICAgMjAxLFxuICAgICAgMjQ2LFxuICAgICAgODUsXG4gICAgICAyNDksXG4gICAgICAyMzIsXG4gICAgICAyNSxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZNktLMlZSVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNDE2OTI2OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTk2Mzg1Nzg3NTAyOTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043c3NxWUdFTXlKeUxZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGFod3hXNXFRVGxZSEgyWWhSVURpM3czbnU1SzNGM1RQcGpESHNXUUJUND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhZmg3WHd4S1N4SVBaTThZamRsN3JVeFdhUERYYmNGUktSdjN0cjlMVTc5SWZDbmh5MWJjZm5DTWtQb1RHSHZpYVNtY1BSdXp1ZGR6ZWZibG5za2ZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaODMreUl1RktKU0hRSDZCcG1teThrUlF1MlBXTmRnSGw5anl6MFZMRnd6dnpkLzc5Rkx2V0FwT01ZeUhpTFdXUWZlRlViaXUrOVdUQy8yMTQvZjZpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM0MTY5MjY5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTAzOTgyNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
