// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let k = 0;
    let res = '';
    while (k <= 100) {
        res = res + k + ' ';
        k++;
    }
    return res;
}

// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
    let k = a;
    let res = '';
    while (k <= b) {
        res += k + ' ';
        k++;
    }
    return res;
}

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
    let k = b;
    let res = '';
    while (k >= a) {
        res += k + ' ';
        k--;
    }
    return res;
}

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let k = b;
    let res = '';
    while (k >= a) {
        if (k % c == 0) {
            res += k + ' ';
        }
        k--;
    }
    return res;
}

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let sum = 0;
    let k = 0;
    while (k <= 20) {
        sum += k;
        k++;
    }
    return sum;
}

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    if (b > a) {
        let sum = 0;
        let k = a;
        while (k <= b) {
            sum += k;
            k++;
        }
        return sum;
    } else {
        return false;
    }
}

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    if (b > a) {
        let prod = 1;
        let k = a;
        while (k <= b) {
            prod *= k;
            k++;
        }
        return prod;
    } else {
        return false;
    }
}

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let k = 1;
    let coins = 333;
    while (k >= 1) {
        coins = coins * 2;
        if (coins >= 1000000) {
            return k;
            break;
        }
        k++;
    }
}

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let k = a;
    let str = '';
    while (k <= b) {
        if (k % 2 == 0) {
            str += '0';
        } else {
            str += k;
        }
        k++;
    }
    return str;
}

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {

    let str = '';
    let k = 0;

    while (k < 6) {
        k++;
        if (k % 2 == 0) {
            str += '*';
        } else {
            let l = 0;
            while (l < 2) {
                str += '*';
                l++;
            }
        }
        str += '<br>';
    }

    return str;

}

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {

    let res = '';
    let k = 1;
    let m = 10;

    while (k <= 10 && m >= 1) {
        res += `${m}&nbsp;${k}&nbsp;`;
        k++;
        m--;
    }

    return res;

}

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

    let a = 0;

    do
        console.log('do while work');
    while (a < 0);

    let b = 0;

    while (b < 0) {
        console.log('while work');
    }

}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {

    let a = 100;
    let str = '';

    do {
        str += a + ' ';
        a--;
    } while (a >= 0);

    return str;

}

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {

    let coal = 5;
    let day = 1;
    const end = 132;

    do {
        if (coal >= end) break;
        coal += coal * 0.3;
        day++;
    } while (day > 1);

    return day;

}

console.log(func_14())

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {

    let potion = 1.1;
    let day = 1;
    let end = 568;

    do {
        if (potion >= end) break;
        potion += 0.3;
        day++;
    } while (day > 1);

    return day;

}

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {

    let p = document.querySelectorAll('p.task-16');

    return (p.length % 2 == 0) ? p.length : false;

}


// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {

    let p = document.querySelectorAll('p.task-16');
    let k = 0;

    do {
        p[k].innerHTML = k + 1;
        k++;
    } while (k < p.length);

}

// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {

    let p = document.querySelectorAll('p.task-18');
    let k = p.length;
    let n = 1;

    do {
        k--;
        p[k].innerText = n;
        n++;
    } while (k >= 1 && n <= p.length);

}

// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {

    let k = 1;
    let res = '';

    do {
        if (k % 2 == 0) {
            res += '*';
        } else {
            res += k;
        }
        k++;
    } while (k < 20);

    return res;

}

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {

    let k = 0;
    let str = '';

    do {
        let m = 0;
        do {
            if (m == k) {
                str += '1 ';
            } else {
                str += '* ';
            }
            m++;
        } while (m < 4);
        str += '<br>';
        k++;
    } while (k < 4);

    return str;

}
