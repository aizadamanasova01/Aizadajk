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


// Тип данных boolean
 var older = false;
 var younger = false;
 var test = true;

 console.log(!older); // false ! - Не - жок (наоборот)
 console.log(older && younger && test); // false && И - жана 
console.log(older || younger || test) // true - Или - Жээ
console.log(older ^ younger ^ test) // 0 - false 



// Тип данных undefined 

/* 
dfghj
fghjk

*/ 

// var myName;
// console.log(myName) // undefined


// var myName = null;
// console.log(myName); // null 


// 6 - Тип данных object - объект 

/*var obj = {
    name: prompt('u`r name'),
    surname: 'Medetbekov',
    age: 19,
    age1: 25,
    married: false,
    judging: null,
    info: undefined,
    pasportData: {
        id: 'AN12345676543',
        series: 12345676543,
        organ: 'MKK-567'
    }
}*/

// console.log(obj.pasportData.organ)
//console.log(obj)
//alert('Салам ' + obj.name)

// console.log(obj)