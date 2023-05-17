/*let span_tag = document.querySelector('.span')
console.log(span_tag, "span tag");

console.log(span_tag.innerHTML);
console.log(span_tag.innerText);
console.log(span_tag.textContent);

span_tag.innerText = " SPAN TEXT";
span_tag.innerText = " SPAN TEXT inner text";
span_tag.textContent = " SPAN TEXT textContent";*/

function $(name){
    return document.querySelector(name);
}

let h3Tag = ('h3');
let plusBtn = ('.btn-plus');
let minusBtn = ('.btn-minus');
let resetBtn = ('.btn-reset');


/*let h3Tag = document.querySelector('h3');
let plusBtn = document.querySelector('.btn-plus');
let minusBtn = document.querySelector('.btn-minus');
let resetBtn = document.querySelector('.btn-reset');
*/
let count = 0



minusBtn.onclick =() => {
    h3Tag.innerText = --count;
    if(count < 0 )
        h3Tag.style.color = "red"
 };

 resetBtn.onclick =() => {
    h3Tag.innerText = count = 0;
    if(count === 0 )
        h3Tag.style.color = "black"
 };



 //let names = ['Alina', 'Aizada', 'Unus', 'Keldibek']

//                        i = i +1
 /*for(let i = 0; i < names.length; i++){
    console.log( "Salam " + names[i]);
 }*/



//names.push("Nurbolot", "Nurdoolot", "Alisher");

//console.log(names);



/*function fun1(summa){
    summa(); //10
}

function fun2(){
    console.log((5 + 5)); //10
}

fun1(fun2)
*/


//setTimeout(param1,param2)
/*setTimeout(() =>{
    console.log("timeout");
}, 2000);*/


/*let names = ["Alina", "Aizada", "Unus", "Keldibek"];
names.push("Nurbolot", "Nurdoolot", "Alisher");


let shortNames = names.filter(item => item.length < 6);
console.log("shortNames:" , namesA);

let namesA = names.filter(item => item.startsWith("A"));
console.log("names:", namesA);*/
