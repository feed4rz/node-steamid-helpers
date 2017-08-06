let convert = require('./index.js');

let steamid = "76561198010004651";

console.log(`SteamID: ${steamid}` )

let partnerid = convert.SteamIDtoPartnerID(steamid);

console.log(`SteamIDtoPartnerID: ${partnerid}`);

steamid = convert.PartnerIDtoSteamID(partnerid);

console.log(`PartnerIDtoSteamID: ${steamid}`);

let tradelink = 'https://steamcommunity.com/tradeoffer/new/?partner=49738923&token=RDBVJJ9A';

console.log(`Tradelink: ${tradelink}`);

steamid = convert.TradelinkToSteamID(tradelink);

console.log(`TradelinkToSteamID: ${steamid}`);

partnerid = convert.TradelinkToPartnerID(tradelink);

console.log(`TradelinkToPartnerID: ${partnerid}`);