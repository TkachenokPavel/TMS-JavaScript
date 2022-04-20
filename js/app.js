"use strict";

//------------Task 1 

// const car = {
//     auto: 'Audi',
//     color: 'Black',
//     year: 2015,
// };

// delete car.auto;
// delete car.color;

// console.log(car);

//------------Task 2

// const person = {
//     name: 'Vlad',
//     age: 26,
// };

// console.log('age' in person);

//------------Task 3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// };

// for (let key in student){
//     console.log(`Свойство '${key}' имеет значение ${student[key]}`);
// }

//------------Task 4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(colors['ru pum pu ru rum']['red'], colors['ru pum pu ru rum'].blue);

//------------Task 5

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// };

// let sum = 0;
// let numberEmployee = 0;

// for (let key in salaries) {
//     sum += salaries[key];
//     numberEmployee++
// }

// let averageSalary = sum / numberEmployee;

// console.log(averageSalary);


// ------------Task 6

// const user = {
//     requestLogin(){
//         this.login = prompt('Создайте логин.', '');
//     },
//     requestPassword(){
//         this.password = prompt('Создайте пароль.', '');
//     }
// };

// user.requestLogin();
// user.requestPassword();

// let verification = () => {
//     let login = prompt('Логин:','');
//     let password = prompt('Пароль:','');

//     while (login === '' || password === '') {
//         login = prompt('Логин:','');
//         password = prompt('Пароль:','');
//     }

//     if(login === null || password ===null) {
//         alert('Ввод отменен!');
//     } else if (login === user.login && password === user.password) {
//         alert(`Добро пожаловать, ${user.login}`);
//     } else {
//         alert('Логин или пароль неверны!');
//     }
// };

// verification();


// ADVANCED level

// -------------Task 1 

// let conversionScore = score => {
//     const  stringScore = {
//         0: 'Ноль',
//         1: 'Один',
//         2: 'Два',
//         3: 'Три',
//         4: 'Четыре',
//         5: 'Пять',
//         6: 'Шесть',
//         7: 'Семь',
//         8: 'Восемь',
//         9: 'Девять',
//     };

//     const newScoreArr = score.split(':').map(goal => stringScore[goal]);
//     return newScoreArr.join(':');
// };

// console.log(conversionScore('8:2'));

// -------------Task 2

// let student1 = {
//     name: 'Polina',
//     age: 27,
// };

// let student2 = {
//     name: 'Polina',
//     age: 27,
// };

// // Variant 1
// console.log(JSON.stringify(student1) === JSON.stringify(student2));

// // Variant 2

// function compareObjects(obj1, obj2) {
//     let firstObject = Object.getOwnPropertyNames(obj1);
//     let secondObject = Object.getOwnPropertyNames(obj2);

//     if(firstObject.length !== secondObject.length){
//         return false;
//     }

//     for (let i = 0; i < firstObject.length; i++) {
//         const prop = firstObject[i];

//         if (obj1[prop] !== obj2[prop]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(compareObjects(student1, student2));


// -------------Task 3

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
// };

// console.log(animals.bird?.name);