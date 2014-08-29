var natmus = require('./../src/natmus.js');

var client = new natmus.CIPClient(natmus.config);

client.get_version(function(version) {
	console.log("Natmus Cumulus version: ", version);
});