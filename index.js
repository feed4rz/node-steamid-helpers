const SteamIDtoPartnerID = steamid => {
  return steamid.substr(3) - 61197960265728;
}

const PartnerIDtoSteamID = partnerid => {
  return "765" + (Number(partnerid) + 61197960265728);
}

const TradelinkToSteamID = tradelink => {
  const steamid = PartnerIDtoSteamID(tradelink.substr(51, tradelink.length - 66));

  return steamid;
}

const TradelinkToPartnerID = tradelink => {
  const steamid = tradelink.substr(51, tradelink.length - 66);

  return steamid;
}

module.exports = {
  SteamIDtoPartnerID,
  PartnerIDtoSteamID,
  TradelinkToSteamID,
  TradelinkToPartnerID
}
