const removeFromArray = function (arr, ...args) {
  for (let arg of args) {
      arr = arr.filter(x => x !== arg)
  }
  return arr
};
// Do not edit below this line
module.exports = removeFromArray;
