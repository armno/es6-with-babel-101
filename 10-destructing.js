var json = {
	"name": {
		"first": "Yosuken",
		"family": process.argv[2]
	},
	"birth": {
		"year": 1982,
		"month": 12,
		"day": process.argv[3]
	}
};

// es5 style. which also works.
// var familyName = json.name.family;
// var birthDay = json.birth.day;

var { name: { family: familyName }, birth: { day: birthDay }} = json;

console.log(familyName);
console.log(birthDay);
