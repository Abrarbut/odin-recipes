function add7 (num) {
    return num + 7;
}
// alert(add7(10));
function multiply (num1, num2) {

    return num1 * num2;
}
// alert(multiply(3, 2));

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
// alert(capitalize("heLLLlo"));

function lastLetter(str) {
    return str[str.length - 1];
}   
// alert(lastLetter("hello"));
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {   
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// try {
//   let a = undefinedVariable;
// } catch (e) {
//   console.log(e instanceof ReferenceError); // true
//   console.log(e.message); // "undefinedVariable is not defined"
//   console.log(e.name); // "ReferenceError"
//   console.log(e.stack); // Stack of the error
// }
// try {
//   throw new ReferenceError("Hello");
// } catch (e) {
//   console.log(e instanceof ReferenceError); // true
//   console.log(e.message); // "Hello"
//   console.log(e.name); // "ReferenceError"
//   console.log(e.stack); // Stack of the error
// }
// camelize("background-color") == 'backgroundColor';
// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }   
// // alert(camelize("background-color"));'
// let answer = parseString(prompt("Please enter a string to check if it is a palindrome: "));

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}



alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)