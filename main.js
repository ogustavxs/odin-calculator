const container = document.querySelector(".container")
const display = document.querySelector('#display')
const add = (num1, num2) => num1+num2
const subtract = (num1, num2) => num1-num2
const multiply = (num1, num2) => num1*num2
const divide = (num1, num2) => num1/num2

let displayValue = 0

function operate (operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            if (num2 === 0) {
                return 'dumb'
            }
            return divide(num1, num2)
    }
}

function changeDisplay(numberText) {
    if (display.textContent.length < 7) {
        if (display.textContent === '0') {
            display.textContent = numberText
            displayValue = numberText
        } else {
            display.textContent = display.textContent+numberText
            displayValue = display.textContent
        }
    }
}

container.addEventListener('click', (e) => {
    const id = e.target.id;
    switch (id) {
        case 'one':
            changeDisplay(1);
            break;
        case 'two':
            changeDisplay(2);
            break;
        case 'three':
            changeDisplay(3);
            break;
        case 'four':
            changeDisplay(4);
            break;
        case 'five':
            changeDisplay(5);
            break;
        case 'six':
            changeDisplay(6);
            break;
        case 'seven':
            changeDisplay(7);
            break;
        case 'eight':
            changeDisplay(8);
            break;
        case 'nine':
            changeDisplay(9);
            break;
        case 'zero':
            changeDisplay(0);
            break;
        case 'clear':
            display.textContent = '0'
            displayValue = 0
            break
        default:
            break;
    }
});
