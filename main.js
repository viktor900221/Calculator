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
                display.style.fontSize = '40px';
                tastaturString += e.target.value;
                display.value = tastaturString;
              }
            }
          } else if (e.target.value === '=') {
            tastaturString = '';
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
    displayValue = document.getElementById('display').value;
  
   //Split multiple symbols!!! ausser Point
    intArray = displayValue.split(/[-+*/]/);
       //Symbols trennen von den Integer und in symbolArray speichern
    symbols = displayValue.replace(/(\d+\.?\d*)/g, '');
    symbolArray = symbols.split('');
  //result = parseInt(intArray[0]) + parseInt(intArray[1])
    result = function (arrayInt, arraySym) {
      let currentResult = parseFloat(arrayInt[0]);
  
      for (let i = 0; i < arraySym.length; i++) {
        let currentSymbol = arraySym[i];
        let nextNumber = parseFloat(arrayInt[i + 1]);
  
        if (currentSymbol === '+') {
          currentResult += nextNumber;
        } else if (currentSymbol === '-') {
          currentResult -= nextNumber;
        } else if (currentSymbol === '*') {
          currentResult *= nextNumber;
        } else if (currentSymbol === '/') {
          currentResult /= nextNumber;
        }
      }
  
      return { result: currentResult };
    };
  
    let finalResult = result(intArray, symbolArray);
    display.value = finalResult.result;
  });
