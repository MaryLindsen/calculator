let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null && !waitingForSecondOperand) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    operator = op;
    waitingForSecondOperand = true;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function calculate() {
    if (operator === null || waitingForSecondOperand) {
        return;
    }
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert("Erro: Divisão por zero!");
                result = 'ERROR';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;
    }
    displayValue = result.toString();
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
});
