/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */



/*
Create a function, Model, to hold the 
corresponding property and value
*/

var Make = function () {
  this.makeName = "Honda";
  console.log(this);
}

function Model () {
  this.model = "CRV";
}

Model.prototype = new Make ();

var model = new Model ();
console.log("model", model);
 
// Model.prototype = new Make();
// console.log("new make", new Make());

// function car () {
//   this.color = "white";
// }

// var car = new Make ();

var car1 = new Model ();
car1.color = "Red";
console.log("car1", car1);

var car2 = new Model ();
car2.color = "Blue";
console.log("car2", car2);

var car3 = new Model ();
car3.color = "Black";
console.log("car3", car3);
 