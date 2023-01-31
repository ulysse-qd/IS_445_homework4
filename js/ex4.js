const values = [3, 11, 7, 2, 9, 10];

function array_sums() {
  let sum = 0
  for (let i = 0; i < values.length; i++)
    sum += values[i]
  return (sum)
}

function min_value() {
  let min = values[0]
  for (let i = 0; i < values.length; i++) {
    if (values[i] < min) {
      min = values[i]
    }
  }
  return (min)
}

function max_value() {
  let max = values[0]
  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i]
    }
  }
  return (max)
}

console.log(array_sums(), min_value(), max_value())