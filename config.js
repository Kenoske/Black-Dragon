const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = "918731030752"
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://rinmongodb1:robin12032005@cluster0.dudmk3u.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 3000
global.email = 'robinaaspirant@gmail.com'
global.github = 'https://github.com/nimesh-official/Black-Dragon'
global.location = 'India'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '918731030752'
global.devs = '918787599649';
global.website = 'https://github.com/nimesh-official/Black-Dragon'
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/17d25248a18357d93d98e.jpg'
module.exports = {
  botname:   process.env.BOT_NAME || '𝚁𝙸𝙽 𝙱𝙾𝚃 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻',
  ownername: process.env.OWNER_NAME || '亗•|ʀɪɴ☆᭄',
  sessionName:  process.env.SESSION_ID || 'Blackdragon;;;93QHXL7I#z7FsuiPEsD4RVBIOFELOE98SZXcwFrVGDiue3SxDz78',
  author:  process.env.PACK_INFO === (";")[0] || '𝚁𝙸𝙽 𝙱𝙾𝚃 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻',
  auto_read_status :  process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_INFO === (";")[1] || '𝚁𝙸𝙽 𝙱𝙾𝚃 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻',
  autoreaction:  process.env.AUTO_REACTION || 'true',
  antibadword :  process.env.ANTI_BAD_WORD || 'true',
  alwaysonline:  process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '971',
  readmessage:  process.env.READ_MESSAGE || 'true',
  auto_status_saver: process.env.AUTO_STATUS_SAVER || 'false',
  HANDLERS:  process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || '3',
  disablepm:  process.env.DISABLE_PM || 'false',
  levelupmessage:  process.env.LEVEL_UP_MESSAGE || 'true',
  antilink:  process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE || '',
  autobio:  process.env.AUTO_BIO || 'false',
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY || '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',
  heroku:  process.env.heroku || 'false',
  HEROKU: {
    HEROKU: process.env.HEROKU || 'false',
    API_KEY: process.env.HEROKU_API_KEY || '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab',
    APP_NAME: process.env.HEROKU_APP_NAME || 'zeropgg'
},
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'DRAGON',
  WORKTYPE: process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
