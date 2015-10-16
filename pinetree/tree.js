
/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.




// var tree = function(height) {
// 	var allLines ="";
// 	for (var i =0; i <= height; i++){
// 		var oneLine = createLine(i);
// 		allLines += oneLine;
// 	}
// 	return allLines;

// console.log(allLines);

//     function createLine(length) {
//         var aLine = '';
//         for (var j = 0; j <= length; j++) {
//             aLine += '*';
//         }
//         return aLine + "<br/>";
//     }
// };
// tree(7);

var one = "*";
console.log(one);

var three ="***";
console.log(three);

var five ="*****";
console.log(five);

var seven ="*******";
console.log(seven);

var nine ="*********";
console.log(nine);

var oldHTML = document.getElementById("tree1").innerHTML;
var newHTML = one;
document.getElementById("tree1").innerHTML = newHTML;


var oldHTML = document.getElementById("tree3").innerHTML;
var newHTML = three;
document.getElementById("tree3").innerHTML = newHTML;



var oldHTML = document.getElementById("tree5").innerHTML;
var newHTML = five;
document.getElementById("tree5").innerHTML = newHTML;


var oldHTML = document.getElementById("tree7").innerHTML;
var newHTML = seven;
document.getElementById("tree7").innerHTML = newHTML;


var oldHTML = document.getElementById("tree9").innerHTML;
var newHTML = nine;
document.getElementById("tree9").innerHTML = newHTML;
// var asterik = ["*"]
// for (var i =0, asterik.length > 8, i++)

