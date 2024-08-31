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

  sessionName:process.env.SESSION_ID || "SUHAIL_07_45_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNDVtTUJrT3Bvd2pteW50blRBb0NhV0t1bXF6WTJ4MXVPV3JHdkxuL051VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGowVWY1d2xTc1dEVWxRTWIxVmNld1wiLFxuICBcInBob25lSWRcIjogXCJiOTFiZTExOS1lZjkyLTRjMmMtODRmNC02NTljOTQ3ZTgxZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgNTIsXG4gICAgICAxODUsXG4gICAgICA1LFxuICAgICAgNDQsXG4gICAgICAyNCxcbiAgICAgIDI0NyxcbiAgICAgIDQzLFxuICAgICAgMTEwLFxuICAgICAgMTg2LFxuICAgICAgMTQzLFxuICAgICAgMTQ4LFxuICAgICAgMjQyLFxuICAgICAgNzQsXG4gICAgICAxNjEsXG4gICAgICA3OCxcbiAgICAgIDEzNyxcbiAgICAgIDkxLFxuICAgICAgMTQ1LFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDcwLFxuICAgICAgMTUwLFxuICAgICAgMTE4LFxuICAgICAgMjQ2LFxuICAgICAgMTA2LFxuICAgICAgMTAwLFxuICAgICAgMjMyLFxuICAgICAgMTkyLFxuICAgICAgMTI2LFxuICAgICAgMzMsXG4gICAgICAxOTIsXG4gICAgICAxMDUsXG4gICAgICA3OSxcbiAgICAgIDE3NyxcbiAgICAgIDI0MSxcbiAgICAgIDIwMSxcbiAgICAgIDQ2LFxuICAgICAgMjQxLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhDMjZZQUNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM0MTY5MjY5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5OTYzODU3ODc1MDI5OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0Rzc3FZR0VQYVR5N1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIYWh3eFc1cVFUbFlISDJZaFJVRGkzdzNudTVLM0YzVFBwakRIc1dRQlQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRIV1R4U3VEdll3TGR1LzV3U0tISmhJdjNmSmlRUGNERVBFTHIvM0RvMjI3cnZjWGZ5OWw1Y2x0U3lic3BkWmR3WXRrRitRVXFaYmhBcGhhejkrY0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhYZ1lOekw5ditVaGR3Q0tiRGtBRHU3OEp1d3QxdUo2RmNNME5USkRwK1l5NjlUYkRIMFhqdWtMRUpxdHAxS2tsSWdFVzVJRTNsSmRwTVhqRERGVkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzQxNjkyNjk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MDkwMjk4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
