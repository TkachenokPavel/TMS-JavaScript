"use strict";

// Homework - 16

// *********Task 1**********

// let a = 'true';
// let b = false;
// let c = 17;
// let d;
// let e = null;

// let dataTypes = `${typeof(a)} ${typeof(b)} ${typeof(c)} ${typeof(d)} ${typeof(e)} `;

// console.log(dataTypes);


// *********Task 2**********

// let height = 15;
// let width = 20;

// if (height > width) {
//     console.log(height);
// } else {
//     console.log(width);
// }


// *********Task 3**********

// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// *********Task 4**********

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// let shouldGoToWork = `key: ${key}, documents: ${documents}, pen: ${pen}, fruits: ${apple || orange || 'Забыл перекус!'}`;

// console.log(shouldGoToWork);

// *********Task 5**********

// let num = +prompt('Введите число до 50');

// if (num % 3 === 0 && num % 5 === 0) {
//     alert('FizBuz');
// } else if (num % 3 === 0) {
//     alert('Buz');
// } else if (num % 5 === 0) {
//     alert('Fiz');
// } else {
//     alert(num);
// }

// *********Task 6**********

// let age = +prompt('Сколько Вам лет?');

// if (age > 18) {
//     alert(`Попей пивка`);
// } else if(age < 16) {
//     alert(`Пей колу`);
// } else {
//     alert(`Можешь выкурить сигаретку, только маме не говори`);
// }

// *********Task 7**********

// let sideWorld = prompt('В какую сторону света Вы хотели бы отправиться?');

// switch(sideWorld) {
//     case `юг`: 
//         console.log('На юг пойдешь счастье найдешь');
//         break;
//     case `север`:
//         console.log('На север пойдешь много денег найдешь');
//         break;
//     case `запад`:
//         console.log('На запад пойдешь верного друга найдешь');
//         break;
//     case `восток`:
//         console.log('На восток пойдешь разработчиком станешь');
//         break;
//     default:
//         console.log('Попробуйте еще раз');
//         break;
// }


// ### ADVANCED level

// #### Task 1 

//*****VAR 1 */


// function string() {
//     let userName = prompt('Как вас зовут?').toLowerCase();
//     let arrUserName = userName.split(' ');
//     let correctUserName = '';
  
//     for (let i = 0; i < arrUserName.length; i++) {
//       let name = arrUserName[i];
//       let firstLetter = name.substring(0, 1).toUpperCase();
//       let leftovers = name.substring(1, name.length);
//       correctUserName += firstLetter + leftovers + ' ';
//     }
  
//     console.log(`Привет, ${correctUserName}!`);
// }

// string();

//*****VAR 2 */

// let userName = prompt('Как Вас зовут?').toLowerCase();
// let arrUserName = userName.split(' ');

// for (let i = 0; i < arrUserName.length; i++) {
//     arrUserName[i] = arrUserName[i][0].toUpperCase() + arrUserName.slice(1);
// }

// let correctUserName = arrUserName.join(' ');

// alert(`Привет, ${correctUserName}!`);


// #### Task 2 

    // let firstNumber = +prompt('Назовите число');
    // let subNumber = +prompt('Сколько отнять от предыдущего?');
    // let addNumber = +prompt('Сколько прибавить к предыдущему действию?');
    // let multiplyNumber = +prompt('На сколько умножить результат?');
    // let divideNumber = +prompt('На сколько разделать результат?');

    // let result = ((firstNumber - subNumber) + addNumber) * multiplyNumber / divideNumber;
    // alert(result);

// #### Task 3

// let stair = '';
// for (let i = 0; stair.length < 5; i++) {
//     stair += '#';
//     console.log(stair);
// }

