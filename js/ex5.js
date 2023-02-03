let word_list = []
let word_entered = ''

while (word_entered.toLocaleUpperCase() != 'STOP') {
  word_entered = prompt('Enter a word')
  word_list.push(word_entered)
}

if (word_list[0].toLocaleUpperCase() == 'STOP') {
  console.log('No words to display, Stop was the first word entered.')
} else {
  console.log('You entered the following words:')
  for (let i = 0; i < word_list.length - 1; i++) {
    console.log(word_list[i])
  }
}