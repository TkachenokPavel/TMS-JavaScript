"use strict";

// ---------Task 1 

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);


// ---------Task 2

// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals[animals.length - 1]);


// ---------Task 3

// const numbers = [5, 43, 63, 23, 90];

//var1
// numbers.splice(0);
// console.log(numbers);

//var2
// for (let i = numbers.length; i > 0; i--) {
//     numbers.pop();
// }
// console.log(numbers);

//var3
// numbers.length = 0;
// console.log(numbers);


// ---------Task 4

// const students = ['Polina', 'Dasha', 'Masha'];

// students.splice(0, 1, 'Andrey');
// students.splice(students.length - 1, 1, 'Borya');
// console.log(students);

// ---------Task 5

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// for (let value of cats) {
//     console.log(value);
// }

// ---------Task 6

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// let totalNumbers = evenNumbers.concat(oddNumbers);
// console.log(totalNumbers.indexOf(8));

// ---------Task 7

// const binary = [0, 0, 0, 0];

// const binaryFull = binary.join('1');


//--------ADVANCED level

//--------Task 1

// let polindrom = str => {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? true : false;
// };


//--------Task 2

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ];

// let totalSum = 0;
// let totalLength = 0;

// for (let i of matrix) {
//     totalSum += i.reduce((sum, item) => sum + item, 0);
//     totalLength += i.length;
// }

// console.log(totalSum / totalLength);


//--------Task 3

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// const negativeArr = mixedNumbers.filter(item => item < 0).sort((a, b) => a-b);
// const positiveArr = mixedNumbers.filter(item => item >= 0).sort((a, b) => a-b);

// console.log(negativeArr, positiveArr);


//--------Task 4

// const randomArr = [];

// for (let i = 0; i < 5; i++){
//     randomArr.push(Math.round(Math.random() * 100));
// }

// const randomArrCubing = randomArr.map(item => item ** 3);

// console.log(randomArr, randomArrCubing);