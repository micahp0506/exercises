var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var lowGrade =101;
var highGrade = 0;
var currentGrade;
var scoreA = [];
var scoreB = [];
var scoreC = [];
var scoreD = [];
var scoreF = [];
/*
for (var i = 0; i < scores.length; i++) {
	var score = scores[i];
	// numberOfGrades = scores.length;
	// console.log("Number of grades", numberOfGrades);
	// currentGrade = scores[i];
	// console.log(currentGrade);
		if (score > 90){
		scoreA.push(score);
		console.log(score + " is an A.");
	} else if (score > 80) {
		scoreB.push(score);
		console.log(score + " is a B.");
	} else if (score > 70) {
		scoreC.push(score)
		console.log(score + " is a C.");
	} else if (score > 60) {
		scoreD.push(score)
		console.log(score + " is a D.");
	} else {
		scoreF.push(score)
		console.log(score + " is a F.");
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


 

for (var i = 0; i < scores.length; i++) {
	currentGrade = scores[i];
	if (currentGrade < lowGrade){
		lowGrade = currentGrade;
	} else {
		lowGrade = lowGrade;
	}
}	*/

// Way to use switch statement

for (var i = 0; i < scores.length; i++) {
	currentGrade = scores[i];	
	numberOfGrades = scores.length;
	console.log("Number of grades", numberOfGrades);

	if (currentGrade < lowGrade){
		lowGrade = currentGrade;
	}

	if (currentGrade > highGrade){
		highGrade = currentGrade;
	}
		
	switch (true) {
		case (currentGrade < 61):
			scoreF.push(currentGrade);
			break;
		case (currentGrade > 60 && currentGrade <71):
			scoreD.push(currentGrade);
			break;
		case (currentGrade > 70 && currentGrade < 81):
			scoreC.push(currentGrade);
			break;
		case (currentGrade > 80 && currentGrade < 91):
			scoreB.push(currentGrade);
			break;
		case (currentGrade > 90):
			scoreA.push(currentGrade);
			break;		
	}
}
console.log("low grade", lowGrade); 
console.log("high grade", highGrade);
console.log("There are " + scoreA.length + "A's.");
console.log("There are " + scoreB.length + "B's.");
console.log("There are " + scoreC.length + "C's.");
console.log("There are " + scoreD.length + "D's.");
console.log("There are " + scoreF.length + "F's.");
