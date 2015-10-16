/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/
var temperature = document.getElementById("tree").addEventListener("keyup", function(e) {
  temperature.innerHTML = e.target.value;
});
    
  
  // temperature.addEventListener("convert", function(e) {
    // console.log(temperature.value);


function toCelsius () {
  var celsius = (temperature - 32) * .5555555556; 
}

function toFahrenheit () {
  var fahrenheit = temperature * 1.8 + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
button.addEventListener("click", handleSectionClick);

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

if 

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);