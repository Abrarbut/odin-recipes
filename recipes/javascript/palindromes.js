function palindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!/[A-Za-z]/.test(arr[left])) {
            left++;
            continue;
        }

        if (!/[A-Za-z]/.test(arr[right])) {
            right--;
            continue;
        }

        if (arr[left].toLowerCase() !== arr[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

module.exports = palindrome;