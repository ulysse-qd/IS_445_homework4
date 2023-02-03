let guessed_nb = Number(prompt("Guess the number"));
const generated_nb = Math.floor(Math.random() * 100) + 1
let count = 0

while (guessed_nb != generated_nb) {
  if (guessed_nb < generated_nb) {
    console.log("Too low, guess again.")
    count++
    guessed_nb = Number(prompt("Guess the number"));
  } else if (guessed_nb > generated_nb) {
    console.log("Too high, guess again.")
    count++
    guessed_nb = Number(prompt("Guess the number"));
  }
}

console.log("Correct! It took you", count, "attempts to guess the correct number.")