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

function addToDisplay(input){
  let userInput = document.createTextNode(input);
  let display = document.querySelector('display');
  display.appendChild(userInput);
}

function operate(number1, operator, number2){
  let n1 = number1;
  let n2 = number2;
  if (operator === '+'){
    return add(n1, n2);
  }
  if (operator === '-'){
    return subtract(n1, n2);
  }
  if (operator === '*'){
    return multiply(n1, n2);
  }
  if (operator === '/'){
    return divide(n1, n2);
  }
}

let inputString1 = '';
let inputString2 = '';


const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
  button.addEventListener('click', (e) => {
    const display = document.querySelector('.display');
    let inputType = e.target.classList;

    if (inputType.contains('clear')) {
      inputString = '';
    } else if (inputType.contains('number') && inputString.length < 9){
      let inputValue = e.target.innerText.toString();
      inputString += inputValue;
    }





        display.innerText = inputString;


    });
});
