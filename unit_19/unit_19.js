
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1(elem, out) {
    out.textContent = elem.textContent;
    return elem.textContent;
}
document.querySelector('.div-1').onclick = function () {
    let out = document.querySelector('.out-1');
    t1(this, out);
}

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event, elem, out) {
    out.textContent = event.altKey;
    return event.altKey;
}
document.querySelector('.div-2').onclick = function (event) {
    let out = document.querySelector('.out-2');
    t2(event, this, out);
}


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3(elem, out) {
    w3 += 5;
    elem.style.width = w3 + 'px';
    out.textContent = w3;
}
document.querySelector('.div-3').onclick = function () {
    let out = document.querySelector('.out-3');
    t3(this, out);
}

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4(elem, out) {
    t1(elem, out);
}
document.querySelector('.div-4').ondblclick = function () {
    let out = document.querySelector('.out-4');
    t4(this, out);
}
// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5(elem, elemClass) {
    elem.classList.toggle(elemClass);
}
document.querySelector('.div-5').ondblclick = function () {
    t5(this, 'active');
}
// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6(elem, elemClass) {
    t5(elem, elemClass);
}

document.querySelector('.div-6').ondblclick = function () {
    let ul = document.querySelector('.ul-6');
    t6(ul, 'hide');
}

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7(elem, elemClass) {
    t5(elem, elemClass);
}
document.querySelector('.div-7').oncontextmenu = function () {
    t7(this, 'active');
    return false;
}

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8(elem) {
    if (elem.checked)
        document.documentElement.oncontextmenu = () => false;
    else
        document.documentElement.oncontextmenu = () => true;
}

document.querySelector('.ch-8').onchange = function () {
    t8(this);
}

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9(elem, src) {
    elem.querySelector('img').setAttribute('src', src);
}

document.querySelector('.div-9').oncontextmenu = function () {
    t9(this, 'img/2.png');
    return false;
}


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10(elem, src) {
    t9(elem, src);
}

document.querySelector('.div-10').onmouseenter = function () {
    t10(this, 'img/2.png');
}

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11(elem, src) {
    t9(elem, src);
}

document.querySelector('.div-11').onmouseenter = function () {
    t11(this, 'img/2.png');
}
document.querySelector('.div-11').onmouseleave = function () {
    t11(this, 'img/1.png');
}

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let addClass = (elem, elemClass) => {
    elem.classList.add(elemClass);
}
document.querySelector('.div-12').onmousedown = function () {
    addClass(this, 'active');
}

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let f13 = (elem, elemClass) => {
    addClass(elem, elemClass);
}

let f13_1 = (elem, elemClass) => {
    elem.classList.remove(elemClass);
}
document.querySelector('.div-13').onmousedown = function () {
    f13(this, 'active');
}
document.querySelector('.div-13').onmouseup = function () {
    f13_1(this, 'active');
}

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').onclick = function () {
        addClass(this, 'active');
    }
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15(elem) {
    elem.textContent++;
}
document.querySelector('.div-15').onmousemove = function () {
    t15(this);
}

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16(elem) {
    let width = elem.offsetWidth;
    width++;
    elem.style.width = width + 'px';
}

let div16 = document.querySelector('.div-16');

div16.onmousemove = function () {
    t16(this);
}

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    div16.onmousemove = function () {
        t16(this);
    }
}
function t17Off() {
    div16.onmousemove = function () {
        div16.style.width = div16.offsetWidth + 'px';
    }
}

document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18(elem) {
    elem.textContent = elem.offsetWidth + 'px';
}
document.querySelector('.div-18').onmouseenter = function () {
    t18(this)
}

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19(elem) {
    elem.textContent = elem.classList;
}
document.querySelector('.div-19').onmouseout = function () {
    t19(this)
}

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20(elem) {
    elem.value++;
}
document.querySelector('progress').onmousemove = function () {
    t20(this)
}