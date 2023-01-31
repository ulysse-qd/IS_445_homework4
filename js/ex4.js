const number_1 = prompt("Enter the first number.");
const number_2 = prompt("Enter the second number.");

if (!isNaN(number_1) || !isNaN(number_2)) {
  console.log(Number(number_1) + Number(number_2))
  console.log(number_1 - number_2)
  console.log(number_1 * number_2)
  if (number_2 == 0) {
    console.log("Can't divide by 0 nor calculate the modulo")
  } else {
    console.log(number_1 / number_2)
    console.log(number_1 % number_2)
  }
} else {
  console.log("Wrong inputs.");
}