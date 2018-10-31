"use strict";

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    this.name = name;
  }

  var _proto = Person.prototype;

  _proto.greet = function greet() {
    console.log("Nazdar " + this.name + "!");
  };

  return Person;
}();