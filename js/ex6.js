const number = prompt("Enter a number to show the multiplication table of it.");

if (!isNaN(number)) {
  for (let i = 0; i <= 10; i++) {
    console.log(number * i)
  }
} else {
  console.log("Sorry, " + number + " is not a valid entry.")
}