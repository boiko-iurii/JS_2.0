// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.

let c = 7;
let d = 9;
console.log(c / d);

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.

let e = 3;
let f = 5;
console.log(e + f);

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
document.querySelector('.p-4').innerText = e1 + f1;
//Происходит склеивание двух элементов в строку.


// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
document.querySelector('.p-5').innerText = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
document.querySelector('.p-6').innerText = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
document.querySelector('.p-7').innerText = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

document.querySelector('.res-8').onclick = () => {

    console.log(document.querySelector('#i-8').value);

};


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

document.querySelector('.res-9').onclick = () => {

    let input9 = document.querySelector('#i-9').value;

    document.querySelector('.p-9').innerText = input9;

    input9 = '';

};

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

document.querySelector('.res-10').onclick = () => {

    let input10 = document.querySelector('#i-10').value;

    document.querySelector('.p-10').innerText = +input10 * 10;

};

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.

document.querySelector('.res-11').onclick = () => {

    let input10 = document.querySelector('#i-11').value;

    document.querySelector('.p-11').innerText = +input10 + 10;

};

// Task 12.
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

document.querySelector('.res-12').onclick = () => {

    let name = document.querySelector('#name-12').value;
    let surname = document.querySelector('#surname-12').value;

    console.log(`Hello, ${name} ${surname}.`);

};

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.

document.querySelector('.res-13').onclick = () => {

    let first = document.querySelector('#first-13').value;
    let second = document.querySelector('#second-13').value;

    document.querySelector('.p-13').innerText = +first + +second;

};

// Task 14.
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('#i-14').value = 'Hello';

// Task 15.
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('#i-15');
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.

let f16 = document.querySelector('#first-16');
let s16 = document.querySelector('#second-16');

f16.oninput = function () {

    let res16 = +f16.value + +s16.value;

    document.querySelector('.p-16').innerText = res16;

}

s16.oninput = function () {

    let res16 = +f16.value + +s16.value;

    document.querySelector('.p-16').innerText = res16;

}

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль.
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

document.querySelector('.res-17').onclick = function () {

    let t = document.querySelector('#i-17').value;

    t = parseInt(t);
    console.log(t);

};

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль.
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

document.querySelector('.res-18').onclick = function () {

    let t = document.querySelector('#i-18').value;
    t = parseFloat(t);
    console.log(t);

};

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем?
// Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

document.querySelector('.res-19').onclick = function () {

    let f19 = document.querySelector('#first-19').value;
    let s19 = document.querySelector('#second-19').value;

    document.querySelector('.p-19').innerText = parseInt(f19) + parseInt(s19);

}

// Task 20.
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение
// 'Уважаемый Иван Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

document.querySelector('.res-20').onclick = function () {

    let name = document.querySelector('#name-20').value;
    let surname = document.querySelector('#surname-20').value;
    let age = document.querySelector('#age-20').value;
    let occupation = document.querySelector('#occupation-20').value;

    document.querySelector('.p-20').innerText = `Уважаемый ${name} ${surname}, ваш возраст ${age} года, по професси вы ${occupation}.`;

}