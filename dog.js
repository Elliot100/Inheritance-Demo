// var Animal = require("./animal.js");

function Dog(name) {
    this.name = name;
}

// var Surrogate = function() {};
// Surrogate.prototype = Animal.prototype;
// Dog.prototype =  new Surrogate();
// Dog.prototype.constructor = Dog;

Dog.prototype.woof = function () {
  console.log(`woof, I am ${this.name}`);
};

module.exports = Dog;