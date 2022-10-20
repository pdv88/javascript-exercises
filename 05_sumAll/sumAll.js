const sumAll = function(arg1, arg2) {
    let fullArr = []
    let total = 0
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    if (typeof arg1 != "number" || typeof arg2 != "number") {
        return "ERROR"
    } else if (arg1 < 0 || arg2 < 0) {
        return "ERROR"
    }else if (arg1 > arg2) {
        for (let i = arg2; i <= arg1; i++){
            fullArr.push(i)
        }
    } else if (arg1 < arg2) {
        for (let i = arg1; i <= arg2; i++){
            fullArr.push(i)
        }
    } 
    total = fullArr.reduce(reducer)
    return total
};

// Do not edit below this line
module.exports = sumAll;
