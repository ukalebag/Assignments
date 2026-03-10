/*1. if/else Statements:
The if statement is a fundamental conditional statement in JavaScript. It allows you to execute a block of code
if a specified condition is true. Optionally, you can provide an alternative block of code to be executed if the
condition is false using the else statement. */

let temperature: number = 19;
if (temperature > 30) {
console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
console.log("It's pleasant day.");
} else {
console.log("It's a cool day.")
}

// 1. nested if...else statement ==> if...else statement inside another if...else statement.
let percentage: number = 95;

if (percentage >= 85) {
console.log("Grade A");
if (percentage >= 90) {
console.log("Distinction");
console.log("Congratulations! You will get gold medal.");
}else{
console.log("You just missed distinction by " + (90 - percentage) + " marks.");
}
} else if (percentage >= 70) {
console.log("Grade B");
} else if (percentage >= 50) {
console.log("Grade C");
} else {
console.log("Sorry Bro, You are Failed");
}