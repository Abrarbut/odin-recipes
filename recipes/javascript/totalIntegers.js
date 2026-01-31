function totalIntegers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            count++;
        }
    }
    return count;
}
module.exports = totalIntegers;