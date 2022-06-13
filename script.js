const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector(".calculator-display");
const equals = document.querySelector(".equals");
let computation = [];
let currentOperator;

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

function operate(operator, a, b) {
  return operator(a, b);
}

//listens to all the buttons on the calculator
numbers.forEach((number) => number.addEventListener("click", numberHandler));
operators.forEach((operator) => operator.addEventListener("click", operatorHandler));
equals.addEventListener('click', equalsHandler);

function numberHandler(event)    {
    if (display.textContent === '+')    {
        display.textContent = '';
        display.textContent += event.target.textContent;    
    }else display.textContent += event.target.textContent;
}

function operatorHandler(event)    {
    switch(event.target.textContent)    {
        case '+':
            computation.push(add);
            computation.push(display.textContent);
            display.textContent = '+';
            break;
    }
}

function equalsHandler()    {
    computation.push(display.textContent);
    display.textContent = operate(computation[0], Number(computation[1]), Number(computation[2]));
}



function handleOperator(event) {
  computation.push(display.textContent);
  computation.push(currentOperator);
  display.textContent = event.target.textContent;
}