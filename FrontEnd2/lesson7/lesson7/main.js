// HW - 1
function test(str) {
  var arr = str.split(" ");
  arr = arr.reverse();
  arr = arr.join("/");
  console.log(arr);
}
// test("1 2 3 4 5 6 7");
// test("a b c d f");

// HW - 2
function test2(a, b) {
  if (a > b) {
    console.log("Биринчи сан чон");
  } else if (a == b) {
    console.log('Они равны');
  } 
  else {
    console.log("Экинчи сан чон");
  }
}
// test2(10, 5);
// test2(10, 15);
// test2(5, 5);




// DOM - Document Object Model
// Git - github / gitlab


// console.log(document)

// 0 1 - Двоичная система счисления
// 0  1  2  3   4  5  6  7  8  9  - Десятиричная система счисления
// 0  1  2  3   4  5  6  7  8  9   a   b    c   d    e    f 
//                                10  11   12  13   14   15 - шестьнадцатиричная система счисления
// hex-#ff ff ff / rgb-255 255 255

// 57 = 5 * 10 + 7 = 57

// ff = 15 * 16 + 15
// 255(f f) = 15 * 16 + 10 = 255
// r g b = c1 b1 a1
// #c1b1a1


function RandomGenerate() {
  const HEX_MAX = 255;
  const HEX_MIN = 0;

  const randNumber = Math.round(
    Math.random() * (HEX_MAX - HEX_MIN) + HEX_MIN
    );
  return randNumber.toString(16).padStart(2, '0'); 
}

function ChangeColor() {
  var redHex = RandomGenerate();
  var greenHex = RandomGenerate();
  var blueHex = RandomGenerate();
  var colorHex = ['#', redHex, greenHex, blueHex].join("");
  var wrapper_inner_element = document.querySelector('.wrapper_inner');
  var colorTextElement = wrapper_inner_element.getElementsByClassName('background-color')[0];
  colorTextElement.innerHTML = colorHex;
  document.body.style.background = colorHex;
}


var js_button = document.getElementById('color-btn');
console.log(js_button)

js_button.addEventListener('click', ChangeColor);





var count = 0;
countElement = document.getElementsByClassName('count')[0]
var incBtn = document.getElementsByClassName('inc')[0]
var decBtn = document.getElementsByClassName('dec')[0]

function inc() {
  count++;
  countElement.innerHTML = count
}

function dec() {
  count--;
  countElement.innerHTML = count
}


incBtn.addEventListener('click', inc);
decBtn.addEventListener('click', dec);


count = 0;
function increment (){
  count++;
  console.log(count);
}

