var Animal = require("./animal.js");

function Cat(name) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log(`meow, I am ${this.name}`);
};

module.exports = Cat;
