const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');

let = currentOperator = '';
let firstValue = '';
let secondValue = '';
let equalsPressed = false;
let captureSecondNumber = false;
let lastKeyPressed;


keys.addEventListener('click', (key) => {

  
  if(key.target.classList.contains('number')) {
    if(display.textContent.includes('%') && captureSecondNumber === 'false') return;
    if(display.textContent === '0' || captureSecondNumber || equalsPressed) { // || currentOperator || equalsPressed) {
      display.textContent = key.target.textContent;
      captureSecondNumber = false;
      equalsPressed = false;
    } else {
      display.textContent += key.target.textContent;
    }
  }
  
  if(key.target.classList.contains('operator')) {
    if(lastKeyPressed) {
      if(lastKeyPressed.classList.contains('operator')) return;
    }
    if(currentOperator) {
      secondValue = display.textContent;
      display.textContent = operate(firstValue, currentOperator, secondValue);

    }
    currentOperator = key.target.textContent;
    firstValue = display.textContent;
    captureSecondNumber = true;
    keys.querySelector('.decimal').disabled = false;
    keys.querySelector('.percent').disabled = false;
  }

  if(key.target.classList.contains('equals')) {
    keys.querySelector('.decimal').disabled = false;
    keys.querySelector('.percent').disabled = false;
    equalsPressed = true;
    secondValue = display.textContent;
    if(firstValue.includes('%')) firstValue = parseFloat(firstValue)/100;
    if(secondValue.includes('%')) secondValue = parseFloat(secondValue)/100;
    display.textContent = operate(firstValue, currentOperator, secondValue);
    if(display.textContent === '') {
      display.textContent = '0';
    } else if(display.textContent === 'Infinity' ) {
      display.textContent = 'You a big dummy, Fry';
    }
    currentOperator = '';
    firstValue = '';
    secondValue = '';
  }

  if(key.target.classList.contains('clear')) {
    firstValue = '';
    secondValue = '';
    currentOperator = '';
    display.textContent = '0';
  }

  if(key.target.classList.contains('back')) {
    if(lastKeyPressed.classList.contains('equals')) return;
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent === '') display.textContent = '0';
  }


  if(key.target.classList.contains('decimal')) key.target.disabled = true;
  if(key.target.classList.contains('percent')) key.target.disabled = true;
  lastKeyPressed = key.target;
})



function operate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if(!a) return b;
  if(operator === '+') return add(a, b);
  if(operator === '-') return subtract(a, b);
  if(operator.charCodeAt(0) === 215) return multiply(a, b);
  if(operator.charCodeAt(0) === 247) return divide(a, b);
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