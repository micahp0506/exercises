var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var output = "";
var output2 = "";

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement =document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	
	
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  output = output + "<div>" + currentBand + "</div>";


  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  output2 = output2 + "<div>" + currentVeggie + "</div>";
}
console.log(output);
console.log(output2);
bandElement.innerHTML = output;
veggieElement.innerHTML = output2;


var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// var criteria = 2;


// Example code - switch statement
for (var i = 0; i < planets.length; i++) {
  var planet = planets[i]
  
  switch (planet) {
    case "mercury":
    case "venus":
    case "earth":
    case "mars":
      console.log("rocky planet");
      break;
    case "jupiter":
    case "saturn":
    case "uranus":
    case "neptune":
      console.log("gas planet");
      break;
    default: 
    	console.log("It is a werd planet");
    	break;  
  }
}