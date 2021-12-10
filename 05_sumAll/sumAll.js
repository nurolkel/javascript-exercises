const sumAll = function(num, args) {
    if (typeof args !== 'number') {
        return 'ERROR'
    } 
    
    if (num < 0 || args < 0) {
        return 'ERROR'
    }


    let sum = 0;
    
    if (num < args) {
        for (let i = num; i <= args; i++) {
            sum += i
        }
    } else if (num > args) {
        for (let i = args; i <= num; i++ ) {
            sum += i;
        }
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
