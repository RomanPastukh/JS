// -створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const square =(a, b) => a * b;
// console.log(square(10, 10));
//

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const squareCircle = (r) => Math.PI * Math.pow(r, 2);
// console.log(squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cylinder =(r,h) => Math.PI * Math.pow(r,2) *h;
// console.log(cylinder(5, 2));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr =[1,2,3];
// function foo(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// foo(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo(text) {
//     document.write(`<p>${text}</p>`);
// }
// foo ( 'hello');
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//
//
//
// </ul>
//
//     `)
// }
// foo('hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function  foo(text,num) {
//     document.write(`<ul>`)
//     for (let i =0; i < num; i++)
//         document.write(`<li>${text}</li>`)
// }
// document.write(`</ul>`)
// foo('hello',10);
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr =[1,2,true,'str'];
// const elen = function (array) {
// document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item} </li>`);
//     }
// document.write(`</ul>`)
// }
// elen(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const  arr =[
//     {
//         name:'Vasya',
//         age:22
//     },
//     {
//         name: 'Petya',
//         age:36
//     }
// ]
// const users = function ( array) {
//     for (const user of array) {
//         document.write(`${user.name} -- ${user.age}`)
//     }
// }
// users(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr =[ 1,2,3,4,55,66,-1];
// function  foo (array) {
// let min =array[0];
//     for (const item of array) {
//         if( item <min) {
//             min =item;
//         }

    // }
    // return min;

// }
// let foo1 = foo(arr);
// console.log(foo1);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let arr =[1,2,3];
// function  foo (array) {
//     let sum =0
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;

// }

// console.log(foo(arr));