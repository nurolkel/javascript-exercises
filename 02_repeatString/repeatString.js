const repeatString = function(word,count) {

    if (count < 0) {
        return "ERROR"
    }

    let phrase = word.repeat(count)
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
