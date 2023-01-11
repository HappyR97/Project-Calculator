let firstNumberText = document.querySelector(".first-number");
let operatorText = document.querySelector(".operator");
let secondNumberText = document.querySelector(".second-number");
let btnNumbers = document.querySelectorAll(".btn--number");
let btnOperators = document.querySelectorAll(".btn--operator");

let firstNumber = NaN;

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

function addContent(span, content) {
  span.textContent += content.textContent;
}

btnNumbers.forEach(function (btnNumber) {
  btnNumber.addEventListener("click", function () {
    if (operatorText.textContent === "") {
      addContent(firstNumberText, btnNumber);
    }
    if (operatorText.textContent !== "") {
      addContent(secondNumberText, btnNumber);
    }
    // firstNumber = Number(firstNumberText.textContent);
  });
});

btnOperators.forEach(function (btnOperator) {
  btnOperator.addEventListener("click", function () {
    if (firstNumberText.text !== "") {
      operatorText.textContent = btnOperator.textContent;
    }
  });
});

// btnOperators.forEach(function (btnOperator) {
//   let buttonText = btnOperator.textContent;
//   btnOperator.addEventListener("click", function () {
//     if (screenText.textContent.indexOf(buttonText) === -1) {
//       addContent(btnOperator);
//     }
//   });
// });
