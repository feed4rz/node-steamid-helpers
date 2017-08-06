# node-steamid-helpers
Various convertation functions for Steam`s IDs.

## Installation
1) Install npm package:
```
npm install steamid-helpers
```
2) Require the module in your code
```JAVASCRIPT
let convert = require('steamid-helpers');
```

## Methods
### SteamIDtoPartnerID(steamid)
Converts SteamID64 to PartnerID (the one thats in the tradelink for example).

### PartnerIDtoSteamID(partnerid)
Converts PartnerID to SteamID64

### TradelinkToPartnerID(tradelink)
Converts tradelink (for example https://steamcommunity.com/tradeoffer/new/?partner=12345678&token=ABCDEFGH) to PartnerID

### TradelinkToSteamID(tradelink)
Converts tradelink (for example https://steamcommunity.com/tradeoffer/new/?partner=12345678&token=ABCDEFGH) to SteamID64
