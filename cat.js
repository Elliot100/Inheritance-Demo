var Animal = require("./animal.js");

const Cat = function (name) {
  Animal.call(this,name);
};

var Surrogate = function () {};
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log(`meow, I am ${this.name}`);
};

module.exports = Cat;
