//DOM - Document objest Model
//Git - github / gitlab

// console.log(document)

// 0 1 - Двоеичная система счисления
// 0  1  2  3  4  5  6  7  8  9 - Десятиричная система счисления
// 0  1  2  3  4  5  6  7  8  9  a   b    c    d    e    f  
//                               10  11   12   13   14   15 -
// шестынадцатиричная система счисления
// hex-#ff ff ff / rgb-255 255 255

// 57 = 5 * 10 + 7 = 57
//255(f f) = 15 * 16 + 15 = 255


function RandomGenerate(){
    const HEX_NAX = 255;
    const HEX_MIN = 0;
    
    const randNumber = Math.round(
        Math.random() * (HEX_NAX - HEX_MIN) + HEX_MIN
    );
    console.log('Text')
    return randNumber.toString(16).padStart(2, '0');
    //500
    //confirm.console.log();
}


function ChabgeColor(){
    var redNex = RandomGenerate();
    var greenNex = RandomGenerate();
    var blueNex = RandomGenerate();
    var colorNex = ['#', redNex, greenNex, blueNex].join("");
    var wrapper_inner_element = document.querySelector('.wrapper_inner');
    var colorTextElemet = wrapper_inner_element.getElementsByClassName('background-color')[0];
    colorTextElemet.innerHTML = colorNex;
    document.body.style.background = colorNex;

}

var js_button = document.getElementById('color-btn');
//console.log(js_button)

js_button.addEventListener('click', ChabgeColor )

/*function ChabgeColor(){
    //console.log('test')
}

var js_button = document.getElementById('color-btn');
//console.log(js_button)

js_button.addEventListener('click', ChabgeColor );*/

