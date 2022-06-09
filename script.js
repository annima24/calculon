
let buttons = document.querySelectorAll('button')

function add(a,b)  {
    return a + b;
}

function subtract(a,b)  {
    return a - b;
}

function multiply(a,b)  {
    return a * b;
}

function divide(a,b)  {
    return a / b;
}

function operate(operator, a, b)    {
    return operator(a,b)
}

buttons.forEach(button => button.addEventListener('click', buttonOperator))

function buttonOperator(event)   {
    console.log(event.target.textContent)
}



