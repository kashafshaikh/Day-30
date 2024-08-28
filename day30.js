// Day 30
// *Question 1: Convert Number to Words*
// *Problem:*
// Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, the output should be "Forty-Five".
// *Hint:*
// - Create arrays for single digits (0-9), teens (10-19), and tens (20, 30, ... 90).
// - Handle different cases separately: numbers less than 10, between 10 and 19, and between 20 and 99.
// *Function Signature:*
// typescript
// function numberToWords(num: number): string {
//   // Your code here
// }
function numberToWords(num) {
    var singleDigits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    console.log("Input number:", num);
    if (num < 10) {
        console.log("Case: Single Digit");
        return singleDigits[num];
    }
    else if (num >= 10 && num < 20) {
        console.log("Case: Teens");
        return teens[num - 10];
    }
    else {
        console.log("Case: Tens + Units");
        var tenPlace = Math.floor(num / 10);
        var unitPlace = num % 10;
        console.log("Tens place:", tens[tenPlace]);
        console.log("Units place:", singleDigits[unitPlace]);
        if (unitPlace === 0) {
            return tens[tenPlace];
        }
        else {
            return tens[tenPlace] + "-" + singleDigits[unitPlace];
        }
    }
}
console.log(numberToWords(45)); // Output: Forty-Five
console.log(numberToWords(16)); // Output: Sixteen
console.log(numberToWords(60)); // Output: Sixty
console.log(numberToWords(8)); // Output: Eight
// ---
// *Question 2: Calculate the Sum of the First n Natural Numbers*
// *Problem:*
// Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).
// *Hint:*
// - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n \times (n + 1)}{2}\).
// - Alternatively, implement the sum using a loop that adds each number from 1 to n.
// *Function Signature:*
// typescript
// function sumOfNaturalNumbers(n: number): number {
//   // Your code here
// }
function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers(5)); // Output: 1 + 2 + 3 + 4 + 5 = 15
console.log(sumOfNaturalNumbers(13)); //Output: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 = 91.
// Or we can solve this question with for loop:
function sumOfNaturalnumbers(n) {
    var sum = 0;
    // Adding each number from 1 to n
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Example usage
console.log(sumOfNaturalnumbers(5)); // Output: 15
console.log(sumOfNaturalNumbers(13)); //Output: 91.
