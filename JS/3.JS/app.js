let pattern = new RegExp("chokun")
//console.log(pattern);

let comment = "chokun"   
//let comments = "lorem ipsum CHOKUN"

//console.log(pattern.test(comment));  // true, false

//console.log(comment.match(pattern));  //n []
//console.log(comment.replace(pattern, "************"));   //   []



// let patternKGPhon = /996/;
// let patternRUPhon = /7/;
// let flagRu = ''
// let flagKG = 'https://www.advantour.com/img/kyrgyzstan/symbolics/kyrgyzstan-flag.jpg'


// let img = document.createElement('img')
// let body = document.body
// //<img />
// if (patternKGPhon.test("code")){
//     console.log("bul kg code");
//      img.scr = flagKg;
//      body.append(img);
// } else if (patternRUPhon.test('code')){
//     console.log("bul ru code");
//     img.scr = flagRu;
//     body.append(img);
// }

// let i = 0;
// function recursia(){
//     recursia();
//     i++;
//     console.log(i);
//     if(i > 5){
//         console.log("stop recursia");
//         return;
//     } else{
//         recursia();
//         i++;
//         console.log(i);
//     }
// }


// function sum2(a){
//     //return b => a + b
//     return b => {
//         let res = a + b;
//         return res; 
//     };
// }

// let num2 = sum2(2);

// let joobu = num2(5);
// console.log(joobu);



function domen(url){
    return api => {
        return url + api;
    }
}


let kgDomen = domen("https://lalafo.kg/");
let ruDomen = domen("https://lalafo.kg/");
let comDomen = domen("https://lalafo.kg/");

console.log(kgDomen(".kg"));
console.log(ruDomen (".ru"));
console.log(comDomen (".com"));
console.time("count");



function recursia (num){
    if (num > 0){
        console.log(num);
        return recursia(num - 1);
    } else{
        return num;
    }
}


recursia(10);

for (let i = 0; i < 11; i++){
    console.log(i);
}
console.timeEnd("count");
