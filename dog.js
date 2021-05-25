var Animal = require("./animal.js");

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.woof = function () {
  console.log(`woof, I am ${this.name}`);
};

module.exports = Dog;
