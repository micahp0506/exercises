// IIFE
// Immediately invoked function expression




// Break now for a class exercise. Have students create a new directory named modules where they will create an HTML and a JS file. The JS file should create an IIFE module named SolarSystem. Have the student create properties and methods for the following:

// Getter for an array of planets that cannot be modified.
// Getter/setter for number of planets that humans have landed people or robots on.
// Public property for holding a last modified date.
// Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
// Any other fun/related data that the student wants to add.


var Solarsystem = (function() {
  var planetArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var visitedPlanets = 0
  var spacecraft = ["Messenger", "Venus Express", "Akatsuki", "LRO", "Artemis"];
  

  return {
    modified_date: new Date(),
    getPlanetArray: function() {
      return planetArray;
    },
    getVisitedPlanets: function() {
      return visitedPlanets;
    },
    setVisitedPlanets: function(value) {
      visitedPlanets = value;
    },
    getSpacecraft: function() {
      return spacecraft;
    },
    setSpacecraft: function(newSpacecraft) {
      spacecraft.push(newSpacecraft);
    }
  };
})();

Solarsystem.setVisitedPlanets(1);
Solarsystem.setSpacecraft("Yep");
console.log(Solarsystem);
console.log(Solarsystem.getPlanetArray());
console.log(Solarsystem.getSpacecraft());
console.log(Solarsystem.getVisitedPlanets())
/* 
  Now, code that uses this module can call methods, and access
  properties that are in the public interface, but cannot change
  any private variables.
*/
// Sedan.setColor("green");  // this works

/*
 This adds the property to the public interface, but the 
 existing, internal type property remains unchanged.
*/
// Sedan.type = "minivan"; 
// console.log(Sedan.getType());