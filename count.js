var counter = function (arr) {
  return "There are" + arr.length;
};

var adder = function (a, b) {
  return `the sum of ${a + b}`;
};

module.exports.counter = counter;
module.exports.adder = adder;
