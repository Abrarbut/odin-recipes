function sumall (num1, num2) {
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (num1 !== Math.floor(num1) || num2 !== Math.floor(num2)) return 'ERROR';
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
    if (Array.isArray(num1) || Array.isArray(num2)) return 'ERROR';
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
module.exports = sumall;