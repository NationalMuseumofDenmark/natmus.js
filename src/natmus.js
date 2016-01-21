/**
 * NatMus.js - an interface to the collections of Nationalmuseet
 * Jens Christian Hillerup, BIT BLUEPRINT - jc@bitblueprint.com
 */

/**
 * The Nationalmuseet config for CIP.js
 */
var NatMusConfig = {
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
		"Musikmuseet": "MUM"
	}
};
