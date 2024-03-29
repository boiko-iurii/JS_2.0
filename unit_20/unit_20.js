
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
    document.querySelector('.out-1').textContent = e.key;
    return e.key;
}
document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').textContent = e.code;
    return e.code;
}
document.querySelector('.i-2').onkeydown = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3(e) {
    let out;
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        out = true;
    }
    else if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
        out = false;
    }
    document.querySelector('.out-3').textContent = out;
}
document.querySelector('.i-3').onkeydown = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        document.querySelector('.out-4').textContent += e.key.toLowerCase();
    }
}
document.querySelector('.i-4').onkeydown = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        document.querySelector('.out-5').textContent += e.key.toUpperCase();
    }
}
document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(elem, event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        elem.value += event.key.toLowerCase();
    }
}
document.querySelector('.i-6').onkeydown = function (e) {
    t6(this, e);
    return false;
}

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7(e) {
    const a7 = ['A', 'q', 'w', 'E', 'r', 't', 'Y'];
    let random = Math.floor(Math.random() * Math.floor(a7.length));

    document.querySelector('.out-7').textContent = a7[random];

}
document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {

    let a = {
        i: 1,
        o: '0',
        l: 7
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (a[e.key])
            document.querySelector('.out-8').textContent += a[e.key];
        else
            document.querySelector('.out-8').textContent += e.key;
    }


}
document.querySelector('.i-8').onkeydown = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let counter = 0;

function t9(e) {
    if (e.code == 'ArrowDown') {
        counter++;
    }
    document.querySelector('.out-9').textContent = counter;
}
document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(e) {
    let img = document.querySelector('img');
    let imgWidth = img.offsetWidth;
    let imgHeight = img.offsetHeight;

    if (e.code == 'ArrowLeft' || e.code == 'ArrowRight') {
        imgWidth++;
        img.style.width = imgWidth + 'px';
    }
    else if (e.code == 'ArrowDown' || e.code == 'ArrowUp') {
        imgHeight++;
        img.style.height = imgHeight + 'px';
    }

}
document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

counter = 0;
let keys = document.querySelectorAll('[data-code]');

function t11_onkeydown(e) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].getAttribute('data-code') === e.code) {
            keys[i].classList.add('press');
            if (e.code === 'Tab' || e.code === 'AltLeft' || e.code === 'AltRight')
                return false;
            else if (e.code === 'CapsLock')
                counter++;
        }
    }
}

function t11_onkeyup(e) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].getAttribute('data-code') == e.code) {
            keys[i].classList.remove('press');
            if (e.code === 'CapsLock') {
                if (counter % 2 != 0)
                    keys[i].classList.add('press');
            }
        }
    }
}

document.querySelector('.i-11').onkeydown = t11_onkeydown;
document.querySelector('.i-11').onkeyup = t11_onkeyup;
