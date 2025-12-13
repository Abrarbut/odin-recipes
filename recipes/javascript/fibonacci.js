function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return 1;
    let seq = [1, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq[n - 1];
}
module.exports = fibonacci;