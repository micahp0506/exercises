/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

// function coinCounter (money) { // Initialize a JavaScript object to hold the coins var coinPurse = {};
var coinPurse = {
	quarter: 0,
	dime: 0,
	nickel: 0,
	penny: 0

}

// coinPurse.quarters = 0;

// return coinPurse; }

// var coins = coinCounter() console.log();
var money = .67;
var quarter = .25;
var dime = .10;
var nickel = .05;
var penny = .01;
var input,
	input2,
	input3,
	input4;
	
// var quarter = .25;
function quarterCounter(money, quarter) {
	input = (money / quarter);
	console.log(input);
	// console.log(input);
	// input = Math.floor(input);
	// console.log(input);
	// coinPurse.quarter = input;
	// console.log("quarter(s)", coinPurse.quarter);
	// input = input * .25;
	// console.log(input);
}
quarterCounter(money, quarter);



// input = money / .25;
// console.log(input);
// input = Math.floor(input);
// console.log(input);
// coinPurse.quarter = input;
// console.log("quarter(s)", coinPurse.quarter);
// input = input * .25;
// console.log(input);

// input2 = money - input;
// console.log(input2);
// input2 = input2 / .10;
// console.log(input2);
// input2 = Math.floor(input2);
// console.log(input2);
// coinPurse.dime = input2;
// console.log("dime(s)", coinPurse.dime);
// input2 = input2 * .10;
// console.log(input2);

// input3 = money - input - input2;
// console.log(input3);
// input3 = input3 / .05;
// console.log(input3);
// input3 = Math.floor(input3);
// console.log(input3);
// coinPurse.nickel = input3;
// console.log("nickel(s)", coinPurse.nickel);
// input3 = input3 * .05;
// console.log(input3);

// input4 = money - input - input2 - input3;
// console.log(input4);
// input4 = input4 / .01;
// console.log(input4);
// input4 = Math.floor(input4);
// console.log(input4);
// coinPurse.penny = input4;
// console.log("penny(s)", coinPurse.penny);
// input4 = input4 * .01;
// console.log(input4);

