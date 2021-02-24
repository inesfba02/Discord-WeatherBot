const fs = require("fs");
const Eris = require("eris");

let token =  fs.readFileSync("token.txt", {encoding:'utf8', flag:'r'});
console.log(token);

let bot = new Eris(token);

bot.connect();

/**
 * First line: fs is a package from npm
 * Eris line: made Eris a constant variable, the package from npm I installed
 * let bot: makes a new eris, the code is my bot's token
 * bot.connect: logs the bot's token in, so it can connect (online) to discord
 * Ben got the encoding and flag r bit from google, no clue what it does but apparantly is useful, bot now logs in i guess 
*/