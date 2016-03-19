/**
 * NatMus.js - an interface to the collections of Nationalmuseet
 * Jens Christian Hillerup, BIT BLUEPRINT - jc@bitblueprint.com
 */

var cip = require('cip-js');

/**
 * The Nationalmuseet config for CIP.js
 */
var NatmusConfig = {
  endpoint: "http://cumulus.natmus.dk/CIP/",
  constants: {
      catchAllAlias: "any",
      layoutAlias: "web"
  },
  catalogAliases: {
    "Alle": "ALL",
    "Antiksamlingen": "AS",
    "Bevaringsafdelingen": "BA",
    "Danmarks Middelalder og Renæssance": "DMR",
    "Danmarks Nyere Tid": "DNT",
    "Etnografisk samling": "ES",
    "Frihedsmuseet": "FHM",
    "Den Kgl. Mønt- og Medaljesamling": "KMM",
    "Musikmuseet": "MUM",
    "Etnografisk Samling": "ES",
    "Danmarks Oldtid": "DO",
    "Frilandsmuseet": "FLM"
  }
};

function NatmusClient() {
  return new cip.CIPClient(NatmusConfig);
}

if(process.browser) {
  window.NatmusClient = NatmusClient;
}

exports.NatmusClient = NatmusClient;
