let result = "";
let operator = "";
let num1 = "";

function appendNumber(num) {
  result += num;
  document.getElementById("result").value = result;
}

function setOperator(op) {
  operator = op;
  num1 = result;
  result = "";
}

function clearResult() {
  result = "";
  document.getElementById("result").value = result;
}

function calculate() {
  const num2 = parseFloat(result);
  let hasil;

  switch (operator) {
    case "+":
      hasil = parseFloat(num1) + num2;
      break;
    case "-":
      hasil = parseFloat(num1) - num2;
      break;
    case "*":
      hasil = parseFloat(num1) * num2;
      break;
    case "/":
      hasil = parseFloat(num1) / num2;
      break;
    default:
      hasil = "Operator tidak valid";
  }

  document.getElementById("result").value = hasil;
  result = hasil.toString(); // Store result for potential further calculations
  num1 = ""; // Reset num1 for potential further calculations
  operator = ""; // Reset operator for potential further calculations
}
