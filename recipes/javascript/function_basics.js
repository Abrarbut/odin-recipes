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
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

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
