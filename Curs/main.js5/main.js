//var arr = [1, 2, 3, 4, 5, 6, ]
//индексы- 0  1  2  3  4  5 
//var fruits = ['яблоко', 'груша', 'арууз', 'мандарин', 'апелсин', 'банан']

 //for (var fruit of fruits){
 //   console.log('fruit' + fruit + '' + fruit/length)
 //}


 // цикл для Фильтрация
 // continue - усли true то пропускает одну итерацию
 /*for( var fruit of fruits){
    var fruitFirstChar = fruit[0];
    if(fruitFirstChar === 'я'|| fruitFirstChar === 'б'){
    continue;
}

 console.log('fruit: ' + fruit + ' ' + fruit.length)
 }*/

 //цикл для поиска
 /*var selectFruit = prompt('Найди фрукта')
 for(fruit of fruits){
    if(fruit === selectFruit){
        console.log('Bingo Bingo Bingo Ты нашел свой  фрукт');
        break;
    }
    console.log('Ищи дальше');
 }*/


 //цикл внутри цикла
 /*for (i =0; i < 10; i++){
    var row = '';
    for(var j = 0; j < 10; j++){
        row +=i === j ? '%' : '#'
    }
    console.log(row)
}*/


//Цикл - while - испольсуется редко - коп колдонулбайт
 /*var count = 0;
 //var selectFruit = prompt('Найди фрукта')
 while (count < fruits/length || selectFruit !== fruits[count]){
    var selectFruit = prompt('Найди фрукт')
    console.log('test')
    count++;
}*/



//do while - колдонбойт
/*var count = 0;
do{
    console.log('test')
} while (count <= 5)*/


//цикл - for in - исползуется для объктов
//userlog = '';
//for (key in user){
//    userlog+= key + ' : ' + typeof(user{key} === 'objest'
 //   ?)

//}
