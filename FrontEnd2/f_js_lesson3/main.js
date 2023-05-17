// Урок 1
// * Язык JavaScript (создание, возможности, место на рынке, особенности)
// * Основы работы браузера и JavaScript в нем
// * Переменные (как создавать, как называть)
// * Типы данных (string, number, boolean)
// * Конкатенация, экранирование

// var myName = 'Erbol'
// var myAge = 19 
// var test = true 
// console.log(test)

// console.log(myName + " " + myAge)
// console.log(myName, myAge)
// console.log('D:\\Desktop\\Js-11\\lesson1')

// var myFirstNameAndMyLastName = 'Erbol Medetbekov'

// var myFisrtName = 'Erbol' // Camel Case 
// var myLastName = 'Medetbekov'

// var test2 = false

// alert('Привет')
// prompt('Ваше имя')

// console.log(test2 + " " + 'Бул test2')

// var name = "D:\\testfile\\testFile2" // string - строковый, текстовый
// var num1 = '10' // string
// var num = 10 // number - тип данных число 
// var num2 = 23
// var test = Infinity
// console.log(isFinite(test))
// console.log(isFinite(num))
// console.log(num) // 10
// var num = num / 0 // infinity
// console.log(num)
// var num = num + num 
// console.log(num)


// console.log(name)

// console.log(name + num1)
// console.log(name + num)
// console.log(num2 + num)
// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 5)
// console.log(num / 2)
// console.log(num2 % 5) // 1
// console.log(num ** 5) // 100.000
// var procent = 100 


// var name = '% от 100' // строка 
// var name = 'test name '
// console.log(name)

// console.log(5 / 100 * procent + ' ' + name)
// // 5 % от 100
// console.log(num + 10)

// var firstName = "Erbol"
// var first_name = "Erbol"
// var lastName = "Medetbekov"
// var myFirstNameAndLastName = "Erbol Medetbekov" 



// var lastNum = 21
// console.log(lastNum ** 5)
  


// var my_name = prompt('Атынызды жазыныз !')
// console.log('Салам ' + my_name)



// Урок 2
// * Тип данных boolean
// * Тип данных undefined
// * Тип данных null
// * Тип данных object (комплексный объект состоящий из других типов данных, словарь состоящий из пар ключ-значение)
// оператор typeof

// Тип данных boolean
// var older = false;
// var younger = false;
// var test = true;

// console.log(!older); // false ! - Не - жок (наоборот)
// console.log(older && younger && test); // false && И - жана 
// console.log(older || younger || test) // true - Или - Жээ
// console.log(older ^ younger ^ test) // 0 - false 



// Тип данных undefined 


// var myName;
// console.log(myName) // undefined


// var myName = null;
// console.log(myName); // null 


// 6 - Тип данных object - объект 

// var obj = {
//     name: prompt('Атынызды жазыныз'),
//     surname: 'Medetbekov',
//     age: 19,
//     age1: 25,
//     married: false,
//     judging: null,
//     info: undefined,
//     pasportData: {
//         id: 'AN12345676543',
//         series: 12345676543,
//         organ: 'MKK-567'
//     }
// }
// console.log(obj['pasportData'].series)

// console.log(obj.pasportData.organ)
// console.log(obj)
// alert('Салам ' + obj.name)

// console.log(obj)







// Урок 3

// * операторы (унарные, бинарные, условные)
// * операторы короткого обновления переменных (+= и др, ++, —)
// * операторы сравнения (== , ===,)
// * условные выражения (if)
// * switch case
 

// Унарные операторы
/*var name = 'Erbol'
var age = 17
var num = 10


 var user = {
     userName: 'Erbol',
     surname: 'Medetbekov',
     age: 19,
     card: {
        type: prompt('Введите тип краты'),
        num: 123456654372,
        balance: 50000,
         valuta: 'KGS',
     }
}*/
// null 0 '' undefined
// switch (user.card.type) {
//     case 'Visa':
//         console.log('Ваша карта Visa');
//         break;
//     case 'Elcart':
//         console.log('Ваша карта Elcart')
//         break;
//     default:
//         console.log('Такой карты не существует');
//         break;
// }




// if (age > 18) {
//     console.log('больше 18')
// } else if (age == 18){
//     console.log('Они равны')
// } else {
//     console.log('меньше 18')
// }

// console.log(num += 1)
// console.log(--num)
// console.log(1 +)
// console.log(1 += num)
// console.log(num)
// console.log(!age) // не (наоборот)

//бинарные операторы
// num = num + 10
// num += 10
// num -= 10
// num /= 10
// num *= 10
// num **= 10
// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 5)
// console.log(num / 2)
// console.log(num2 % 5) // 1
// console.log(num ** 5) // 100.000
// console.log(num)
    // Логические оперраторы 
// var boolAnd = true && true // и - жана, экоонун бироосу false болуш керк 
// var boolOr = true || true // или - жээ, экоонун бироосу true болуш керек
// var boolXor = true ^ true // и экоо тен бир значениеде болуш керек 

// операторы сравнения ==  ===
// console.log(5 !== '5')













// --------
// Home work
// var color = prompt('Введите цвет светофора')
// switch (color) {
//     case 'red':
//         console.log('Стоп');
//         break;
//     case 'green':
//         console.log('Можно');
//         break;
//     case 'yellow':
//         console.log('Приготовься');
//         break;
//     default:
//         console.log('Такого цвета не существует');
//         break;
// }

// var a = prompt('Введите первое число');
// var b = prompt('Введите второе число');

// if (a > b){
//     console.log('Первое число больше второго')
// } 
// else if (a < b){
//     console.log('Второе число больше первого')
// }
// else {
//     console.log('Числа равны')
// }

// -------------

// Lesson 4 

// * операторы (унарные, бинарные, условные выражения)
// * операторы короткого обновления переменных (+= и др, ++, —)
// * операторы сравнения (== , ===,)
// * условные выражения (if)
// * switch case


// * Темы урока 4 
// * Truthy и falsy выражения - все значения в js делятся на 2 больших класса - это Truthy и falsy
//  falsy выражения - false, undefined, null, 0, ""
//  Truthy выражения - всё что не falsy является truthy
// * тернарный оператор
// * array - массив
// * Циклы for


// falsy - false, 0 , "", undefined, null,
// Truthy - falsy выражениелерге кирбегендин баары truthy болуп эсептелет


/*var user = {
    userName: 'Erbol',
    surname: 'Medetbekov',
    age: 19,
    pol: 2,
    info: undefined,
    dopInfo: null, 
    card: {
        type: 'Visa',
        num: 123456654372,
        balance: 50000,
        valuta: 'KGS',
    }
}*/



// Тернарный оператор:   условие ? значение_если_true : згачение_если_false
// console.log(user.pol === 1 ? 'Мужской' : 'Женский')

//var arr = [1, 2, 3, 4, 5, 6]
//Индексы- 0  1  2  3  4  5
// var fruits = ['яблоко', 'груша', 'арбуз', 'мандарин']
// fruits.push('апельсин')
// fruits.push('банан')


// console.log(fruits[fruits.length - 1])
// console.log(user.dopInfo.length)
//console.log(user.dopInfo ? user.dopInfo.length : 'test')


// if (user.pol === 1){
//     console.log('Мужской')
// } else {
//     console.log('Женский')
// }

/*var arr = [1, 2, 3, 4, 5, 6, 7, 8]
var fruits = ['яблоко', 'груша', 'арбуз', 'мандарин']
fruits.push('апельсин')
fruits.push('банан')*/

// for 

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

/*for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}*/


var a = 5;
var test = 5 != a 
console.log(test)