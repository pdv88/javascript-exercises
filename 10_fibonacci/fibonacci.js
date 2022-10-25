const fibonacci = function(fibNum) {
    Number(fibNum)
    let a = 0, b = 1, c = fibNum    
    for (i = 2; i <= fibNum; i++){
        c = a + b
        a = b
        b = c
    }
    if (fibNum < 0){
        return "OOPS"
    } else if (fibNum == 1){
        return 1
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
