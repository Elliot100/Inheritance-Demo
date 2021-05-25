/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./animal.js":
/*!*******************!*\
  !*** ./animal.js ***!
  \*******************/
/***/ ((module) => {

eval("function Animal(name) {\n    this.name = name;\n}\n\nAnimal.prototype.eat = function() {\n    console.log(\"mmmm, food...\");\n};\n\nmodule.exports = Animal;\n\n//# sourceURL=webpack:///./animal.js?");

/***/ }),

/***/ "./cat.js":
/*!****************!*\
  !*** ./cat.js ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Animal = __webpack_require__(/*! ./animal.js */ \"./animal.js\");\nvar inherit = __webpack_require__(/*! ./inherit.js */ \"./inherit.js\");\n\nfunction Cat(name) {\n  Animal.call(this, name);\n}\n\ninherit(Animal, Cat);\n\nCat.prototype.meow = function () {\n  console.log(`meow, I am ${this.name}`);\n};\n\nmodule.exports = Cat;\n\n\n//# sourceURL=webpack:///./cat.js?");

/***/ }),

/***/ "./dog.js":
/*!****************!*\
  !*** ./dog.js ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Animal = __webpack_require__(/*! ./animal.js */ \"./animal.js\");\nvar inherit = __webpack_require__(/*! ./inherit.js */ \"./inherit.js\");\n\nfunction Dog(name) {\n  Animal.call(this, name);\n}\n\ninherit(Animal, Dog);\n\nDog.prototype.woof = function () {\n  console.log(`woof, I am ${this.name}`);\n};\n\nmodule.exports = Dog;\n\n\n//# sourceURL=webpack:///./dog.js?");

/***/ }),

/***/ "./inherit.js":
/*!********************!*\
  !*** ./inherit.js ***!
  \********************/
/***/ ((module) => {

eval("const inherit = function(parent, child) {\n    var Surrogate = function () {};\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n};\n\nmodule.exports = inherit;\n\n//# sourceURL=webpack:///./inherit.js?");

/***/ }),

/***/ "./root.js":
/*!*****************!*\
  !*** ./root.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Dog = __webpack_require__(/*! ./dog.js */ \"./dog.js\"),\n    Cat = __webpack_require__(/*! ./cat.js */ \"./cat.js\");\n\n\n// window.Dog = Dog;\n// window.Cat = Cat;\n\nvar d = new Dog(\"maria\");\nd.woof();\n\nvar c = new Cat(\"sarah\");\nc.meow();\n\n//# sourceURL=webpack:///./root.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./root.js");
/******/ 	
/******/ })()
;