"use strict";

// NORMAL level

// -----------Task 1 💻

// let getSum = maxNumber => {
//     let sum = 0;

//     for (let i = 0; i <= maxNumber; i++) {
//         sum += i;
//     }

//     return sum;
// };


// -----------Task 2

// let calcPercent = sumCredit => {
//     let percentInYear = 17,
//         percentInMonth = percentInYear / 100 / 12,
//         termCreditInYears = 5,
//         termCreditInMonths = termCreditInYears * 12;
    
//     let monthlyPay = sumCredit * (percentInMonth * (1 + percentInMonth) ** termCreditInMonths) / (((1 + percentInMonth) ** termCreditInMonths) - 1);
//     let overpayment = termCreditInMonths * monthlyPay - sumCredit;
//     return overpayment;
// };


// -----------Task 3

// let trimString = (str, from, to) => {
//     let finalString = str.slice(from, to);
//     return finalString;
// };


// -----------Task 4

// let getSumNumbers = number => {
//     let numberArr = String(number).split('');
//     let sumNumbers = 0;

//     for (let i = 0; i < numberArr.length; i++) {
//         sumNumbers += +numberArr[i];
//     }

//     return sumNumbers;
// };


// -----------Task 5

// let getSum = (a, b) => {
//     if (!Number.isInteger(a) || !Number.isInteger(b) || a === b) {
//         return 'False, try again';
//     }

//     let result = 0;

//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//         result += i;
//     }

//     return result;
// };


// -----------Task 6
// let foo = () => console.log('foo');
// let boo = () => console.log('boo');


// let fooboo = (isTrue, f1, f2) => {
//     if (isTrue) {
//         return f1();
//     } else {
//         return f2();
//     }
// };

// fooboo(0, foo, boo);


// ### ADVANCED level

// -----------Task 1 

// let isTriangle = (a, b, c) => {
//     return a < (b + c) && b < (a + c) && c < (b + a);
// };


// -----------Task 2

// let getChocolateSquare = (n, m) => {
//     return !n || !m || n <= 0 || m <= 0 ? false : (n -1) + n * (m -1);
// };