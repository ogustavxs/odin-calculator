const container = document.querySelector(".container");
const display = document.querySelector("#display");

// Operações
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
	switch (operator) {
		case null:
			if (restart === false) {
				return atualNumber
			} 
			return firstNumber === null ? atualNumber : firstNumber
			
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "*":
			return multiply(num1, num2);
		case "/":
			if (num2 === 0) {
				return "Error";
			}
			return divide(num1, num2);
	}
}

// Variaveis necessarias

let operator = null // Operador atual
let restart = false // Ao escrever, deve reiniciar o display?
let atualNumber = '0' // Numero sendo escrito
let firstNumber = null // Numero que ja foi escrito

// Função para alterar o display dependendo da situação

function changeDisplay(text) {
	if (restart === true) {
		display.textContent = text
		atualNumber = display.textContent
		restart = false
	} else {
		if (display.textContent.length <= 6) {
			display.textContent = display.textContent === '0' ? text : display.textContent + text
			atualNumber = display.textContent
		} else {
			return
		}
		
	}
}

//

function handleOperator (operatorSignal) {
	if (restart === true) {
		atualNumber = 0
	} else {
		firstNumber = atualNumber
		atualNumber = 0
	}
	restart = true
	operator = operatorSignal
}

function handleEqual () {
	result = operate(operator, Number(firstNumber), Number(atualNumber))
	if (Number.isInteger(result)) {
		display.textContent = result
	} else if (result === "Error") {
		display.textContent = result
	} else {
		display.textContent = result.toFixed(2);
	}
	firstNumber = display.textContent
	restart = true
	atualNumber = 0
	operator = null 
}

function changeSignal() {
	if (restart === true) {
		firstNumber = String(-Number(firstNumber))
		display.textContent = firstNumber
	} else {
		atualNumber = String(-Number(atualNumber));
		display.textContent = atualNumber;
	}
}

function clear () {
	operator = null
	restart = false
	atualNumber = '0'
	firstNumber = null
	display.textContent = atualNumber
}

function addDecimalPoint () {
	if (display.textContent.includes('.')) {
		return
	}
	display.textContent += '.'
}

container.addEventListener("click", (e) => {

	const id = e.target.id;
	switch (id) {
		case "one":
		case "two":
		case "three":
		case "four":
		case "five":
		case "six":
		case "seven":
		case "eight":
		case "nine":
		case "zero":
			changeDisplay(e.target.textContent)
			break
		
		case 'add':
		case 'subtract':
		case 'multiply':
		case 'divide':
			handleOperator(e.target.textContent)
			break
		case 'equal':
			handleEqual()
			break
		case 'signal':
			changeSignal()
			break
		case 'clear':
			clear()
			break
		case 'decimal':
			addDecimalPoint()
			break
		default:
			break;
	}
});
