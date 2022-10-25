const palindromes = function (string) {
    lowerStr = string.toLowerCase()
    noSpaceStr = lowerStr.replace(/\s+/g, '')
    noSymStr = noSpaceStr.replace(/[^a-zA-Z ]/g, "") 
    splitStr = noSymStr.split("")
    reverseStr = splitStr.reverse()
    joinStr = reverseStr.join("")

    if(noSymStr === joinStr){
        return true 
    } else {
        return false
    }
};



// Do not edit below this line
module.exports = palindromes;
