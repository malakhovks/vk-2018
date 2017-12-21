var fs = require('fs');


fs.readFile('petrenkoDictionaryClean.json', function (err, data) {
	if (err) {
		console.log(err);
	}

	console.log(data.toString());

	var obj = JSON.parse(data);
	var key = "якість";
	var indx = obj.index[key];

	console.log(indx);
	console.log(JSON.stringify(obj.glossaryOfTerms[indx]));

});