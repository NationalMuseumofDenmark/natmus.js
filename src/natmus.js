/**
 * NatMus.js - an interface to the collections of Nationalmuseet
 * Jens Christian Hillerup, BIT BLUEPRINT - jc@bitblueprint.com
 */

if(typeof(require) != "undefined") {
	cip = require('./../lib/cip.js/src/cip.js');
}

/**
 * The Nationalmuseet config for CIP.js
 */
var NatMusConfig = {
	endpoint: "http://cumulus.natmus.dk/CIP/",
	constants: {
			catch_all_alias: "any",
			layout_alias: "web"
	},
	catalog_aliases: {
		"Alle": "ALL",
		"Antiksamlingen": "AS",
		"Bevaringsafdelingen": "BA",
		"Danmarks Middelalder og Renæssance": "DMR",
		"Danmarks Nyere Tid": "DNT",
		"Etnografisk samling": "ES",
		"Frihedsmuseet": "FHM",
		"Den Kgl. Mønt- og Medaljesamling": "KMM",
		"Musikmuseet": "MUM"
	}
};

if(typeof(exports) != "undefined") {
	exports.config = NatMusConfig;
	exports.CIPClient = cip.CIPClient;
} else {
	// TODO: This is a temporary fix - consider porting to require.js
	window.natmus = {
		config: NatMusConfig,
		CIPClient: CIPClient
	}
}