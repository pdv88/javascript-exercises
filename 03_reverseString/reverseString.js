const reverseString = function(string) {
    splitStr = string.split("")
    console.log(splitStr)
    
    reverseStr = splitStr.reverse()
    console.log(reverseStr)
    
    joinStr = reverseStr.join("")
    console.log(joinStr)
    
    return joinStr
};


// Do not edit below this line
module.exports = reverseString;
