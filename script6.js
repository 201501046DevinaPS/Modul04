function printFullAge(yearOfBirth) {
	var ages = [];
	var fullAges = [];

	for (var i 	= 0; i < yearOfBirth.length; i++) {
	ages[i] = 2018 - yearOfBirth[i];
}


	for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
		fullAges.push(true);
	} else {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not yet of full age.');
		fullAges.push(false);
	}
}
	return fullAges;
}

var yearOfBirth = [1990, 1997, 2002, 1992, 1982];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2012, 1989, 1996, 2005, 1989]);