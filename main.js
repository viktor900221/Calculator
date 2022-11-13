/////////////////////////CALCULATOR FROM VIKTOR LEGRADI-GÖHRING/////////////////////////
let intArray; //Array für die Integer von tastaturString
let symbols; //Zwischenspeicher für die Symbole bevor sie in symbolArray gespeichert werden.
let symbolArray; //Array für die Symbole von tastaturString
let result; //Variable für den Value von der Berechnung
let tastaturString = ''; //Variable für den Value von Display
let displayValue; //Variable für den gesamten Eingabe samt Integer und Symbolen

let display = document.querySelector('#display') //SELECT Display
let gleich = document.getElementById("gleich"); //SELECT '='
let container = document.getElementById("container"); //SELECT Container

//Bedienung über Tastatur:
container.addEventListener('click', (e) => {
    //Get a Value from the Buttons 
    let isButton = e.target.nodeName === 'BUTTON';
    if (isButton == true && e.target.value !== '=' && e.target.value !== 'd') {

        //Save the Value from Button in tastaturString
        if (tastaturString.length < 43) {

            tastaturString += e.target.value
            display.value = tastaturString

            if (tastaturString.length > 13) {
                display.style.fontSize = "40px"
                tastaturString += e.target.value
                display.value = tastaturString
            }
        } else {
            //Er soll nichts machen
        }

    } else if (e.target.value === '=') {
        tastaturString = ''
    }
    /*Delete ON/C Function*/
    if (e.target.value === 'c') {
        display.value = ''
        tastaturString = ''
        display.style.fontSize = "70px"
    }
    /*Delete one number*/
    if (e.target.value === 'd') {
        tastaturString = tastaturString.substring(0, tastaturString.length - 1)
        display.value = tastaturString
        if (tastaturString.length > 13) {
            display.style.fontSize = "40px"
        } else { display.style.fontSize = "70px" }
    }
})

//Die Berechnung => Unsere Hauptfunktion
gleich.addEventListener('click', function () {

    displayValue = document.getElementById('display').value;//SELECT Value from Display 

    //Split multiple symbols!!! ausser Point
    intArray = displayValue.split(/[+-/*]/)
    console.log(intArray)

    //Symbols trennen von den Integer und in symbolArray speichern
    symbols = displayValue.replace(/\d+/g, ''); //er nimmt nur die Symbols raus und wird in eine String gespeichert "+-."
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

        display.value = result;

    }

    result(intArray, symbolArray);
})


/*
1. () Klammer funktion wenn das in meine String vorkommt führ bitte das erstmal aus
2. . float number berechnung
3. die letzte gespeicherte Zahl weiter verarbeiten können
4. mehrere operatoren berechnung mehrere Zahlen berechnung
5. negativ Zahl erkennung
6. verschiedene Displays textgröße
*/
