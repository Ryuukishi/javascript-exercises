const sumAll = function (num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > -1 && num2 > -1) {
    let sum = 0;
    if (num1 < num2) {
        while (num1 <= num2) {
            sum += num1;
            num1++;
          }      
    } else {
        while (num2 <= num1) {
            sum += num2;
            num2++;
          }      
    }
    return sum;
  } else {
    return "ERROR";
  }
};
sumAll(1, 4000);
// Do not edit below this line
module.exports = sumAll;
