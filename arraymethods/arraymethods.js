colos.forEach(function(color) {
	console.log(color);
});

// for (var i = 0; i < color.length; i++)
	// console.log(color)
	// same as the above

var reversedColors = colors.map(function(color) {
	return color.split("").reverse().join("");
});	
console.log("reversedColors", reversedColors);

// .map creates a new array/every item goes into the array

var fourLetters = colors.filter(function(color)){
	return color.length === 4;
});
console.log("fourLetters", fourLetters);

// . filter creates a new array, but has to have a condition for what goes in the new array/will not post all item into the array on the one that meets the criteria

var numbers = [51, 10, 62, 4, 13, 9];

var sum = numbers.reduce(function (prev, curr){
	return prev + curr;
});
console.log("sum", sum);