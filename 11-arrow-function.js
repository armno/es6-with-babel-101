var inputs = process.argv.slice(2);
var result = inputs.map((input) => {
	return input.charAt(0).toUpperCase();
}).reduce((prev, current) => {
	return prev + current;
});

// official solution.
// var result = inputs.map((input) => input[0])
//										.reduce((prev, curr) => prev += curr);

console.log(result);
