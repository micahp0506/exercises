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

// getting the value of text input upon clicking button

var input;

document.getElementById("converter").addEventListener("click", function() {
  input = document.getElementById("temp").value;
  console.log(input);
});
    
  // temperature.addEventListener("convert", function(e) {     *
    // console.log(temperature.value);     *


function toCelsius (input) {
  var celsius = Math.round((input - 32) * .5555555556); 
    console.log(celsius);
}


function toFahrenheit () {
  var fahrenheit = Math.round(input * 1.8 + 32);
    console.log(fahrenheit);
}

// // Get a reference to the button element in the DOM     *

// button.addEventListener("click", handleSectionClick);

// // This function should determine which conversion should       *
// // happen based on which radio button is selected.         *
// function determineConverter (clickEvent) {


// var pickedOption = document.getElementById("temp")
//   console.log("event", clickEvent);


// for (var j = 0; j < radio.length, j++)
//   var origTemp = 0;
// if (document.getElementById("cel").checked) {
//   toCelsius();
// } else if (document.getElementById("fahr").checked) {
//   toFahrenheit();
// }



// // Assign a function to be executed when the button is clicked    *
// button.addEventListener("click", determineConverter);