
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentNumber = '';
let previousNumber = '';
let operator = '';
function updateDisplay() {
    display.value = currentNumber;
}

function handleNumber(value) {
    if (currentNumber === '0' && value === '0') return;
    currentNumber += value;
    updateDisplay();
}

function handleOperator(value) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = value;
    previousNumber = currentNumber;
    currentNumber = '';
}


function handleEquals() {
    if (currentNumber === '' || previousNumber === '') return;
    calculate();
    previousNumber = '';
    operator = '';
}
function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    updateDisplay();
}


function handleClearButtons() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}
