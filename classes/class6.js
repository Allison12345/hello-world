var a = 1,
  b = 2
;(x = a), (a = b), (b = x)
console.log(a, b)
var aa = [1, 2, 3, 4, 5]

function exchange(arr, x, y) {
  ;(q = arr[x]), (arr[x] = arr[y]), (arr[y] = q)
}
exchange(aa, 4, 2)
console.log(aa)

var order = [5, 3, 6, 2, 4]
var min = order[0]
for (var i = 0; i < order.length; i++) {
  if (min > order[i]) {
    min = order[i]
  }
}
console.log(min)
