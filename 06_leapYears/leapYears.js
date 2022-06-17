const leapYears = function (year) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
};
leapYears(1700);
// , 1800, 1900, 2100, 2200, 2300, 2500, 2600
// Do not edit below this line
module.exports = leapYears;
