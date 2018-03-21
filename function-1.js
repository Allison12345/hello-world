function plus1(x) {
  return x + 1
}
function square(y) {
  return y * y
}
console.log(square(plus1(3)))

var points = [{ x: 0, y: 0 }, { x: 1, y: 1 }]
points.dist = function() {
  var p1 = this[0]
  var p2 = this[1]
  var a = p2.x - p1.x
  var b = p2.y - p1.y
  return Math.sqrt(a * a + b * b)
}
console.log(points.dist())

function abs(x) {
  if (x > 0) {
    return x
  } else {
    return -x
  }
}
function factorial1(n) {
  var product = 1
  while (n > 1) {
    product *= n
  }
  return product
}
function factorial2(n){
    var i ,product = 1
    for(i=2;i<=n;i++ ){
        product *= i
    }
    return product
}
