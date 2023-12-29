const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum,item) => sum + item, 0)
};

const multiply = function(array) {
  return array.reduce((product,item) => product * item)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let product = 1;
  for (i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
