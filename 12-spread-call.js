var args = process.argv[2].split(',');
args = args.map((arg) => +arg);

function avg(...args) {
	let sum = args.reduce((sum, n) => sum + n);
	return sum / args.length;
}

console.log(avg(...args));
