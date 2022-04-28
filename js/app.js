"use strict";

// //           Task 1 

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function fibo(arr) {
    arr.forEach(number => console.log(number));
}
console.log(fibo(fibonacci));

const fiboArr = arr => arr.forEach(elem => console.log(elem));
console.log(fiboArr(fibonacci));


// //            Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

function usersStr(arr) {
    return arr.map((name, index) => `member ${++index}: ${name}`);
}
console.log(usersStr(users));

const usersStrArrowFun = arr => {
    return arr.map((name, index) => `member ${++index}: ${name}`);
};
console.log(usersStrArrowFun(users));



// //            Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

function positiveArr(arr) {
    let newNumbers = arr.filter(elem => elem >= 0);
    return newNumbers;
}
console.log(positiveArr(numbers));

const newNumbers = arr => arr.filter(elem => elem >= 0);
console.log(newNumbers(numbers));


// //            Task 4

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function calcSum(arr) {
    const sumFibo = arr.reduce((sum, item) => sum + item, 0);
    return sumFibo;
}
console.log(calcSum(fibonacci));

const calcFibo = arr => arr.reduce((sum, item) => sum + item, 0);
console.log(calcFibo(fibonacci));

// //            Task 5

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

function findEven(arr) {
    const evenNumber = arr.find(elem => elem % 2 === 0);
    return evenNumber;
}
console.log(findEven(numbers));

const findFirstEven = arr => arr.find(elem => elem % 2 === 0);
console.log(findFirstEven(numbers));


// //         ADVANCED level
// //        Task 1

function Student(salary, rate, name) {
    this.name = name;
    this.rate = rate;
    this.salary = salary;

    this.calcCredit = function(){
        switch (this.rate) {
            case 'A':
                return this.salary * 12;
                break;
            case 'B':
                return this.salary * 9;
                break;
            case 'C':
                return this.salary * 6;
                break;
            case 'D':
                return 0;
                break;
            default:
                break;
        }
    };
}

const student1 = new Student(300, 'B', 'Pavel');
const student2 = new Student(400, 'C', 'Olya');
const student3 = new Student(150, 'A', 'Alex');
const student4 = new Student(200, 'A', 'Igor');
const student5 = new Student(250, 'D', 'Sergey');

const studentArr = [student1, student2, student3, student4, student5];

const calcTotalCredit = arr => {
    let totalCredit = arr.reduce((sum, item) => sum + item.calcCredit(), 0);
    return totalCredit;
};
console.log(calcTotalCredit(studentArr));


// //           Task 2

const deleteVowels = str => {
    return str.replace(/[aeiouAEIOU]/g, '');
};
console.log(deleteVowels('This website is for losers LOL!'));


//           Task 3

const accum = str => {
    let strArr = str.split('').map((item, index) => {
        return item.repeat(index + 1);
    });

    let newStrArr = strArr.map(item => {
        return item = item[0].toUpperCase() + item.slice(1);
    });

    return newStrArr.join('-');
};

console.log(accum("RqaEzty"));

// //           Task 4

const highAndLow = str => {
    let arr = str.split(' ').sort((a, b) => a - b);
    return `${arr[arr.length - 1]} ${arr[0]}`;
};

console.log(highAndLow("1 2 -3 4 5"));


//           Task 5

const isIsogram = str => {
    let newStr = str.toLowerCase();
    for(let i = 0; i < newStr.length; i++){
        if (newStr.includes(newStr[i], i + 1)) {
            return false;
        }
    }
    return true;
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));


//           Task 6

const calcSymbolsDiff = str => {
    let newStr = str.split('').map(item => item.codePointAt(0));

    let total1 = newStr.reduce((accum, item) => {
        return accum += item;
    }, '').split('');

    let total2 = [];

    for (let i of total1) {
        if(i === '7') {
            total2.push('1');
        } else {
            total2.push(i);
        }
    }

    let sumTotal1 = total1.reduce((accum, item) => accum += +item, 0);
    let sumTotal2 = total2.reduce((accum, item) => accum += +item, 0);

    return sumTotal1 - sumTotal2;
};

console.log(calcSymbolsDiff('CCC'));


//           Task 7
