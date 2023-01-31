const yourName = prompt("What is your name?");
const units = prompt("How many units did you complete at college?");
let gradeStanding = ''

if (yourName === '') {
  console.log("Sorry, " + yourName + " is not a valid entry.")
} else {
  switch (true) {
    case units > 0 && units < 31: gradeStanding = 'Freshman';
      break;
    case units > 30 && units < 61: gradeStanding = 'Sophomore';
      break;
    case units > 60 && units < 91: gradeStanding = 'Junior';
      break;
    case units > 91: gradeStanding = 'Senior';
      break;
    default: console.log("Sorry, " + units + " is not a valid entry.")
  }
  console.log("Hello " + yourName);
  console.log("Your grade standing is " + gradeStanding);
}
