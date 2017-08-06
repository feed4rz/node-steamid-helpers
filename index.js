let SteamIDtoPartnerID = (steamid) => {
  return steamid.substr(3) - 61197960265728;
}

let PartnerIDtoSteamID = (partnerid) => {
  return "765" + (Number(partnerid) + 61197960265728);
}

let TradelinkToSteamID = (tradelink) => {
  let steamid = PartnerIDtoSteamID(tradelink.substr(51, tradelink.length - 66));

  return steamid;
}

let TradelinkToPartnerID = (tradelink) => {
  let steamid = tradelink.substr(51, tradelink.length - 66);

  return steamid;
}

module.exports = {
	SteamIDtoPartnerID : SteamIDtoPartnerID,
	PartnerIDtoSteamID : PartnerIDtoSteamID,
	TradelinkToSteamID : TradelinkToSteamID,
	TradelinkToPartnerID : TradelinkToPartnerID
}