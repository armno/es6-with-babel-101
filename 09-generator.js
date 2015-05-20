var max = process.argv[2];

let fizzbuzz = function*() {
	let cur = 0;
	let val;
	while (max > cur) {
		cur += 1;

		if (cur % 15 === 0) {
			val = 'FizzBuzz';
		} else if (cur % 5 === 0) {
			val = 'Buzz';
		} else if (cur % 3 === 0) {
			val = 'Fizz';
		} else {
			val = cur;
		}

		yield val;
	}
}();

for (var n of fizzbuzz) {
	console.log(n);
}