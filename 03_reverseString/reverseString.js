const reverseString = function(str) {
    const splitString = [...str]
    splitString.reverse();
    
    const phrase = splitString.join('')
    
    return phrase
};

// Do not edit below this line
module.exports = reverseString;
