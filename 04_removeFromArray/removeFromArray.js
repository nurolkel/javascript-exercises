const removeFromArray = function(a, ...args) {
    let list = a

    for (let item of list ) {
        for (let piece of args) {
            if (item === piece) {
                list = list.filter(b => b !== piece )
            } 
        }
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
