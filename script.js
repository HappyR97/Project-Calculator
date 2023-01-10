let screenText = document.querySelector(".screen-text");
let btnOne = document.querySelector(".btn--one");

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
function remainder(a, b) {
  return a % b;
}

function operate(a, b, operator) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
  if (operator === "%") return remainder(a, b);
}

function addItem(item) {
  screenText.textContent += `${item.textContent} `;
}

btnOne.addEventListener("click", function () {
  addItem(btnOne);
});

let firstNumber;
let secondNumber;
