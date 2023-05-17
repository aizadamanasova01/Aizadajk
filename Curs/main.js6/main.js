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



// для (objest, objest )
/*for(var key in user) {
console.log(
    key + " : " + (
        typeof user[key] === 'object' ? JSON.stringify(user [key])
        : user[key])
)
}*/

//1.1Функциялардын турлору :
//1- functin declaration - определение функции 
       /* function funcDec();

         function funcDec() {
            console.log('Бул function declaration')
        }*/

// 2 - function expression  -  функциональное выражение

//var funcExp = function () {
    /*console.log('Бул function expression ')
}*/


/*function funcDec (argl) {
    console.log(argl)
    console.log('бул functin declaration')
}
funcDec('Бул аргумент 1', 'Бул аргумент 2', 'Бул аргумент 3')*/


//1.2 /Функциялардын турлору :
//1- functin declaration - определение функции 
/*function funcDec (argl, arg2, arg3) {

    //console.log(argl +arg2 + arg3)
    //console.log('бул functin declaration')

}*/

/*console.log('Бул аргумент 1', 'Бул аргумент2', 'Бул аргумент3')
console.log('Бул экинчи чыгарылыш аргумент 1', 'Бул экинчи чыгарылыш аргумент 2', 
'Бул экинчи чыгарылыш аргумент' , 'Бул экинчи чыгарылыш аргумент 3')*/





// calback functin - коллбак функция  - функция внтри фунуции
/*var func1 = function (func, text) {
    func(text);
    console.log('Биринчи функция ')
}
  
function func2 (text2='аргумент по умолчанию') {
    console.log('Экинчи функция: ' + text2)
}

func1(func2, 'экинчи аргумент')
func1(func2)*/


var str = 'lorem- lorem- lorem- lorem- lorem-'
var arr = str.split('-')
console.log('Строка', str)
console.log('Массив метод split (): ', arr )
console.log('Метод repeat(2): ' + str/repeat(3))
console.log('Метод массив reverse () : ' , arr.reverse ())
console/log
console.log('Метод массив join () : ' , arr.loin ())



