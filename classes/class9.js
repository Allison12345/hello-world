console.log(Math.random().toFixed(2))
var arr = []
var i = 0
while (i < 10) {
  i++
  arr.push(Math.random().toFixed(2))
}
console.log(arr)
for (var j = 0; j < arr.length; j++) {
  if (arr[j] < 0.5) console.log(arr[j])
}
var min = arr[0]
for (var z = 0; z < arr.length; z++) {
  if (min > arr[z]) {
    min = arr[z]
  }
}
console.log(min)
