var order = [5, 3, 6, 2, 4, -1, 10]
function exchange(arr, x, y) {
  q = arr[x]
  arr[x] = arr[y]
  arr[y] = q
}

function orderArray(order) {
  for (var i = 0; i < order.length - 1; i++) {
    for (var j = i + 1; j < order.length; j++) {
      if (order[j] < order[i]) {
        exchange(order, i, j)
      }
    }
  }
}
orderArray(order)
console.log(order)
var pp = [1,5,2,4,,0,7,6]
orderArray(pp)
console.log(pp)