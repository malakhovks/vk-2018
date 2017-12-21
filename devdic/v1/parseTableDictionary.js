document.onload = parseDictionary();

function parseDictionary() {
	var jsonObj = {index: {}, indexArray: [], glossaryOfTerms: []};
	var termClean;
	var defClean;

	$('table tbody tr').each(function (i) {
		var $cells = $(this).children();
		termClean = $cells.eq(0).text().replace(/(\r\n|\n|\r)/gm, "").trim().toLowerCase();
		defClean = $cells.eq(1).text().replace(/(\r\n|\n|\r)/gm, "").trim();
		jsonObj.indexArray.push(termClean.replace(/\s+/g, " "));
		jsonObj.index[termClean.replace(/\s+/g, " ")] = i;
		jsonObj.glossaryOfTerms.push(new Terms(termClean.replace(/\s+/g, " "), new Array(defClean.replace(/\s+/g, " "))));

	});

	console.log(JSON.stringify(jsonObj));
	console.log('-----------');

	fetch('http://icybcluster.org.ua:32145/recapservice/api/dictionary')
		.then(function (response) {
			if (response.status !== 200) {
				alert('Looks like there was a problem. Status Code: ' + response.status);
				return;
			}
			return response.json().then(function (json) {
				//TODO response processing
				console.log(JSON.stringify(json));
			});
		})
		.catch(function (error) {
			console.log('Request failed', error);
		});


	/*// ES7 async/await
		(async function() {
			let response = await fetch('http://icybcluster.org.ua:32145/recapservice/api/dictionary');
			let json = await response.json();
			console.log(json);
		})();
	// ES7 async/await*/

}


//constructor for JSON function
function Terms(term, def) {
	this.term = [term];
	this.definition = def;
}
