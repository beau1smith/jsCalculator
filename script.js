"use strict;"

const inputCalculatorNumbers = Array.from(document.getElementsByClassName('number'));
const calculatorOperators = Array.from(document.getElementsByClassName('operator'));
const calculatorEqual = Array.from(document.getElementsByClassName('equal'));
const calculatorClear = Array.from(document.getElementsByClassName('clear'));
const display = document.querySelector('.display');


let currentCalcValue = '';
let currentOperator = '';
let displayValue = '';
let calcInput1 = '';
let calcInput2 = '';

function clearCalculator() {
  currentCalcValue = '';
  currentOperator = '';
  displayValue = '';
  calcInput1 = '';
  calcInput2 = '';
  display.innerText = '';
  }

function updateDisplay() {
  if(displayValue.length < 1) {
    display.innerText = '0';
  } else if(displayValue.length > 9) {
    display.innerText = displayValue.substring(0, 9);
  } else {
    display.innerText = displayValue;
  }
}

function collectInputs(eventData){
  let inputValue = eventData;
  if (calcInput1.length < 9 && currentOperator === '') {
    calcInput1 += inputValue;
    display.innerText = calcInput1;
  } else {
    if (calcInput2.length < 9 && currentOperator != ''){
      calcInput2 += inputValue;
      display.innerText = calcInput2;
    }
  }
}

function collectOperator(eventData){
  let inputValue = eventData;
  if(inputValue == '%'){
    calcInput1 *= 0.01;
    display.innerText = calcInput1;
  } else if (inputValue == '+ / -'){
    calcInput1 = -calcInput1;
    display.innerText = calcInput1;
    console.log(calcInput1);
  } else if (inputValue == '.'){
    if (!calcInput1.includes('.')){
      calcInput1 += '.';
    } else {
      calcInput1;
    }
  } else {
    display.innerText = '';
    currentOperator =  inputValue;
  }
}

function calculateResults(){
  if (calcInput1 && calcInput2 && currentOperator){
    if(currentOperator === "+"){
      result = Number(calcInput1) + Number(calcInput2);
    } else if (currentOperator === "-"){
      result = Number(calcInput1) - Number(calcInput2);
    } else if (currentOperator === "*") {
      result = Number(calcInput1) * Number(calcInput2);
    } else if (currentOperator === "/") {
    result = Number(calcInput1)/ Number(calcInput2);
    }
  }

  if(!Number.isInteger(result)){
    return result.toFixed(2);
    } else {
    return result;
    }
}

inputCalculatorNumbers.map( button => {
  button.addEventListener('click', (e) => {
    let inputType = e.target.classList;
    let inputValue = e.target.innerText.toString();
    collectInputs(inputValue);
  });
});

calculatorOperators.map( button => {
  button.addEventListener('click', (e) => {
    let inputType = e.target.classList;
    let inputValue = e.target.innerText.toString();
    collectOperator(inputValue);
  });
});

calculatorEqual.map( button => {
  button.addEventListener('click', (e) => {
    let result = calculateResults();
    calcInput1 = result;
    display.innerText = result;
    calcInput2 = '';
    currentOperator = '';
  });
});

calculatorClear.map( button => {
  button.addEventListener('click', () => {
    clearCalculator();
  });
});
