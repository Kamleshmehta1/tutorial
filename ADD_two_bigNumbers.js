function calcBigNumber(a, b) {
    let carry = 0;
    let sum = ""
    let diff = b.length - a.length

    for (let i = a.length - 1; i >= 0; i--) {
        let tmp = (Number(a.charAt(i)) % 10) + (Number(b.charAt(i + diff)) % 10) + carry;

        if (tmp >= 10) {
            sum = (tmp % 10) + sum;
            carry = Math.floor(tmp / 10)
        } else {
            sum = tmp + sum
            carry = 0
        }
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
}
let a = "2000000000000000000000000000"
let b = "2000000000000000000000000000"

if (a.length >= b.length) {
    console.log(calcBigNumber(a, b));
} else {
    calcBigNumber(b, a)
}
