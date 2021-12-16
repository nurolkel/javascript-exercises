const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS'
    }
  /*  let series = Array.from({length : Number(num)}).reduce((acc,val,i) => {
        acc.concat(i > 1 ? acc[i -1] + acc[i - 2] : i)
    }, [])
    console.log(series)
    console.log(series[num])
    return series[num] */
    return num < 1 ? 0
        : num <= 2 ? 1
        : fibonacci(num - 1) + fibonacci(num - 2)
};

// Do not edit below this line
module.exports = fibonacci;
