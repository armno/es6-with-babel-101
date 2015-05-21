const max = process.argv[2];

let FizzBuzz = {
	[Symbol.iterator]() {

		let cur = 1;

		return {
			next() {

				let val = cur;
				if (cur % 3 === 0 && cur % 5 === 0) {
					val = 'FizzBuzz';
				} else if (cur % 3 === 0) {
					val = 'Fizz';
				} else if (cur % 5 === 0) {
					val = 'Buzz';
				}

				if (max >= cur) {
					cur = cur + 1;
					return {
						done: false,
						value: val
					};
				}

				return { done: true };
			}
		};
	}
};

for (var n of FizzBuzz) {
	console.log(n);
}