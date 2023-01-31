const question = prompt("Please choose a number between 1 and 100");

if (question > 1 && question < 100 && question !== '') {
  console.log("Thank you! You entered " + question + ", a valid number.")
} else {
  console.log("Sorry, " + question + " is not a valid entry.")
}