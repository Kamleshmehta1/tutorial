const memoizeCalc = (n) => {
    let blank = [];
    if (blank[n] == !undefined) {
        return blank[n];
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result++;
        }
    }
    blank[n] = result;
    return result;
}

console.log(memoizeCalc(10000));
console.log(memoizeCalc(10000));
console.log(memoizeCalc(10000));
console.log(memoizeCalc(10000));
console.log(memoizeCalc(10000));


