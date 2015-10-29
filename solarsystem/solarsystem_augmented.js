// Break now for a class exercise. Have students create a new JS file for the solar system application that augments the SolarSystem module they created in the initial JS file.

// Getter for an array of closest 5 stars to the Sun.
// Getter/setter for the estimated age of the solar system in earth years.
// Getter/setter for array of known dwarf planets.



var Solarsystem = (function(solarsystem) {
  var closest_stars = ["Centauri", "Rigil", "Barnard's", "Wolf 359", "Luytne 726-8A"];
  var solarsystem_age = 4.6;
  var dwarf_planets = ["Ceres", "Pluto", "Haumea"]

  
  solarsystem.getClosestStars = function () {
    return closest_stars;
  };

  solarsystem.getSolarsystemAge = function () {
    return solarsystem_age;
  };

  solarsystem.setSolarsystemAge = function (age) {
    if (age >= solarsystem_age) {
      solarsystem_age = age;
      this.last_modified = Date.now();
  } else {
    throw "Age cannot be less than " + solarsystem_age;
  }
  };

  solarsystem.getDwarfPlanets = function () {
    return dwarf_planets;
  }

  solarsystem.setDwarfPlanets = function (dwarf) {
    dwarf_planets.push(dwarf);
    this.last_modified = Date.now();
  }
  return solarsystem;

})(Solarsystem);

console.log(Solarsystem);
console.log(Solarsystem.setSolarsystemAge(4.7));