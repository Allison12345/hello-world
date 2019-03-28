var data = [1, 2, 3, 4, 5]
var total = 0
const sum = function(x, y) {
  return x + y
}
const square = function(x) {
  return x * x
}
const mean = data.reduce(sum) / data.length
console.log(mean)
const deviations = data.map(function(x) {
  return x - mean
})
const stddev = Math.sqrt(deviations.map(square).reduce(sum) / data.length - 1)
console.log(stddev)