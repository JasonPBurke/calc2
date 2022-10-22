const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');

let = currentOperator = '';
let firstValue = '';
let secondValue = '';
let equalsPressed = false;


keys.addEventListener('click', (key) => {


  if(key.target.classList.contains('number')) {
    if(display.textContent === '0' || currentOperator || equalsPressed) {
      display.textContent = key.target.textContent;
    } else {
      display.textContent += key.target.textContent;
    }
  }

  if(key.target.classList.contains('operator')) {
    currentOperator = key.target.textContent;
    firstValue = display.textContent;
  }

  if(key.target.classList.contains('equals')) {
    equalsPressed = true;
    secondValue = display.textContent;
    display.textContent = operate(firstValue, currentOperator, secondValue);
  }
})









function operate(a, operator, b) {
  a = parseInt(a);
  b = parseInt(b);
  console.log(operator);
  if(operator === '+') return add(a, b);
  if(operator === '-') return subtract(a, b);
  if(operator === '*') return multiply(a, b);
  if(operator === '/') return divide(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}