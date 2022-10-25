const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	let total = 0
  for (let num of arr){
    total += num
  }
  return total
};

const multiply = function(arr) {
  let total = 1
  for (let num of arr){
    total *= num
  }
  return total
};

const power = function(a, b) {
  let total = 1
  for (let i = 0; i < b; i++){
    total = total * a
  }
  return total
};

const factorial = function(num) {
	let total = 1
  for(let i = num; i > 0; i--){
    total = total * i
  }
  return total
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

