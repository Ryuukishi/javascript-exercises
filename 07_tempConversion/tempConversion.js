 const ftoc = function(temp) {
  // console.log(((temp - 32) *5 / 9).toFixed(1))
  let result =  Number(((temp - 32) *5 / 9).toFixed(1))
  if (String(result).charAt(result.length) == 0) {
    result = Number(result).toFixed(0)
  }
  // console.log(result)
  console.log(typeof(result))

  return result
};

const ctof = function(temp) {
  // console.log(((temp * 9 / 5) + 32).toFixed(1))
  let result = Number(((temp * 9 / 5) + 32).toFixed(1))
  if (String(result).charAt(result.length) == 0) {
    result = Number(result).toFixed(0)
  }
  return result
};

ftoc(32)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
