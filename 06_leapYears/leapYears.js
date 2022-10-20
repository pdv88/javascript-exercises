const leapYears = function(year) {
    checkLeap = year / 4
    checkCentury = year / 100
    checkSpecial = year / 400
    if (Number.isInteger(checkLeap) == true && Number.isInteger(checkCentury) == false) {
        return true
    } else if (Number.isInteger(checkSpecial) == true) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
