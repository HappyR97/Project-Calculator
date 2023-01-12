const screenText = document.querySelector(".screen-text");
const btnNumbers = document.querySelectorAll(".btn--number");
const btnOperators = document.querySelectorAll(".btn--operator");
const btnOperate = document.querySelector(".btn--operate");

let numbers = [];
let total;
let operator;
let textCue = false;

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

function operate(a, b, operator) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
  if (operator === "%") return remainder(a, b);
}

function operateElements(arr, operator) {
  return operate(arr[0], arr[1], operator);
}

// function addContent(span, content) {
//   span.textContent += content.textContent;
// }

btnNumbers.forEach(function (btnNumber) {
  btnNumber.addEventListener("click", function () {
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
    if (numbers.length < 2) numbers.push(screenText.textContent);
    if (numbers.length >= 2 && operator) {
      total = operateElements(numbers, operator);
      screenText.textContent = operateElements(numbers, operator);
      numbers = [total];
    }
    operator = btnOperator.id;
  });
});

btnOperate.addEventListener("click", function () {});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// btnNumbers.forEach(function (btnNumber) {
//   btnNumber.addEventListener("click", function () {
//     if (totalText.textContent !== "") {
//       totalText.textContent = "";
//     }
//     if (operatorText.textContent === "") {
//       addContent(firstNumberText, btnNumber);
//     }
//     if (operatorText.textContent !== "") {
//       addContent(secondNumberText, btnNumber);
//     }
//   });
// });

// btnOperators.forEach(function (btnOperator) {
//   btnOperator.addEventListener("click", function () {
//     firstNumber = Number(firstNumberText.textContent);
//     if (firstNumberText.text !== "") {
//       operatorText.textContent = btnOperator.textContent;
//     }
//   });
// });

// btnOperate.addEventListener("click", function () {
//   secondNumber = Number(secondNumberText.textContent);
//   if (operatorText.textContent === "+") {
//     total = operate(firstNumber, secondNumber, "+");
//   }
//   totalText.textContent = total;
//   operatorText.textContent = "";
//   firstNumberText.textContent = "";
//   secondNumberText.textContent = "";
// });
