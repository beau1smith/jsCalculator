function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

let inputString1 = '';
let inputString2 = '';
let operatorChoice = '';

const calculatorNumbers = Array.from(document.getElementsByClassName('number'));
const calculatorOperators = Array.from(document.getElementsByClassName('operator'));
const calculatorEqual = Array.from(document.getElementsByClassName('equal'));
const calculatorClear = Array.from(document.getElementsByClassName('clear'));
const display = document.querySelector('.display');

calculatorNumbers.map( button => {
  button.addEventListener('click', (e) => {
    let inputType = e.target.classList;
    let inputValue = e.target.innerText.toString();
    if (inputString1.length < 9 && operatorChoice === '') {
      inputString1 += inputValue;
      display.innerText = inputString1;
    } else {
      if (inputString2.length < 9 && operatorChoice != ''){
        inputString2 += inputValue;
        display.innerText = inputString2;
      }
    }
    console.log(`inputString1 is ${inputString1}`);
    console.log(`inputString2 is ${inputString2}`);
    console.log(`operatorChoice is ${operatorChoice}`);
    });
});

calculatorOperators.map( button => {
  button.addEventListener('click', (e) => {
    let inputType = e.target.classList;
    let inputValue = e.target.innerText.toString();
      if(inputValue == '%'){
        inputString1 *= 0.01;
        display.innerText = inputString1;
      } else if (inputValue == '+ / -'){
        inputString1 = -inputString1;
        display.innerText = inputString1;
        console.log(inputString1);
      } else if (inputValue == '.'){
          inputString1 += '.';
      }
      else {
        display.innerText = '';
        operatorChoice =  inputValue;
      }
    });
  });


calculatorClear.map( button => {
  button.addEventListener('click', (e) => {
    let inputType = e.target.classList;
    let inputValue = e.target.innerText.toString();
      inputString1 = '';
      inputString2 = '';
      operatorChoice = '';
      display.innerText = '';
      console.log(`inputString1 is ${inputString1}`);
      console.log(`inputString2 is ${inputString2}`);
      console.log(`operatorChoice is ${operatorChoice}`);
  });
});

calculatorEqual.map( button => {
  button.addEventListener('click', (e) => {
    let inputType = e.target.classList;
    let inputValue = e.target.innerText.toString();

    console.log("equal button pressed");
    if (inputString1 && inputString2 && operatorChoice){
      if(operatorChoice === "+"){
        result = add(parseInt(inputString1), parseInt(inputString2));
      } else if (operatorChoice === "-"){
        result = subtract(inputString1, inputString2);
      } else if (operatorChoice === "*") {
        result = multiply(inputString1, inputString2);
      } else if (operatorChoice === "/") {
      result = divide(inputString1, inputString2);
      }
    }

    display.innerText = result;
    inputString1 = result;
    inputString2 = '';
    operatorChoice = '';

    });
  });
