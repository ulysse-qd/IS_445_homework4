let word_input = prompt("Enter the word of your choice.");

function get_vowels(word_input) {
  return word_input.match(/[aeiouy]/gi).length;
}

function check_palindrome(word_input) {
  if (word_input.toLocaleUpperCase() == word_input.toLocaleUpperCase().split("").reverse().join("")) {
    return true
  }
  return false
}

if (word_input != null) {
  if (check_palindrome(word_input)) {
    console.log(word_input + " contains " + get_vowels(word_input) + " and is a palindrome.")
  } else {
    console.log(word_input + " contains " + get_vowels(word_input) + " and is not a palindrome.")
  }
}