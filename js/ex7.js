let hours = prompt("Enter the hours");
let minutes = prompt("Enter the minutes");
let seconds = prompt("Enter the seconds");

if (seconds < 59) {
  seconds++
} else {
  seconds = 0;
  if (minutes < 59) {
    minutes++
  } else {
    minutes = 0;
    if (hours < 23) {
      hours++
    } else {
      hours = 0
    }
  }
}

console.log(hours + "h" + minutes + "m" + seconds + "s")