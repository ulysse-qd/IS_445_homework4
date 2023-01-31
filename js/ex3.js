const day = prompt("Enter the 3 letters abbreviation of a day of the week.");
let dayOfTheWeek = ''

if (day.length !== 3) {
  console.log("Sorry, " + day + " is not a valid entry.")
} else {
  switch (true) {
    case day === "mon": dayOfTheWeek = 'Monday';
      break;
    case day === "tue": dayOfTheWeek = 'Tuesday';
      break;
    case day === "wed": dayOfTheWeek = 'Wednesday';
      break;
    case day === "thu": dayOfTheWeek = 'Thursday';
      break;
    case day === "fri": dayOfTheWeek = 'Friday';
      break;
    case day === "sat": dayOfTheWeek = 'Saturday';
      break;
    case day === "sun": dayOfTheWeek = 'Sunday';
      break;
    default: console.log("Sorry, " + day + " is not the abbreviation of an existing day.")
  }
  if (dayOfTheWeek !== '') {
    console.log("You entered: " + day);
    console.log("The following day is: " + dayOfTheWeek);
  }
}
