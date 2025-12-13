function add (a, b) {
    return a + b;
}
const subtract = function (a, b) {
  return a - b;
}
function sum (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
function multiply (numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}
function power(a, b) {
    return Math.pow(a, b);
}
function factorial(n) {
    if (n == 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
module.exports = { add, subtract, sum, multiply, power, factorial };