var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var lowGrade =100;
var highGrade = 0;
var currentGrade;
var numberOfGrades ="";
var scoreA = [];
var scoreB = [];
var scoreC = [];
var scoreD = [];
var scoreF = [];
for (var i = 0; i < scores.length; i++) {
	var score = scores[i];
	// numberOfGrades = scores.length;
	// console.log("Number of grades", numberOfGrades);
	// currentGrade = scores[i];
	// console.log(currentGrade);
		if (score > 90){
		scoreA.push(score + " is an A.");
		console.log(scoreA);
	} else if (score > 80) {
		scoreB.push(score + " is a B.");
		console.log(scoreB);
	} else if (score > 70) {
		scoreC.push(score + " is a C.")
		console.log(scoreC);
	} else if (score > 60) {
		scoreD.push(score + " is a D.")
		console.log(scoreD);
	} else {
		scoreF.push(score + " is a F.")
		console.log(scoreF);
	}
		

}
console.log("There are " + scoreA.length + "A's.");
console.log("There are " + scoreB.length + "B's.");
console.log("There are " + scoreC.length + "C's.");
console.log("There are " + scoreD.length + "D's.");
console.log("There are " + scoreF.length + "F's.");

for (var i = 0; i < scores.length; i++) {
	currentGrade = scores[i];
	if (currentGrade > highGrade){
		highGrade = currentGrade;
	} else {
		highGrade = highGrade;
	}
}	

console.log("high grade", highGrade); 

for (var i = 0; i < scores.length; i++) {
	currentGrade = scores[i];
	if (currentGrade < lowGrade){
		lowGrade = currentGrade;
	} else {
		lowGrade = lowGrade;
	}
}	

console.log("low grade", lowGrade); 

for (var i = 0; i < scores.length; i++) {
	numberOfGrades = scores.length;
	console.log("Number of grades", numberOfGrades);
}
