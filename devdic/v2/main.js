document.onload = parseDictionary();

function parseDictionary() {
	var jsonObj = {glossaryOfTerms: []};
	var str = [];
	var str2 = [];

	$("table .ab").each(function (i, element) {
		str.push($(element).text());

		//add elements to jsonObj
		jsonObj.glossaryOfTerms.push(new Terms($(element).text(), new Array('def1', 'def2')));

	});

	$("table .81").each(function (i, element) {
		str2.push($(element).text());

	});


	console.log(str2);

	console.log(JSON.stringify(jsonObj));

	var noticeMap = {};

	$('table tbody tr').each(function () {
		var $cells = $(this).children();
		noticeMap[$cells.eq(0).text()] = $cells.eq(1).text();
	});

	console.log(noticeMap);

}


//constructor for JSON function
function Terms(term, def) {
	this.term = [term];
	this.definition = def;
}
