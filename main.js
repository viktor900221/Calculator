
/*Zwei Bedienungsmöglichkeiten
1: Über den Display
2: Über die Tastatur
*/

let display;
let displayInput;
let intArray;
let symbols;
let symbolArray;
let result;

//Bedienung über Display:
display = document.querySelector('#display')


//Wir machen ein active Button 
let prevButton = null
let tastaturString = '';
let gleich = document.getElementById("gleich");
let container = document.getElementById("container");

//Bedienung über Tastatur:
container.addEventListener('click', (e) => {
    let isButton = e.target.nodeName === 'BUTTON';
    if (isButton == true && e.target.value !== '=') {

        tastaturString += e.target.value
        display.value = tastaturString
        console.log(tastaturString)

    } else if (e.target.value === '=') {
        tastaturString = ''
    }

})

//Die Berechnung => Unsere Hauptfunktion
document.querySelector('#gleich').addEventListener('click', function () {

    //Die Eingabe über Display geht automatisch da ich in Input-Feld es eingebe. 
    displayInput = document.getElementById('display').value; //string


    //Split multiple symbols!!! ausser Point
    intArray = displayInput.split(/[+-/*]/)
    console.log(intArray)

    //symbolArray = displayInput.split().filter(Number)
    symbols = displayInput.replace(/\d+/g, ''); //er nimmt nur die Symbols raus und wird in eine String gespeichert "+-."
    symbolArray = symbols.split('')
    console.log(symbolArray)


    result = function (arrayInt, arraySym) {
        //result = parseInt(intArray[0]) + parseInt(intArray[1])

        for (let i = 0; i < arrayInt.length; i++) {
            console.log(arrayInt[i])
            if (arrayInt[i + 1] !== undefined) {
                for (let j = 0; j < arraySym.length; j++) {
                    console.log(arraySym[j])
                    switch (arraySym[j]) {
                        case '+': result = parseInt(arrayInt[i]) + parseInt(arrayInt[i + 1]);
                            console.log(result)
                            break;
                        case '-': result = parseInt(arrayInt[i]) - parseInt(arrayInt[i + 1]);
                            break;
                        case '*': result = parseInt(arrayInt[i]) * parseInt(arrayInt[i + 1]);
                            break;
                        case '/': result = parseInt(arrayInt[i]) / parseInt(arrayInt[i + 1]);
                            break;

                    }
                }
            }
        }

        console.log(display.value, result)


        if (result.toFixed(2).length <= 9) {
            //1020304034.3443 = 1020304034E4 
            display.value = result.toFixed(2);

        } else {
            display.value = "Error"
            console.log(result)
        }
    }

    result(intArray, symbolArray);

})





/*
let str = "str 12.3 or 12,3"

console.log(str.replace(/\d+([,.]\d+)?/g, ''))*/

/*
//var val = +("value is 10".replace(/\D/g, ""))
var ret = "data-123"

console.log(ret.replace(/\d+/g, ''));
*/


/*
whole_string="lasd行書繁1234"
split_string = whole_string.split(/(\d+)/)
console.log("Text:" + split_string[0] + " & Number:" + split_string[1])*/




/*
//Wir machen ein active Button 
let prevButton = null
let tastaturString = '';
let container = document.getElementById("container");
let gleich = document.getElementById("gleich");

container.addEventListener('click', (e) => {
    let isButton = e.target.nodeName === 'BUTTON';
    if (!isButton || gleich == true) {
        tastaturString = ''
    } else {
        //e.target.style.background = 'grey'

        tastaturString += e.target.value
        display.value = tastaturString
    }
    //display.value = e.target.value

    if (prevButton !== null) {
        //prevButton.style.background = '#EFEFEF';
    }

    prevButton = e.target


})*/