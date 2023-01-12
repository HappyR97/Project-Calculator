const screenText = document.querySelector(".screen-text");
const btnNumbers = document.querySelectorAll(".btn--number");
const btnOperators = document.querySelectorAll(".btn--operator");
const btnOperate = document.querySelector(".btn--operate");
const btnClear = document.querySelector(".btn--clear");
const btnDel = document.querySelector(".btn--del");
const bntDecimal = document.querySelector(".btn--decimal");

let numbers = [];
let total;
let operator;
let textCue = false;
let restart = false;
let activeOperator = false;

function add(a, b) {
  return Number(a) + Number(b);
}
function subtract(a, b) {
  return Number(a) - Number(b);
}
function multiply(a, b) {
  return Number(a) * Number(b);
}
function divide(a, b) {
  return Number(a) / Number(b);
}
function remainder(a, b) {
  return Number(a) % Number(b);
}

function power(a, b) {
  return Number(a) ** Number(b);
}

function operate(a, b, operator) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
  if (operator === "%") return remainder(a, b);
  if (operator === "**") return power(a, b);
}

function operateElements(arr, operator) {
  return operate(arr[0], arr[1], operator);
}

btnNumbers.forEach(function (btnNumber) {
  btnNumber.addEventListener("click", function () {
    activeOperator = false;
    if (restart) screenText.textContent = "";
    restart = false;
    // Change text content
    if (!textCue) {
      screenText.textContent += btnNumber.textContent;
    } else {
      screenText.textContent = "";
      screenText.textContent += btnNumber.textContent;
      textCue = false;
    }
  });
});

btnOperators.forEach(function (btnOperator) {
  btnOperator.addEventListener("click", function () {
    console.log(operator);
    if (textCue) textCue = false;
    if (!textCue) textCue = true;

    if (activeOperator) return;
    activeOperator = true;

    if (numbers.length < 2) numbers.push(screenText.textContent);
    console.log(numbers);
    if (numbers.length >= 2 && operator) {
      total = operateElements(numbers, operator);
      screenText.textContent = operateElements(numbers, operator);
      numbers = [total];
      console.log(numbers);
    }
    operator = btnOperator.id;
  });
});

bntDecimal.addEventListener("click", function () {
  if (screenText.textContent === "") screenText.textContent = "0.";
  if (!screenText.textContent.includes(".")) screenText.textContent += ".";
});

btnClear.addEventListener("click", function () {
  screenText.textContent = "";
  total = undefined;
  operator = undefined;
  numbers = [];
});

btnDel.addEventListener("click", function () {
  screenText.textContent = screenText.textContent.slice(0, -1);
});

btnOperate.addEventListener("click", function () {
  if (numbers.length < 2) numbers.push(screenText.textContent);
  console.log(numbers);
  if (numbers.length >= 2) {
    total = operateElements(numbers, operator);
    screenText.textContent = operateElements(numbers, operator);
    numbers = [total];
  }
  total = undefined;
  operator = undefined;
  numbers = [];
  restart = true;
});
