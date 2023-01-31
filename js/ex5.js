let password = '';
let count = 0;

while (password !== 'secret' && count !== 3) {
  password = prompt('Enter the password.');
  count++;
}

if (password == 'secret') {
  console.log("You entered the correct password after " + count + " attemps(s)")
} else {
  console.log("Your account is locked! You failed to enter the correct password " + count + " time(s)")
}