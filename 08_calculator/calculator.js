const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(numList) {
  const sumValue = numList.reduce((total, num) => {
    return total + num
  },0)

  return sumValue
};

const multiply = function(a) {
  const multipliedValue = a.reduce((total,num) => {
    return total * num
  },1)

  return multipliedValue
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1
  }
  for (let i = num - 1; i >= 1; i--) {
    num = num * i
  }

  return num

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
