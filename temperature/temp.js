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
      the converted temperature should be red. if (fahr is clicked && input > 90) or (cel is clicked && input > 32)/red 
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue. else if (fahr is clicked && input < 32) or (cel is clicked && input < 0)/blue
  9. For any other temperature, the color should be green. else (green)
*/

// getting the value of text input upon clicking button

var input = document.getElementById("temp");
var events = "click keyup".split(" ");

// To determine what radio button is checked
function eventHandler() {
  input = document.getElementById("temp").value;
  console.log("input value", input);
if (document.getElementById("cel").checked) {
    toCelsius(document.getElementById("temp"));
  } else if (document.getElementById("fahr").checked) {
    toFahrenheit(document.getElementById("temp"));
  } else (alert("Hey knucklehead, choose Fahrenheit or Celsius!!"))
};
// Loop to go through event listeners
for (var i =0; i > events.length; i++) {
  input.addEventListener(events[i], eventHandler, false)
}
// Convert button
document.getElementById("converter").addEventListener("click", eventHandler);
// Enter key
document.getElementById("converter").addEventListener("keydown", function (e) {
      key = e.which || e.keyCode;
      if (key === 13) {
      }
});
// function searchKeyPress(e) {
  // var key = e.which || e.keycode;
    // if (key ==+ 13) {
      // document.getElementById("converter").click();
        // return false;
        // }
      // return true;
    // };



// Clear button
function clearfield() {
    document.getElementById("temp").value = "";
    document.getElementById("temp-result").innerHTML = "";
    document.getElementById("cel").checked = false;
    document.getElementById("fahr").checked = false;
}

clear.addEventListener("click", clearfield, false);

// Conversion functions
function toCelsius () {
  var celsius = Math.round((input - 32) * .5555555556);
    console.log("C", celsius);
    if (celsius > 32) { 
    document.getElementById("temp-result").style.color = "red";
    document.getElementById("temp-result").innerHTML = (celsius + "C");
  } else if (celsius < 0) {
    document.getElementById("temp-result").style.color = "blue";
    document.getElementById("temp-result").innerHTML = (celsius + "C");
  } else {
    document.getElementById("temp-result").style.color = "green";
    document.getElementById("temp-result").innerHTML = (celsius + "C");
  }
};


function toFahrenheit () {
  var fahrenheit = Math.round(input * 1.8 + 32);
    console.log("F", fahrenheit);
    if (fahrenheit > 90) { 
    document.getElementById("temp-result").style.color = "red";
    document.getElementById("temp-result").innerHTML = (fahrenheit + "F");
  } else if (fahrenheit < 32) {
    document.getElementById("temp-result").style.color = "blue";
    document.getElementById("temp-result").innerHTML = (fahrenheit + "F");
  } else {
    document.getElementById("temp-result").style.color = "green";
    document.getElementById("temp-result").innerHTML = (fahrenheit + "F");
  }
};
  // input = document.getElementById("temp").value;
  // console.log("input value", input);
// if (document.getElementById("cel").checked) {
//     toCelsius(input);
//   } else if (document.getElementById("fahr").checked) {
//     toFahrenheit(input);
//   } else (alert("Hey knucklehead, choose Fahrenheit or Celsius!!"))
// });


      // toCelsius(input);
      // console.log(celsius);
      // } else if (e.which === 13 && document.getElementById("fahr").checked) {
        // input = e.target.value;
        // console.log("input value", input);
          // toFahrenheit(input);
          // console.log(fahrenheit);
      // } else (alert("Hey knucklehead, choose Fahrenheit or Celsius!!"))
      // document.getElementById("cel").checked { 
      // } if (e.which === 13)
        // document.getElementById("fahr").checked {
    // } else (alert("Hey knucklehead, choose Fahrenheit or Celsius!!"))
  // }
// }); 
    



// // Get a reference to the button element in the DOM     *

// button.addEventListener("click", handleSectionClick);

// // This function should determine which conversion should       *
// // happen based on which radio button is selected.         *
// function determineConverter (clickEvent) {


// var pickedOption = document.getElementById("temp")
//   console.log("event", clickEvent);


// for (var j = 0; j < radio.length, j++)
//   var origTemp = 0;



// // Assign a function to be executed when the button is clicked    *
// button.addEventListener("click", determineConverter);