//let arr = [1, 2 , 33, 4, 11];
//index   o   1   2  3  4

//let one = arr[0]
//let two = arr[1]

/*let[_ , , tort, ...rest] = arr;
console.log(tort);
console.log(rest);*/

/*let film = {
    name: "X-MAN",
    year: 2000,
    description: "Lorem",
};
//ES5
console.log(film.name, film.year, film.description, "es5");
//ES6
let {name, year, description} = film;*/



//console.log("       hello     ".trimEnd());
//console.log("       hello     ".trimStart());
//console.log("       hello     ".trim());

//console.log(('Hello'.includes('e')));
//console.log(['a', 'b', 'c'].includes("e"));
//console.log(['a', 'b', 'c'].includes("c"));

//console.log("test".padStart(8, "0"));
//console.log("test".padEnd(8, "1"));

//console.log('Audi'.startsWith('A'));
//console.log('Honda Fit'.endsWith('t'));
//console.log('Honda Fit'.endsWith('j'));


let mixedArr = ["Audi", ["Honda Fit", ["BMW"]]];
//console.log(mixedArr);

//let allCars = mixedArr.flat().flat();
///let allCars = mixedArr.flat(2);
//let allCars = mixedArr.flat(Infinity);
//console.log(allCars);
//let names = ["Alyl", "Samat"];
//let lastEl = names[names.length - 1]; //ES5 Samat
//let lastEl2 = names.flat(-1);  //ES6 Samat
//console.log(lastEl, lastEl2 );


//   ?? нулевой оператор 
// null жана indefined 
// ES5
//let test = null;
//if (test === null || test === undefined){
 //   console.log("test NULL");
//}
//ES6
//test ?? console.log(("TEST NULL"));

// ! OKURNAN 

console.log('  OKURMAN  '.startsWith('O'));
console.log('  OKURMAN  '.endsWith('N'));
console.log(' OKURMAN  '.endsWith('j'));


console.log(' OKURMAN '.includes('R'));
console.log(' OKURMAN '.includes("A"));
console.log(' OKURMAN '.includes("O"));


console.log("     OKURMAN      ".trimEnd());
console.log("     OKURMAN      ".trimStart());
console.log("     OKURMAN       ".trim());

console.log("OKURMAN".padStart(9, "IT"));
console.log("OKURMAN".padEnd(9, "IT"));

console.log('OKURMAN'.startsWith('O'));
console.log('OKURMAN'.endsWith('N'));
console.log('OKURMAN'.endsWith('j'));

console.log('OKURMAN'.toLowerCase());
console.log('okurman'.toUpperCase());

