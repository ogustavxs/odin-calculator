const container = document.querySelector(".container");
const display = document.querySelector("#display");

// Operações
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "*":
			return multiply(num1, num2);
		case "/":
			if (num2 === 0) {
				return "dumb";
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
		display.textContent = display.textContent === '0' ? text : display.textContent + text
		atualNumber = display.textContent
	}
}

//

function handleOperator (operatorSignal) {
	firstNumber = atualNumber
	atualNumber = 0
	restart = true
	operator = operatorSignal
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
		default:
			break;
	}
});
