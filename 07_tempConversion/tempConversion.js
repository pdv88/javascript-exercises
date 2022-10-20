const ftoc = function(num) {
  temp = (num - 32)/1.8
  roundTemp = temp.toFixed(1)
  return parseFloat(roundTemp)
};

const ctof = function(num) {
  temp = (num * 1.8) + 32
  roundTemp = temp.toFixed(1)
  return parseFloat(roundTemp)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
