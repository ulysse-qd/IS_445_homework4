const number1 = prompt("Please enter a valid number.");
const number2 = prompt("Please enter another valid number.");
const math_operation = prompt("Please enter a mathematical operation. (+, -, *, /)");

function calc(number1, number2, math_operation) {
  let result = 0
  if (isNaN(number1) || isNaN(number2)) {
    return 'One of the number you entered is not a valid entry.'
  } else {
    switch (true) {
      case math_operation == '+': result = Number(number1) + Number(number2);
        break;
      case math_operation == '-': result = number1 - number2;
        break;
      case math_operation == '*': result = number1 * number2;
        break;
      case math_operation == '/': result = number1 / number2;
        break;
      default: console.log("Sorry, " + math_operation + " is not a valid entry.")
    }
  }
  return (number1 + ' ' + math_operation + ' ' + number2 + ' = ' + result)
}

console.log(calc(number1, number2, math_operation))